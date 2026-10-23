import { readFile, writeFile } from "node:fs/promises";
import { render } from "../build/prerender/entry-server.js";

const template = await readFile("dist/index.html", "utf8");
if (!template.includes('<div id="root"></div>')) {
  throw new Error("No se ha encontrado el contenedor de la landing.");
}
await writeFile(
  "dist/index.html",
  template.replace('<div id="root"></div>', `<div id="root">${render()}</div>`),
);
console.log(
  "Landing prerenderizada: contenido disponible antes de JavaScript.",
);
