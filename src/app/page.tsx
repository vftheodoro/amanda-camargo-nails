import Link from "next/link";
import { Hero } from "@/modules/home/hero";
import { About } from "@/modules/home/about";
import { HowItWorks } from "@/modules/home/how-it-works";
import { ServiceCards } from "@/modules/services/service-cards";
import { Gallery } from "@/modules/gallery/gallery";
import { ContactSection } from "@/modules/contact/contact-section";
import { Faq } from "@/components/faq";
import { SectionTitle } from "@/components/section-title";
import { Icon } from "@/components/icon";
import { business } from "@/content/business";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Nail designer em Barnabés, Juquitiba",
  "Alongamento em gel com molde F1, banho de gel, manicure e pedicure em Barnabés, Juquitiba. Veja os trabalhos, preços e agende com Amanda Camargo.",
);

export default function Home() {
  return (
    <>
      <Hero />
      <div className="trust-strip">
        <div className="container">
          {[
            {
              icon: "diamond" as const,
              title: "Técnica em cada detalhe",
              text: "Acabamento que faz a diferença",
            },
            {
              icon: "heart" as const,
              title: "Seu estilo, seu cuidado",
              text: "Atendimento personalizado",
            },
            {
              icon: "calendar" as const,
              title: "Um horário só para você",
              text: "Tranquilidade do início ao fim",
            },
          ].map((item) => (
            <div key={item.title}>
              <Icon name={item.icon} />
              <p>
                <strong>{item.title}</strong>
                <span>{item.text}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
      <section className="section services-section" id="servicos">
        <div className="container">
          <div className="section-heading-row">
            <SectionTitle
              eyebrow="Nossos serviços"
              title={
                <>
                  O seu estilo merece
                  <br />
                  um cuidado <em>especial.</em>
                </>
              }
            >
              Da beleza natural aos detalhes mais marcantes.
              <br />
              Encontre o seu próximo cuidado favorito.
            </SectionTitle>
            <Link className="text-link" href="/servicos">
              Todos os serviços e valores <Icon name="arrow" />
            </Link>
          </div>
          <ServiceCards />
        </div>
      </section>
      <About />
      <section className="section portfolio-section" id="galeria">
        <div className="container">
          <div className="section-heading-row">
            <SectionTitle
              eyebrow="Feitas por aqui"
              title={
                <>
                  Cada unha, uma <em>inspiração.</em>
                </>
              }
            >
              Trabalhos reais, detalhes únicos. Qual combina com você?
            </SectionTitle>
            <Link className="text-link" href="/galeria">
              Explorar a galeria <Icon name="arrow" />
            </Link>
          </div>
          <Gallery preview />
          <div className="portfolio-footer">
            <span>Um pouco do cuidado que você encontra aqui.</span>
            <a
              href={business.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="instagram" /> Acompanhe no Instagram{" "}
              <Icon name="arrow" />
            </a>
          </div>
        </div>
      </section>
      <div className="quote-banner">
        <div className="container">
          <Icon name="sparkle" />
          <p>
            “Mais que unhas,
            <br className="mobile-break" /> é sobre <em>autoestima.</em>”
          </p>
          <span>AMANDA CAMARGO</span>
        </div>
      </div>
      <HowItWorks />
      <Faq />
      <ContactSection />
    </>
  );
}
