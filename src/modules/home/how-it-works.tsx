import { Icon } from "@/components/icon";
import { SectionTitle } from "@/components/section-title";

export function HowItWorks() {
  return (
    <section className="section steps-section">
      <div className="container">
        <SectionTitle
          eyebrow="Simples, como deve ser"
          title={
            <>
              Seu próximo momento de <em>beleza.</em>
            </>
          }
          center
        />
        <div className="steps-grid">
          {[
            {
              number: "01",
              title: "Escolha seu cuidado",
              description:
                "Conheça as técnicas e encontre o serviço que combina com você.",
            },
            {
              number: "02",
              title: "Reserve seu momento",
              description:
                "Consulte a disponibilidade e agende com antecedência pela MinhaAgenda.",
            },
            {
              number: "03",
              title: "Deixe os detalhes comigo",
              description:
                "Venha no seu horário e aproveite um atendimento pensado para você.",
            },
          ].map((step) => (
            <article key={step.number}>
              <span className="step-number">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              <Icon name="sparkle" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
