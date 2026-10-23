import { business } from "@/content/business";
import { mapsUrl, whatsappUrl } from "@/lib/links";
import { Icon } from "@/components/icon";
import { BookingLink } from "@/components/booking-link";

export function ContactSection() {
  return (
    <section className="section contact-section" id="localizacao">
      <div className="container contact-layout">
        <div>
          <p className="eyebrow">Pertinho de você</p>
          <h2>
            Seu novo endereço
            <br />
            de <em>autocuidado.</em>
          </h2>
          <p className="contact-intro">
            Em Barnabés, Juquitiba, um horário reservado para cuidar de você e
            dos detalhes que fazem a diferença.
          </p>
          <div className="contact-details">
            <div>
              <Icon name="pin" />
              <p>
                <strong>Venha me conhecer</strong>
                {business.address.street}
                <br />
                Barnabés · Juquitiba – SP
                <br />
                CEP {business.address.postalCode}
              </p>
            </div>
            <div>
              <Icon name="clock" />
              <p>
                <strong>No seu tempo, com hora marcada</strong>Atendimento das
                08h às 17h.
                <br />
                Consulte os dias e horários na agenda.
              </p>
            </div>
            <div>
              <Icon name="message" />
              <p>
                <strong>Fale direto com a Amanda</strong>
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {business.displayPhone}
                </a>
              </p>
            </div>
          </div>
          <a
            className="text-link"
            href={mapsUrl()}
            target="_blank"
            rel="noopener noreferrer"
          >
            Traçar minha rota <Icon name="arrow" />
          </a>
        </div>
        <div className="appointment-card">
          <span className="appointment-monogram" aria-hidden="true">
            AC
          </span>
          <p className="eyebrow">Um convite para você</p>
          <h3>
            Mais que unhas.
            <br />
            <em>Um momento seu.</em>
          </h3>
          <p>
            Escolha o seu cuidado favorito.
            <br />O próximo horário pode ser o seu.
          </p>
          <BookingLink />
          <a
            className="appointment-question"
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ainda tem dúvidas? Vamos conversar <Icon name="arrow" />
          </a>
          <span className="appointment-note">
            <Icon name="heart" /> Atendimento individual e personalizado
          </span>
        </div>
      </div>
    </section>
  );
}
