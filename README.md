# Yinshiji (银食记) — Chinese-Inspired Stainless Steel Cutlery

> **Live site:** [tableorie.com](https://tableorie.com)

A transparent, early-stage tableware brand from Jieyang, Guangdong — the city behind the world's stainless steel cutlery.

## What This Is

A brand showcase site (not an ecommerce checkout) built with **Astro v6** and deployed on **Cloudflare Pages**. The site includes:

- **6 product pages** across 3 collections (Silver Carved, Gold Tone Carved, Wenge Wood Handle)
- **25+ buying guides** — material grades, finish comparisons, care instructions, gifting advice
- **12 technical reference pages** — stainless steel standards, food-contact safety, passive layer chemistry
- **87 static pages**, bilingual (English + Chinese), zero client-side JS framework
- **Structured data** — Product, BreadcrumbList, FAQPage, Organization, WebSite schemas
- **LLM-readable files** — `llms.txt`, `/ai/` directory, structured JSON product feed
- **SEO fundamentals** — hreflang, canonical URLs, sitemap, OpenGraph/Twitter cards, GA4 + Umami analytics

## Design Language

- Chinese-inspired carved handles and warm wenge wood grips
- 304 stainless steel for forks/spoons, 410 for knives
- Gold-tone finish (not real gold — stated honestly)
- Honest material labeling on every product page

## Tech Stack

| Layer | Choice |
|-------|--------|
| Framework | Astro v6.4 (static output) |
| Hosting | Cloudflare Pages |
| i18n | Astro built-in (en + zh-CN) |
| Analytics | GA4 + Umami |
| Build | Node.js ≥22.12 |
| CSS | Hand-written, no framework |

## Quick Start

```bash
nvm use 22
npm install
npm run build     # → dist/
npm run preview   # local preview
```

Deploy:

```bash
yinshiji-deploy          # production (main branch)
yinshiji-deploy preview  # preview branch
```

## Project Structure

```
src/
├── data/          # Product, guide, reference data files
├── layouts/       # BaseLayout.astro (shared head, nav, footer)
├── pages/         # File-based routing
│   ├── index.astro
│   ├── products/
│   ├── guide/
│   ├── zh/        # Chinese locale
│   └── reference/
└── public/
    ├── ai/        # LLM-readable content files
    ├── images/    # Product and collection images
    ├── llms.txt
    └── sitemap.xml
```

## Content Pipeline

The site uses an automated daily GEO content pipeline:

1. **Topic queue** (`.content-pipeline.json`) — SEO-driven article ideas
2. **Daily cron** writes one article per day → adds to codebase → builds → deploys
3. **Auto-seeder** scans competitor signals for new topic ideas

See [yinshiji-deploy skill](https://github.com/nightrain/agent-artifacts) for pipeline details.

## Transparency

This is an early-stage brand. The site does not:

- Fake checkout flows or cart functionality
- Invent customer reviews or ratings
- Claim certifications it doesn't have
- Pretend to be a large-scale manufacturer

Products are sold via [Taobao](https://m.tb.cn/h.Rj3EGL9ZID9HRkE). The website is a knowledge hub and brand anchor.

## License

Site code: MIT. Brand content and product images: © 2026 Yinshiji (Silver Food Records).
