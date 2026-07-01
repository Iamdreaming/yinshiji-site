export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const accept = request.headers.get('Accept') || '';

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

    return env.ASSETS.fetch(request);
  },
};

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
