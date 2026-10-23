import { business } from "../content/business";

export function whatsappUrl(service?: string): string {
  const message = service
    ? `Olá, Amanda! Gostaria de saber mais sobre ${service} e consultar os horários disponíveis.`
    : "Olá, Amanda! Conheci seu site e gostaria de tirar uma dúvida sobre os serviços.";
  return `https://wa.me/${business.phone}?text=${encodeURIComponent(message)}`;
}

export function mapsUrl(): string {
  const { street, neighborhood, city, state, postalCode } = business.address;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${street}, ${neighborhood}, ${city} - ${state}, ${postalCode}`)}`;
}

export function formatPrice(value: number): string {
  if (!Number.isFinite(value) || value < 0)
    throw new RangeError("Preço inválido");
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  }).format(value);
}
