interface Env {
	CF_API_TOKEN?: string;
}

interface ContactFormData {
	name?: string;
	email?: string;
	subject?: string;
	message?: string;
}

const corsHeaders = {
	'Access-Control-Allow-Origin': '*',
	'Access-Control-Allow-Methods': 'POST, OPTIONS',
	'Access-Control-Allow-Headers': 'Content-Type',
};

export const onRequest: PagesFunction<Env> = async (context) => {
	const { request, env } = context;

	if (request.method === 'OPTIONS') {
		return new Response(null, { headers: corsHeaders });
	}

	if (request.method !== 'POST') {
		return new Response(JSON.stringify({ error: 'Method not allowed' }), {
			status: 405,
			headers: { ...corsHeaders, 'Content-Type': 'application/json' },
		});
	}

	try {
		const formData = await request.json<ContactFormData>();
		const name = (formData.name || '').trim();
		const email = (formData.email || '').trim();
		const subject = (formData.subject || 'Website Inquiry').trim();
		const message = (formData.message || '').trim();

		if (!name) {
			return new Response(JSON.stringify({ error: 'Name is required' }), {
				status: 400,
				headers: { ...corsHeaders, 'Content-Type': 'application/json' },
			});
		}
		if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
			return new Response(JSON.stringify({ error: 'Valid email is required' }), {
				status: 400,
				headers: { ...corsHeaders, 'Content-Type': 'application/json' },
			});
		}
		if (!message) {
			return new Response(JSON.stringify({ error: 'Message is required' }), {
				status: 400,
				headers: { ...corsHeaders, 'Content-Type': 'application/json' },
			});
		}

		// Use Cloudflare Email Sending REST API
		const accountId = '75c3550b7827e82cd292b323ec1e1c7b';
		const apiToken = env.CF_API_TOKEN;

		if (!apiToken) {
			console.error('CF_API_TOKEN not configured');
			return new Response(JSON.stringify({ error: 'Service not fully configured yet. Please email us directly.' }), {
				status: 500,
				headers: { ...corsHeaders, 'Content-Type': 'application/json' },
			});
		}

		const emailPayload = {
			to: 'hello@tableorie.com',
			from: 'hello@tableorie.com',
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
		};

		const resp = await fetch(
			`https://api.cloudflare.com/client/v4/accounts/${accountId}/email/sending/send`,
			{
				method: 'POST',
				headers: {
					Authorization: `Bearer ${apiToken}`,
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(emailPayload),
			}
		);

		const result = await resp.json<{ success?: boolean; errors?: { message: string }[] }>();

		if (!resp.ok) {
			console.error('Email send failed:', JSON.stringify(result));
			return new Response(JSON.stringify({ error: 'Failed to send message. Please try emailing us directly.' }), {
				status: 500,
				headers: { ...corsHeaders, 'Content-Type': 'application/json' },
			});
		}

		return new Response(JSON.stringify({ success: true }), {
			status: 200,
			headers: { ...corsHeaders, 'Content-Type': 'application/json' },
		});
	} catch (err) {
		console.error('Contact form error:', err);
		return new Response(JSON.stringify({ error: 'Failed to send message. Please try emailing us directly.' }), {
			status: 500,
			headers: { ...corsHeaders, 'Content-Type': 'application/json' },
		});
	}
};

function escapeHtml(str: string): string {
	return str
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&#039;');
}
