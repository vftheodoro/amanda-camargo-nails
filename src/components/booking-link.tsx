import { business } from "@/content/business";
import { Icon } from "./icon";

export function BookingLink({
  className = "",
  children = "Agendar meu horário",
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <a
      href={business.bookingUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`button button-primary ${className}`}
    >
      <Icon name="calendar" />
      <span>{children}</span>
      <Icon name="arrow" />
    </a>
  );
}
