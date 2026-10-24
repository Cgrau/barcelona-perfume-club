import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const origin = "https://barcelonaperfumeclub.com";
const [html, robots, sitemap] = await Promise.all(
  ["dist/index.html", "dist/robots.txt", "dist/sitemap.xml"].map((file) =>
    readFile(file, "utf8"),
  ),
);

assert.match(html, /<html\b[^>]*lang="es"/, "Falta el idioma español");
assert.match(html, /<title>[^<]+<\/title>/, "Falta el título de la página");
assert.match(
  html,
  /<meta\b[^>]*name="description"[^>]*content="[^"]+"/,
  "Falta la descripción",
);
assert.ok(
  html.includes(`<link rel="canonical" href="${origin}/"`),
  "El canonical debe apuntar al dominio público",
);
assert.doesNotMatch(html, /noindex/i, "La portada impide la indexación");
assert.match(html, /<h1\b/, "El HTML inicial debe incluir el titular");
assert.match(html, /<main\b/, "El HTML inicial debe incluir el contenido");
assert.match(
  html,
  /<meta\b[^>]*name="google-site-verification"[^>]*content="[^"]+"/,
  "Falta la etiqueta de verificación de Search Console",
);

const data = html.match(
  /<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/,
);
assert.ok(data, "Faltan los datos estructurados");
const organization = JSON.parse(data[1]);
assert.equal(organization["@type"], "Organization");
assert.equal(organization.url, `${origin}/`);
assert.ok(robots.includes(`Sitemap: ${origin}/sitemap.xml`));
assert.doesNotMatch(robots, /^Disallow:\s*\/\s*$/m);
assert.ok(sitemap.includes(`<loc>${origin}/</loc>`));

const socialImage = html.match(/property="og:image"[^>]*content="([^"]+)"/)?.[1];
assert.ok(socialImage, "Falta la imagen para compartir");
const socialURL = new URL(socialImage);
assert.equal(socialURL.origin, origin);
const image = await readFile(`dist${socialURL.pathname}`);
assert.equal(image.subarray(1, 4).toString(), "PNG");
const socialWidth = Number(html.match(/property="og:image:width"[^>]*content="(\d+)"/)?.[1]);
const socialHeight = Number(html.match(/property="og:image:height"[^>]*content="(\d+)"/)?.[1]);
assert.equal(image.readUInt32BE(16), socialWidth, "El ancho de la imagen social no coincide");
assert.equal(image.readUInt32BE(20), socialHeight, "El alto de la imagen social no coincide");
assert.equal(html.match(/name="twitter:image"[^>]*content="([^"]+)"/)?.[1], socialImage);

console.log("SEO: metadatos, verificación de Google, canonical, HTML inicial, JSON-LD, robots, sitemap e imagen social correctos.");
