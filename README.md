# Barcelona Perfume Club

La versión actual es una landing de lanzamiento estática, sin animaciones. El logo original se presenta sobre su mismo burdeos, #640817.

La página explica que estamos preparándolo todo y que el calendario de eventos saldrá muy pronto. Incluye el objetivo del club, el perfil de Luma y el email de contacto.

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
- `public/media/logo.webp`: copia optimizada del logo original.
- `index.html`: título y metadatos para buscadores y redes sociales.

Enlaces incorporados:

- Encuentros: https://luma.com/user/usr-C04C7zKH7PXxBXM
- Contacto: mailto:barcelonaperfumeclub@proton.me

No hay formularios, analítica ni cookies. Las fuentes Playfair Display y Jost se sirven desde el propio sitio.

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

La suite activa comprueba la landing en 375 y 1440 px: objetivo y aviso de lanzamiento, enlaces reales, carga del logo, ausencia de animaciones y desbordamiento horizontal y accesibilidad con axe.

Capturas de producción para revisión:

- [Móvil, 375 px](docs/previews/landing-mobile.png).
- [Escritorio, 1440 px](docs/previews/landing-desktop.png).

Los resultados de compilación, pruebas y Lighthouse están en [VALIDATION.md](docs/VALIDATION.md).

## Publicación

La web sigue en local. Vercel o Netlify pueden construir con `npm run build` y publicar `dist/`.

Antes de publicar, falta elegir el dominio, usar URLs absolutas reales para `og:image`, añadir canonical y `og:url` y completar los datos del titular para el aviso legal. El perfil de Instagram queda pendiente para la futura web completa.
