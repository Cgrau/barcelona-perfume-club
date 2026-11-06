# Auditoría técnica, schema, sitemap y lectura por agentes

Comprobación: 6 de noviembre de 2026, desde las 17:28 UTC. Código de referencia: `4432f14`. Auditoría de lectura; no se modifica la web ni se publica.

## Resultado

**No se ha identificado un bloqueo técnico de rastreo en las tres rutas públicas.** Hay HTML completo, canonical propio y metadatos diferenciados en las tres. Esta comprobación no acredita la indexación individual de las páginas interiores ni posiciones en Google.

No se calcula una nota global ni se da por aprobado Core Web Vitals: no hay datos de campo actuales de LCP, INP y CLS en esta revisión. Las verificaciones de HTML son directas y no equivalen a una validación remota de Rich Results de Google.

## Evidencia HTTP y HTML

| Comprobación | Resultado observado |
| --- | --- |
| Portada `/` | HTTP 200, HTML español, 13.211 bytes, un H1 |
| `/sobre-el-club/` | HTTP 200, HTML español, 12.713 bytes, un H1 |
| `/eventos/descubriendo-perfumes-nicho/` | HTTP 200, HTML español, 10.291 bytes, un H1 |
| HTML inicial | Incluye el contenido y los enlaces; no hay scripts de módulo en ninguna ruta |
| Títulos y descripciones | Presentes y únicos; portada expresa marca, club de perfumería y Barcelona |
| Canonical | Uno propio por ruta, en el dominio HTTPS oficial |
| Robots | HTTP 200; `User-agent: *`, `Allow: /`; declara el sitemap correcto |
| Sitemap | HTTP 200, `application/xml`, XML válido, exactamente las tres URLs canónicas que responden 200 |
| Redirecciones | HTTP, www y `cgrau.github.io/barcelona-perfume-club/` redirigen mediante 301 al dominio HTTPS sin www; respuesta final 200 |
| URL inexistente de prueba | HTTP 404; plantilla personalizada incluye `noindex` |
| Enlaces internos | Las rutas y anclas que aparecen en las tres páginas tienen destino existente en el HTML inspeccionado |
| Identificadores HTML | No se detectan IDs duplicados en las tres páginas |
| Imágenes HTML | Todas incluyen texto alternativo y dimensiones explícitas; cartel y retrato usan WebP y `srcset` |
| Imágenes principales y de identidad | Logo de schema 200 / 73.141 bytes; cartel 960w 200 / 186.688 bytes; retrato 640w 200 / 24.358 bytes; tarjeta social 200 / 45.353 bytes |

La ausencia de `lastmod` en el sitemap no es un error: evita declarar fechas artificiales. Solo añadirlo si hay un sistema fiable de fecha de cambios sustanciales. No hace falta añadir `priority` ni `changefreq`.

El desplazamiento central y las cabeceras fijas están en el CSS aprobado. El contenido central ya existe en el HTML inicial: no se identifica una necesidad SEO de sustituir este diseño o de añadir hidratación JavaScript. La experiencia móvil real requiere la revisión visual del informe principal.

## Datos estructurados

| Ruta | Tipos detectados |
| --- | --- |
| Portada | Organization, WebSite, WebPage |
| Quiénes somos | Organization, WebSite, AboutPage, Person (Carles), Person (Laura), BreadcrumbList |
| Evento | Organization, WebSite, WebPage, BreadcrumbList |

Los bloques JSON-LD se parsean sin error; contextos HTTPS, IDs absolutos y referencias Organization → WebSite → WebPage consistentes. Organization mantiene el nombre, dominio, área Barcelona, redes y `contacto@barcelonaperfumeclub.com`. Los perfiles personales de Carles están separados de las redes del club. Las migas describen las rutas existentes.

No se propone añadir schema solo por aumentar su cantidad. Se conserva la decisión de posponer `Event` para rich results mientras la admisión depende de registro y plaza confirmada; no se cambia esa condición por SEO. Tampoco se declara `LocalBusiness`, una sede permanente en el restaurante, valoraciones inventadas o FAQ enriquecidas.

## Agentes y buscadores de IA

El HTML estático y semántico, los enlaces normales, el texto visible y las etiquetas de navegación permiten leer el club sin ejecutar una aplicación de cliente. `robots.txt` no establece restricciones específicas: el grupo universal permite el rastreo, sin distinción entre entrenamiento, búsqueda o agentes solicitados por usuarios. Eso describe el archivo servido, no garantiza el comportamiento de terceros.

Lighthouse Agentic Browsing: **no medido**. Agent-UX: **no puntuado**. No se han ejecutado una matriz de user-agents, APIs de pago ni pruebas de citación externa. `llms.txt`, Markdown alternativo, WebMCP y otros documentos de descubrimiento no se han comprobado aquí; no deben contabilizarse como defectos ni prometer efectos de ranking.

## Prioridades reales

1. **Media — Verificar indexación de las dos páginas interiores en Search Console.** El export de rendimiento solo lista la portada; eso no demuestra que las interiores estén excluidas. Dependencia: inspección de URL en la propiedad del usuario. Se descarta esta hipótesis si ambas constan indexadas con canonical elegido correcto. Indicador: estado individual de cada URL, no una búsqueda `site:` ni una nota técnica.
2. **Media — Completar medición actual de rendimiento.** HTML e imágenes tienen buenas bases, pero no se ha medido CWV de campo. Consultar el informe de Search Console o CrUX si hay muestra suficiente; usar laboratorio como diagnóstico cuando no haya campo. Indicador: disponibilidad de muestra y LCP/INP/CLS por separado, sin presentar una nota Lighthouse como ranking.
3. **Baja — Mantener los controles existentes al añadir encuentros.** `src/seo.ts` y `scripts/prerender.mjs` generan rutas, metadatos y sitemap desde datos comunes. Ejecutar los controles del proyecto cuando cambie la web; confirmar que cada nueva URL es 200, autocanónica y enlazada desde portada. No crear páginas para cada orden de palabras clave.

No hay hallazgos críticos ni altos acreditados en este alcance. No se propone tocar el H1 aprobado ni acumular variantes de palabras clave. No hay evidencia que permita atribuir el bajo volumen de impresiones a un fallo de React, robots, canonical o sitemap.

## Archivos de evidencia

En `build/seo-2026-11-06/http/`: HTML y cabeceras de las tres páginas, `robots.txt`, `sitemap.xml`, `extracted.json`, cabeceras de redirecciones y 404. El JSON conserva títulos, metadatos, imágenes y entidades extraídos. Carpeta ignorada por Git; no se suben datos privados ni se publica esta auditoría por este paso.

Fuentes de código: `src/seo.ts:7`, `src/seo.ts:16`, `src/seo.ts:27`, `src/seo.ts:60`, `scripts/prerender.mjs:24`, `scripts/prerender.mjs:43`, `public/robots.txt`, `public/404.html`, `src/App.tsx`, `src/EventPage.tsx`, `src/AboutPage.tsx`.
