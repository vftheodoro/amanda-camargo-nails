import Image from "next/image";
import Link from "next/link";
import { servicePages, services } from "@/content/services";
import { formatPrice } from "@/lib/links";
import { Icon } from "@/components/icon";

export function ServiceCards() {
  return (
    <div className="service-grid">
      {servicePages.map((service, i) => {
        const prices = services
          .filter(
            (s) =>
              s.category === service.slug && !s.id.startsWith("manutencao"),
          )
          .map((s) => s.price);
        return (
          <Link
            href={`/servicos/${service.slug}`}
            key={service.slug}
            className="service-card"
          >
            <div className="service-photo">
              <Image
                src={service.image}
                alt={service.imageAlt}
                fill
                sizes="(max-width: 600px) 90vw, (max-width: 1000px) 45vw, 25vw"
              />
              <span className="service-index">0{i + 1}</span>
            </div>
            <div className="service-card-body">
              <h3>
                {service.name}
                <span className="round-arrow">
                  <Icon name="arrow" />
                </span>
              </h3>
              <p>
                {
                  [
                    "Comprimento e estrutura, do seu jeito.",
                    "Suas unhas naturais com resistência e brilho.",
                    "Um clássico, com todo o cuidado.",
                    "Beleza até a ponta dos pés.",
                  ][i]
                }
              </p>
              <span className="service-price">
                {prices.length > 1 ? "A partir de " : ""}
                {formatPrice(Math.min(...prices))}
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
