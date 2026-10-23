import sharp from "sharp";
import path from "node:path";
import { mkdir } from "node:fs/promises";

const [source, filename, widthArgument = "1200"] = process.argv.slice(2);
const width = Number(widthArgument);
if (!source || !filename || !/^[a-z0-9-]+\.webp$/.test(filename) || !Number.isInteger(width) || width < 32 || width > 2400) {
  throw new Error("Uso: node scripts/optimize-image.mjs caminho-da-foto nome-da-foto.webp [largura-de-32-a-2400]");
}
const outputDirectory = path.resolve("public/images");
await mkdir(outputDirectory, { recursive: true });
await sharp(path.resolve(source))
  .rotate()
  .resize({ width, withoutEnlargement: true })
  .webp({ quality: 89 })
  .toFile(path.join(outputDirectory, filename));
console.log(`Imagem otimizada: public/images/${filename}`);
