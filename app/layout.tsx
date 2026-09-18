import type { Metadata, Viewport } from "next";
import { Mukta, Rozha_One } from "next/font/google";
import Jali from "@/components/Jali";
import { LightboxProvider } from "@/components/Lightbox";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { restaurantSchema } from "@/lib/schema";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const rozha = Rozha_One({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-rozha",
});

const mukta = Mukta({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-mukta",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Jain Chaat Bhandar",
  description:
    "Jain Chaat Bhandar, Lalbagh: serving Lucknow's chaat since 1968. Aloo tikki, matar chaat, golgappe and dahi bade from a pure-vegetarian Jain kitchen, made without onion or garlic. Opposite Novelty Cinema, near Hazratganj.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    title: "Jain Chaat Bhandar, Lalbagh, Lucknow",
    description:
      "Chaat in Lucknow since 1968. A pure-vegetarian Jain kitchen in Lalbagh, made without onion or garlic, with a counter that has drawn a queue for over five decades.",
    url: "/",
    // Replace with a real photograph before launch.
    images: ["/img/og-counter.jpg"],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jain Chaat Bhandar, Lalbagh, Lucknow",
    description:
      "Chaat in Lucknow since 1968. A pure-vegetarian Jain kitchen in Lalbagh.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN" className={`${rozha.variable} ${mukta.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(restaurantSchema),
          }}
        />
        <LightboxProvider>
          <SiteHeader />
          {children}
          <Jali />
          <SiteFooter />
        </LightboxProvider>
      </body>
    </html>
  );
}
