import assert from "node:assert/strict";
import { writeFile, mkdir } from "node:fs/promises";
const base = process.argv[2] || "http://localhost:3100";
const routes = [
  "/",
  "/servicos",
  "/servicos/alongamento-de-unhas",
  "/servicos/banho-de-gel",
  "/servicos/manicure",
  "/servicos/pedicure",
  "/galeria",
  "/contato",
  "/privacidade",
];
const results = [];
for (const route of routes) {
  const response = await fetch(`${base}${route}`);
  assert.equal(response.status, 200, route);
  const html = await response.text();
  assert.equal(
    (html.match(/<h1(?:\s|>)/g) || []).length,
    1,
    `Um único h1: ${route}`,
  );
  assert.ok(html.includes('lang="pt-BR"'), `Idioma: ${route}`);
  assert.ok(
    html.includes(
      `href="https://amandacamargonails.com.br${route === "/" ? "" : route}`,
    ),
    `Canônica: ${route}`,
  );
  assert.ok(
    html.includes("application/ld+json"),
    `Dados estruturados: ${route}`,
  );
  const schemas = [
    ...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs),
  ].map((match) => JSON.parse(match[1]));
  assert.ok(schemas.some((item) => item["@type"] === "NailSalon"));
  assert.equal(response.headers.get("x-content-type-options"), "nosniff");
  assert.ok(
    response.headers
      .get("content-security-policy")
      ?.includes("object-src 'none'"),
  );
  results.push({
    route,
    status: response.status,
    title: html.match(/<title>(.*?)<\/title>/)?.[1],
    schemas: schemas.map((item) => item["@type"]),
  });
}
const sitemap = await fetch(`${base}/sitemap.xml`).then((response) =>
  response.text(),
);
for (const route of routes)
  assert.ok(
    sitemap.includes(
      `https://amandacamargonails.com.br${route === "/" ? "/" : route}`,
    ),
    `Sitemap: ${route}`,
  );
assert.ok(
  (
    await fetch(`${base}/robots.txt`).then((response) => response.text())
  ).includes("Sitemap: https://amandacamargonails.com.br/sitemap.xml"),
);
assert.equal((await fetch(`${base}/pagina-inexistente`)).status, 404);
assert.equal((await fetch(`${base}/servicos/inexistente`)).status, 404);
for (const asset of [
  "/favicon.png",
  "/apple-icon.png",
  "/images/silk-background.webp",
  "/images/amanda-editorial.webp",
  "/opengraph-image",
])
  assert.equal((await fetch(`${base}${asset}`)).status, 200, asset);
await mkdir("artifacts", { recursive: true });
await writeFile(
  "artifacts/verification.json",
  JSON.stringify(
    { base, checkedAt: new Date().toISOString(), results },
    null,
    2,
  ),
);
console.log(
  `Verificados: ${routes.length} páginas, canônicas, metadados, JSON-LD, segurança, sitemap, robots, imagens e respostas 404.`,
);
