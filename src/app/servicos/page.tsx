import { PageIntro } from "@/components/page-intro";
import { ServiceCards } from "@/modules/services/service-cards";
import { PriceList } from "@/modules/services/price-list";
import { SectionTitle } from "@/components/section-title";
import { ContactSection } from "@/modules/contact/contact-section";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Serviços e preços em Barnabés, Juquitiba",
  "Conheça os valores de alongamento com molde F1, banho de gel, manicure, pedicure e manutenção com Amanda Camargo em Juquitiba.",
  "/servicos",
);

export default function ServicesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Técnica, cuidado e personalidade"
        title={
          <>
            Um cuidado para
            <br />
            cada <em>versão sua.</em>
          </>
        }
        description="Conheça as técnicas, encontre seu estilo e reserve um momento para você em Barnabés, Juquitiba."
        path="/servicos"
        label="Serviços"
      />
      <section className="section">
        <div className="container">
          <ServiceCards />
        </div>
      </section>
      <section className="section price-section">
        <div className="container price-layout">
          <div>
            <SectionTitle
              eyebrow="Escolha com tranquilidade"
              title={
                <>
                  Serviços
                  <br />e <em>valores.</em>
                </>
              }
            >
              O cuidado começa com informação clara. Consulte a disponibilidade
              antes de reservar.
            </SectionTitle>
            <p className="small-note">
              Manutenção de 15 a 30 dias, de acordo com o crescimento das unhas.
              Informe no agendamento se tem um procedimento feito por outra
              profissional.
            </p>
          </div>
          <PriceList />
        </div>
      </section>
      <ContactSection />
    </>
  );
}
