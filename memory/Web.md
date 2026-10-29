---
title: Web, código y publicación
type: architecture
updated: 2026-10-29
tags: [web, github]
---

# Web y publicación

Sitio: https://barcelonaperfumeclub.com/ · Repositorio: https://github.com/Cgrau/barcelona-perfume-club · Rama de publicación: `main`.

React 19, Vite y TypeScript. La compilación prerenderiza la landing a HTML. La producción usa enlaces, anclas y CSS nativos, sin hidratar React. No añadir componentes que necesiten JavaScript de cliente sin revisar esa decisión.

Archivos principales:

| Archivo | Función |
| --- | --- |
| `src/App.tsx` | Portada, eventos, club, FAQ y contacto |
| `src/landing.css` | Diseño activo y comportamiento responsive |
| `src/content.ts` | Eventos y enlaces del club |
| `src/EventPage.tsx` | Ficha estática propia de cada encuentro |
| `src/AboutPage.tsx` | Sobre el club y Carles y Laura; por ahora solo local |
| `src/components/EventContent.tsx` | Descripción y aviso de acceso compartidos |
| `src/seo.ts` | Metadatos por URL e identidad común |
| `index.html` | Metadatos SEO y de redes |
| `scripts/prerender.mjs` | HTML inicial de la página |
| `tests/landing.spec.ts` | Pruebas activas de la landing |
| `.github/workflows/deploy.yml` | Publicación de GitHub Pages |
| `.github/workflows/seo.yml` | Controles SEO y Lighthouse en CI |

`src/ClubSite.tsx` conserva una propuesta anterior; no es la web activa.

Para revisar: `npm install`, `npm run build`, `npm run seo:check`, `npm test`. Requiere Node 22.12 o posterior. La suite tiene proyectos móvil (375 px) y escritorio (1440 px), incluyendo axe. Brave puede usarse con `BROWSER_PATH` si Chromium de Playwright no está instalado. Terminar la compilación antes de probar el resultado estático.

GitHub Pages compila y publica `dist/` al subir a `main`. Comprobar el workflow y el contenido servido por el dominio antes de confirmar una publicación. Las notas de [[Inicio]] y el grafo de [[Graphify]] viven fuera de `public/`.

El prerender genera portada y rutas `events[].path`, incluyendo `/eventos/descubriendo-perfumes-nicho/`, y deriva de ellas `dist/sitemap.xml`. Ya no hay sitemap manual en `public/`. Cada URL tiene título, descripción, canonical y WebPage propios. Las pruebas usan producción estática: entrada y metadatos sin JavaScript, axe en un contexto con JavaScript para su analizador. Detalle en [[sesiones/2026-10-29]].

La versión local añade `about.path`, `/sobre-el-club/`, como tercera ruta prerenderizada. El menú es Inicio · El club · Eventos · Quiénes somos · Contacto. Inicio, El club y Eventos apuntan a la home como antes; «Quiénes somos» abre la página aparte de Carles y Laura. El contenido de la home conserva el anuncio y el evento, sin presentación de los organizadores. El About tiene metadatos propios, AboutPage y Person; las redes personales solo se asocian a Carles, no a Organization.sameAs. `tests/about.spec.ts` cubre la navegación, contenido, redes, scroll y accesibilidad. Compilación, control SEO y dieciséis pruebas correctos. Carles revisa y aprueba la versión local y solicita **subirla a producción el 29 de octubre**. La restricción inicial de no publicar queda superada; comprobar workflow y dominio antes de registrar éxito. La foto profesional conjunta se incorporará más adelante; por ahora `public/media/carles-grau-{320,640}.webp` muestra el retrato de Carles proporcionado por él, sin metadatos, en blanco y negro mediante CSS, con tamaño reservado y carga diferida. Solo se utiliza en «Quiénes somos».

Umami es opcional; el código solo lo inserta si se configura `UMAMI_WEBSITE_ID`. No guardar valores privados en esta bóveda. Detalles en `docs/UMAMI.md`. La organización visual está en [[Decisiones]] y la programación en [[Eventos]].
