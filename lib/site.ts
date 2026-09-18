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
  /** Stable identity for React keys: independent of src and caption, both of
      which repeat while the slots are still placeholders. */
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  /** Bold lead-in of the caption, e.g. "Slot 1:" */
  slot: string;
  caption: string;
};

export const heroPhoto: Photo = {
  id: "hero",
  src: "/img/homepage.jpg",
  alt: "The shopfront of Jain Chaat Bhandar in Lalbagh: the red signboard above a counter where staff work over steel vessels and trays of puris",
  width: 1024,
  height: 1536,
  slot: "",
  caption: "Jain Chaat Bhandar",
};

export const storyPhoto: Photo = {
  id: "story",
  src: "/img/start.jpg",
  alt: "Sanjeev Kumar Jain and Raju at the counter of Jain Chaat Bhandar",
  width: 400,
  height: 300,
  slot: "",
  caption:
    "The start of Jain Chaat Bhandar",
};

export const gallery: Photo[] = [
  {
    id: "tikkis",
    src: "/img/tikki.jpg",
    alt: "Rows of aloo tikkis crisping on a large tawa, turned with a long spatula at the counter",
    width: 1200,
    height: 800,
    slot: "",
    caption: "Tikkis on the tawa",
  },
  {
    id: "prep",
    src: "/img/batashe.jpg",
    alt: "A steel tray heaped with puris, beside bowls of papdi, spiced filling and green chutney",
    width: 1200,
    height: 800,
    slot: "",
    caption: "Preparation",
  },
  {
    id: "golgappe",
    src: photoSlot(400, 300, 10),
    alt: "Golgappe being filled at the counter",
    width: 400,
    height: 300,
    slot: "Slot 3:",
    caption: " golgappe, mid-fill",
  },
  {
    id: "alootikki",
    src: "/img/seasoning.jpg",
    alt: "A plate of aloo tikki chaat being finished by hand, fresh coriander scattered over curd and spice",
    width: 1200,
    height: 960,
    slot: "",
    caption: "Aloo tikki being made",
  },
  {
    id: "dahi-bade",
    src: photoSlot(400, 300, 10),
    alt: "Dahi bade topped with sweet curd and spices",
    width: 400,
    height: 300,
    slot: "Slot 5:",
    caption: " dahi bade, topped",
  },
  {
    id: "seasoning",
    src: photoSlot(400, 300, 10),
    alt: "Sanjeev Kumar Jain preparing the house spice mix",
    width: 400,
    height: 300,
    slot: "Slot 6:",
    caption: " the seasoning being made",
  },
  {
    id: "aditi",
    src: "/img/aditirao.jpg",
    alt: "Aditi Rao Hydari photographed with the shopkeeper on the street outside the shop in Lalbagh",
    width: 960,
    height: 1280,
    slot: "",
    caption: "Aditi Rao Hydari",
  },
  {
    id: "cid",
    src: "/img/cid.jpg",
    alt: "Visitors sitting along the counter eating chaat from paper bowls, one of them taking a selfie",
    width: 1600,
    height: 777,
    slot: "",
    caption: "CID Team",
  },
  {
    id: "ahaana",
    src: "/img/ahaana.jpg",
    alt: "Ahaana Kumra eating a golgappa at the counter while the staff work behind her",
    width: 989,
    height: 846,
    slot: "",
    caption: "Ahaana Kumra",
  },
  {
    id: "varun",
    src: "/img/varun.jpg",
    alt: "Varun Sharma photographed with the shopkeeper beside the day's sacks of puris",
    width: 960,
    height: 1280,
    slot: "",
    caption: "Varun Sharma",
  },
  {
    id: "aparshakti",
    src: "/img/aparshakti.jpg",
    alt: "Aparshakti Khurana with his arm around the shopkeeper at the shop, in a still from a Lucknow Times interview",
    width: 1280,
    height: 716,
    slot: "",
    caption: "Aparshakti Khurana",
  },
  {
    id: "rati",
    src: "/img/rati.jpg",
    alt: "Rati Shankar Tripathi photographed with the shopkeeper at the counter",
    width: 768,
    height: 1024,
    slot: "",
    caption: "Rati Shankar Tripathi",
  },
];

export type MenuItem = { name: string; price: string; description: string };

/** Two board columns, left and right, as they read on the printed board. */
export const menuColumns: MenuItem[][] = [
  [
    {
      name: "Aloo tikki chaat",
      price: "₹80",
      description:
        "Crisped slowly on the tawa, broken open, and dressed with curd, chutney and spice.",
    },
    {
      name: "Papdi chaat",
      price: "₹80",
      description:
        "Crisp papdi under curd and chutney, the plate most regulars start with.",
    },
    {
      name: "Matar chaat",
      price: "₹80",
      description: "Slow-cooked white peas, served hot with the dry spice mix.",
    },
  ],
  [
    {
      name: "Pani ke batashe",
      price: "₹30",
      description:
        "Filled one at a time at the counter, as fast as you can eat them.",
    },
    {
      name: "Dahi ke batashe",
      price: "₹80",
      description: "Puris filled and topped with sweet curd and both chutneys.",
    },
    {
      name: "Dahi bada",
      price: "₹80",
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
