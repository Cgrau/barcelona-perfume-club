# Estado de validación

Fecha: 18 de octubre de 2026.

## Comprobado

- Lectura del brief y referencia; solo se utiliza la arquitectura de la referencia.
- Logo original y tres fotos reales de `photos/` incorporados.
- HEIC decodificados con FFmpeg. WebP a 480, 960 y 1600 px, sin metadatos de las fotos originales.
- Inspección visual de las tres fotos y del logo.
- Renderizado HTML de React en servidor completado. Comprobadas las rutas de imágenes, textos alternativos y las dimensiones físicas de cada variante `srcset` en ese HTML. No aparecieron enlaces externos inventados.
- Revisión independiente de código. Corregido el uso de `disabled` que podía quitar el foco de las flechas durante el giro; añadido caso de navegador para comprobarlo cuando se puedan instalar las dependencias.
- Procesado de React, TSX y CSS con esbuild disponible en caché. Este chequeo deja GSAP, Lenis y fuentes externos: no equivale a una compilación de producción.

## Limitaciones de esta sesión

- `npm install` falla con `ENOTFOUND registry.npmjs.org` en el entorno restringido.
- `npm install --offline` confirma que faltan dependencias en la caché, empezando por `@axe-core/playwright`.
- Se pudo preparar un entorno temporal de comprobación con React, TypeScript, esbuild y playwright-core de la caché. No se modificó el stack solicitado para sustituir las dependencias ausentes.
- El intento de arrancar Brave mediante Playwright termina con SIGABRT y restricciones EPERM del sandbox. No hay capturas ni auditoría de navegador válida.
- No se ha ejecutado una compilación completa Vite, la suite Playwright ni Lighthouse. No se afirman resultados de estas comprobaciones.
- Los intentos de `npm run build` y `npm test` se detienen porque `tsc` y `playwright` no están instalados en el proyecto.

## Pendiente antes de aceptar/publicar

- [ ] Instalar dependencias y generar `package-lock.json`.
- [ ] `npm run build` sin errores.
- [ ] `npm test`: menú, Escape y foco, enlaces pendientes, slider circular y swipe, movimiento reducido, ausencia de desbordamiento y axe en 375 y 1440 px.
- [ ] Revisar el giro de las tarjetas con movimiento normal y sin animación con movimiento reducido.
- [ ] Verificar las animaciones de scroll y que el manifiesto termina totalmente legible.
- [ ] Capturas 375 y 1440 px para Carles.
- [ ] Lighthouse móvil sobre producción: objetivo 90 o más.
- [ ] Incorporar URL de Luma, perfil de Instagram, email y datos del titular.
- [ ] Seleccionar dominio y completar metadatos con URLs absolutas.
- [ ] Revisión visual y aprobación de publicación por Carles.
