import { readFile, writeFile, mkdir } from "node:fs/promises";
import { render, getStaticPages, getPageMetadata } from "../build/prerender/entry-server.js";

const template = await readFile("dist/index.html", "utf8");
if (!template.includes('<div id="root"></div>')) {
  throw new Error("No se ha encontrado el contenedor de la landing.");
}
function escapeHtml(value) {
  return value.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

function replaceMeta(html, attribute, key, value) {
  const pattern = new RegExp(`<meta\\b(?=[^>]*${attribute}="${key}")[^>]*>`);
  if (!pattern.test(html)) throw new Error(`Falta el metadato ${key}`);
  return html.replace(pattern, (tag) => tag.replace(/content="[^"]*"/, () => `content="${escapeHtml(value)}"`));
}

const paths = getStaticPages();
if (new Set(paths).size !== paths.length) throw new Error("Hay rutas estáticas duplicadas.");

for (const path of paths) {
  const page = getPageMetadata(path);
  let html = template
    .replace('<div id="root"></div>', () => `<div id="root">${render(path)}</div>`)
    .replace(/<title>[\s\S]*?<\/title>/, () => `<title>${escapeHtml(page.title)}</title>`)
    .replace(/<link\b[^>]*rel="canonical"[^>]*>/, () => `<link rel="canonical" href="${escapeHtml(page.canonical)}" />`)
    .replace(/<script\b[^>]*type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>/, () =>
      page.structuredData.map((data) => `<script type="application/ld+json">${JSON.stringify(data).replaceAll("<", "\\u003c")}</script>`).join("\n"),
    );
  for (const [attribute, key, value] of [
    ["name", "description", page.description],
    ["property", "og:title", page.title],
    ["property", "og:description", page.description],
    ["property", "og:url", page.canonical],
    ["name", "twitter:title", page.title],
    ["name", "twitter:description", page.description],
  ]) html = replaceMeta(html, attribute, key, value);
  const directory = `dist${path}`;
  await mkdir(directory, { recursive: true });
  await writeFile(`${directory}index.html`, html);
}

const urls = paths.map((path) => `<url><loc>${escapeHtml(getPageMetadata(path).canonical)}</loc></url>`);
await writeFile("dist/sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>\n`);
console.log(`${paths.length} páginas prerenderizadas, con metadatos y sitemap propios; contenido disponible sin JavaScript.`);
