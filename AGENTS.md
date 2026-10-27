# Barcelona Perfume Club

## Memoria compartida

Antes de trabajar, lee `memory/Inicio.md`, `memory/Estado.md` y la nota más reciente de `memory/sesiones/`. Consulta después las notas relevantes. Esta memoria recoge decisiones del usuario y permite continuar desde otra máquina; no es una transcripción completa del chat.

- Respeta las decisiones de `memory/Decisiones.md`, especialmente el acceso con registro y plaza confirmada en Luma.
- Mantén separadas las decisiones aprobadas, el estado comprobado y las ideas pendientes. No conviertas propuestas en requisitos.
- Actualiza `memory/Estado.md` y añade o actualiza la nota de sesión cuando cambien decisiones, programación o publicación. Conserva la fecha y las referencias verificables.
- No guardes credenciales, variables de entorno privadas ni datos de asistentes.
- Las notas usan `[[wikilinks]]` para Obsidian. `graphify-out/` conserva el grafo derivado; las notas originales y el código son las fuentes de verdad. Si se contradicen, actualiza el grafo.

## Web

- Web activa: `src/App.tsx` y `src/landing.css`. `src/ClubSite.tsx` es una propuesta archivada.
- Datos de eventos y enlaces: `src/content.ts`. Los eventos se añaden manualmente; no existe sincronización automática con Luma.
- Conserva React, Vite, TypeScript, HTML prerenderizado, fuentes locales, burdeos y marfil, y el scroll del contenido central.
- Verifica con `npm run build`, `npm run seo:check` y `npm test`. En este Mac puede usarse `BROWSER_PATH='/Applications/Brave Browser.app/Contents/MacOS/Brave Browser' npm test`.
- Termina la compilación antes de probar una vista previa de `dist/`; regenerar el HTML mientras se prueba puede servir una página incompleta.
- GitHub Pages publica al subir a `main`. Publica cuando el usuario lo solicite o lo haya autorizado; no pidas de nuevo una autorización vigente. Comprueba el workflow y el dominio público antes de dar la publicación por terminada.
