import Image from "next/image";
import { Icon } from "@/components/icon";
import { whatsappUrl } from "@/lib/links";

export function About() {
  return (
    <section className="section about-section" id="sobre">
      <div className="container about-layout">
        <div className="about-visual">
          <div className="about-photo">
            <Image
              src="/images/amanda-acolhedora.webp"
              alt="Retrato editorial de Amanda Camargo em tons claros"
              fill
              sizes="(max-width: 760px) 90vw, 40vw"
            />
          </div>
          <Image
            className="about-botanical"
            src="/images/botanical-sticker.webp"
            alt=""
            width={190}
            height={240}
            aria-hidden="true"
          />
          <span className="about-signature" aria-hidden="true">
            Com carinho,
            <br />
            Amanda.
          </span>
          <div className="about-caption">
            <Icon name="heart" />
            <span>
              Cuidado de verdade.
              <br />
              Do meu jeito, para o seu.
            </span>
          </div>
        </div>
        <div className="about-copy">
          <p className="eyebrow">Prazer, Amanda Camargo</p>
          <h2>
            Por trás de cada unha,
            <br />
            um olhar para <em>você.</em>
          </h2>
          <p>
            Sou nail designer e acredito que cuidar das unhas também é uma forma
            de cuidar de si. É sobre gostar do que você vê, se expressar e
            reservar um tempo só seu.
          </p>
          <p>
            No meu atendimento, técnica e durabilidade caminham com a atenção
            aos detalhes. Da escolha do formato ao acabamento, a ideia é criar
            unhas que combinem com o seu estilo e a sua rotina.
          </p>
          <div className="about-values">
            <span>
              <Icon name="diamond" />
              Técnica e acabamento
            </span>
            <span>
              <Icon name="heart" />
              Cuidado personalizado
            </span>
            <span>
              <Icon name="sparkle" />
              Beleza com personalidade
            </span>
          </div>
          <a
            className="text-link"
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
          >
            Vamos conversar? <Icon name="arrow" />
          </a>
        </div>
      </div>
    </section>
  );
}
