import { readFile, writeFile, mkdir } from "node:fs/promises";
const source = await readFile("src/app/globals.css", "utf8");
const markers = [
  ".announcement{",
  ".hero{",
  ".service-grid{",
  ".about-section{",
  ".portfolio-section{",
  ".quote-banner{",
  ".faq-section{",
  ".contact-layout{",
  ".site-footer{",
  ".page-intro{",
  "@media(min-width:1500px)",
];
const points = markers.map((marker) => source.indexOf(marker));
if (points.some((point) => point < 0))
  throw new Error("Estilos já organizados ou marcador ausente.");
const segments = [
  source.slice(source.indexOf("@theme"), points[0]),
  ...points.map((point, index) =>
    source.slice(point, points[index + 1] ?? source.length),
  ),
];
const groups = {
  base: segments[0],
  layout: segments[1] + segments[9],
  home: segments[2] + segments[4] + segments[6],
  services: segments[3] + segments[10],
  gallery: segments[5],
  contact: segments[7] + segments[8],
  responsive: segments[11],
};
function format(css) {
  let level = 0;
  return (
    css
      .replace(/\{/g, "{\n")
      .replace(/\}/g, "\n}\n")
      .replace(/;/g, ";\n")
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean)
      .map((line) => {
        if (line.startsWith("}")) level = Math.max(0, level - 1);
        const result = "  ".repeat(level) + line;
        if (line.endsWith("{")) level++;
        return result;
      })
      .join("\n") + "\n"
  );
}
await mkdir("src/app/styles", { recursive: true });
for (const [name, css] of Object.entries(groups))
  await writeFile(`src/app/styles/${name}.css`, format(css));
await writeFile(
  "src/app/globals.css",
  '@import "tailwindcss";\n' +
    Object.keys(groups)
      .map((name) => `@import "./styles/${name}.css";`)
      .join("\n") +
    "\n",
);
console.log("Estilos separados por responsabilidade.");
