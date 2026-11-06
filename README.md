# Código fuente de la web

**[Visitar Barcelona Perfume Club · web oficial](https://barcelonaperfumeclub.com/)**

Repositorio de desarrollo y documentación técnica. La información del club, los encuentros y el acceso a las inscripciones están en el dominio oficial enlazado arriba.

## Desarrollo

React, Vite y TypeScript con HTML prerenderizado. Requiere Node.js 22.12 o posterior.

```sh
npm install
npm run dev
```

## Verificación

```sh
npm run build
npm run seo:check
npm test
```

En este Mac puede indicarse Brave con `BROWSER_PATH='/Applications/Brave Browser.app/Contents/MacOS/Brave Browser' npm test`.

## Documentación del proyecto

- [Desarrollo, contenido y publicación](docs/DEVELOPMENT.md).
- [Instrucciones para agentes](AGENTS.md).
- [Memoria compartida](memory/Inicio.md).
- [Diseño](DESIGN.md).
- [SEO y Search Console](docs/SEO.md).
- [Claude SEO y auditorías](docs/seo/README.md).
- [Analítica opcional](docs/UMAMI.md).

GitHub Pages publica `dist/` al subir a `main`. La configuración del dominio está en `public/CNAME`. Los documentos de trabajo y la memoria no se incorporan a la web pública.
