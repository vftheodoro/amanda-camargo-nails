import sharp from "sharp";
const folder =
  "C:/Users/victo/.codex/generated_images/01a16aed-f2d9-7143-979e-7dad60a66069";
const monogram = `${folder}/exec-f6811381-294c-4f0d-939a-b878f51f19a6.png`;
const texture = `${folder}/exec-4821cec0-0a78-4fd0-8b07-2133c1b69ea9.png`;
await sharp(monogram)
  .extract({ left: 245, top: 230, width: 760, height: 760 })
  .resize(400)
  .webp({ quality: 90 })
  .toFile("public/images/monogram.webp");
await sharp(monogram)
  .extract({ left: 245, top: 230, width: 760, height: 760 })
  .resize(64)
  .png()
  .toFile("public/favicon.png");
await sharp(monogram)
  .extract({ left: 245, top: 230, width: 760, height: 760 })
  .resize(180)
  .png()
  .toFile("public/apple-icon.png");
await sharp(texture)
  .resize({ width: 1440 })
  .webp({ quality: 78 })
  .toFile("public/images/silk-background.webp");
console.log("Monograma, favicon e textura preparados.");
