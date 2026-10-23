import Link from "next/link";
import { breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "./json-ld";

export function PageIntro({
  eyebrow,
  title,
  description,
  path,
  label,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  path: string;
  label: string;
}) {
  return (
    <section className="page-intro">
      <div className="container">
        <nav className="breadcrumbs" aria-label="Localização na navegação">
          <Link href="/">Início</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{label}</span>
        </nav>
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="page-intro-description">{description}</p>
      </div>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Início", path: "/" },
          { name: label, path },
        ])}
      />
    </section>
  );
}
