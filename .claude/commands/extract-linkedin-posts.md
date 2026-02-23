## Prerequisites

Before starting, ensure:
1. **Google Chrome** is installed and open
2. **Claude Chrome extension** is installed and connected to Claude Cowork
3. You are **logged into LinkedIn** in Chrome

---

## How it works

LinkedIn has no public API or RSS feed, so we use Claude Cowork (Claude's Chrome extension) to extract posts directly from the page while authenticated. Several workarounds are needed because of LinkedIn and Chrome restrictions:

1. **Scrolls** the activity page to load posts, stopping once it sees anything older than 6 months (LinkedIn lazy-loads content — posts only exist in the DOM after scrolling)
2. **Expands** truncated posts by clicking all "see more" buttons (LinkedIn truncates long posts by default)
3. **Extracts** each post's URL, full text content, and images — skipping posts without a URN and filtering out anything older than 6 months
4. **Fetches images as base64** while still on LinkedIn's domain (LinkedIn image URLs require authentication cookies, so they can't be downloaded later from outside the browser)
5. **Transfers data via localStorage** to a different tab (linkedin.com/robots.txt) because Chrome blocks programmatic file downloads on linkedin.com's main pages
6. **Builds a ZIP** (using JSZip loaded at runtime) with a manual download button — Chrome blocks automated downloads entirely on LinkedIn, so you must click the button yourself

Note: This process doesn't check LinkedIn Pulse articles.

---

## Prompt to give Claude Cowork

Go to https://www.linkedin.com/in/enricbaltasar/recent-activity/all/ and extract all my LinkedIn posts (URL, images, full content). Download everything as a ZIP with images and a JSON file.
Instructions for you (Claude):

Scroll down to load posts (scroll, wait 2s, repeat). After each scroll, check if any post is older than 6 months and stop immediately if so:

javascript
!!document.querySelector('.feed-shared-actor__sub-description')
  && [...document.querySelectorAll('.feed-shared-actor__sub-description')]
    .some(el => /(\d+)\s*yr|([7-9]|1[0-2])\s*mo/.test(el.innerText))

If that returns true, stop scrolling.
Click all "see more" buttons: document.querySelectorAll('button.feed-shared-inline-show-more-text__see-more-less-toggle').forEach(b => b.textContent.includes('more') && b.click())
Extract posts and fetch images as base64 while on LinkedIn (authenticated). Use this code on the activity page:

javascript(async () => {
  const posts = [];
  const images = [];
  document.querySelectorAll('.feed-shared-update-v2').forEach(item => {
    const urn = item.getAttribute('data-urn');
    if (!urn) return;
    // Filter by recency — skip posts older than 6 months
    const dateEl = item.querySelector('span.feed-shared-actor__sub-description');
    const dateText = dateEl ? dateEl.innerText.trim() : '';
    const isRecent = dateText.match(/(\d+)\s*(d|h|m|w|mo)/)
      ? (() => {
          const [, num, unit] = dateText.match(/(\d+)\s*(d|h|m|w|mo)/);
          if (['d','h','m','w'].includes(unit)) return true;
          if (unit === 'mo') return parseInt(num) <= 6;
          return false;
        })()
      : !dateText.includes('yr');
    if (!isRecent) return;
    const id = urn.split(':').pop();
    const url = 'https://www.linkedin.com/feed/update/urn:li:activity:' + id;
    const textEl = item.querySelector('.feed-shared-inline-show-more-text');
    const content = textEl ? textEl.innerText.replace(/\s*…?see less\s*$/i, '').trim() : '';
    const postImgs = [];
    item.querySelectorAll('img[src*="feedshare"]').forEach((img, idx) => {
      const filename = 'post_' + id + '_img' + idx + '.jpg';
      postImgs.push(filename);
      images.push({src: img.src, filename});
    });
    posts.push({url, content, images: postImgs});
  });
  // Fetch all images as base64 (must be done here, authenticated)
  const imgData = [];
  for (const img of images) {
    try {
      const r = await fetch(img.src);
      const b = await r.blob();
      const b64 = await new Promise(res => {
        const fr = new FileReader();
        fr.onload = () => res(fr.result);
        fr.readAsDataURL(b);
      });
      imgData.push({filename: img.filename, base64: b64});
    } catch(e) {}
  }
  // Store everything in localStorage for cross-tab access
  localStorage.setItem('li_posts', JSON.stringify(posts));
  localStorage.setItem('li_img_count', imgData.length);
  imgData.forEach((img, i) => {
    localStorage.setItem('li_img_b64_' + i, img.base64);
    localStorage.setItem('li_img_name_' + i, img.filename);
  });
  return posts.length + ' posts, ' + imgData.length + ' images stored';
})()

Do NOT try programmatic downloads from linkedin.com — Chrome blocks them. Instead, open linkedin.com/robots.txt in another tab, load JSZip via eval(await (await fetch('https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js')).text()), build the ZIP from localStorage, and render a clickable download button on that page for me to click manually.
Tell me when the button is ready so I can click it.



User actions needed:

Make sure you're logged into LinkedIn in Chrome before starting
Have the Claude in Chrome extension connected
At the end, manually click the download button on the robots.txt tab (Chrome blocks automated downloads from LinkedIn's domain)