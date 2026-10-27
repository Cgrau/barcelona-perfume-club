---
source_file: "memory/Web.md"
type: "rationale"
community: "Arquitectura web"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Arquitectura_web
---

# Arquitectura React, Vite y TypeScript con HTML prerenderizado

<!-- project-memory:start -->
React 19, Vite y TypeScript; la compilación prerenderiza la landing. Producción usa enlaces, anclas y CSS nativos, sin hidratar React. Revisar esta decisión antes de añadir componentes dependientes de JavaScript de cliente. Requiere Node 22.12 o posterior.

[Nota original](../Web.md)
<!-- project-memory:end -->

## Connections
- [[scriptsprerender.mjs HTML inicial]] - `references` [EXTRACTED]
- [[srcApp.tsx web activa]] - `references` [EXTRACTED]
- [[srccontent.ts eventos y enlaces]] - `references` [EXTRACTED]
- [[srclanding.css diseño y adaptación a pantallas]] - `references` [EXTRACTED]

#graphify/rationale #graphify/EXTRACTED #community/Arquitectura_web