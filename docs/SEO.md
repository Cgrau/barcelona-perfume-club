# SEO y Search Console

La landing conserva el diseño aprobado. El título y las descripciones explican la comunidad, la perfumería y las actividades que se están preparando en Barcelona. El contenido principal se incorpora al HTML durante la compilación y el sitio ya incluye canonical, robots, sitemap y datos estructurados Organization.

## Auditorías automáticas

[SEO y calidad web en GitHub](https://github.com/Cgrau/barcelona-perfume-club/actions/workflows/seo.yml) ejecuta Lighthouse CI en cada pull request, al subir cambios a main, los lunes y bajo demanda. Audita la portada compilada, con tres mediciones por dispositivo, en móvil y escritorio. Excluye la página 404 y bloquea Umami durante las pruebas para no registrar visitas artificiales.

- SEO y accesibilidad: se exige 100/100 en sus comprobaciones automáticas.
- Rendimiento: aviso por debajo de 90/100.
- Buenas prácticas: aviso por debajo de 95/100.
- HTML y JSON de los informes: artefactos `lighthouse-mobile` y `lighthouse-desktop`, conservados 30 días dentro de GitHub. No se utiliza el almacenamiento público temporal de Lighthouse CI.

Los fallos aparecen en los checks de GitHub; no se han cambiado las reglas de protección de ramas. La publicación incorpora además `seo:check`: impide publicar si faltan metadatos, etiqueta de Google, canonical, contenido inicial, JSON-LD, robots o sitemap. Las auditorías completas de Lighthouse se ejecutan por separado del despliegue.

Para ejecutar las mismas comprobaciones en local:

```sh
npm ci
npm run build
npm run seo:audit
```

En macOS con Brave:

```sh
CHROME_PATH='/Applications/Brave Browser.app/Contents/MacOS/Brave Browser' npm run seo:audit
LHCI_FORM_FACTOR=desktop CHROME_PATH='/Applications/Brave Browser.app/Contents/MacOS/Brave Browser' npm run seo:audit
```

Los informes locales se guardan en `build/lighthouse/mobile` o `build/lighthouse/desktop`. Las pruebas usan herramientas de desarrollo; ningún código de Lighthouse se envía a las personas que visitan la web.

## Estado de Search Console

Carles ha facilitado la etiqueta HTML de Google, incluida en `index.html` y conservada en cada publicación. Es una etiqueta pública de verificación, no un código de Analytics. No debe retirarse después de verificar.

1. En [Search Console](https://search.google.com/search-console), abrir la propiedad de prefijo de URL `https://barcelonaperfumeclub.com/` y pulsar **Verificar** con el método **Etiqueta HTML**, una vez publicada esta versión.
2. En **Sitemaps**, enviar `sitemap.xml`. La URL completa es `https://barcelonaperfumeclub.com/sitemap.xml`.
3. En **Inspección de URLs**, introducir `https://barcelonaperfumeclub.com/`, comprobar la URL publicada y solicitar indexación si procede.

Completado el 23 de octubre de 2026 desde Brave, con autorización de Carles: Google confirma la propiedad mediante la etiqueta HTML; `/sitemap.xml` figura con estado **Success** y una página descubierta; la inspección de la portada muestra **URL is on Google** y **Page is indexed**. No fue necesario solicitar su indexación. Las instrucciones anteriores se conservan como referencia para futuras comprobaciones.

La indexación no demuestra una posición concreta ni que Google ya haya actualizado el título y la descripción.

Referencias: [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci), [verificación de propiedad](https://support.google.com/webmasters/answer/9008080?hl=es), [envío de sitemaps](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap).

## Validación de la configuración

23 de octubre de 2026: compilación correcta, control de HTML aprobado y seis pruebas Playwright aprobadas sobre la compilación estática. Una copia del HTML sin título hace fallar el control; al restaurarlo vuelve a pasar. Lighthouse CI obtiene 100/100 en las cuatro categorías en móvil y escritorio, con tres ejecuciones locales por dispositivo. La revisión independiente detectó y permitió corregir el perfil de escritorio con el preset oficial. Son medidas de laboratorio, no una garantía de posicionamiento.

## Objetivo de posicionamiento local

Carles quiere que una persona situada en Barcelona encuentre primero al club al buscar «perfume club». No se ha acreditado esa posición y no se garantiza: los resultados dependen de la consulta, ubicación, contexto y competencia. Los checks de Lighthouse evalúan la base técnica; no miden posiciones.

Consultas de referencia: «Barcelona Perfume Club», «perfume club Barcelona», «club de perfumería Barcelona» y «perfume club» desde Barcelona. La prioridad son personas interesadas en una comunidad y sus eventos.

La introducción identifica el nombre completo y la comunidad en texto visible; El club describe explícitamente un club de perfumería en Barcelona. Los datos Organization mantienen una identidad propia, enlaces sociales propios y ámbito de actividad Barcelona. Se conserva el titular y el diseño aprobados; no se inventa una dirección física ni se crean páginas de eventos sin datos reales.

Carles confirma que el grupo homónimo de Meetup vinculado a Smell Lab BCN pertenece a otro proyecto. No se relaciona con nuestra identidad mediante sameAs ni se atribuyen al club sus actividades, reseñas o trayectoria. Fuentes de la investigación: https://www.smell-lab.org/perfume-club y https://www.meetup.com/es-es/barcelona-perfume-club/. Son resultados de una investigación general, no una medición certificada de Google desde Barcelona.

Trabajo posterior: mantener nombre y web coherentes en nuestros perfiles, conseguir menciones y enlaces legítimos de colaboradores, publicar eventos con fecha y lugar cuando estén confirmados y revisar consultas, impresiones, clics y posición media en Search Console. Search Console permite observar el país, pero no ofrece un filtro de ciudad para acreditar una primera posición en Barcelona. No se han editado perfiles externos ni contratado anuncios.

## Contenido del club y fotografías de eventos

Carles confirma que, después del primer evento, se publicarán fotografías propias en la web. La publicación irá acompañada de información real del evento: fecha, lugar y una breve crónica. No se han añadido fotografías de stock ni una galería vacía; no hay todavía imágenes de eventos facilitadas en esta sesión.

Mientras se prepara el lanzamiento, El club incorpora cuatro preguntas frecuentes sobre la comunidad, la experiencia necesaria, las actividades previstas y cómo enterarse del primer evento. Las respuestas son HTML nativo presente en la compilación y se despliegan sin JavaScript. No se prometen fechas, precios, membresías ni formatos que aún no se hayan confirmado.

Se mantiene el plan de SEO orgánico con las herramientas existentes. No se ha creado ni activado ninguna campaña SEM ni contratado servicios adicionales.

Validación de este bloque: compilación y control SEO correctos; seis pruebas Playwright aprobadas; cuatro respuestas presentes en el HTML compilado, apertura y cierre por teclado comprobados en móvil y escritorio, sin desbordamiento horizontal ni infracciones axe con las respuestas desplegadas.
