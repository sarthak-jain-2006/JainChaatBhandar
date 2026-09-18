/**
 * Every piece of shop content the page renders, in one place.
 *
 * BEFORE LAUNCH — confirm with the shop (see README-OWNER.md):
 *   · exact address wording + Google Maps pin
 *   · phone / WhatsApp number (+91 96287 44871 — found in public listings)
 *   · opening hours (4–10 PM daily used here)
 *   · menu prices: ₹90 per plate, owner-confirmed
 *   · real photographs for every placeholder slot
 *   · replace siteUrl below with the real domain
 */

export const siteUrl = "https://www.jainchaatbhandar.com";

export const shop = {
  name: "Jain Chaat Bhandar",
  established: 1968,
  tagline: "Established 1968, Lalbagh, Lucknow",
  phoneDisplay: "+91 96287 44871",
  phoneHref: "tel:+919628744871",
  streetAddress: "Naval Kishore Road, opposite Novelty Cinema, Lalbagh",
  locality: "Lucknow",
  region: "Uttar Pradesh",
  postalCode: "226001",
  hoursDisplay: "Open daily, 4–10 PM",
  opens: "16:00",
  closes: "22:00",
} as const;

export const links = {
  zomato: "https://www.zomato.com/lucknow/jain-chaat-bhandar-2-lalbagh/order",
  swiggy:
    "https://www.swiggy.com/city/lucknow/jain-chaat-bhandar-sas-nagar-mohali-hazratganj-rest803697",
  whatsapp:
    "https://wa.me/919628744871?text=Namaste%2C%20I%27d%20like%20to%20place%20a%20takeaway%20order.",
  directions:
    "https://www.google.com/maps/dir/?api=1&destination=Jain+Chaat+Bhandar,+Lalbagh,+Lucknow",
  mapEmbed:
    "https://www.google.com/maps?q=Jain%20Chaat%20Bhandar%2C%20Naval%20Kishore%20Road%2C%20Lalbagh%2C%20Lucknow&output=embed",
} as const;

export const navLinks = [
  { href: "#gallery", label: "Gallery" },
  { href: "#story", label: "Story" },
  { href: "#menu", label: "Menu" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
] as const;

/**
 * Builds a labelled placeholder frame as an inline SVG data URI: a sand panel,
 * a brass keyline inset from the edge, and optionally the house diamond.
 * Every one of these is a slot for a real photograph, not artwork.
 */
export function photoSlot(
  width: number,
  height: number,
  inset: number,
  diamond = false,
): string {
  const cx = width / 2;
  const cy = height / 2;
  const mark = diamond
    ? `%3Cpath d='M${cx - 30} ${cy} L${cx} ${cy - 30} L${cx + 30} ${cy} L${cx} ${cy + 30} Z' fill='none' stroke='%23A17E3E' stroke-width='1.5' opacity='.6'/%3E`
    : "";
  return (
    `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${width} ${height}'%3E` +
    `%3Crect width='${width}' height='${height}' fill='%23DFD3B8'/%3E` +
    `%3Crect x='${inset}' y='${inset}' width='${width - inset * 2}' height='${height - inset * 2}' fill='none' stroke='%23A17E3E' stroke-width='1.5' opacity='.6'/%3E` +
    `${mark}%3C/svg%3E`
  );
}

export type Photo = {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** Bold lead-in of the caption, e.g. "Slot 1:" */
  slot: string;
  caption: string;
};

export const heroPhoto: Photo = {
  src: photoSlot(400, 500, 12, true),
  alt: "The counter of Jain Chaat Bhandar at evening, with tikkis on the tawa and the queue forming in Lalbagh",
  width: 400,
  height: 500,
  slot: "Photo slot (4:5):",
  caption: " the counter at evening rush. Replace with a real photograph.",
};

export const storyPhoto: Photo = {
  src: photoSlot(400, 300, 10, true),
  alt: "Sanjeev Kumar Jain and Raju at the counter of Jain Chaat Bhandar",
  width: 400,
  height: 300,
  slot: "",
  caption:
    "Photo slot (4:3): the brothers at the counter. Replace with a real photograph.",
};

export const gallery: Photo[] = [
  {
    src: photoSlot(600, 600, 14, true),
    alt: "Aloo tikki being pressed and crisped on the tawa at Jain Chaat Bhandar",
    width: 600,
    height: 600,
    slot: "Slot 1:",
    caption: " tikkis on the tawa, close up",
  },
  {
    src: photoSlot(400, 300, 10),
    alt: "A finished plate of papdi chaat with sweet curd, tamarind chutney and the house spice mix",
    width: 400,
    height: 300,
    slot: "Slot 2:",
    caption: " papdi chaat, plated",
  },
  {
    src: photoSlot(400, 300, 10),
    alt: "Golgappe being filled at the counter",
    width: 400,
    height: 300,
    slot: "Slot 3:",
    caption: " golgappe, mid-fill",
  },
  {
    src: photoSlot(400, 620, 10),
    alt: "The Jain Chaat Bhandar shopfront at Lalbagh with its signboard lit for the evening",
    width: 400,
    height: 620,
    slot: "Slot 4:",
    caption: " the shopfront and signboard",
  },
  {
    src: photoSlot(400, 300, 10),
    alt: "Dahi bade topped with sweet curd and spices",
    width: 400,
    height: 300,
    slot: "Slot 5:",
    caption: " dahi bade, topped",
  },
  {
    src: photoSlot(400, 300, 10),
    alt: "Sanjeev Kumar Jain preparing the house spice mix",
    width: 400,
    height: 300,
    slot: "Slot 6:",
    caption: " the seasoning being made",
  },
  {
    src: photoSlot(800, 300, 12),
    alt: "The evening crowd in Lalbagh outside Jain Chaat Bhandar",
    width: 800,
    height: 300,
    slot: "Slot 7:",
    caption: " the evening queue outside the shop",
  },
  {
    src: photoSlot(400, 300, 10),
    alt: "Matar chaat served hot at the counter",
    width: 400,
    height: 300,
    slot: "Slot 8:",
    caption: " matar chaat, served hot",
  },
];

export type MenuItem = { name: string; price: string; description: string };

/** Two board columns, left and right, as they read on the printed board. */
export const menuColumns: MenuItem[][] = [
  [
    {
      name: "Aloo tikki chaat",
      price: "₹90",
      description:
        "Crisped slowly on the tawa, broken open, and dressed with curd, chutney and spice.",
    },
    {
      name: "Papdi chaat",
      price: "₹90",
      description:
        "Crisp papdi under curd and chutney, the plate most regulars start with.",
    },
    {
      name: "Matar chaat",
      price: "₹90",
      description: "Slow-cooked white peas, served hot with the dry spice mix.",
    },
  ],
  [
    {
      name: "Golgappe",
      price: "₹90",
      description:
        "Filled one at a time at the counter, as fast as you can eat them.",
    },
    {
      name: "Dahi puri",
      price: "₹90",
      description: "Puris filled and topped with sweet curd and both chutneys.",
    },
    {
      name: "Dahi bada",
      price: "₹90",
      description:
        "Soft badas rested in seasoned curd until they give way to a spoon.",
    },
  ],
];

export const ratings = [
  { score: "4.4", source: "Google", detail: "1,800+ reviews" },
  { score: "4.4", source: "Justdial", detail: "1,000+ ratings" },
  {
    score: "4.9",
    source: "Restaurant Guru",
    detail: "Among Lucknow's best-rated chaat",
  },
] as const;

export const eras = [
  {
    title: "1968",
    detail:
      "Santosh Kumar Jain sets up a pavement stall near the Lalbagh crossroads.",
  },
  {
    title: "The shop",
    detail:
      "The stall moves into a proper unit at Lalbagh: same corner, same counter service.",
  },
  {
    title: "Today",
    detail:
      "Sanjeev Kumar Jain and Raju run the counter; the seasoning is still made in-house.",
  },
] as const;
