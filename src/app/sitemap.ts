import type { MetadataRoute } from "next";
import { business } from "@/content/business";
import { servicePages } from "@/content/services";
import { isPreview } from "@/lib/seo";
export default function sitemap(): MetadataRoute.Sitemap {
  if (isPreview) return [];
  return [
    "/",
    "/servicos",
    ...servicePages.map((service) => `/servicos/${service.slug}`),
    "/galeria",
    "/contato",
    "/privacidade",
  ].map((path) => ({
    url: `${business.domain}${path}`,
    lastModified: new Date("2026-10-23"),
    priority: path === "/" ? 1 : path === "/privacidade" ? 0.3 : 0.8,
  }));
}
