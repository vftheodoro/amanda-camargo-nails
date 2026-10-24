import Image from "next/image";
import Link from "next/link";
import { BookingLink } from "@/components/booking-link";
import { Icon } from "@/components/icon";
import { ComparisonSlider } from "./comparison-slider";

export function InspirationSection() {
  return (
    <section
      className="section inspiration-section"
      aria-labelledby="inspiration-title"
    >
      <div className="container inspiration-layout">
        <div className="inspiration-copy">
          <div className="polish-illustration">
            <Image
              src="/images/polish-sticker.webp"
              alt=""
              width={165}
              height={165}
              aria-hidden="true"
            />
          </div>
          <p className="eyebrow">Um dos estilos mais pedidos por aqui</p>
          <h2 id="inspiration-title">
            Do seu natural
            <br />
            ao seu <em>próprio estilo.</em>
          </h2>
          <p>
            Base rosada, francesinha branca e dourada, flores em relevo e um
            toque de brilho. Uma combinação delicada e marcante, entre as
            favoritas das clientes da Amanda.
          </p>
          <p>
            Explore essa inspiração de antes e depois e imagine os detalhes que
            combinam com você. No atendimento, a escolha é feita com calma,
            respeitando suas unhas e sua rotina.
          </p>
          <div className="inspiration-chips">
            <span>
              <Icon name="heart" /> Seu estilo vem primeiro
            </span>
            <span>
              <Icon name="sparkle" /> Cada detalhe importa
            </span>
          </div>
          <BookingLink>Reservar meu momento</BookingLink>
          <Link className="text-link" href="/galeria">
            Quero ver trabalhos reais <Icon name="arrow" />
          </Link>
        </div>
        <ComparisonSlider />
      </div>
    </section>
  );
}
