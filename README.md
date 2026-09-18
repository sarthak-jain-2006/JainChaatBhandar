# Jain Chaat Bhandar

Marketing website for Jain Chaat Bhandar, a pure-vegetarian Jain chaat shop at Lalbagh Chowk, Lucknow, established 1968.

## What this is

A single static page (`index.html`) with no build step and no dependencies beyond Google Fonts. Everything else, including the icons, gallery slider and lightbox, is inline CSS and vanilla JavaScript.

```
index.html        the entire site
sitemap.xml       search engine sitemap
robots.txt        crawler rules
vercel.json       hosting config (clean URLs, cache and security headers)
README-OWNER.md   pre-launch checklist for the shop
```

## Running it locally

No tooling required. Open `index.html` in a browser, or serve the folder:

```bash
npx serve .
```

The embedded Google Map only renders when the page is served over http, not from a `file://` path.

## Deploying

The site is hosted on Vercel and deploys automatically on every push to `main`. It is a static site, so the Vercel project needs no build command and no framework preset; the output directory is the repository root.

## Before the site goes live

`README-OWNER.md` lists what still needs confirming with the shop, including real photography for the ten image slots, the exact opening hours, and the custom domain to replace the placeholder URLs in the canonical tag, Open Graph tags, structured data, `sitemap.xml` and `robots.txt`.
