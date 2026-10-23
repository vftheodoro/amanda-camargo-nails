import { PageIntro } from "@/components/page-intro";
import { Gallery } from "@/modules/gallery/gallery";
import { ContactSection } from "@/modules/contact/contact-section";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Galeria de unhas e nail art em Juquitiba",
  "Inspire-se em trabalhos reais de Amanda Camargo: francesinhas, nail art, unhas clássicas e pedicure em Barnabés, Juquitiba.",
  "/galeria",
);
export default function GalleryPage() {
  return (
    <>
      <PageIntro
        eyebrow="O cuidado aparece nos detalhes"
        title={
          <>
            Seu próximo estilo
            <br />
            começa na <em>inspiração.</em>
          </>
        }
        description="Uma seleção de trabalhos reais feitos por Amanda. Explore os detalhes e encontre referências para o seu próximo atendimento."
        path="/galeria"
        label="Galeria"
      />
      <section className="section">
        <div className="container">
          <Gallery />
        </div>
      </section>
      <ContactSection />
    </>
  );
}
