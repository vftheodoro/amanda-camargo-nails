# Amanda Camargo Nails

Site institucional de Amanda Camargo, nail designer em Barnabés, Juquitiba–SP.

Domínio canônico: https://amandacamargonails.com.br

## Executar

Node.js 22.14 ou superior e npm.

```sh
npm ci
npm run dev
```

O site abre em http://localhost:3100.

```sh
npm test
npm run build
npm run start
node scripts/verify-site.mjs
```

## Arquitetura

Next.js App Router, TypeScript estrito e Tailwind CSS. Páginas pré-renderizadas e conteúdo local. Componentes de servidor por padrão; a galeria usa um componente cliente para filtros e dialog nativo com foco contido, Escape e navegação por setas. Sem banco, login, formulário ou API própria.

- `src/app`: rotas, metadados, sitemap e robots.
- `src/content`: dados comerciais, catálogo e portfólio.
- `src/modules`: componentes de apresentação por responsabilidade.
- `src/components`: interface compartilhada.
- `src/lib`: links e geração segura de dados estruturados.
- `src/types`: contratos de conteúdo.
- `src/tests`: regras comerciais e integrações entre dados.

## Atualizar conteúdo

Preços e técnicas: `src/content/services.ts`. Endereço, telefone, expediente, regras e perguntas: `src/content/business.ts`. Fotografias: `public/images`, com metadados em `src/content/gallery.ts`. Cada mudança deve atualizar também as informações correspondentes na MinhaAgenda e no Perfil da Empresa, quando houver.

Não adicionar depoimentos, certificações ou estatísticas sem fonte e autorização. Não há avaliações publicadas nesta versão.

## Fotografias e marca

As fotos da galeria foram baixadas do Instagram profissional indicado pelo solicitante, mantendo os resultados reais. A origem de cada item está em `src/content/gallery.ts`. O retrato original vem da publicação https://www.instagram.com/amandaa.cah/p/DY2nDzstb4_/.

O retrato editorial foi editado por IA a partir desse retrato; monograma e textura decorativa foram gerados por IA. A galeria não utiliza unhas geradas. As imagens foram convertidas para WebP sem modificar o resultado dos serviços.

Os scripts `prepare-images.mjs` e `prepare-brand.mjs` registram a preparação original e dependem dos arquivos locais da sessão de criação. Não são executados em CI ou na Vercel: todos os ativos finais necessários estão versionados em `public`.

## Publicação

Conectar este repositório ao projeto `amanda-camargo-nails` da equipe Bythe na Vercel. Framework: Next.js. Comando de build: `npm run build`. Branch de produção: `main`. Não é necessário configurar segredos.

Previews Vercel recebem `noindex` e robots bloqueado através de `VERCEL_ENV`. Produção recebe canônicas para o domínio principal.

Consultar `docs/LAUNCH.md` para DNS, indexação e verificações. O conteúdo não promete posição no Google, durabilidade fixa ou resultados de saúde.
