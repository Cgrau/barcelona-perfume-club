---
source_file: "memory/Web.md"
type: "rationale"
community: "Generación estática y verificación"
location: "L33"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Generación_estática_y_verificación
---

# Verificar compilación, SEO y Playwright

<!-- project-memory:start -->
npm run build, npm run seo:check y npm test. Suite móvil 375 px y escritorio 1440 px con axe. Brave mediante BROWSER_PATH si falta Chromium. Entrada y metadatos se verifican sin JavaScript; axe usa otro contexto con JavaScript para su analizador. Terminar compilación antes de probar dist/.

[Nota original](../Web.md)
<!-- project-memory:end -->

## Connections
- [[Validación del About dieciséis pruebas y publicación comprobada]] - `references` [EXTRACTED]
- [[Verificación SEO de dos páginas y doce pruebas]] - `references` [EXTRACTED]
- [[Verificación inicial y compilación antes de las pruebas]] - `references` [EXTRACTED]

#graphify/rationale #graphify/EXTRACTED #community/Generación_estática_y_verificación