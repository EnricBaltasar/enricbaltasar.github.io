You are onboarding a developer to the enricbaltasar.com Hugo static site. Check their environment and walk them through setup step by step.

## Step 1: Check Prerequisites

Run the following checks and install anything missing:

1. **Homebrew** (macOS only): Run `brew --version`. If not installed:
   ```
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```
   On Linux, Hugo can be installed via `snap install hugo` or from the .deb package at https://github.com/gohugoio/hugo/releases

2. **Hugo extended**: Run `hugo version`. Must be v0.156.0 or later and show `+extended`. If not installed or outdated:
   - macOS: `brew install hugo` (extended by default)
   - Linux: Download `hugo_extended_*_linux-amd64.deb` from https://github.com/gohugoio/hugo/releases and `sudo dpkg -i hugo_extended_*.deb`
   - Windows: `choco install hugo-extended` or download from releases
   - Verify with: `hugo version` (must show `+extended`)

## Step 2: Clone the Repository

```
git clone --recurse-submodules https://github.com/EnricBaltasar/enricbaltasar-com.git
cd enricbaltasar-com
```

If already cloned without submodules (themes/PaperMod is empty):
```
git submodule update --init --recursive
```

Verify the PaperMod theme is present: `ls themes/PaperMod/` should show files.

## Step 3: Run the Local Dev Server

```
hugo server -D
```

Open http://localhost:1313/ in the browser and confirm:
- Homepage loads with recent posts
- Navigation works (Archive, Categories, Search)
- A post with comments shows the archived comments section at the bottom
- Images load correctly

## Step 4: Verify Production Build

```
hugo --gc --minify
```

Should complete with no errors and show ~252 pages built. Output goes to `public/` (gitignored).

## Project Overview

This is a Hugo static site migrated from WordPress, deployed to GitHub Pages via GitHub Actions with the PaperMod theme.

### Key Directories

- `content/posts/` — Blog posts (218 total, markdown with embedded HTML)
- `content/*.md` — Static pages and special pages (archives, search)
- `data/comments/` — Archived WordPress comments as JSON files (keyed by post slug)
- `static/wp-content/uploads/` — Media files (353 original images, PDFs, audio — ~125MB)
- `layouts/partials/comments.html` — Read-only comment display template
- `assets/css/extended/comments.css` — Comment styling (PaperMod CSS extension point)
- `.github/workflows/hugo.yml` — GitHub Actions deployment workflow
- `hugo.toml` — Site configuration

### Configuration Notes

- Permalinks: `/:contentbasename/` to preserve WordPress URL structure
- `markup.goldmark.renderer.unsafe = true` — Required because migrated content contains raw HTML
- Comments are static/read-only — no comment submission system
- 43 items are drafts from the WordPress migration (visible only with `-D` flag)

### Creating New Content

```
hugo new posts/my-new-post.md
```

### Deployment

Push to `main` branch → GitHub Actions automatically builds and deploys to GitHub Pages at enricbaltasar.com.
