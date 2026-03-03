# Known VSCode Linting Issues

False positives from VSCode extensions that don't understand Hugo templates. All safe to ignore.

## Microsoft Edge Tools / Webhint

| File | Warning | Why it's fine |
|------|---------|---------------|
| `layouts/partials/header.html` | `<ul>` must only contain `<li>` | Hugo `{{- range }}` directives parsed as text nodes. Rendered HTML is valid. |
| `themes/Ignite/layouts/_default/terms.html` | `<ul>` must only contain `<li>` | Same — Hugo template directives, not real text nodes. |
| `themes/Ignite/layouts/partials/head.html` | apple-touch-icon not in `<head>` | Linter can't parse Hugo conditionals (`{{ with }}`). The icon IS in `<head>`. |
| `layouts/_default/archives.html` | No inline styles | `style="display:none"` on no-results div, toggled by JS. |
| `layouts/_default/projects.html` | No inline styles | Same — JS-controlled visibility toggle. |
| `layouts/partials/footer.html` | No inline styles | `style="display:none"` on sun/moon icon for theme toggle. |

## GitHub Actions Extension

| File | Error | Why it's fine |
|------|-------|---------------|
| `.github/workflows/hugo.yml` | Unable to resolve `actions/checkout@v6` | Extension can't reach GitHub to verify. Actions are valid and work in CI. |
| `.github/workflows/hugo.yml` | Unable to resolve `actions/configure-pages@v5` | Same. |
| `.github/workflows/hugo.yml` | Unable to resolve `actions/upload-pages-artifact@v4` | Same. |
| `.github/workflows/hugo.yml` | Unable to resolve `actions/deploy-pages@v4` | Same. |
