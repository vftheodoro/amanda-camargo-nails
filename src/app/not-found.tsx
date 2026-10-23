import Link from "next/link";
import { Icon } from "@/components/icon";
export default function NotFound() {
  return (
    <section className="section not-found container">
      <p className="eyebrow">404 · Um detalhe fora do lugar</p>
      <h1>
        Vamos encontrar
        <br />o seu <em>caminho?</em>
      </h1>
      <p>
        Essa página não está disponível. Seus próximos momentos de cuidado estão
        logo ali.
      </p>
      <Link href="/" className="button button-primary">
        Voltar ao início <Icon name="arrow" />
      </Link>
    </section>
  );
}
