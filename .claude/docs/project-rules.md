# enricbaltasar.com — Project Rules

## Theme overrides
- Never edit files inside `themes/Ignite/` directly
- Override partials by creating the same path under `layouts/partials/`
- Override page templates by creating the same path under `layouts/`

## Media / assets

| Type | Location | How to reference |
|---|---|---|
| Images (photos, illustrations) | `assets/images/` | `{{< img src="filename.ext" alt="..." >}}` shortcode, or Hugo Pipes `resources.Get "images/filename.ext"` in templates |
| Static files (favicon, robots.txt) | `static/` | Referenced by absolute path e.g. `/favicon.png` |
| CSS | `themes/Ignite/assets/css/ignite.css` (theme) — override via inline `<style>` in `layouts/partials/extend_head.html` | Loaded via Hugo Pipes + fingerprint. **`assets/css/extended/` is NOT loaded by Ignite** — do not put CSS there |
| JS | `themes/Ignite/static/js/ignite.js` (theme) — additions go in `layouts/partials/extend_footer.html` | |

## Heading structure
- The `site-title` in the header is an `<h1>` on the homepage, `<div>` on all other pages (see `layouts/partials/header.html`)
- The footer site title uses `<p class="site-title">`, not a heading
- Do NOT add H1s inside page content or templates for the homepage — the header already provides it
- Post/article pages get their H1 from the post title rendered by the single template

## Section / hub pages (`_index.md`)
- Do NOT add `layout: single` to `_index.md` files unless they have curated body content (hand-written lists, introductory text, etc.)
- Without `layout: single`, Hugo uses the list template which automatically renders child pages and sub-sections — this is the desired default behavior for hub pages
- Pages that intentionally use `layout: single` because they have curated content: `python-summary`, `esperanto/aprender`, `esperanto/gramatica/acusativo`, `esperanto/gramatica/gerundios-participios`

## Topics & Tags
- `topics` and `tags` are front matter params only (NOT Hugo taxonomies) — no `/topics/` or `/tags/` URLs exist
- `[taxonomies]` in `hugo.toml` is intentionally empty — do NOT add taxonomies, they generate unwanted URLs
- Topic filtering on the archives page reads `.Params.topics` directly and collects counts manually

## Hosting & DNS
- Site is hosted on **GitHub Pages** (`enricbaltasar.github.io`)
- Domain `enricbaltasar.com` is registered on **Squarespace** (nameservers pointed to Cloudflare)
- DNS is managed via **Cloudflare** (proxied)
- `baseURL` in `hugo.toml` must stay as `https://enricbaltasar.com/`

## Key layout files (overrides)
- `layouts/partials/header.html` — site header with conditional H1
- `layouts/partials/footer.html` — footer with `<p>` site title (not `<h1>`)
- `layouts/partials/extend_head.html` — avatar CSS + Google Analytics GA4
- `layouts/partials/extend_footer.html` — external link JS
- `layouts/_default/archives.html` — Articles listing with language + topic filters (overrides theme)
- `layouts/_default/list.html` — Section list template with topics from params (overrides theme)
- `layouts/_default/_markup/render-link.html` — custom markdown link renderer
- `layouts/shortcodes/img.html` — image shortcode with Hugo Pipes + GLightbox
