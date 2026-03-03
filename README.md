# enricbaltasar.com

Personal website, migrated from WordPress.

## Stack

- [Hugo](https://gohugo.io/) v0.156.0 — Static site generator (open source)
- Custom Ignite theme (based on [Ignite by Compete Themes](https://www.competethemes.com/ignite/))
- HTML, CSS, vanilla JS

## Services

| Service | Used for |
|---|---|
| **GitHub Pages** | Hosting, deployment (via GitHub Actions) |
| **Cloudflare** | CDN, DNS, SSL, caching, Bulk Redirects, Workers for redirects |
| **Squarespace** | Domain registrar |
| **GA4** | Web analytics |
| **GSC** | Search performance, indexing requests |

## Config

Cloudflare Bulk Redirects:
- 180 rules redirecting old WordPress page URLs to new Hugo structure. See `.claude/docs/cloudflare-bulk-redirects.csv`

Cloudflare Workers:
- `enricbaltasar-wordpress-wpuploads-folder-redirects`: Redirects old WordPress media paths (`/wp-content/uploads/YYYY/MM/filename`) to new locations (`/pdf/`, `/audio/`, `/images/`). Route: `enricbaltasar.com/wp-content/uploads/*`
- `enricbaltasar-trailing-slash-removal`: Strips trailing slashes from all page URLs. GitHub Pages forces trailing slashes; this worker removes them for cleaner URLs. Route: `enricbaltasar.com/*`

## Pricing & Limits:

| Provider | Service | Free Plan Limit | Paid Plan |
|---|---|---|---|
| [GitHub](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits) | Pages | 1 GB site size, 100 GB bandwidth/month, 10 builds/hour | — |
| [Cloudflare](https://www.cloudflare.com/plans/) | CDN, DNS, SSL, Caching | Unlimited | — |
| [Cloudflare](https://developers.cloudflare.com/workers/platform/pricing/) | Workers | 100,000 requests/day | $5/mo for 10M requests/month, then $0.30/million |
| [Cloudflare](https://developers.cloudflare.com/rules/url-forwarding/bulk-redirects/faq/) | Bulk Redirects | 20 URL redirects (can request increase to 10,000) | Varies by plan |
| [Squarespace](https://www.squarespace.com/pricing) | Domain registrar | — | ~$20/year for .com |
| [Google](https://analytics.google.com/) | GA4 | Free | — |
| [Google](https://search.google.com/search-console) | GSC | Free | — |
