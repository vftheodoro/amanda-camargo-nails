import test from "node:test";
import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { business, policies } from "../content/business";
import { services, servicePages } from "../content/services";
import { gallery } from "../content/gallery";
import { formatPrice, mapsUrl, whatsappUrl } from "../lib/links";
import { breadcrumbSchema, businessSchema, serializeJsonLd } from "../lib/seo";

test("catálogo mantém todos os preços confirmados e a unidade de conserto", () => {
  assert.deepEqual(
    services.map(({ id, price }) => [id, price]),
    [
      ["alongamento-f1", 120],
      ["banho-de-gel", 100],
      ["manicure-pro", 60],
      ["pedicure-pro", 60],
      ["manicure-tradicional", 30],
      ["pedicure-tradicional", 35],
      ["manutencao-banho", 80],
      ["manutencao-alongamento", 100],
      ["remocao", 35],
      ["conserto", 10],
    ],
  );
  assert.equal(
    services.find((item) => item.id === "conserto")?.unit,
    "por unha",
  );
  assert.equal(new Set(services.map((item) => item.id)).size, services.length);
});
test("páginas de serviço e portfólio apontam para fotos locais existentes", () => {
  for (const item of [...servicePages, ...gallery])
    assert.ok(existsSync(`public${item.image}`), item.image);
  for (const asset of [
    "amanda-acolhedora.webp",
    "botanical-sticker.webp",
    "polish-sticker.webp",
    "style-comparison.webp",
  ])
    assert.ok(existsSync(`public/images/${asset}`), asset);
  for (const page of servicePages)
    assert.ok(services.some((item) => item.category === page.slug));
});
test("WhatsApp usa o número confirmado e codifica caracteres especiais", () => {
  const service = "Manicure & pedicure / em gel?";
  const url = new URL(whatsappUrl(service));
  assert.equal(url.hostname, "wa.me");
  assert.equal(url.pathname, `/${business.phone}`);
  assert.equal(url.searchParams.size, 1);
  assert.ok(url.searchParams.get("text")?.includes(service));
  assert.ok(
    new URL(whatsappUrl()).searchParams
      .get("text")
      ?.includes("Conheci seu site"),
  );
});
test("rota usa endereço completo e valores inválidos não são publicados", () => {
  assert.ok(
    new URL(mapsUrl()).searchParams.get("query")?.includes("Juquitiba - SP"),
  );
  assert.ok(formatPrice(120).includes("120"));
  for (const value of [-1, NaN, Infinity])
    assert.throws(() => formatPrice(value), RangeError);
});
test("SEO corresponde ao negócio real sem avaliações ou horários inventados", () => {
  const schema = businessSchema();
  assert.equal(schema["@type"], "NailSalon");
  assert.equal(schema.address.addressLocality, "Juquitiba");
  assert.equal(schema.hasOfferCatalog.itemListElement.length, 10);
  assert.ok(!("aggregateRating" in schema));
  assert.ok(!("openingHours" in schema));
  assert.equal(
    breadcrumbSchema([{ name: "Início", path: "/" }]).itemListElement[0].item,
    `${business.domain}/`,
  );
});
test("JSON-LD neutraliza fechamento de script e políticas preservam prazos", () => {
  assert.ok(
    !serializeJsonLd({ text: "</script><script>alert(1)</script>" }).includes(
      "<",
    ),
  );
  assert.ok(policies.some((item) => item.includes("24 horas")));
  assert.ok(policies.some((item) => item.includes("10 minutos")));
});
