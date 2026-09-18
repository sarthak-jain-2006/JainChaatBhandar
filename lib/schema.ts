import { shop, siteUrl } from "./site";

/** schema.org Restaurant record, emitted as JSON-LD in the document head. */
export const restaurantSchema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: shop.name,
  alternateName: ["Jain Chaat Centre", "Jain Chat Corner"],
  description:
    "Pure-vegetarian Jain chaat shop in Lalbagh, Lucknow, established 1968. Chaat made without onion or garlic. Takeaway and self-service counter; delivery via Swiggy and Zomato.",
  servesCuisine: ["Chaat", "North Indian street food"],
  priceRange: "₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: shop.streetAddress,
    addressLocality: shop.locality,
    addressRegion: shop.region,
    postalCode: shop.postalCode,
    addressCountry: "IN",
  },
  telephone: shop.phoneDisplay,
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: shop.opens,
    closes: shop.closes,
  },
  acceptsReservations: "False",
  url: `${siteUrl}/`,
  foundingDate: String(shop.established),
  founder: { "@type": "Person", name: "Santosh Kumar Jain" },
} as const;
