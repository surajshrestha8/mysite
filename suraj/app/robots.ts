import { MetadataRoute } from "next";
import { siteConfig } from "@/data/site-config";

const base = siteConfig.seo.url;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Block Next.js internals and build artifacts from crawlers
        disallow: ["/_next/", "/api/"],
      },
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
