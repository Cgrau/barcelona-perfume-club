# SEO y Search Console

Estado de implementación, 29 de octubre de 2026: publicadas la ficha del primer evento y Quiénes somos, con identidad coherente y repositorio diferenciado como código fuente. Carles recalca que la web debe ganar visibilidad tanto por «Barcelona perfume club» como por «perfume club Barcelona» y «perfume club» desde Barcelona. Se ajustan los metadatos de portada y una respuesta existente de preguntas frecuentes para expresar el carácter de club local con naturalidad. No se realizará captación de enlaces de colaboradores; la crónica y el seguimiento periódico se dejan para después del evento. No hay una primera posición acreditada.

La web conserva el diseño aprobado. Portada y ficha tienen HTML prerenderizado, canonical y metadatos propios y datos Organization, WebSite y WebPage coherentes. El nombre, dominio y enlaces oficiales se definen en `club` de `src/content.ts`; los metadatos, en `src/seo.ts`.

## Consultas objetivo de la portada

| Consulta | Intención | URL principal |
| --- | --- | --- |
| Barcelona perfume club | Encontrar el club por su nombre | `/` |
| Perfume club Barcelona | Encontrar una comunidad de perfumería en la ciudad | `/` |
| Perfume club, con ubicación en Barcelona | Descubrir un club local afín a esa búsqueda | `/` |

Se conserva el nombre oficial y se usa el título «Barcelona Perfume Club | Club de perfumería en Barcelona» y una descripción que comienza «Un perfume club en Barcelona». La primera respuesta de preguntas frecuentes explica esa actividad. Se conservan el titular visible aprobado, el anuncio y el acceso a Luma. Organization ya declara Barcelona como `areaServed`; el lugar de cada evento sigue perteneciendo a su ficha, sin atribuir al club una sede permanente.

Las tres consultas comparten una portada. Google puede relacionar variaciones aunque no se incluyan todas sus formas exactas; el contenido se mantiene natural, sin listas de palabras clave ni páginas duplicadas. [Guía oficial de Google](https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=es).

La búsqueda genérica depende de factores como ubicación, idioma y dispositivo. Esta mejora busca relevancia local; no garantiza puestos ni aporta una medición de las tres consultas. Los seis registros de impresión y la posición media agregada de 4,7 vistos en Search Console no se asignan a esas consultas ni al efecto de esta actualización.

## Página del primer encuentro

La ruta `/eventos/descubriendo-perfumes-nicho/` se genera como directorio con `index.html`, accesible directamente sin JavaScript. El título del evento en portada enlaza a la ficha y su navegación devuelve al club o al listado. Incluye cartel, fecha, horario 12:00–13:30, lugar, descripción, organización, acceso a Luma y aviso destacado de registro y plaza confirmada. El sitemap se genera desde las rutas, sin una segunda lista manual en `public/`.

Luma confirma el 29 de octubre los datos del encuentro y el calendario «Barcelona Perfume Club», con nuestra web y los handles oficiales. La inscripción figura como lista de espera. No se muestran disponibilidad ni cifras estáticas; se remite a Luma para solicitar plaza. No se han modificado perfiles externos.

La ficha incorpora WebPage y BreadcrumbList. Se pospone Event orientado a resultados enriquecidos: Google exige que se pueda reservar para el público general y excluye eventos con invitación previa. No se altera la condición de acceso mediante confirmación para optar a esa presentación. La página puede indexarse como contenido normal; no se promete indexación ni posición. [Requisitos de Google](https://developers.google.com/search/docs/appearance/structured-data/event).

Las secciones siguientes conservan el historial de auditorías y actuaciones. Sus estados de lanzamiento y textos de botones son históricos cuando difieren de lo descrito arriba.

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

## Aviso del primer evento y tarjeta social

El botón principal «Avísame del primer evento» abre el calendario real en Luma, con el texto de apoyo «Sigue nuestro calendario en Luma para recibir las novedades». La persona debe seguir el calendario en Luma; el clic por sí solo no confirma una suscripción y se sigue midiendo como `luma-hero`.

La nueva imagen social, `share-card-v1.png`, mide 1200 × 630 px y contiene el logo, el lema y el dominio del club. Open Graph y Twitter especifican la misma imagen y su texto alternativo. No se añade una presentación personal ni metadatos de autor. El repositorio y el hosting existentes se mantienen.

La tarjeta está disponible como archivo estático para los servicios que generan vistas previas. Cada plataforma decide el recorte y puede conservar una versión anterior en caché hasta que vuelva a consultar el enlace.
