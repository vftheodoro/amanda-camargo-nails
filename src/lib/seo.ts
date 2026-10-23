import type { Metadata } from "next";
import { business } from "@/content/business";
import { services } from "@/content/services";

export const isPreview = process.env.VERCEL_ENV === "preview";

export function pageMetadata(
  title: string,
  description: string,
  pathname = "/",
): Metadata {
  return {
    title: { absolute: `${title} | ${business.name}` },
    description,
    alternates: { canonical: pathname },
    openGraph: {
      title,
      description,
      url: pathname,
      siteName: business.name,
      locale: "pt_BR",
      type: "website",
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: "Amanda Camargo Nails — nail designer em Barnabés, Juquitiba",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/opengraph-image"],
    },
    robots: isPreview
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

export function businessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "NailSalon",
    "@id": `${business.domain}/#studio`,
    name: business.name,
    url: business.domain,
    image: `${business.domain}/images/amanda-editorial.webp`,
    telephone: `+${business.phone}`,
    description:
      "Alongamento em gel com molde F1, banho de gel, manicure e pedicure em Barnabés, Juquitiba. Atendimento com hora marcada, das 08h às 17h.",
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.street,
      addressLocality: business.address.city,
      addressRegion: business.address.state,
      postalCode: business.address.postalCode,
      addressCountry: "BR",
    },
    areaServed: [
      { "@type": "City", name: "Juquitiba" },
      { "@type": "Place", name: "Barnabés" },
    ],
    sameAs: [business.instagramUrl],
    priceRange: "R$ 10 – R$ 120",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Serviços e valores",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        price: service.price,
        priceCurrency: "BRL",
        description: service.unit
          ? `${service.name}: valor ${service.unit}`
          : service.description,
        itemOffered: {
          "@type": "Service",
          name: service.name,
          description: service.description,
          provider: { "@id": `${business.domain}/#studio` },
        },
      })),
    },
  };
}

export function breadcrumbSchema(
  items: readonly { name: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${business.domain}${item.path}`,
    })),
  };
}

export function serializeJsonLd(value: unknown): string {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}
