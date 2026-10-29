import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";
import { getStaticPages, getPageMetadata } from "../build/prerender/entry-server.js";

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

const listedURLs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
const paths = getStaticPages();
assert.deepEqual(listedURLs, paths.map((path) => `${origin}${path}`), "El sitemap no coincide con las páginas generadas");
const titles = new Set();
const descriptions = new Set();
for (const path of paths) {
  const page = getPageMetadata(path);
  const pageHtml = await readFile(`dist${path}index.html`, "utf8");
  const title = pageHtml.match(/<title>([^<]+)<\/title>/)?.[1];
  const description = pageHtml.match(/name="description"[^>]*content="([^"]+)"/)?.[1];
  assert.ok(title && description, `Metadatos incompletos en ${path}`);
  assert.ok(!titles.has(title), `Título duplicado en ${path}`);
  assert.ok(!descriptions.has(description), `Descripción duplicada en ${path}`);
  titles.add(title);
  descriptions.add(description);
  assert.ok(pageHtml.includes(`rel="canonical" href="${page.canonical}"`), `Canonical incorrecto en ${path}`);
  assert.ok(pageHtml.includes(`property="og:url" content="${page.canonical}"`), `URL social incorrecta en ${path}`);
  assert.equal((pageHtml.match(/<h1\b/g) ?? []).length, 1, `Debe haber un H1 en ${path}`);
  assert.doesNotMatch(pageHtml, /noindex/i, `${path} impide la indexación`);
  assert.doesNotMatch(pageHtml, /<script\b[^>]*type="module"/, `${path} depende de hidratación del cliente`);
  const entities = [...pageHtml.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)]
    .flatMap((match) => {
      const value = JSON.parse(match[1]);
      return value["@graph"] ?? [value];
    });
  const organization = entities.find((value) => value["@type"] === "Organization");
  const website = entities.find((value) => value["@type"] === "WebSite");
  const webpage = entities.find((value) => value["@type"] === "WebPage");
  assert.equal(organization?.name, "Barcelona Perfume Club");
  assert.equal(organization?.url, `${origin}/`);
  assert.equal(website?.name, organization.name);
  assert.equal(website?.publisher?.["@id"], organization["@id"]);
  assert.equal(webpage?.url, page.canonical);
  assert.equal(webpage?.isPartOf?.["@id"], website["@id"]);
  if (path !== "/") {
    assert.ok(entities.some((value) => value["@type"] === "BreadcrumbList"), `Faltan migas en ${path}`);
    assert.ok(html.includes(`href="${path}"`), `La portada no enlaza ${path}`);
    assert.ok(pageHtml.includes("Sin registro y confirmación no se podrá acceder."));
    assert.ok(page.registrationUrl && pageHtml.includes(page.registrationUrl), `Falta el enlace propio de inscripción en ${path}`);
    for (const match of pageHtml.matchAll(/<img\b[^>]*src="(\/[^\"]+)"/g)) {
      assert.ok((await stat(`dist${match[1]}`)).isFile(), `Imagen ausente: ${match[1]}`);
    }
  }
}
console.log(`SEO: ${paths.length} páginas con HTML inicial, títulos y descripciones únicos, canonical, identidad, JSON-LD, enlaces y sitemap correctos; imagen social y verificación de Google conservadas.`);
