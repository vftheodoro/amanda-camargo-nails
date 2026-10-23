"use client";

import Link from "next/link";
import { useRef } from "react";
import { business } from "@/content/business";

export function MobileNav({
  links,
}: {
  links: readonly { href: string; label: string }[];
}) {
  const details = useRef<HTMLDetailsElement>(null);

  function closeMenu() {
    if (details.current) details.current.open = false;
  }

  return (
    <details
      ref={details}
      className="mobile-nav"
      onKeyDown={(event) => {
        if (event.key === "Escape") closeMenu();
      }}
    >
      <summary aria-label="Menu de navegação">
        <span />
        <span />
      </summary>
      <nav
        aria-label="Navegação móvel"
        onClick={(event) => {
          if (event.target instanceof Element && event.target.closest("a"))
            closeMenu();
        }}
      >
        <Link href="/">Início</Link>
        {links.map((link) => (
          <Link href={link.href} key={link.href}>
            {link.label}
          </Link>
        ))}
        <a href={business.bookingUrl} target="_blank" rel="noopener noreferrer">
          Agendar horário ↗
        </a>
      </nav>
    </details>
  );
}
