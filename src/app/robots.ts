import type { MetadataRoute } from "next";
import { business } from "@/content/business";
import { isPreview } from "@/lib/seo";
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      ...(isPreview ? { disallow: "/" } : { allow: "/" }),
    },
    ...(!isPreview
      ? { sitemap: `${business.domain}/sitemap.xml`, host: business.domain }
      : {}),
  };
}
