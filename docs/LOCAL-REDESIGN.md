# Revisión del rediseño

Estado actual: portada sin imágenes y a todo el ancho bajo el menú, con texto de ancho limitado, cabecera y redes fijas. La prueba de fotografía de stock se ha descartado.

23 de octubre de 2026. Revisión realizada en `design/local-preview`. Carles ha aprobado la versión final sin fotografías, con portada compacta, y ha autorizado su publicación en producción.

## Decisiones de diseño

Portada editorial y tipográfica, objetivo del club más visible, tres pilares en filas y una invitación al primer evento enlazada al calendario real de Luma. Cabecera y redes fijas, con scroll exclusivo del contenido central. La fotografía de stock de ambiente probada se ha descartado; su registro histórico está en `PHOTO-CREDITS.md`. Sin fechas inventadas, cifras de asistentes, asteriscos, puntos decorativos ni formularios sin conexión.

Tras la revisión de Carles, se retira el rosa de la primera propuesta y se unifica toda la página en burdeos #640817 y marfil #F3EEE0. El logo conserva sus letras originales y utiliza una máscara SVG para separar el fondo opaco y aplicar el mismo marfil. No es una reconstrucción tipográfica ni un nuevo logo dibujado.

El movimiento se limita a respuestas breves de los controles. La escena permanece quieta en reposo y respeta movimiento reducido. No se ha considerado necesaria una pieza de motion graphics para esta landing.

## Verificación

- TypeScript, compilación de cliente y prerender: correctos.
- Seis pruebas Playwright aprobadas, con fuentes reales cargadas en móvil y escritorio. La comprobación de transparencia falló primero con alfa 255 en el logo anterior y pasó después con alfa 0 en las cuatro esquinas.
- Ocho tamaños revisados entre 320 y 1920 px, incluida orientación horizontal. Sin desbordamiento; titular de dos líneas desde tablet y tres en móviles comprobados.
- El contenido está disponible en el HTML inicial y funciona sin JavaScript.
- Auditoría de jury: 0 FAIL, 0 WARN. Metadatos, robots, sitemap y recursos comprobados individualmente; las rutas inexistentes responden 404.
- Axe en inicio, club, eventos y contacto: 0 infracciones. Las tres revisiones manuales de contraste corresponden al subrayado del menú, no a un degradado de fondo detrás del texto. Se comprueba por separado marfil sobre burdeos, por encima de 4,5:1.
- El contenedor central se ha desplazado efectivamente durante la prueba, con `window.scrollY` igual a 0. La medición local fue de 61 fps en navegador headless; no representa todos los dispositivos reales.
- La captura móvil con CPU ×4 y slow 4G registró LCP 560 ms y CLS 0,007. Son datos de laboratorio locales.
- La vista previa no incorpora el script de Umami. Una compilación separada con el ID real conserva exactamente un tracker y los siete eventos tras el prerender.

## Revisión independiente de la versión tipográfica, anterior a añadir fotografía

Se han aplicado las skills [jury y awwwards](https://github.com/juliobsz/skills), fijadas al commit `ea8f1455c2b0e71469d4ecfd32f47862b834d2d0`. Las críticas se realizaron sin acceso al código, al concepto ni a notas anteriores, desde capturas y mediciones.

| Versión | Diseño | Usabilidad | Creatividad | Contenido | Ponderada |
| --- | --- | --- | --- | --- | --- |
| Publicada de partida | 7 | 6 | 6 | 7 | 6,50 |
| Primera propuesta local | 7 | 7 | 6,5 | 7 | 6,90 |
| Propuesta corregida | 7,2 | 7,5 | 6,2 | 6,8 | 7,05 |

Son estimaciones independientes, sin afiliación ni certificación de Awwwards. No se ha aplicado una corrección para aproximar notas de jurados oficiales. La propuesta no alcanza el objetivo orientativo de 8 en todas las categorías de la skill; las decisiones de Carles tienen prioridad sobre añadir efectos o inventar contenido para subir la nota.

La mejora de contenido más útil llegará al confirmar el primer evento: fecha, lugar, anfitrión y una propuesta concreta. No se simulan esos datos. La herramienta de capturas genérica desplaza la ventana; se han añadido capturas y verificaciones específicas del scroll interior para no confundir esa limitación con un fallo de la web.

Los informes originales, capturas y mediciones están en `build/review-before` del proyecto principal y en `build/jury-pass-1`, `build/jury-pass-2`, `build/scorecard-final.md` y `build/verification-final.json` de esta copia local.

## Actualización con fotografía de stock

Carles autoriza probar stock al considerar plana la propuesta tipográfica. Se añade una imagen de esencias y frascos de Fulvio Ciccolo, gratuita bajo Unsplash License y acreditada en la página. No es una fotografía de un evento del club. La interfaz mantiene burdeos y marfil y el logo transparente. Los archivos se sirven localmente en WebP a 480, 960 y 1440 px; las capturas y la comprobación de ocho tamaños están en `build/stock-preview`. Las seis pruebas vuelven a pasar incluyendo la carga local de la imagen y el logo transparente. Las puntuaciones independientes anteriores no se atribuyen a esta variante con fotografía.

Lighthouse de la variante con foto, ejecutado sobre producción local: rendimiento 87/100, accesibilidad 100/100, buenas prácticas 100/100 y SEO 100/100. LCP 3.5 s, CLS 0.002. Informe completo en `build/stock-preview/lighthouse.json`. Son mediciones de laboratorio y no garantizan los mismos valores en todos los dispositivos.

Tras optimizar la entrega estática, la medición final con fotografía obtiene rendimiento 98/100, accesibilidad 100/100, buenas prácticas 100/100 y SEO 100/100. LCP 2.3 s, CLS 0.002. El informe anterior (87 de rendimiento) se conserva como medición previa a retirar el bundle de interfaz. Las seis pruebas también pasan directamente contra la compilación estática. Umami se ha comprobado en una compilación separada: un tracker y siete eventos. Informe final: `build/stock-preview/lighthouse-final.json`.

## Confirmación final de la portada

Carles confirma «sin imágenes». La portada ocupa todo el ancho del área central y, como mínimo, su altura visible. Se conserva el burdeos y el logo transparente, sin alterar los enlaces de Luma, contacto y redes. El bloque El club comienza tras la portada al desplazar el contenido central. La versión publicada permanece intacta.

Validación de esta versión sin imágenes: compilación correcta y seis pruebas de Playwright aprobadas sobre el HTML de producción servido en local. Revisados ocho tamaños, de 320 × 568 a 1920 × 1080, incluido móvil horizontal: sin desbordamiento lateral ni solapamiento de cabecera o redes; portada a todo el ancho; titular en dos líneas en tablet y escritorio y tres en móvil. Capturas actuales y medidas en `build/no-image-preview/`.


Último ajuste: portada de altura natural, sin mínimo de una pantalla ni centrado vertical. El contenido empieza a 48 px del menú en escritorio y 28 px en móvil; El club continúa justo después del margen inferior. Medidas y capturas de este ajuste en `build/compact-preview/`.
