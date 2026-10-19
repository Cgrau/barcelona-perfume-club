# Barcelona Perfume Club

La versión actual es una landing de lanzamiento estática, sin animaciones. El logo original se presenta sobre su mismo burdeos, #640817.

La portada presenta «El perfume se disfruta más en compañía» con una composición tipográfica y sin fotografías. El logo, centrado y compacto, y el menú quedan fijos arriba y las redes sociales fijas abajo. Solo se desplaza el contenido central, con navegación por ratón, tacto y teclado. Los textos mantienen un tamaño cómodo de lectura.

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
- `public/media/logo.webp`: copia optimizada del logo original.
- `public/media/mouillettes-*.webp`: recursos conservados para la futura web completa. No se cargan en la landing actual.
- `index.html`: título y metadatos para buscadores y redes sociales.

Enlaces incorporados:

- Eventos: https://luma.com/user/usr-C04C7zKH7PXxBXM
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

La suite activa comprueba la landing en 375 y 1440 px: titular, objetivo, tres pilares y aviso de lanzamiento, bloque de próximos eventos, enlaces reales, logo, ausencia de fotografías y animaciones, scroll exclusivo del contenido central, cabecera y redes visibles, navegación por anclas y teclado y accesibilidad con axe.

Capturas de producción para revisión:

- [Móvil, 375 px](docs/previews/landing-mobile.png).
- [Escritorio, 1440 px](docs/previews/landing-desktop.png).
- [Contacto en móvil](docs/previews/landing-mobile-contacto.png).
- [El club en escritorio](docs/previews/landing-desktop-el-club.png).
- [Próximos eventos en móvil](docs/previews/landing-mobile-eventos.png).

Los resultados de compilación, pruebas y Lighthouse están en [VALIDATION.md](docs/VALIDATION.md).

## Publicación

La publicación principal está configurada en GitHub Pages: `.github/workflows/deploy.yml` compila y publica `dist/` cuando hay cambios en `main`. El dominio configurado en `public/CNAME` es `barcelonaperfumeclub.com`. Los metadatos usan ese dominio.

Los datos del titular para el aviso legal siguen pendientes. No se ha añadido texto de copyright sin una petición expresa.
