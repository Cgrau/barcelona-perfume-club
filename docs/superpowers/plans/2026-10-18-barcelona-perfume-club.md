# Barcelona Perfume Club: plan de implementación

**Objetivo:** ejecutar el brief aportado por Carles en esta carpeta y entregar una versión local revisable.
**Arquitectura:** una página React con componentes para navegación, soporte multimedia, slider y modal. Configuración de recursos y enlaces en un único archivo. Animaciones en un hook con limpieza al desmontar.
**Stack:** Vite, React, TypeScript, CSS, GSAP ScrollTrigger y Lenis.
**Spec:** [Brief original](../specs/2026-10-18-barcelona-perfume-club.md).
**Ejecución:** directa en la carpeta nueva indicada por el usuario. Sin publicación hasta revisión.

## Restricciones globales

- Textos exactos del brief, español, sin guion largo.
- Colores #640817, #2A0309, #F3EEE0, #B9A7A2 y #FFFFFF.
- Sin imágenes de IA, sin recursos copiados de la referencia ni datos inventados.
- Fotos y logo pendientes: geometría original y marcadores visibles.
- Fuentes Google Fonts alojadas localmente, sin analítica ni cookies.
- Sin fechas de eventos. Los eventos viven en Luma.

## Revisión prioritaria

- Menú y modal: Escape, foco contenido y devolución de foco.
- Slider: avance circular, teclado, swipe y desplazamiento vertical.
- Movimiento reducido: contenido visible sin animación y vídeo sustituido por póster.
- Datos pendientes: avisos visibles en lugar de enlaces inventados.
- 375 px: sin desbordamiento horizontal y controles legibles.

## Tareas

- [ ] 1. Crear configuración Vite y pruebas de navegador para los cinco comportamientos anteriores. Ejecutar sobre página vacía y comprobar fallo.
- [x] 2. Crear `src/content.ts`, `components/Modal.tsx`, `Header.tsx`, `Media.tsx` y `App.tsx`. El modal usa dialog nativo para contener el foco.
- [x] 3. Crear `components/ClubSlider.tsx` con giro CSS, controles, teclado y swipe. La tercera tarjeta solo anuncia MUY PRONTO.
- [x] 4. Crear `hooks/useMotion.ts`, CSS responsive y fuentes locales. Animar mouillette, enfoque multimedia y palabras; respetar movimiento reducido.
- [ ] 5. Ejecutar `npm run build` y `npm test`. Revisar capturas 375 px y 1440 px; medir Lighthouse móvil sobre compilación de producción.
- [x] 6. Documentar arranque, incorporación de recursos, datos pendientes y resultados reales. Entregar versión local sin publicar.

## Registro de ejecución

- Tarea 1: configuración y pruebas escritas; ejecución bloqueada por dependencias ausentes y red no disponible. No se pudo completar el ciclo de pruebas.
- Tarea 5: esbuild procesa TSX/CSS y React renderiza HTML en servidor mediante dependencias de caché en un directorio temporal. No equivale a build Vite ni prueba de navegador. El navegador aborta dentro del sandbox. Ver `docs/VALIDATION.md`.
- Recursos reales incorporados desde `photos/`, sin modificar los originales.
- Revisión independiente: corregida pérdida de foco durante transiciones del slider. Las pruebas de navegador siguen pendientes.
