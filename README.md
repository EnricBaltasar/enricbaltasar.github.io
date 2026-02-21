# enricbaltasar.com

Personal site built with [Hugo](https://gohugo.io/) and the custom Ignite theme. Migrated from WordPress.

## Running locally

```
hugo server --port 1313
```

## Content

Articles live in `content/posts/`. Other pages (About, Articles listing, etc.) are in `content/`.

## Media

### Images — `assets/images/`

Original full-size images go here. Hugo automatically generates resized versions at build time via Hugo Pipes.

In articles, use the `img` shortcode instead of raw `<img>` tags:

```
{{< img src="my-photo.jpg" alt="Description" >}}
```

This renders a resized thumbnail (≤1024px) on the page and opens the original when clicked via the lightbox. Example:

- Page: `/images/astronaut-space-earth-nasa_hu_61c4cd2f92b1435b.jpeg` (resized, auto-generated)
- Lightbox: `/images/astronaut-space-earth-nasa.jpeg` (original)

GIFs are served as-is (not resized) since Hugo cannot process animated GIFs.

To link an image to an external URL instead of the lightbox, use the `link` parameter:

```
{{< img src="my-photo.jpg" alt="Description" link="https://example.com" >}}
```

### Audio — `static/audio/`

Audio files served directly. Reference them in content as `/audio/filename.ogg`.

### PDFs & documents — `static/pdf/`

PDFs and PPTX files served directly. Reference them in content as `/pdf/filename.pdf`.

## Theme

Custom theme in `themes/Ignite/`. Images use [GLightbox](https://biati-digital.github.io/glightbox/) for the lightbox overlay, loaded via CDN in `layouts/partials/extend_footer.html`.
