import { PageIntro } from "@/components/page-intro";
import { ContactSection } from "@/modules/contact/contact-section";
import { policies } from "@/content/business";
import { Icon } from "@/components/icon";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Contato e localização em Barnabés, Juquitiba",
  "Amanda Camargo Nails: Rua Antônio Soares Godinho, 75, Barnabés, Juquitiba. WhatsApp (13) 99674-7426. Atendimento das 08h às 17h com agendamento.",
  "/contato",
);
export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Vamos marcar um momento seu?"
        title={
          <>
            O cuidado começa
            <br />
            com um <em>olá.</em>
          </>
        }
        description="Consulte a agenda ou converse com Amanda para escolher o serviço ideal. Atendimento em Barnabés, Juquitiba–SP."
        path="/contato"
        label="Contato"
      />
      <ContactSection />
      <section className="section">
        <div className="container policy-layout">
          <div>
            <p className="eyebrow">Antes de agendar</p>
            <h2>
              Combinados que
              <br />
              cuidam do <em>seu tempo.</em>
            </h2>
          </div>
          <ul className="policy-list">
            {policies.map((policy) => (
              <li key={policy}>
                <Icon name="check" />
                <span>{policy}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
