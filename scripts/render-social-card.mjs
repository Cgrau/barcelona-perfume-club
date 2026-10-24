import { chromium } from "@playwright/test";
import { readFile, writeFile } from "node:fs/promises";

const asset = (mime, data) => `data:${mime};base64,${Buffer.from(data).toString("base64")}`;
const font = async (file) => asset("font/woff2", await readFile(file));
const [regular, italic, body, logo] = await Promise.all([
  font("node_modules/@fontsource/playfair-display/files/playfair-display-latin-400-normal.woff2"),
  font("node_modules/@fontsource/playfair-display/files/playfair-display-latin-400-italic.woff2"),
  font("node_modules/@fontsource/jost/files/jost-latin-400-normal.woff2"),
  readFile("public/media/logo-vector.svg", "utf8"),
]);
// Crop the existing logo's blank margins without changing any lettering.
const croppedLogo = logo
  .replace(/width="480" height="480"/, 'width="950" height="480"')
  .replace(/viewBox="[^"]+"/, 'viewBox="150 400 950 480"');

const browser = await chromium.launch({
  ...(process.env.BROWSER_PATH ? { executablePath: process.env.BROWSER_PATH } : {}),
  headless: true,
});
try {
  const page = await browser.newPage({
    viewport: { width: 1200, height: 630 },
    deviceScaleFactor: 1,
  });
  await page.setContent(`<!doctype html><html lang="es"><head><meta charset="utf-8"><style>
    @font-face{font-family:Display;src:url("${regular}")}
    @font-face{font-family:Display;src:url("${italic}");font-style:italic}
    @font-face{font-family:Body;src:url("${body}")}
    *{box-sizing:border-box;margin:0}
    html,body{width:1200px;height:630px;overflow:hidden;background:#640817;color:#f3eee0}
    main{position:relative;width:1200px;height:630px;text-align:center}
    .logo{position:absolute;top:57px;left:480px;width:240px;height:122px}
    .rule{position:absolute;top:216px;left:72px;right:72px;height:1px;background:rgba(243,238,224,.3)}
    .eyebrow{position:absolute;top:253px;left:72px;right:72px;font:400 16px/1.5 Body;letter-spacing:2px;text-transform:uppercase}
    h1{position:absolute;top:300px;left:72px;right:72px;font:400 64px/1.12 Display;letter-spacing:-2px}
    h1 span{display:block}
    h1 em{font-weight:400}
    .domain{position:absolute;bottom:57px;left:72px;right:72px;font:400 21px/1.5 Body;letter-spacing:.5px}
  </style></head><body><main>
    <img class="logo" src="${asset("image/svg+xml", croppedLogo)}" alt="Barcelona Perfume Club">
    <div class="rule"></div>
    <p class="eyebrow">Perfume, conversación y comunidad</p>
    <h1><span>El perfume se disfruta</span><span>más <em>en compañía.</em></span></h1>
    <p class="domain">barcelonaperfumeclub.com</p>
  </main></body></html>`);
  await page.evaluate(async () => {
    await document.fonts.ready;
    await Promise.all(Array.from(document.images, (image) => image.decode()));
  });
  const png = await page.screenshot({ type: "png" });
  await writeFile("public/media/share-card-v1.png", png);
  console.log(`Tarjeta social creada: 1200 × 630, ${png.byteLength} bytes.`);
} finally {
  await browser.close();
}
