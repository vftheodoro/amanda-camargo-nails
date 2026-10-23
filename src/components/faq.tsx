import { faqs } from "@/content/business";
import { SectionTitle } from "./section-title";

export function Faq({
  items = faqs,
}: {
  items?: readonly { question: string; answer: string }[];
}) {
  return (
    <section className="section faq-section">
      <div className="container faq-layout">
        <SectionTitle
          eyebrow="Pode perguntar"
          title={
            <>
              Antes do seu
              <br />
              <em>momento de cuidado.</em>
            </>
          }
        >
          As respostas para você escolher seu serviço com tranquilidade.
        </SectionTitle>
        <div className="faq-list">
          {items.map((item, i) => (
            <details key={item.question}>
              <summary>
                <span className="faq-number">0{i + 1}</span>
                <span>{item.question}</span>
                <span className="faq-plus" aria-hidden="true">
                  +
                </span>
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
