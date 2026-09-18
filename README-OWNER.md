# Jain Chaat Bhandar — pre-launch checklist

The site is complete and ready to host as a static page (`index.html` + `sitemap.xml` + `robots.txt`).
Before it goes live, confirm these with the shop:

## Must confirm
- [ ] **Phone / WhatsApp number** — the site uses **+91 96287 44871** (found in public listings). Verify it rings at the counter; it powers the call button and the WhatsApp chat link.
- [ ] **Exact address wording and the Google Maps pin** — currently "Naval Kishore Road, opposite Novelty Cinema, Lalbagh, Lucknow 226001". Some directories list it as "Nawal Kishore Halsia, Sushanpura". Once confirmed, also check that the embedded map on the Contact section points at the right pin.
- [ ] **Opening hours** — the site says **daily, 4:00–10:00 PM**. Sources vary between 4 PM and 5 PM opening; confirm at the counter and update the Hours block, hero fact strip, footer, and the JSON-LD (`opens`/`closes`) in `index.html`.
- [x] **Menu prices** — confirmed by the owner: ₹90 per plate, all six items.
- [ ] **Swiggy link** — the "Order on Swiggy" button currently points at a Swiggy search for the shop's name. Replace it with the shop's direct Swiggy restaurant URL once you have it (the Zomato button already uses the real page).
- [ ] **Founding year** — the site uses **1968** (owner-stated). One public heritage-festival profile suggests the move to the shop unit was late 1980s; if the shop wants a more detailed timeline, the Story section's three-part timeline is where it goes.

## Photography (10 slots, all clearly labelled in the page)
- Hero: counter at evening rush — portrait, 4:5
- Gallery: a horizontal slider of 8 uniform landscape slots (4:3) — tikkis on the tawa, papdi chaat, golgappe mid-fill, the shopfront and signboard, dahi bade, the seasoning being made, the evening queue, matar chaat
- Story: the brothers at the counter — 4:3
- Also replace the `og:image` URL in the `<head>` with a real photo (1200×630 works best for link previews).

## Technical, on launch
- [ ] Replace every `https://www.jainchaatbhandar.com/` placeholder (canonical tag, OG tags, JSON-LD `url`, `sitemap.xml`, `robots.txt`) with the real domain.
- [ ] Add social links to the footer **only if the shop actually has accounts** — none were found publicly, so none were invented.
- [ ] Compress real photos before uploading (WebP or quality-80 JPEG, max ~1600px wide); all `<img>` tags are already lazy-loaded.

## Deliberately left out (owner's instructions)
- No "desi ghee" claims and no "token system" mentions anywhere.
- No "no ginger" claim — the food does contain ginger, so the site only says "no onion, no garlic".
- No Hindi/Devanagari labels and no em-dashes in the copy.
- No emojis, no invented customer testimonials, no invented slogan headlines.
- The old heritage-festival anecdote about the mysterious visitor is **not** on the site — it involves real people and unverified rumor. It can be added to the Story section later only with the shop's explicit sign-off.
