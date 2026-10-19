# Validación de la landing de lanzamiento

Fecha: 19 de octubre de 2026.

## Alcance actual

Landing estática sobre #640817, sin fotografías, con logo y menú de mayor tamaño fijos arriba, contenido central desplazable y un footer dedicado a Instagram y TikTok fijo abajo. Titular: «El perfume se disfruta más en compañía». Incluye objetivo del club, aviso de preparación y calendario próximo, enlace a Luma y contacto por email para consultas o propuestas de colaboración. Eventos no lleva flechas decorativas.

La web anterior se conserva en `src/ClubSite.tsx` y no se carga en la landing. El estado de validación de aquella propuesta se conserva en `VALIDATION-2026-10-18.md`.

## Resultados

- Compilación TypeScript y Vite: correcta, `npm run build`.
- Playwright: 6 pruebas aprobadas en Brave, 3 en escritorio a 1440 px y 3 en móvil a 375 px. Las pruebas de scroll central y texto de contacto fallaron primero contra la landing anterior y pasaron tras implementar los cambios.
- Axe: sin infracciones WCAG A/AA detectadas en ambas resoluciones. La auditoría automática no sustituye una revisión exhaustiva de accesibilidad.
- Producción servida en localhost: respuesta HTTP 200.
- Consola de producción: sin errores JavaScript en ambas resoluciones.
- Sin animaciones activas ni fotografías en el contenido central.
- Comprobados 320×568, 375×812, 768×1024, 1024×768, 1440×1000 y 812×375: sin scroll de página, sin desbordamiento horizontal ni solapamiento entre cabecera, contenido y footer.
- Scroll central comprobado con rueda, teclado y gesto táctil. El menú El club navega a la sección visible y el logo permite volver al inicio del contenido.
- Logo cargado correctamente y fondo con el color esperado.
- Navegación «El club», URL exacta de Luma, enlaces mailto y enlaces sociales comprobados.
- Capturas de producción: `previews/landing-mobile.png`, `previews/landing-desktop.png` y las variantes `-contacto.png` con el centro desplazado hasta el contacto.

Lighthouse móvil se ejecutó contra la compilación de producción en localhost con Brave. El informe está en `previews/lighthouse-mobile.json`. Los valores de laboratorio pueden variar al publicar.

Lighthouse móvil, informe final:

- Performance: 98/100.
- Accessibility: 100/100.
- Best Practices: 100/100.
- SEO: 100/100.

## Publicación

El usuario ha aprobado esta versión y autorizado la publicación. El repositorio usa GitHub Pages y el dominio configurado es `https://barcelonaperfumeclub.com/`. La rama local y remota se comprobaron sincronizadas antes de preparar la publicación.

Los datos del titular para el aviso legal continúan pendientes. El texto de copyright se ha explicado como opcional y no se ha añadido automáticamente. Las ideas inspiradas en All Yours no se han aplicado al diseño aprobado.
