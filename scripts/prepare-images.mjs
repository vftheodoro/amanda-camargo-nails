import sharp from "sharp";
import { mkdir, copyFile } from "node:fs/promises";
import path from "node:path";

const output = path.resolve("public/images");
await mkdir(output, { recursive: true });
const sources = [
  "861280516_18195629728359489_2631055429805796200_n.jpg",
  "856374383_18195312265359489_882827473381950703_n.jpg",
  "847998491_18194605810359489_7257004692460259950_n.jpg",
  "846467147_18194506300359489_7614529382486165928_n.jpg",
  "844359546_18194267221359489_8807479329797219387_n.jpg",
  "841575156_18194190712359489_5847321308731289807_n.jpg",
  "840621637_18193986979359489_1417921701715646139_n.jpg",
  "836615373_18193703899359489_7060108175522213413_n.jpg",
  "829146392_18193292887359489_6840295518942955185_n.jpg",
  "825320349_18193077694359489_1143471457927581826_n.jpg",
  "824564273_18192665149359489_917887295953930419_n.jpg",
  "799622570_18192270832359489_3587369964766815781_n.jpg",
];
const downloads = "C:/Users/victo/Downloads";
for (const [index, file] of sources.entries()) {
  await sharp(path.join(downloads, file))
    .rotate()
    .webp({ quality: 90 })
    .toFile(
      path.join(output, `unhas-${String(index + 1).padStart(2, "0")}.webp`),
    );
}
await sharp(
  path.join(downloads, "707490995_18078479264558009_3089761618448874507_n.jpg"),
)
  .rotate()
  .webp({ quality: 90 })
  .toFile(path.join(output, "amanda-original.webp"));
await sharp(path.join(downloads, "-32032376.jpg"))
  .rotate()
  .webp({ quality: 95 })
  .toFile(path.join(output, "pedicure.webp"));
await sharp(
  "C:/Users/victo/.codex/generated_images/01a16aed-f2d9-7143-979e-7dad60a66069/exec-dc88ac57-5d43-451d-b5a7-02f2352ec103.png",
)
  .resize({ width: 1100 })
  .webp({ quality: 88 })
  .toFile(path.join(output, "amanda-editorial.webp"));
await mkdir("artifacts", { recursive: true });
await copyFile(
  "C:/Users/victo/.codex/generated_images/01a16aed-f2d9-7143-979e-7dad60a66069/exec-dc88ac57-5d43-451d-b5a7-02f2352ec103.png",
  "artifacts/amanda-editorial-master.png",
);
console.log("Portfólio real e retratos preparados.");
