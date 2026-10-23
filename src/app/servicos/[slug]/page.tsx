import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { servicePages } from "@/content/services";
import { BookingLink } from "@/components/booking-link";
import { Faq } from "@/components/faq";
import { Icon } from "@/components/icon";
import { JsonLd } from "@/components/json-ld";
import { PriceList } from "@/modules/services/price-list";
import { ContactSection } from "@/modules/contact/contact-section";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";

export const dynamicParams = false;
export function generateStaticParams() {
  return servicePages.map((service) => ({ slug: service.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = servicePages.find((item) => item.slug === slug);
  if (!service) return {};
  return pageMetadata(
    `${service.name} em Barnabés, Juquitiba`,
    service.description,
    `/servicos/${service.slug}`,
  );
}

export default async function ServiceDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = servicePages.find((item) => item.slug === slug);
  if (!service) notFound();
  return (
    <>
      <section className="service-detail-intro">
        <div className="container">
          <nav className="breadcrumbs" aria-label="Localização na navegação">
            <Link href="/">Início</Link>
            <span>/</span>
            <Link href="/servicos">Serviços</Link>
            <span>/</span>
            <span aria-current="page">{service.name}</span>
          </nav>
          <div className="service-detail-grid">
            <div>
              <p className="eyebrow">{service.eyebrow}</p>
              <h1>
                {service.name}
                <br />
                <em>em Juquitiba.</em>
              </h1>
              <p className="service-detail-headline">{service.headline}</p>
              <p>{service.detail}</p>
              <ul className="benefit-list">
                {service.benefits.map((benefit) => (
                  <li key={benefit}>
                    <Icon name="check" />
                    {benefit}
                  </li>
                ))}
              </ul>
              <BookingLink />
            </div>
            <div
              className={`service-detail-photo ${service.slug === "pedicure" ? "pedicure-photo" : ""}`}
            >
              <Image
                src={service.image}
                alt={service.imageAlt}
                fill
                priority
                sizes="(max-width:760px) 90vw, 45vw"
              />
              <span>UM TRABALHO REAL · AMANDA CAMARGO</span>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container price-layout">
          <div>
            <p className="eyebrow">Para se planejar</p>
            <h2>
              Seu cuidado,
              <br />
              <em>seu investimento.</em>
            </h2>
            <p>
              Atendimento em Barnabés, Juquitiba,
              <br />
              somente com horário marcado.
            </p>
          </div>
          <PriceList category={service.slug} />
        </div>
      </section>
      <Faq items={service.faqs} />
      <ContactSection />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Início", path: "/" },
          { name: "Serviços", path: "/servicos" },
          { name: service.name, path: `/servicos/${service.slug}` },
        ])}
      />
    </>
  );
}
