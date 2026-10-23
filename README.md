# Barcelona Perfume Club

Rediseño aprobado por Carles el 23 de octubre de 2026 para su publicación en https://barcelonaperfumeclub.com/. GitHub Pages publica automáticamente los cambios de `main`.

La versión actual es una landing de lanzamiento estática, sin animaciones de entrada ni movimiento continuo. El logo original se presenta sin fondo opaco sobre el burdeos #640817. La paleta usa burdeos y marfil en toda la página.

La portada presenta «El perfume se disfruta más en compañía» con una composición tipográfica a todo el ancho y altura natural, sin centrar el contenido verticalmente en una pantalla completa. La fotografía de stock probada se ha retirado a petición de Carles. El logo, centrado y compacto, y el menú quedan fijos arriba y las redes sociales fijas abajo. Solo se desplaza el contenido central, con navegación por ratón, tacto y teclado. Los textos mantienen un tamaño cómodo de lectura.

La frase «Perfume, conversación y comunidad» introduce la portada. El apartado El club desarrolla tres pilares: Descubrir, Compartir y Conectar. El bloque Próximos eventos muestra el estado «Muy pronto» y enlaza al calendario de Luma, sin fechas inventadas. El aviso de preparación queda como información secundaria. El contacto invita a consultas o propuestas de colaboración: «¿Tienes alguna consulta o una idea para colaborar? Nos encantará leerte».

## Abrir en local

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

- `src/App.tsx`: estructura y aviso de lanzamiento.
- `src/landing.css`: fondo, tipografías locales y diseño responsive, sin animaciones.
- `src/content.ts`: objetivo del club y enlaces compartidos con la futura web.
- `public/media/logo-mark.svg`: logo original con máscara transparente y tinta marfil, sin reconstruir el lettering. `logo.webp` conserva la copia optimizada original.
- `public/media/mouillettes-*.webp`: recursos conservados para la futura web completa. No se cargan en la landing actual.
- `index.html`: título y metadatos para buscadores y redes sociales.
- `src/entry-server.tsx` y `scripts/prerender.mjs`: incorporan el contenido al HTML durante la compilación para que sea legible antes de ejecutar JavaScript.
- `DESIGN.md`: criterio de diseño y decisiones de la revisión aprobada.

Enlaces incorporados:

- Eventos: https://luma.com/barcelonaperfumeclub
- Contacto: mailto:barcelonaperfumeclub@proton.me

No hay formularios. La analítica opcional de Umami Cloud permanece desactivada mientras no se configure `UMAMI_WEBSITE_ID`: mide visitas y clics en los enlaces, sin añadir cookies desde la aplicación. La configuración y activación se explican en [UMAMI.md](docs/UMAMI.md). Las fuentes Playfair Display y Jost se sirven desde el propio sitio.

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

La suite activa comprueba la landing en 375 y 1440 px: titular, objetivo, tres pilares y aviso de lanzamiento, bloque de próximos eventos, enlaces reales, logo, ausencia de fotografías activas y animaciones continuas, scroll exclusivo del contenido central, cabecera y redes visibles, navegación por anclas y teclado y accesibilidad con axe.

Capturas de producción para revisión:

- [Móvil, 375 px](docs/previews/landing-mobile.png).
- [Escritorio, 1440 px](docs/previews/landing-desktop.png).
- [Contacto en móvil](docs/previews/landing-mobile-contacto.png).
- [El club en escritorio](docs/previews/landing-desktop-el-club.png).
- [Próximos eventos en móvil](docs/previews/landing-mobile-eventos.png).

Los resultados de compilación, pruebas y Lighthouse están en [VALIDATION.md](docs/VALIDATION.md).

## SEO y Search Console

Los metadatos describen la comunidad y los eventos de perfumería en Barcelona. GitHub comprueba automáticamente el SEO, la accesibilidad y el rendimiento con Lighthouse CI en móvil y escritorio. La propiedad está verificada en Search Console, el sitemap está aceptado y Google confirma que la portada está indexada. La introducción y los datos de la organización explican que somos una comunidad de perfumería en Barcelona; la posición en búsquedas locales debe medirse y trabajarse, no se deduce de la puntuación de Lighthouse. Instrucciones e informes en [SEO.md](docs/SEO.md).

## Publicación

La publicación principal está configurada en GitHub Pages: `.github/workflows/deploy.yml` compila y publica `dist/` cuando hay cambios en `main`. El dominio configurado en `public/CNAME` es `barcelonaperfumeclub.com`. Los metadatos usan ese dominio.

Los datos del titular para el aviso legal siguen pendientes. No se ha añadido texto de copyright sin una petición expresa.
