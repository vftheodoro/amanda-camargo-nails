"use client";

import Link from "next/link";

export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <section className="section container not-found">
      <p className="eyebrow">Vamos tentar de novo?</p>
      <h1>Um pequeno imprevisto<br />no <em>caminho.</em></h1>
      <p>Não foi possível exibir este conteúdo agora. Você pode tentar novamente ou voltar ao início.</p>
      <button type="button" className="button button-primary" onClick={reset}>Tentar novamente</button>
      <p><Link className="text-link" href="/">Voltar ao início</Link></p>
    </section>
  );
}
