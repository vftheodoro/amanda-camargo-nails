import Link from "next/link";
import { BookingLink } from "./booking-link";
import { MobileNav } from "./mobile-nav";

export function Brand() {
  return (
    <Link href="/" className="brand" aria-label="Amanda Camargo Nails — início">
      <span>
        Amanda Camargo<span className="brand-heart">♡</span>
      </span>
      <small>NAIL DESIGNER</small>
    </Link>
  );
}

export function SiteHeader() {
  const links = [
    { href: "/#sobre", label: "A Amanda" },
    { href: "/servicos", label: "Serviços" },
    { href: "/galeria", label: "Nossos trabalhos" },
    { href: "/contato", label: "Localização" },
  ];
  return (
    <>
      <div className="announcement">
        Um momento seu. Um cuidado em cada detalhe.{" "}
        <span>Barnabés · Juquitiba, SP</span>
      </div>
      <header className="site-header">
        <div className="container header-inner">
          <Brand />
          <nav className="desktop-nav" aria-label="Navegação principal">
            {links.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>
          <BookingLink className="header-booking">Agendar horário</BookingLink>
          <MobileNav links={links} />
        </div>
      </header>
    </>
  );
}
