# Validación de la landing de lanzamiento

Fecha: 19 de octubre de 2026.

## Alcance actual

Landing estática con el logo original sobre #640817, objetivo del club, aviso de preparación y calendario próximo. Encuentros enlaza al perfil de Luma indicado por Carles. Contacto abre `barcelonaperfumeclub@proton.me`.

La web anterior se conserva en `src/ClubSite.tsx` y no se carga en la landing. El estado de validación de aquella propuesta se conserva en `VALIDATION-2026-10-18.md`.

## Resultados

- Compilación TypeScript y Vite: correcta, `npm run build`.
- Playwright: 4 pruebas aprobadas en Brave, 2 en escritorio a 1440 px y 2 en móvil a 375 px. La suite se ejecutó primero contra la propuesta anterior y falló por el contenido y la estructura esperados; después pasó con la landing.
- Axe: sin infracciones WCAG A/AA detectadas en ambas resoluciones. La auditoría automática no sustituye una revisión exhaustiva de accesibilidad.
- Producción servida en localhost: respuesta HTTP 200.
- Consola de producción: sin errores JavaScript en ambas resoluciones.
- Sin animaciones activas y sin desbordamiento horizontal.
- Logo cargado correctamente y fondo con el color esperado.
- Navegación «El club», URL exacta de Luma y enlaces mailto comprobados.
- Capturas de producción inspeccionadas visualmente: `previews/landing-mobile.png` y `previews/landing-desktop.png`.

Lighthouse móvil se ejecutó contra la compilación de producción en localhost con Brave. El informe está en `previews/lighthouse-mobile.json`. Los valores de laboratorio pueden variar al publicar.

Lighthouse móvil, informe final:

- Performance: 99/100.
- Accessibility: 100/100.
- Best Practices: 100/100.
- SEO: 100/100.

## Pendiente de publicación

- Dominio y metadatos con URLs absolutas reales.
- Datos del titular y aviso legal.
- Revisión final de Carles.

No se ha publicado la web ni se ha comprobado la disponibilidad del dominio.
