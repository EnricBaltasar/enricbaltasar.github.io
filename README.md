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
- `enricbaltasar-trailing-slash-removal`: Strips trailing slashes from all page URLs. GitHub Pages forces trailing slashes; this worker removes them for cleaner URLs. Homepage (`/`) is excluded and keeps its trailing slash. Route: `enricbaltasar.com/*`

Trailing slashes:
- All internal links in templates and content are generated **without** trailing slashes (via `layouts/partials/trim-slash.html`)
- In **production**, the Cloudflare Worker ensures visitors never see trailing slashes
- In **local dev** (`hugo server`), trailing slashes will still appear in the browser URL bar because GitHub Pages directory structure serves `path/index.html` as `path/`. This is expected — the Worker only runs on Cloudflare

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

## Future Reference: Hosting

Currently using **GitHub Free** (individual account) + **GitHub Pages** + **Cloudflare** as CDN/DNS proxy. An alternative worth considering is **Cloudflare Pages**, which would consolidate hosting within Cloudflare.

### GitHub Free + Pages vs Cloudflare Pages (free tiers)

| | GitHub Free + Pages (free) | Cloudflare Pages (free) |
|---|---|---|
| **Bandwidth** | 100 GB/month (soft limit) | Unlimited |
| **Site size** | 1 GB published site, repo recommended <5 GB | 25 MiB per file, 20,000 files per site |
| **File size** | 100 MiB hard limit per file (warning at 50 MiB) | 25 MiB per file |
| **Builds** | 2,000 Actions min/month (public repos: unlimited), 10 builds/hour | 500 builds/month, 20 min timeout |
| **Custom domains** | 1 per site | 100 per project |
| **CDN** | No (needs Cloudflare proxy) | Built-in (Cloudflare network) |
| **Trailing slashes** | Forced by GitHub Pages (needs worker to strip) | Not forced |
| **Hugo builds** | Via GitHub Actions workflow | Native support |
| **Deploy previews** | No | Unlimited |
| **Repo visibility** | Pages requires public repo on free plan | Private repos supported |

### Pros of switching to Cloudflare Pages
- Eliminates the `enricbaltasar-trailing-slash-removal` worker — Cloudflare Pages does not force trailing slashes
- Unlimited bandwidth vs 100 GB/month soft limit
- No separate origin to proxy to — requests stay entirely within Cloudflare's network
- Native Hugo builds (no GitHub Actions workflow needed)
- Simpler architecture: one fewer service in the stack
- Deploy previews for every push

### Cons / considerations
- 500 builds/month limit vs effectively unlimited on GitHub Actions for public repos
- Migration effort: update DNS records, set up Cloudflare Pages project, verify Bulk Redirects and Workers still apply correctly
- GitHub Actions workflow (`.github/workflows/hugo.yml`) would become unused
- Less portable — moves more infrastructure dependency onto a single provider (Cloudflare)
- 20,000 files per site limit (not an issue for this site currently)

### TL;DR

Cloudflare Pages would simplify the stack (drop the trailing-slash worker, drop GitHub Actions) at the cost of more vendor lock-in on Cloudflare. CDN is Cloudflare either way. Both options are free. Current setup works fine — worth switching if:
- You want to make the repo private (GitHub Pages requires public repo on free plan)
- You want deploy previews for PRs
- You hit the 100 GB/month bandwidth soft limit
