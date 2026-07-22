// ── Stripe product catalog (slug → Stripe Price ID) ──
// Created via Stripe CLI. Use `stripe prices list` to verify.
const STRIPE_PRICES = {
  'silver-carved-fork':        'price_1TulvyAaEa7N2QwDkdgAbIlt',  // $5.99
  'silver-carved-5-piece-set': 'price_1TulwlAaEa7N2QwDnYdkL5W9',  // $19.99
  'silver-carved-3-piece-set': 'price_1TulwoAaEa7N2QwDwsPa9EFS',  // $12.99
  'silver-carved-8-piece-set': 'price_1TulwrAaEa7N2QwDfh1WRCR5',  // $29.99
  'gold-carved-fork':          'price_1TulwuAaEa7N2QwDQE7vnt3I',  // $5.99
  'gold-carved-5-piece-set':   'price_1TulwxAaEa7N2QwDWiEGZnVK',  // $19.99
  'gold-carved-3-piece-set':   'price_1Tulx0AaEa7N2QwD9TWv6wck',  // $12.99
  'rosewood-handle-fork':      'price_1Tulx3AaEa7N2QwDeljXI1Y2',  // $4.99
  'rosewood-5-piece-set':      'price_1Tulx5AaEa7N2QwDNgn1SRS0',  // $16.99
  'rosewood-3-piece-set':      'price_1TulxAAaEa7N2QwDvpJ1msHq',  // $10.99
};

// ── Stripe API helpers (no SDK — pure fetch for CF Pages Workers) ──
async function stripeRequest(path, method, body, env) {
  const resp = await fetch(`https://api.stripe.com/v1${path}`, {
    method,
    headers: {
      'Authorization': `Basic ${btoa(env.STRIPE_SECRET_KEY + ':')}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: body ? new URLSearchParams(body).toString() : undefined,
  });
  const data = await resp.json();
  if (!resp.ok) {
    console.error('Stripe API error:', JSON.stringify(data));
    throw new Error(data.error?.message || 'Stripe API request failed');
  }
  return data;
}

// ── Webhook signature verification (pure implementation, no SDK needed) ──
async function verifyWebhookSignature(payload, signatureHeader, secret) {
  if (!signatureHeader) throw new Error('Missing Stripe-Signature header');

  const parts = {};
  signatureHeader.split(',').forEach(part => {
    const [key, value] = part.split('=');
    parts[key.trim()] = value.trim();
  });

  const timestamp = parts['t'];
  const signature = parts['v1'];
  if (!timestamp || !signature) throw new Error('Invalid signature format');

  // Reject if older than 5 minutes
  const now = Math.floor(Date.now() / 1000);
  if (Math.abs(now - parseInt(timestamp)) > 300) {
    throw new Error('Webhook timestamp too old');
  }

  const signedPayload = `${timestamp}.${payload}`;
  const key = await crypto.subtle.importKey(
    'raw', new TextEncoder().encode(secret),
    { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']
  );
  const sig = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(signedPayload));
  const computed = [...new Uint8Array(sig)].map(b => b.toString(16).padStart(2, '0')).join('');

  if (computed !== signature) {
    throw new Error('Webhook signature verification failed');
  }
}

// ── In-memory rate limiter (per-IP, per-worker instance) ──
const rateLimiter = new Map(); // ip → { count, resetAt }
const RATE_LIMIT = 5;   // max requests per window
const RATE_WINDOW = 3600; // 1 hour in seconds

function isRateLimited(ip) {
  const now = Math.floor(Date.now() / 1000);
  const entry = rateLimiter.get(ip);
  if (!entry || now >= entry.resetAt) {
    rateLimiter.set(ip, { count: 1, resetAt: now + RATE_WINDOW });
    return false;
  }
  entry.count++;
  return entry.count > RATE_LIMIT;
}

// Clean stale entries every 100 requests
let cleanCounter = 0;
function maybeClean() {
  if (++cleanCounter > 100) {
    cleanCounter = 0;
    const now = Math.floor(Date.now() / 1000);
    for (const [ip, entry] of rateLimiter) {
      if (now >= entry.resetAt) rateLimiter.delete(ip);
    }
  }
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const accept = request.headers.get('Accept') || '';

    // ── Stripe: Create Checkout Session ──
    if (url.pathname === '/api/checkout' && request.method === 'POST') {
      try {
        const { slug, quantity = 1 } = await request.json();
        const priceId = STRIPE_PRICES[slug];
        if (!priceId) {
          return jsonResponse({ error: 'Product not found' }, 404);
        }

        const session = await stripeRequest('/checkout/sessions', 'POST', {
          mode: 'payment',
          'line_items[0][price]': priceId,
          'line_items[0][quantity]': String(quantity),
          success_url: `https://tableorie.com/thanks?session_id={CHECKOUT_SESSION_ID}`,
          cancel_url: 'https://tableorie.com/products',
          'metadata[product_slug]': slug,
          'metadata[quantity]': String(quantity),
          // Collect shipping address
          'shipping_address_collection[allowed_countries][0]': 'US',
          'shipping_address_collection[allowed_countries][1]': 'CA',
          'shipping_address_collection[allowed_countries][2]': 'GB',
          'shipping_address_collection[allowed_countries][3]': 'AU',
          'shipping_address_collection[allowed_countries][4]': 'DE',
          'shipping_address_collection[allowed_countries][5]': 'FR',
          'shipping_address_collection[allowed_countries][6]': 'JP',
          'shipping_address_collection[allowed_countries][7]': 'SG',
        }, env);

        return jsonResponse({ url: session.url });
      } catch (err) {
        console.error('Checkout error:', err);
        return jsonResponse({ error: 'Failed to create checkout session' }, 500);
      }
    }

    // ── Stripe: Webhook handler ──
    if (url.pathname === '/api/stripe-webhook' && request.method === 'POST') {
      const payload = await request.text();
      const sig = request.headers.get('stripe-signature');

      try {
        await verifyWebhookSignature(payload, sig, env.STRIPE_WEBHOOK_SECRET);
      } catch (err) {
        console.error('Webhook verification failed:', err.message);
        return new Response('Webhook Error', { status: 400 });
      }

      const event = JSON.parse(payload);

      // Return 200 quickly, process async
      switch (event.type) {
        case 'checkout.session.completed': {
          const session = event.data.object;
          const slug = session.metadata?.product_slug;
          const qty = session.metadata?.quantity;
          const email = session.customer_details?.email;
          const amount = session.amount_total;

          console.log(`Payment completed: ${slug} x${qty} — $${(amount / 100).toFixed(2)} from ${email}`);

          // Send order confirmation email via Resend
          if (env.RESEND_API_KEY && email) {
            try {
              await fetch('https://api.resend.com/emails', {
                method: 'POST',
                headers: {
                  Authorization: `Bearer ${env.RESEND_API_KEY}`,
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  from: 'Yinshiji <hello@tableorie.com>',
                  to: [email],
                  subject: 'Order Confirmed — Thank you for your purchase!',
                  text: `Thank you for your order!\n\nProduct: ${slug}\nQuantity: ${qty}\nTotal: $${(amount / 100).toFixed(2)}\n\nWe'll send you a shipping update when your order is on the way.\n\n— Yinshiji Team`,
                }),
              });
            } catch (emailErr) {
              console.error('Order confirmation email failed:', emailErr);
            }
          }
          break;
        }
        default:
          console.log(`Unhandled Stripe event: ${event.type}`);
      }

      return new Response(JSON.stringify({ received: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // ── Stripe: Publishable key (for frontend) ──
    if (url.pathname === '/api/stripe-config') {
      return jsonResponse({
        publishableKey: env.STRIPE_PUBLISHABLE_KEY || null,
      });
    }

    // ── Contact form API ──
    if (url.pathname === '/api/contact') {
      if (request.method === 'OPTIONS') {
        return new Response(null, { headers: corsHeaders });
      }
      if (request.method !== 'POST') {
        return jsonResponse({ error: 'Method not allowed' }, 405);
      }

      // Rate limit by IP
      const ip = request.headers.get('CF-Connecting-IP') || 'unknown';
      maybeClean();
      if (isRateLimited(ip)) {
        return jsonResponse({ error: 'Too many requests. Please try again later.' }, 429);
      }

      try {
        const formData = await request.json();
        const name = (formData.name || '').trim();
        const email = (formData.email || '').trim();
        const subject = (formData.subject || 'Website Inquiry').trim();
        const message = (formData.message || '').trim();

        // Honeypot: hidden field that bots fill but humans don't
        const honeypot = (formData.website || '').trim();
        if (honeypot) {
          // Bot detected — silently accept but don't send
          return jsonResponse({ success: true });
        }

        if (!name) return jsonResponse({ error: 'Name is required' }, 400);
        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
          return jsonResponse({ error: 'Valid email is required' }, 400);
        }
        if (!message) return jsonResponse({ error: 'Message is required' }, 400);

        const apiToken = env.RESEND_API_KEY;
        if (!apiToken) {
          console.error('RESEND_API_KEY not configured');
          return jsonResponse({ error: 'Service not fully configured yet. Please email us directly.' }, 500);
        }

        const emailPayload = {
          from: 'Yinshiji Contact <hello@tableorie.com>',
          to: ['hello@tableorie.com'],
          subject: `[Yinshiji Contact] ${subject}`,
          text: `New Contact Form Submission\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <table style="border-collapse:collapse; width:100%; max-width:600px;">
              <tr><td style="padding:8px 12px; font-weight:bold; background:#f5f3f0;">Name</td><td style="padding:8px 12px;">${escapeHtml(name)}</td></tr>
              <tr><td style="padding:8px 12px; font-weight:bold; background:#f5f3f0;">Email</td><td style="padding:8px 12px;">${escapeHtml(email)}</td></tr>
              <tr><td style="padding:8px 12px; font-weight:bold; background:#f5f3f0;">Subject</td><td style="padding:8px 12px;">${escapeHtml(subject)}</td></tr>
              <tr><td style="padding:8px 12px; font-weight:bold; background:#f5f3f0;">Message</td><td style="padding:8px 12px; white-space:pre-wrap;">${escapeHtml(message)}</td></tr>
            </table>
          `,
          reply_to: email,
        };

        const resp = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${apiToken}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(emailPayload),
        });

        const result = await resp.json();
        if (!resp.ok) {
          console.error('Email send failed:', JSON.stringify(result));
          return jsonResponse({ error: 'Failed to send message. Please try emailing us directly.' }, 500);
        }

        return jsonResponse({ success: true });
      } catch (err) {
        console.error('Contact form error:', err);
        return jsonResponse({ error: 'Failed to send message. Please try emailing us directly.' }, 500);
      }
    }

    // ── Markdown content negotiation ──
    if (accept.includes('text/markdown')) {
      const markdownPath = markdownPathFor(url.pathname);
      if (markdownPath) {
        const markdownUrl = new URL(markdownPath, request.url);
        const assetResponse = await env.ASSETS.fetch(new Request(markdownUrl, request));
        if (assetResponse.ok) {
          const body = await assetResponse.text();
          return new Response(body, {
            status: 200,
            headers: {
              'Content-Type': 'text/markdown; charset=utf-8',
              'X-Markdown-Source': markdownPath,
              'Link': '</llms.txt>; rel="service-doc"; type="text/markdown", </ai/index.md>; rel="service-doc"; type="text/markdown", </.well-known/api-catalog>; rel="api-catalog"; type="application/linkset+json", </.well-known/agent-skills/index.json>; rel="service-desc"; type="application/json"',
            },
          });
        }
      }
    }

    // ── Serve static assets with proper cache headers ──
    const response = await env.ASSETS.fetch(request);
    // Override cache-control for HTML pages (ASSETS defaults to max-age=0)
    const contentType = response.headers.get('Content-Type') || '';
    if (contentType.includes('text/html')) {
      const newHeaders = new Headers(response.headers);
      newHeaders.set('Cache-Control', 'public, max-age=3600, must-revalidate');
      return new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers: newHeaders,
      });
    }
    return response;
  },
};

// ── Helpers ──

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  });
}

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function markdownPathFor(pathname) {
  const path = pathname.replace(/\/$/, '') || '/';

  const exact = {
    '/': '/ai/index.md',
    '/products': '/ai/products.md',
    '/guide': '/ai/choosing-guide.md',
    '/reference': '/ai/reference.md',
    '/materials-care': '/ai/materials-care.md',
    '/faq': '/ai/faq.md',
    '/about': '/ai/brand-facts.md',
    '/zh': '/zh/ai/index.md',
    '/zh/products': '/zh/ai/products.md',
    '/zh/guide': '/zh/ai/choosing-guide.md',
    '/zh/reference': '/zh/ai/reference.md',
    '/zh/materials-care': '/zh/ai/materials-care.md',
    '/zh/faq': '/zh/ai/faq.md',
    '/zh/about': '/zh/ai/brand-facts.md',
  };

  if (exact[path]) return exact[path];
  if (path.startsWith('/products/')) return '/ai/products.md';
  if (path.startsWith('/guide/')) return '/ai/choosing-guide.md';
  if (path.startsWith('/reference/')) return '/ai/reference.md';
  if (path.startsWith('/zh/products/')) return '/zh/ai/products.md';
  if (path.startsWith('/zh/guide/')) return '/zh/ai/choosing-guide.md';
  if (path.startsWith('/zh/reference/')) return '/zh/ai/reference.md';

  return null;
}
