import Link from "next/link";
import { business } from "@/content/business";
import { whatsappUrl } from "@/lib/links";
import { Brand } from "./site-header";
import { Icon } from "./icon";

export function SiteFooter() {
  return (
    <>
      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <Brand />
            <p>
              Unhas sofisticadas.
              <br />
              Cuidado que faz você se sentir bem.
            </p>
            <a
              className="social-link"
              href={business.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="instagram" /> @amandacah_nails
            </a>
          </div>
          <div>
            <h2>Explore</h2>
            <Link href="/servicos">Serviços e valores</Link>
            <Link href="/galeria">Galeria de trabalhos</Link>
            <Link href="/contato">Localização e contato</Link>
            <Link href="/privacidade">Privacidade</Link>
          </div>
          <div>
            <h2>Vamos cuidar de você?</h2>
            <p>
              {business.address.street}
              <br />
              Barnabés · Juquitiba, SP
              <br />
              CEP {business.address.postalCode}
            </p>
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
              {business.displayPhone}
            </a>
            <p>Das 08h às 17h, com horário marcado.</p>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} Amanda Camargo Nails</span>
          <span>Feito com cuidado, do primeiro ao último detalhe.</span>
        </div>
      </footer>
      <a
        className="whatsapp-float"
        href={whatsappUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Conversar com Amanda pelo WhatsApp"
      >
        <Icon name="message" />
        <span>Fale com a Amanda</span>
      </a>
    </>
  );
}
