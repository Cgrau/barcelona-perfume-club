---
source_file: "memory/Web.md"
type: "rationale"
community: "SEO y generación estática"
location: "L37"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/SEO_y_generación_estática
---

# Sitemap estático generado desde las rutas reales

<!-- project-memory:start -->
El prerender deriva dist/sitemap.xml de las rutas reales; no hay sitemap manual en public/. El sitemap público comprobado en 4df3f11 contiene tres URLs: portada, ficha del evento y /sobre-el-club/.

**Motivo:** Mantener las URLs publicadas y las entradas del sitemap vinculadas a los mismos datos.

[Nota original](../Web.md)
<!-- project-memory:end -->

## Connections
- [[Publicación SEO comprobada 4f0a26b]] - `references` [EXTRACTED]
- [[scriptsprerender.mjs generación estática]] - `references` [EXTRACTED]
- [[srcAboutPage.tsx Quiénes somos publicado y comprobado]] - `references` [EXTRACTED]
- [[srccontent.ts eventos y enlaces]] - `references` [EXTRACTED]

#graphify/rationale #graphify/EXTRACTED #community/SEO_y_generación_estática