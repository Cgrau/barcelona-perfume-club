# Código fuente de Barcelona Perfume Club

**Web oficial: [barcelonaperfumeclub.com](https://barcelonaperfumeclub.com/)**

Este repositorio contiene el código fuente y la documentación técnica de la web. Para conocer el club, consultar los próximos eventos y acceder a las inscripciones, visita la [web oficial de Barcelona Perfume Club](https://barcelonaperfumeclub.com/).

La memoria compartida del proyecto está en [memory/Inicio.md](memory/Inicio.md). Abre `memory/` como bóveda en Obsidian para consultar las decisiones, sesiones y relaciones entre notas. `AGENTS.md` indica a futuros asistentes qué leer al retomar; [Graphify](memory/Graphify.md) conserva el mapa derivado en `graphify-out/`. Las notas se versionan en este repositorio y quedan fuera de la web pública.

Aplicación React, Vite y TypeScript con HTML prerenderizado. GitHub Pages publica la web desde `main`. Las decisiones de diseño, contenido y acceso a eventos se conservan en la memoria y en [DESIGN.md](DESIGN.md).

## Abrir en local

La web incorpora [Quiénes somos](https://barcelonaperfumeclub.com/sobre-el-club/), con Carles y Laura, el propósito del club y las redes de Carles Grau Perfume. Carles solicita publicarla el 29 de octubre de 2026, tras revisarla en local; la autorización sustituye la restricción inicial de no subirla. Publicación comprobada en `4df3f11`; despliegue y dominio verificados. El resultado se registra en la memoria y la validación. El menú conserva Inicio, El club y Eventos en la home; «Quiénes somos» abre la presentación en una página aparte. La fotografía conjunta queda para más adelante. Validación en [ABOUT-LOCAL-2026-10-29.md](docs/ABOUT-LOCAL-2026-10-29.md).

La ficha del primer encuentro tiene URL propia: [/eventos/descubriendo-perfumes-nicho/](https://barcelonaperfumeclub.com/eventos/descubriendo-perfumes-nicho/). El título del evento en portada lleva a ella; los botones de inscripción siguen llevando directamente a Luma. La ficha conserva el registro y la plaza confirmada como condiciones de acceso.

Requiere Node.js 22.12 o posterior.

```sh
npm install
npm run dev
```

Para compilar y revisar la versión de producción:

```sh
npm run build
npm run preview
```

## Editar la landing

- `src/App.tsx`: estructura, anuncio del primer encuentro y listado de eventos.
- `src/landing.css`: fondo, tipografías locales y diseño responsive, sin animaciones.
- `src/content.ts`: lista `events`, objetivo del club y enlaces compartidos con la futura web.
- `src/EventPage.tsx` y `src/components/EventContent.tsx`: ficha del encuentro y descripción y aviso de acceso compartidos.
- `src/AboutPage.tsx`: historia, organizadores y objetivo del club; publicada tras su revisión local.
- `src/seo.ts`: metadatos por URL e identidad Organization y WebSite, a partir de `club` en `src/content.ts`.
- `public/media/descubriendo-perfumes-nicho-*.webp`: cartel proporcionado por Carles en dos tamaños, sin recortar.
- `public/media/logo-vector.svg`: contornos vectoriales trazados desde el logo original, con tinta marfil y fondo transparente, sin filtros ni imágenes incrustadas. `logo.webp` conserva la copia optimizada original. Detalles en [LOGO.md](docs/LOGO.md).
- `public/media/mouillettes-*.webp`: recursos conservados para la futura web completa. No se cargan en la landing actual.
- `index.html`: plantilla HTML y tarjeta social de marca; los metadatos se completan para cada página al compilar.
- `src/entry-server.tsx` y `scripts/prerender.mjs`: generan HTML y metadatos para portada, Quiénes somos y encuentros, sin JavaScript de cliente, y derivan `dist/sitemap.xml` de las rutas reales.
- `DESIGN.md`: criterio de diseño y decisiones de la revisión aprobada.

Enlaces incorporados:

- Eventos: https://luma.com/barcelonaperfumeclub
- Primer evento: https://luma.com/tdhs6lr0
- Contacto: mailto:barcelonaperfumeclub@proton.me

No hay formularios. La analítica opcional de Umami Cloud permanece desactivada mientras no se configure `UMAMI_WEBSITE_ID`: mide visitas y clics en los enlaces, sin añadir cookies desde la aplicación. La configuración y activación se explican en [UMAMI.md](docs/UMAMI.md). Las fuentes Playfair Display y Jost se sirven desde el propio sitio.

Para incorporar otro evento, añade su ficha a `events` en `src/content.ts`, con `path` terminado en `/`, edición, introducción y detalle propios, fecha y horario, URL de Luma e imágenes optimizadas en `public/media/`. Su página y entrada del sitemap se generan al compilar; no existe sincronización automática con Luma. Revisa también la portada: referencia la primera ficha y habla del primer evento. Los datos y la identidad del calendario se comprobaron de nuevo en Luma el 29 de octubre de 2026. Entonces el evento figuraba en lista de espera; la web remite allí para consultar disponibilidad y mantiene que solo una plaza confirmada permite el acceso.

## Web completa para más adelante

La propuesta anterior se conserva en `src/ClubSite.tsx`, con sus componentes, estilos y fotos. No se importa ni se muestra en la landing. Su apartado «El club» también incorpora el objetivo y lo que queremos hacer. El manifiesto de esa propuesta puede editarse en `src/content.ts`.

Las pruebas de la propuesta anterior están en `archive/full-site.spec.ts`. Quedan fuera de la suite activa y habrá que adaptarlas al reactivar esa versión, porque ahora Luma y contacto ya tienen datos reales.

Los originales de Carles siguen en `photos/`. Las copias WebP de las tres fotos están en `public/media/` para la futura versión.

## Comprobaciones

```sh
npx playwright install chromium
npm test
```

También se puede utilizar Brave instalado en macOS:

```sh
BROWSER_PATH='/Applications/Brave Browser.app/Contents/MacOS/Brave Browser' npm test
```

La suite activa tiene dieciséis pruebas y comprueba portada, Quiénes somos y ficha en 375 y 1440 px: contenido, cartel, enlaces, scroll central, cabecera y redes, navegación y accesibilidad con axe. La entrada directa y metadatos de la ficha se prueban sin JavaScript; axe usa un contexto separado para ejecutar su analizador. Playwright compila y arranca una vista previa estática cuando no hay un servidor de pruebas.

Capturas de producción para revisión:

- [Portada en móvil, 375 px](docs/previews/first-event-mobile-home.png).
- [Portada en escritorio, 1440 px](docs/previews/first-event-desktop-home.png).
- [Primer evento en escritorio](docs/previews/first-event-desktop.png).
- [Cartel del primer evento en móvil](docs/previews/first-event-mobile.png).
- [Detalles e inscripción en móvil](docs/previews/first-event-mobile-details.png).

Los resultados del cambio de eventos están en [VALIDATION-2026-10-27.md](docs/VALIDATION-2026-10-27.md). La revisión anterior de rendimiento con Lighthouse está en [VALIDATION.md](docs/VALIDATION.md).

## Imagen al compartir el enlace

`public/media/share-card-v1.png` es la tarjeta de 1200 × 630 px para Open Graph y X/Twitter. Usa el logo y las fuentes del club, sin fotografías ni presentación personal. Su archivo se genera con `scripts/render-social-card.mjs`; la publicación utiliza el PNG ya guardado. Para regenerarlo con Brave en macOS:

```sh
BROWSER_PATH='/Applications/Brave Browser.app/Contents/MacOS/Brave Browser' npm run social:render
```

El control `seo:check` comprueba que la imagen existe, que sus dimensiones coinciden con los metadatos y que Open Graph y Twitter apuntan al mismo recurso.

## SEO y Search Console

Los metadatos describen la comunidad y los eventos de perfumería en Barcelona. GitHub comprueba automáticamente el SEO, la accesibilidad y el rendimiento con Lighthouse CI en móvil y escritorio. La propiedad está verificada en Search Console, el sitemap está aceptado y Google confirma que la portada está indexada. La introducción y los datos de la organización explican que somos una comunidad de perfumería en Barcelona; la posición en búsquedas locales debe medirse y trabajarse, no se deduce de la puntuación de Lighthouse. Instrucciones e informes en [SEO.md](docs/SEO.md).

## Publicación

La publicación principal está configurada en GitHub Pages: `.github/workflows/deploy.yml` compila y publica `dist/` cuando hay cambios en `main`. El dominio configurado en `public/CNAME` es `barcelonaperfumeclub.com`. Los metadatos usan ese dominio.

Los datos del titular para el aviso legal siguen pendientes. No se ha añadido texto de copyright sin una petición expresa.
