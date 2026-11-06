---
source_file: "memory/Web.md"
type: "rationale"
community: "Verificación y publicación web"
location: "L33"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Verificación_y_publicación_web
---

# Verificar compilación, SEO y Playwright

<!-- project-memory:start -->
npm run build, npm run seo:check y npm test. Suite móvil 375 px y escritorio 1440 px con axe. Brave mediante BROWSER_PATH si falta Chromium. Entrada y metadatos se verifican sin JavaScript; axe usa otro contexto con JavaScript para su analizador. Terminar compilación antes de probar dist/.

[Nota original](../Web.md)
<!-- project-memory:end -->

## Connections
- [[Auditoría pública y Lighthouse evidencia de laboratorio]] - `references` [EXTRACTED]
- [[Mejoras del 6 de noviembre relevancia, enlaces e identidad]] - `references` [EXTRACTED]
- [[Validación del About dieciséis pruebas y publicación comprobada]] - `references` [EXTRACTED]
- [[Verificación SEO de dos páginas y doce pruebas]] - `references` [EXTRACTED]
- [[Verificación inicial y compilación antes de las pruebas]] - `references` [EXTRACTED]

#graphify/rationale #graphify/EXTRACTED #community/Verificación_y_publicación_web