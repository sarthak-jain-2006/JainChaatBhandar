import type { NextConfig } from "next";

/**
 * Security headers previously served by vercel.json. Kept here so they apply
 * on any host, not just Vercel. Next handles caching and clean URLs itself,
 * so the rest of the old hosting config is no longer needed.
 */
const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
};

export default nextConfig;
