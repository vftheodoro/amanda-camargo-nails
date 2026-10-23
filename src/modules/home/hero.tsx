import Image from "next/image";
import Link from "next/link";
import { BookingLink } from "@/components/booking-link";
import { Icon } from "@/components/icon";

export function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <Image
          className="hero-botanical"
          src="/images/botanical-sticker.webp"
          alt=""
          width={180}
          height={230}
          aria-hidden="true"
        />
        <div className="hero-copy">
          <p className="eyebrow">
            <Icon name="sparkle" className="small-star" /> Nail designer em
            Barnabés, Juquitiba
          </p>
          <h1>
            Beleza em
            <br /> cada <em>detalhe.</em>
          </h1>
          <p className="hero-description">
            Unhas sofisticadas, cuidado personalizado.
            <br className="desktop-break" /> Para realçar o que já é lindo em
            você.
          </p>
          <div className="hero-buttons">
            <BookingLink />
            <Link href="/servicos" className="hero-secondary">
              Conhecer os serviços <Icon name="arrow" />
            </Link>
          </div>
          <div className="hero-bottom">
            <span className="hero-rule" />
            <p>
              ALONGAMENTO · BANHO DE GEL
              <br />
              MANICURE & PEDICURE
            </p>
          </div>
        </div>
        <div className="hero-portrait">
          <Image
            src="/images/amanda-editorial.webp"
            alt="Amanda Camargo, nail designer em Barnabés, Juquitiba"
            fill
            priority
            sizes="(max-width: 760px) 100vw, 55vw"
          />
          <div className="portrait-caption">
            <Icon name="sparkle" className="caption-star" />
            <p>
              Feito com técnica.
              <br />
              <em>Pensado em você.</em>
            </p>
          </div>
          <div className="portrait-label">
            <span>AMANDA CAMARGO</span>
            <small>NAIL DESIGNER</small>
          </div>
        </div>
        <Link href="/galeria" className="hero-work">
          <div className="hero-work-image">
            <Image
              src="/images/unhas-04.webp"
              alt="Francesinha com flores e detalhes dourados, trabalho real de Amanda"
              fill
              sizes="180px"
            />
          </div>
          <span>
            Beleza que mora
            <br />
            nos detalhes <Icon name="arrow" />
          </span>
        </Link>
      </div>
    </section>
  );
}
