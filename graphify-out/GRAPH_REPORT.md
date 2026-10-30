# Graph Report - memory  (2026-10-30)

## Corpus Check
- Corpus is ~6,158 words - fits in a single context window. You may not need a graph.

## Summary
- 51 nodes · 87 edges · 6 communities
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 1 edges (avg confidence: 0.95)
- Token cost: no disponible; extracción realizada por el asistente de esta sesión

## Community Hubs (Navigation)
- [Memoria y publicación](../memory/Mapa/_COMMUNITY_Memoria%20y%20publicaci%C3%B3n.md)
- [Identidad y contacto del club](../memory/Mapa/_COMMUNITY_Identidad%20y%20contacto%20del%20club.md)
- [Generación estática y verificación](../memory/Mapa/_COMMUNITY_Generaci%C3%B3n%20est%C3%A1tica%20y%20verificaci%C3%B3n.md)
- [Organizadores y Quiénes somos](../memory/Mapa/_COMMUNITY_Organizadores%20y%20Qui%C3%A9nes%20somos.md)
- [Primer encuentro y acceso](../memory/Mapa/_COMMUNITY_Primer%20encuentro%20y%20acceso.md)
- [Arquitectura y diseño web](../memory/Mapa/_COMMUNITY_Arquitectura%20y%20dise%C3%B1o%20web.md)

## God Nodes (most connected - your core abstractions)
1. `src/AboutPage.tsx: Quiénes somos publicado y comprobado` - 11 edges
2. `Descubriendo perfumes nicho — 8 de noviembre de 2026` - 10 edges
3. `src/EventPage.tsx: ficha propia del encuentro` - 8 edges
4. `Publicación SEO comprobada: 4f0a26b` - 7 edges
5. `Bóveda compartida de Obsidian` - 6 edges
6. `src/seo.ts: metadatos e identidad común` - 6 edges
7. `Barcelona Perfume Club` - 5 edges
8. `Acceso obligatorio con registro y plaza confirmada en Luma` - 5 edges
9. `src/content.ts: eventos y enlaces` - 5 edges
10. `Aprobación inicial y autorización de publicación` - 5 edges

## Surprising Connections (you probably didn't know these)
- `Diseño aprobado: burdeos, marfil y portada tipográfica` --conceptually_related_to--> `src/landing.css: diseño y adaptación a pantallas`  [INFERRED]
  memory/Decisiones.md → memory/Web.md
- `Portada indexada: Search Console del 29 de octubre` --references--> `Publicación SEO comprobada: 4f0a26b`  [EXTRACTED]
  memory/Estado.md → memory/sesiones/2026-10-29.md
- `Portada indexada: Search Console del 29 de octubre` --references--> `Barcelona Perfume Club`  [EXTRACTED]
  memory/Estado.md → memory/Inicio.md
- `Descubriendo perfumes nicho — 8 de noviembre de 2026` --conceptually_related_to--> `Barcelona Perfume Club`  [EXTRACTED]
  memory/eventos/2026-11-08-perfumes-nicho.md → memory/Inicio.md
- `Barcelona Perfume Club` --references--> `Identidad cercana y abierta del club`  [EXTRACTED]
  memory/Inicio.md → memory/Decisiones.md

## Hyperedges (group relationships)
- **Continuidad mediante repositorio, bóveda y grafo derivado** — memory_inicio_repositorio, memory_inicio_boveda_obsidian, memory_continuidad_continuar_proyecto, memory_graphify_artefactos_derivados [EXTRACTED 1.00]
- **About revisado, autorizado, publicado y comprobado en 4df3f11** — memory_decisiones_about_solo_local, memory_web_aboutpage_tsx, memory_estado_validacion_about_local, memory_decisiones_presentacion_carles_laura, memory_web_person_sameas [EXTRACTED 1.00]
- **Rutas propias, metadatos y sitemap desde el prerender** — memory_web_content_ts, memory_web_eventpage_tsx, memory_web_seo_ts, memory_web_prerender, memory_web_sitemap_generado [EXTRACTED 1.00]

## Communities (6 total, 0 thin omitted)

### Community 0 - "Memoria y publicación"
Cohesion: 0.24
Nodes (6): Publicación comprobada de la web, Grafo portable y exportación para Obsidian, Graphify 0.9.97, Bóveda compartida de Obsidian, Repositorio compartido en GitHub, Aprobación inicial y autorización de publicación

### Community 1 - "Identidad y contacto del club"
Cohesion: 0.27
Nodes (8): Portada indexada: Search Console del 29 de octubre, Pendientes de producto y alcance, Canales oficiales de Barcelona Perfume Club, Luma: calendario, inscripciones y disponibilidad, Barcelona Perfume Club, Correo oficial: contacto@barcelonaperfumeclub.com, src/content.ts: eventos y enlaces, src/seo.ts: metadatos e identidad común

### Community 2 - "Generación estática y verificación"
Cohesion: 0.31
Nodes (4): Publicación SEO comprobada: 4f0a26b, Verificación SEO de dos páginas y doce pruebas, src/EventPage.tsx: ficha propia del encuentro, scripts/prerender.mjs: generación estática

### Community 3 - "Organizadores y Quiénes somos"
Cohesion: 0.36
Nodes (4): Validación del About: dieciséis pruebas y publicación comprobada, Carles Grau, Carles Grau Perfume: redes personales, src/AboutPage.tsx: Quiénes somos publicado y comprobado

### Community 4 - "Primer encuentro y acceso"
Cohesion: 0.29
Nodes (7): Cartel original del primer encuentro, Descubriendo perfumes nicho — 8 de noviembre de 2026, Gparfums: diez perfumes del discovery set, Lista de espera de Luma comprobada el 29 de octubre, Sasva: seis perfumes del discovery set, Volta Restaurant & Bar, src/components/EventContent.tsx: contenido compartido

### Community 5 - "Arquitectura y diseño web"
Cohesion: 0.50
Nodes (3): src/App.tsx: web activa, src/ClubSite.tsx: propuesta archivada, src/landing.css: diseño y adaptación a pantallas

## Knowledge Gaps
- **6 isolated node(s):** `Pendientes de producto y alcance`, `src/ClubSite.tsx: propuesta archivada`, `Volta Restaurant & Bar`, `Sasva: seis perfumes del discovery set`, `Gparfums: diez perfumes del discovery set` (+1 more)
  These have ≤1 connection - possible missing edges. (Counts symbols only; 8 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Descubriendo perfumes nicho — 8 de noviembre de 2026` connect `Primer encuentro y acceso` to `Identidad y contacto del club`, `Generación estática y verificación`, `Organizadores y Quiénes somos`?**
  _High betweenness centrality (0.273) - this node is a cross-community bridge._
- **What connects `Pendientes de producto y alcance`, `src/ClubSite.tsx: propuesta archivada`, `Volta Restaurant & Bar` to the rest of the system?**
  _6 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Why does `src/AboutPage.tsx: Quiénes somos publicado y comprobado` connect `Organizadores y Quiénes somos` to `Generación estática y verificación`, `Primer encuentro y acceso`, `Arquitectura y diseño web`?**
  _High betweenness centrality (0.237) - this node is a cross-community bridge._
- **Why does `Barcelona Perfume Club` connect `Identidad y contacto del club` to `Memoria y publicación`, `Primer encuentro y acceso`?**
  _High betweenness centrality (0.183) - this node is a cross-community bridge._

## Método y límites

Extracción semántica del asistente sobre las notas originales actualizadas de `memory/`, con cobertura completa comprobada. Los contadores de tokens del subagente no están disponibles: los ceros de la plantilla no significan consumo cero. El grafo es un derivado; las notas y el código son las fuentes de verdad.
