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

## Completar Search Console

Carles ha facilitado la etiqueta HTML de Google, incluida en `index.html` y conservada en cada publicación. Es una etiqueta pública de verificación, no un código de Analytics. No debe retirarse después de verificar.

1. En [Search Console](https://search.google.com/search-console), abrir la propiedad de prefijo de URL `https://barcelonaperfumeclub.com/` y pulsar **Verificar** con el método **Etiqueta HTML**, una vez publicada esta versión.
2. En **Sitemaps**, enviar `sitemap.xml`. La URL completa es `https://barcelonaperfumeclub.com/sitemap.xml`.
3. En **Inspección de URLs**, introducir `https://barcelonaperfumeclub.com/`, comprobar la URL publicada y solicitar indexación si procede.

La confirmación de propiedad y el envío del sitemap deben completarse desde la cuenta de Google de Carles. No se han ejecutado esas acciones desde esta sesión. La etiqueta publicada y una auditoría correcta no garantizan indexación ni posiciones concretas.

Referencias: [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci), [verificación de propiedad](https://support.google.com/webmasters/answer/9008080?hl=es), [envío de sitemaps](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap).

## Validación de la configuración

23 de octubre de 2026: compilación correcta, control de HTML aprobado y seis pruebas Playwright aprobadas sobre la compilación estática. Una copia del HTML sin título hace fallar el control; al restaurarlo vuelve a pasar. Lighthouse CI obtiene 100/100 en las cuatro categorías en móvil y escritorio, con tres ejecuciones locales por dispositivo. La revisión independiente detectó y permitió corregir el perfil de escritorio con el preset oficial. Son medidas de laboratorio, no una garantía de posicionamiento.
