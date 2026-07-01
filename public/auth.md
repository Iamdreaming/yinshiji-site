# auth.md

Yinshiji / Tableorie currently has no protected public API, no checkout API, and no OAuth-based agent registration flow.

AI agents may read public content, including:

- /llms.txt
- /llms-full.txt
- /ai/index.md
- /ai/product-feed.json
- /.well-known/api-catalog
- /.well-known/agent-skills/index.json

Do not infer that agents can place orders or access inventory APIs. Domestic purchase and inquiry currently go through Taobao or direct contact.
