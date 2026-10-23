import { PageIntro } from "@/components/page-intro";
import { business } from "@/content/business";
import { whatsappUrl } from "@/lib/links";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Privacidade",
  "Saiba como o site Amanda Camargo Nails utiliza dados de navegação e links para agendamento e contato.",
  "/privacidade",
);
export default function PrivacyPage() {
  return (
    <>
      <PageIntro
        eyebrow="Informação com transparência"
        title={
          <>
            Sua <em>privacidade.</em>
          </>
        }
        description="Como este site funciona e o que acontece quando você entra em contato."
        path="/privacidade"
        label="Privacidade"
      />
      <article className="container legal-copy">
        <p>Última atualização: 23 de outubro de 2026.</p>
        <h2>Sobre este site</h2>
        <p>
          Este é o site de apresentação de {business.name}, localizado na{" "}
          {business.address.street}, Barnabés, Juquitiba–SP. O site apresenta
          serviços, valores, trabalhos e formas de contato.
        </p>
        <h2>Dados de navegação</h2>
        <p>
          A hospedagem é realizada pela Vercel, que pode processar dados
          técnicos necessários à entrega e à segurança do site, como endereço
          IP, informações do navegador, data e horário das requisições. Não
          instalamos ferramentas de publicidade, rastreamento comportamental ou
          formulários de cadastro nesta versão.
        </p>
        <h2>Agendamento e WhatsApp</h2>
        <p>
          Ao clicar nos botões de agendamento, você será direcionada à
          MinhaAgenda. Ao iniciar uma conversa, será direcionada ao WhatsApp.
          Dados fornecidos nesses serviços seguem também as políticas dos
          respectivos provedores e são utilizados para atender à sua solicitação
          e organizar o atendimento.
        </p>
        <h2>Fotografias</h2>
        <p>
          A galeria apresenta trabalhos reais publicados no perfil profissional
          de Amanda. Os retratos editoriais foram preparados com auxílio de
          inteligência artificial a partir de uma fotografia de Amanda. A
          comparação de antes e depois é uma ilustração gerada com IA para
          visualizar estilos, identificada junto à imagem. Esses materiais não
          representam registros de atendimentos reais. A galeria de trabalhos
          utiliza fotografias reais.
        </p>
        <h2>Seus dados e seu contato</h2>
        <p>
          Para dúvidas sobre seus dados, correção de informações ou solicitação
          sobre alguma imagem,{" "}
          <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
            entre em contato com Amanda pelo WhatsApp {business.displayPhone}
          </a>
          . A solicitação será analisada conforme o contexto e as obrigações
          aplicáveis.
        </p>
        <h2>Links externos</h2>
        <p>
          Este site contém links para Instagram, Google Maps, MinhaAgenda e
          WhatsApp. Ao acessá-los, consulte as informações de privacidade de
          cada plataforma.
        </p>
      </article>
    </>
  );
}
