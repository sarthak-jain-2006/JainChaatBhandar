# Jain Chaat Bhandar

Marketing website for Jain Chaat Bhandar, a pure-vegetarian Jain chaat shop in Lalbagh, Lucknow, established 1968.

## What this is

A single-page Next.js site (App Router, TypeScript, React Server Components). The page is statically prerendered at build time and ships no data fetching — only the four interactive pieces run on the client.

```
app/
  layout.tsx      document shell, fonts, metadata, JSON-LD
  page.tsx        composes the seven sections
  globals.css     the whole design system, as plain CSS
  sitemap.ts      generates /sitemap.xml
  robots.ts       generates /robots.txt
components/       one file per section, plus the shared interactive pieces
lib/
  site.ts         all shop content: hours, menu, links, photo slots
  schema.ts       the schema.org Restaurant record
next.config.ts    security headers
README-OWNER.md   pre-launch checklist for the shop
```

### Where the client boundary sits

Most of the page is a server component and ships no JavaScript. Four things are marked `"use client"`:

- `SiteHeader` — the mobile nav toggle.
- `Gallery` — the slider, its arrow state, and the autoplay.
- `Lightbox` — a context provider, so a photo anywhere on the page can open the viewer, plus the `PhotoFigure` that triggers it.
- `useReveal` / `useMediaPreference` — the fade-up-on-scroll behaviour, and the `prefers-reduced-motion` query behind it.

### Editing content

Hours, prices, phone number, order links, photo captions and the domain all live in `lib/site.ts`. Changing the domain there updates the canonical tag, the Open Graph tags, the JSON-LD, the sitemap and robots.txt together.

## Running it locally

```bash
npm install
npm run dev     # http://localhost:3000
```

Other scripts: `npm run build`, `npm start`, `npm run lint`.

## Deploying

The site is hosted on Vercel and deploys automatically on every push to `main`. Vercel detects Next.js with no configuration; there is no build command or output directory to set.

## Before the site goes live

`README-OWNER.md` lists what still needs confirming with the shop, including real photography for the ten image slots, the exact opening hours, and the custom domain to replace the placeholder in `lib/site.ts`.
