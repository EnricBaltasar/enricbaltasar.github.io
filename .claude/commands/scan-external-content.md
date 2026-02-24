Scan external websites for new articles by Enric and create Hugo content files for any that don't already exist on enricbaltasar.com.

## Prerequisites

Before scanning sources, verify the setup is complete:

1. **Favicon icons**: For each source below, check that `static/icons/<source_name>.png` exists (e.g. `static/icons/medium.png`, `static/icons/nakora.png`). If missing, download the site's 32x32 favicon and save it there. The archives template uses `<img src="/icons/{{ external_source }}.png">` to display it.

2. **Template support**: Confirm `layouts/_default/archives.html` contains the `external_source` icon logic and the `external_url` link logic. If not, refer to the existing Medium article entries as a reference pattern.

3. **CSS**: Confirm `layouts/partials/extend_head.html` has the `.external-source-icon` styles.

If any prerequisite is missing, fix it before proceeding.

---

Process each source in order. After finishing all sources, update the "Last checked" date below.

---

## Source 1: Medium.com (https://medium.com/@enricbaltasar)

1. **Fetch the RSS feed** at `https://medium.com/feed/@enricbaltasar` using the WebFetch tool. Extract every article's title, publication date, URL, description/summary, and categories/tags.

2. **Check existing files** by reading all `content/posts/medium-*.md` files. For each, look at the `external_url` field in the front matter to build a set of already-tracked Medium URLs.

3. **Compare** the RSS articles against existing files. Identify any new articles not yet tracked.

4. **For each new article**, create a `.md` file in `content/posts/` following the template below.

   - **Filename**: `medium-<short-slug>.md`
   - **Front matter**:
     ```yaml
     ---
     title: "Article Title Here"
     date: 2024-08-15T00:00:00+00:00
     draft: false
     topics: ["BestMatchingTopic"]
     description: "Brief description from RSS summary"
     slug: "url-path-from-medium"
     lang: en
     external_url: "https://medium.com/@EnricBaltasar/full-url-here"
     external_source: "medium"
     build:
       render: never
       publishResources: false
     ---
     ```
   - **Topics mapping**: Map Medium categories to existing site topics. Current topics: Challenges, Community, Esperanto, Growth, Productivity, Languages, Self-improvement. Pick the closest match or create a new one if needed.
   - **Slug**: Use the path segment from the Medium URL (before the hash ID).
   - **Body**: Leave empty.

---

## Source 2: Nakora.ai

1. **Fetch blog listing** at `https://nakora.ai/blog` using WebFetch. Extract article titles, dates, URLs, and authors.

2. **Fetch case studies listing** at `https://nakora.ai/case-studies` using WebFetch. Extract titles, dates, URLs, and authors.

3. **Filter by author**: Only include articles/case studies authored by Enric Baltasar (or similar name match). If author is not visible on the listing page, visit the individual article/case study page to check the author.

4. **Check existing files** by reading all `content/posts/nakora-*.md` files. Compare `external_url` values.

5. **For each new article by Enric**, create a `.md` file in `content/posts/`:

   - **Filename**: `nakora-<short-slug>.md`
   - **Front matter**:
     ```yaml
     ---
     title: "Article Title Here"
     date: 2024-08-15T00:00:00+00:00
     draft: false
     topics: ["BestMatchingTopic"]
     description: "Brief description"
     slug: "url-path-from-nakora"
     lang: en
     external_url: "https://nakora.ai/blog/full-url-here"
     external_source: "nakora"
     build:
       render: never
       publishResources: false
     ---
     ```

---

## Source 3: YouTube (https://www.youtube.com/@EnricBaltasar/videos)

1. **Fetch the RSS feed** using Bash: `curl -sL "https://www.youtube.com/feeds/videos.xml?channel_id=UCUE2tVY05-JhgO_m1h0TlVQ"`. Parse video titles, dates, URLs, and descriptions.

2. **Skip Shorts**: Exclude any videos whose URL contains `/shorts/`. Only include full-length videos (`/watch?v=`).

3. **Check existing files** by reading all `content/posts/youtube-*.md` files. Compare `external_url` values.

4. **For each new video**, create a `.md` file in `content/posts/`:

   - **Filename**: `youtube-<short-slug>.md`
   - **Front matter**:
     ```yaml
     ---
     title: "Video Title Here"
     date: 2024-08-15T00:00:00+00:00
     draft: false
     topics: ["BestMatchingTopic"]
     description: "Brief description from video description"
     slug: "youtube-short-slug"
     lang: en
     external_url: "https://www.youtube.com/watch?v=VIDEO_ID"
     external_source: "youtube"
     build:
       render: never
       publishResources: false
     ---
     ```

---

## Source 4: Beehiiv Newsletter (https://enricbaltasar.beehiiv.com/)

1. **Fetch the newsletter page** at `https://enricbaltasar.beehiiv.com/` using WebFetch. Extract post titles, dates, URLs, and descriptions.

2. **Check existing files** by reading all `content/posts/beehiiv-*.md` files. Compare `external_url` values.

3. **For each new post**, create a `.md` file in `content/posts/`:

   - **Filename**: `beehiiv-<short-slug>.md`
   - **Front matter**:
     ```yaml
     ---
     title: "Post Title Here"
     date: 2025-04-30T00:00:00+00:00
     draft: false
     topics: ["BestMatchingTopic"]
     description: "Brief description"
     slug: "url-slug-from-beehiiv"
     lang: en
     external_url: "https://enricbaltasar.beehiiv.com/p/slug-here"
     external_source: "beehiiv"
     build:
       render: never
       publishResources: false
     ---
     ```

---

## Source 5: Substack (https://enricbaltasar.substack.com/)

1. **Fetch the RSS feed** at `https://enricbaltasar.substack.com/feed` using the WebFetch tool. Extract every post's title, publication date, URL, and description/summary.

2. **Check existing files** by reading all `content/posts/substack-*.md` files. For each, look at the `external_url` field in the front matter to build a set of already-tracked Substack URLs.

3. **Compare** the RSS posts against existing files. Identify any new posts not yet tracked.

4. **For each new post**, create a `.md` file in `content/posts/` following the template below.

   - **Filename**: `substack-<short-slug>.md`
   - **Front matter**:
     ```yaml
     ---
     title: "Post Title Here"
     date: 2025-09-10T00:00:00+00:00
     draft: false
     topics: ["BestMatchingTopic"]
     description: "Brief description from RSS summary"
     slug: "url-path-from-substack"
     lang: en
     external_url: "https://enricbaltasar.substack.com/p/slug-here"
     external_source: "substack"
     build:
       render: never
       publishResources: false
     ---
     ```
   - **Topics mapping**: Map post content to existing site topics. Current topics: Challenges, Community, Esperanto, Growth, Productivity, Languages, Self-improvement. Pick the closest match or create a new one if needed.
   - **Slug**: Use the path segment from the Substack URL (the `/p/` slug).
   - **Body**: Leave empty.

---

## Source 6: LinkedIn (MANUAL)

> **This source cannot be scanned automatically.** LinkedIn requires browser authentication and blocks programmatic access. Follow the manual steps below to extract posts.

1. **Run the extraction manually** using the `/extract-linkedin-posts` skill in a Claude Cowork (browser) session. That skill walks you through scrolling, extracting, and downloading posts as a ZIP with images and JSON.

2. **Once you have the ZIP**, unpack it into `linkd/linkedin_export/`. The JSON goes to `linkd/linkedin_posts.json` and images to `linkd/linkedin_export/images/`.

3. **Create content files** for each post in `content/posts/`:

   - **Filename**: `linkedin-<slug-from-content>.md` (derive slug from first ~8 words of the post)
   - **Title**: First sentence of the post content
   - **Body**: Full post content (unlike other sources, LinkedIn posts store body text)
   - **Images**: Copy post images to `static/images/linkedin/` and reference as `![](/images/linkedin/post_ACTIVITYID_img0.jpg)` at the end of the body
   - **Front matter**:
     ```yaml
     ---
     title: "First Sentence of Post"
     date: 2025-06-15T00:00:00+00:00
     lastmod: 2025-06-15T00:00:00+00:00
     draft: false
     topics: ["BestMatchingTopic"]
     description: "Brief summary of the post"
     slug: "linkedin-slug-from-content"
     lang: en
     external_url: "https://www.linkedin.com/feed/update/urn:li:activity:ACTIVITY_ID"
     external_source: "linkedin"
     build:
       render: never
       publishResources: false
     ---
     ```

4. **Note**: LinkedIn dates in the JSON are relative ("3d", "1w", "2mo", "1yr"). Convert to absolute dates using the extraction date as the reference point.

---

## Report

After processing all sources, print a summary of what was created or confirm everything is up to date. Then update the "Last checked" date below by editing this file.

**Last checked: 2026-02-23**
