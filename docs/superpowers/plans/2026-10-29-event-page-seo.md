# Event Page SEO Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan inline, with one final independent review.

**Goal:** Publicar una ficha indexable del primer encuentro y una identidad coherente del club, dentro de los puntos 1 y 2 aceptados por Carles.

**Architecture:** Extender el prerender de React para generar portada y ficha en directorios estáticos. Compartir datos del evento, identidad y aviso, manteniendo CSS y navegación nativa.

**Tech Stack:** React 19, Vite, TypeScript, Node y Playwright existentes.

**Spec:** `docs/superpowers/specs/2026-10-29-event-page-seo.md`.

## Global Constraints

- Conservar titular de portada, burdeos `#640817`, marfil `#f3eee0`, fuentes locales y scroll central.
- Registro y plaza confirmada en Luma imprescindibles; no afirmar disponibilidad de plazas.
- HTML inicial completo, sin dependencias nuevas ni router de cliente.
- Perfiles externos: verificar lo accesible y no afirmar cambios no realizados.
- Sin trabajo de enlaces de colaboradores; crónica y seguimiento periódico, después del evento.

## Review Focus

- Entrada directa o desde portada: misma ficha real, sin depender de JavaScript.
- Ficha con canonical, metadatos e identidad propios y consistentes.
- Anclas de cabecera de la ficha vuelven al apartado correcto de portada.
- Aviso visible y sin degradar el acceso condicionado en Luma.
- Pantallas estrechas, cartel completo y navegación por teclado accesibles.

### Task 1: Ficha estática e identidad

**Files:** `src/content.ts`, `src/App.tsx`, `src/components/EventContent.tsx`, `src/EventPage.tsx`, `src/seo.ts`, `src/entry-server.tsx`, `src/main.tsx`, `src/landing.css`, `scripts/prerender.mjs`, `scripts/check-seo.mjs`, `public/sitemap.xml`, `tests/event.spec.ts`, `playwright.config.ts`.

**Interfaces:** `App({ pathname?: string })`; `events[].path` identifica la ruta; `getPageMetadata(pathname)` devuelve metadatos y datos estructurados; `render(pathname)` genera HTML. `getStaticPages()` enumera las páginas que compila el prerender.

- [x] Añadir pruebas de acceso desde portada, carga directa sin JavaScript, navegación, metadatos, identidad, sitemap y accesibilidad; observar el fallo por ficha ausente.
- [x] Extender datos y render de páginas y compartir descripción y aviso. Añadir enlace interno desde la ficha de portada.
- [x] Generar archivos estáticos y metadatos propios para cada ruta, con Organization, WebSite, WebPage y migas de pan adecuados.
- [x] Ampliar `seo:check` para verificar todas las páginas y la coherencia entre sitemap y archivos generados.
- [x] Compilar, comprobar SEO y ejecutar suite completa sobre el resultado estático. Revisar capturas móvil/escritorio.

### Task 2: Documentación, memoria y entrega

**Files:** `README.md`, `docs/SEO.md`, `memory/Estado.md`, notas pertinentes y nueva sesión; grafo derivado.

- [x] Documentar las rutas y la identidad y guardar el alcance aprobado, distinguiendo cambios locales y externos.
- [x] Actualizar memoria y su grafo sin reingerir las notas generadas.
- [x] Revisión independiente y corrección de problemas materiales.
- [x] Publicar dentro de la autorización vigente y comprobar workflow y las dos URL públicas.
