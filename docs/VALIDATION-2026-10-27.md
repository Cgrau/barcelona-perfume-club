# Primer evento — revisión local del 27 de octubre de 2026

- `npm run build`: correcto, con HTML prerenderizado y cartel local en WebP.
- `npm run seo:check`: correcto; metadatos, canonical, datos de la organización, robots, sitemap e imagen social conservados.
- `BROWSER_PATH='/Applications/Brave Browser.app/Contents/MacOS/Brave Browser' npm test`: 6 pruebas correctas contra la versión compilada servida por `vite preview` en el puerto 5173. Incluye móvil y escritorio, ancla del listado, datos y cartel del evento, enlace a su página de Luma, scroll, logo y accesibilidad con axe.
- Revisión adicional con JavaScript desactivado: portada, listado y enlaces visibles; sin desbordamiento horizontal del documento ni del contenido central en 320, 375, 768, 1000 y 1440 px.
- Capturas revisadas: [escritorio](previews/first-event-desktop.png), [cartel en móvil](previews/first-event-mobile.png), [detalles en móvil](previews/first-event-mobile-details.png), [portada en escritorio](previews/first-event-desktop-home.png) y [portada en móvil](previews/first-event-mobile-home.png).
- Revisión independiente del cambio de código: sin bloqueos detectados.

Datos del encuentro contrastados con su [página pública de Luma](https://luma.com/tdhs6lr0). No se ha realizado una inscripción ni se han modificado datos en Luma. Los eventos se mantienen en `src/content.ts`; no existe sincronización automática con el calendario.

Validación realizada sobre la vista previa local, antes de publicar. Carles aprueba el resultado el 27 de octubre de 2026. No se ha ejecutado un nuevo análisis de Lighthouse.
