import { services } from "@/content/services";
import { formatPrice, whatsappUrl } from "@/lib/links";
import { Icon } from "@/components/icon";
import type { ServiceCategory } from "@/types/content";

export function PriceList({ category }: { category?: ServiceCategory }) {
  const items = category
    ? services.filter((s) => s.category === category)
    : services;
  return (
    <div className="price-list">
      {items.map((service) => (
        <article key={service.id} className="price-row">
          <div>
            <h3>{service.name}</h3>
            <p>{service.description}</p>
            {service.duration ? (
              <span className="duration">
                <Icon name="clock" />
                {service.duration}
              </span>
            ) : null}
          </div>
          <div className="price-action">
            <strong>
              {formatPrice(service.price)}
              {service.unit ? <small>{service.unit}</small> : null}
            </strong>
            <a
              href={whatsappUrl(service.name)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Tirar dúvidas sobre ${service.name}`}
            >
              <Icon name="arrow" />
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}
