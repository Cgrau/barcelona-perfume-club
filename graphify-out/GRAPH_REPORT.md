# Graph Report - memory  (2026-10-29)

## Corpus Check
- Corpus is ~5,762 words - fits in a single context window. You may not need a graph.

## Summary
- 50 nodes · 84 edges · 9 communities (5 shown, 4 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 1 edges (avg confidence: 0.95)
- Token cost: no disponible; extracción realizada por el asistente de esta sesión

## Community Hubs (Navigation)
- [Organizadores y validación del About](../memory/Mapa/_COMMUNITY_Organizadores%20y%20validaci%C3%B3n%20del%20About.md)
- [SEO y generación estática](../memory/Mapa/_COMMUNITY_SEO%20y%20generaci%C3%B3n%20est%C3%A1tica.md)
- [Continuidad y publicación](../memory/Mapa/_COMMUNITY_Continuidad%20y%20publicaci%C3%B3n.md)
- [Primer encuentro y marcas](../memory/Mapa/_COMMUNITY_Primer%20encuentro%20y%20marcas.md)
- [Graphify y fuentes de verdad](../memory/Mapa/_COMMUNITY_Graphify%20y%20fuentes%20de%20verdad.md)
- [Programación y canales oficiales](../memory/Mapa/_COMMUNITY_Programaci%C3%B3n%20y%20canales%20oficiales.md)
- [Diseño y aprobación](../memory/Mapa/_COMMUNITY_Dise%C3%B1o%20y%20aprobaci%C3%B3n.md)
- [Identidad e indexación confirmada](../memory/Mapa/_COMMUNITY_Identidad%20e%20indexaci%C3%B3n%20confirmada.md)
- [Acceso con plaza confirmada](../memory/Mapa/_COMMUNITY_Acceso%20con%20plaza%20confirmada.md)

## God Nodes (most connected - your core abstractions)
1. `src/AboutPage.tsx: Quiénes somos publicado y comprobado` - 11 edges
2. `Descubriendo perfumes nicho — 8 de noviembre de 2026` - 10 edges
3. `src/EventPage.tsx: ficha propia del encuentro` - 8 edges
4. `Publicación SEO comprobada: 4f0a26b` - 7 edges
5. `Bóveda compartida de Obsidian` - 6 edges
6. `Barcelona Perfume Club` - 5 edges
7. `Acceso obligatorio con registro y plaza confirmada en Luma` - 5 edges
8. `src/seo.ts: metadatos e identidad común` - 5 edges
9. `Aprobación inicial y autorización de publicación` - 5 edges
10. `Continuar el proyecto desde otro equipo` - 4 edges

## Surprising Connections (you probably didn't know these)
- `src/seo.ts: metadatos e identidad común` --references--> `Identidad cercana y abierta del club`  [EXTRACTED]
  memory/Web.md → memory/Decisiones.md
- `Aprobación inicial y autorización de publicación` --references--> `Graphify 0.9.97`  [EXTRACTED]
  memory/sesiones/2026-10-27.md → memory/Graphify.md
- `Portada indexada: Search Console del 29 de octubre` --references--> `Publicación SEO comprobada: 4f0a26b`  [EXTRACTED]
  memory/Estado.md → memory/sesiones/2026-10-29.md
- `Portada indexada: Search Console del 29 de octubre` --references--> `Barcelona Perfume Club`  [EXTRACTED]
  memory/Estado.md → memory/Inicio.md
- `Descubriendo perfumes nicho — 8 de noviembre de 2026` --conceptually_related_to--> `Barcelona Perfume Club`  [EXTRACTED]
  memory/eventos/2026-11-08-perfumes-nicho.md → memory/Inicio.md

## Hyperedges (group relationships)
- **Continuidad mediante repositorio, bóveda y grafo derivado** — memory_inicio_repositorio, memory_inicio_boveda_obsidian, memory_continuidad_continuar_proyecto, memory_graphify_artefactos_derivados [EXTRACTED 1.00]
- **About revisado, autorizado, publicado y comprobado en 4df3f11** — memory_decisiones_about_solo_local, memory_web_aboutpage_tsx, memory_estado_validacion_about_local, memory_decisiones_presentacion_carles_laura, memory_web_person_sameas [EXTRACTED 1.00]
- **Rutas propias, metadatos y sitemap desde el prerender** — memory_web_content_ts, memory_web_eventpage_tsx, memory_web_seo_ts, memory_web_prerender, memory_web_sitemap_generado [EXTRACTED 1.00]

## Communities (9 total, 4 thin omitted)

### Community 0 - "Organizadores y validación del About"
Cohesion: 0.24
Nodes (5): Validación del About: dieciséis pruebas y publicación comprobada, Carles Grau, Carles Grau Perfume: redes personales, Verificación SEO de dos páginas y doce pruebas, src/AboutPage.tsx: Quiénes somos publicado y comprobado

### Community 1 - "SEO y generación estática"
Cohesion: 0.31
Nodes (7): Publicación SEO comprobada: 4f0a26b, src/App.tsx: web activa, src/ClubSite.tsx: propuesta archivada, src/content.ts: eventos y enlaces, src/EventPage.tsx: ficha propia del encuentro, scripts/prerender.mjs: generación estática, src/seo.ts: metadatos e identidad común

### Community 2 - "Continuidad y publicación"
Cohesion: 0.47
Nodes (3): Publicación comprobada de la web, Bóveda compartida de Obsidian, Repositorio compartido en GitHub

### Community 3 - "Primer encuentro y marcas"
Cohesion: 0.40
Nodes (5): Cartel original del primer encuentro, Descubriendo perfumes nicho — 8 de noviembre de 2026, Gparfums: diez perfumes del discovery set, Sasva: seis perfumes del discovery set, Volta Restaurant & Bar

### Community 5 - "Programación y canales oficiales"
Cohesion: 0.50
Nodes (3): Pendientes de producto y alcance, Canales oficiales de Barcelona Perfume Club, Luma: calendario, inscripciones y disponibilidad

## Knowledge Gaps
- **6 isolated node(s):** `Pendientes de producto y alcance`, `src/ClubSite.tsx: propuesta archivada`, `Volta Restaurant & Bar`, `Sasva: seis perfumes del discovery set`, `Gparfums: diez perfumes del discovery set` (+1 more)
  These have ≤1 connection - possible missing edges. (Counts symbols only; 8 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Descubriendo perfumes nicho — 8 de noviembre de 2026` connect `Primer encuentro y marcas` to `Organizadores y validación del About`, `SEO y generación estática`, `Programación y canales oficiales`, `Identidad e indexación confirmada`, `Acceso con plaza confirmada`?**
  _High betweenness centrality (0.282) - this node is a cross-community bridge._
- **What connects `Pendientes de producto y alcance`, `src/ClubSite.tsx: propuesta archivada`, `Volta Restaurant & Bar` to the rest of the system?**
  _6 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Why does `src/AboutPage.tsx: Quiénes somos publicado y comprobado` connect `Organizadores y validación del About` to `Acceso con plaza confirmada`, `SEO y generación estática`?**
  _High betweenness centrality (0.245) - this node is a cross-community bridge._
- **Why does `src/EventPage.tsx: ficha propia del encuentro` connect `SEO y generación estática` to `Organizadores y validación del About`, `Acceso con plaza confirmada`, `Primer encuentro y marcas`?**
  _High betweenness centrality (0.187) - this node is a cross-community bridge._

## Método y límites

Extracción semántica del asistente sobre las notas originales actualizadas de `memory/`, con cobertura completa comprobada. Los contadores de tokens del subagente no están disponibles: los ceros de la plantilla no significan consumo cero. El grafo es un derivado; las notas y el código son las fuentes de verdad.
