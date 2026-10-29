# Graph Report - memory  (2026-10-29)

## Corpus Check
- Corpus is ~3,141 words - fits in a single context window. You may not need a graph.

## Summary
- 41 nodes · 60 edges · 8 communities (4 shown, 4 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 1 edges (avg confidence: 0.95)
- Token cost: no disponible; extracción realizada por el asistente de esta sesión

## Community Hubs (Navigation)
- [Identidad y memoria](../memory/Mapa/_COMMUNITY_Identidad%20y%20memoria.md)
- [Continuidad y publicación](../memory/Mapa/_COMMUNITY_Continuidad%20y%20publicaci%C3%B3n.md)
- [Primer encuentro](../memory/Mapa/_COMMUNITY_Primer%20encuentro.md)
- [Alcance SEO aprobado](../memory/Mapa/_COMMUNITY_Alcance%20SEO%20aprobado.md)
- [Generación estática](../memory/Mapa/_COMMUNITY_Generaci%C3%B3n%20est%C3%A1tica.md)
- [Registro y confirmación](../memory/Mapa/_COMMUNITY_Registro%20y%20confirmaci%C3%B3n.md)
- [Programación y Luma](../memory/Mapa/_COMMUNITY_Programaci%C3%B3n%20y%20Luma.md)
- [Interfaz activa y archivo](../memory/Mapa/_COMMUNITY_Interfaz%20activa%20y%20archivo.md)

## God Nodes (most connected - your core abstractions)
1. `Descubriendo perfumes nicho — 8 de noviembre de 2026` - 10 edges
2. `src/EventPage.tsx: ficha propia del encuentro` - 7 edges
3. `Bóveda compartida de Obsidian` - 6 edges
4. `Publicación SEO comprobada: 4f0a26b` - 6 edges
5. `Continuar el proyecto desde otro equipo` - 4 edges
6. `Acceso obligatorio con registro y plaza confirmada en Luma` - 4 edges
7. `Alcance SEO aprobado: página propia e identidad` - 4 edges
8. `Publicación comprobada de la web` - 4 edges
9. `Mantenimiento manual de eventos` - 4 edges
10. `Arquitectura React, Vite y TypeScript con HTML prerenderizado` - 4 edges

## Surprising Connections (you probably didn't know these)
- `Descubriendo perfumes nicho — 8 de noviembre de 2026` --conceptually_related_to--> `Barcelona Perfume Club`  [EXTRACTED]
  memory/eventos/2026-11-08-perfumes-nicho.md → memory/Inicio.md
- `Continuar el proyecto desde otro equipo` --references--> `Bóveda compartida de Obsidian`  [EXTRACTED]
  memory/Continuidad.md → memory/Inicio.md
- `Memoria sin credenciales ni datos de asistentes` --conceptually_related_to--> `Bóveda compartida de Obsidian`  [EXTRACTED]
  memory/Continuidad.md → memory/Inicio.md
- `Notas originales y código como fuentes de verdad` --rationale_for--> `Regenerar el mapa desde las notas originales`  [EXTRACTED]
  memory/Continuidad.md → memory/Graphify.md
- `src/seo.ts: metadatos e identidad común` --references--> `Identidad cercana y abierta del club`  [EXTRACTED]
  memory/Web.md → memory/Decisiones.md

## Hyperedges (group relationships)
- **Continuidad mediante repositorio, bóveda y grafo derivado** — memory_inicio_repositorio, memory_inicio_boveda_obsidian, memory_continuidad_continuar_proyecto, memory_graphify_artefactos_derivados [EXTRACTED 1.00]
- **Rutas propias, metadatos y sitemap desde el prerender** — memory_web_content_ts, memory_web_eventpage_tsx, memory_web_seo_ts, memory_web_prerender, memory_web_sitemap_generado [EXTRACTED 1.00]

## Communities (8 total, 4 thin omitted)

### Community 0 - "Identidad y memoria"
Cohesion: 0.22
Nodes (6): Grafo portable y exportación para Obsidian, Graphify 0.9.97, Barcelona Perfume Club, Bóveda compartida de Obsidian, Aprobación inicial y autorización de publicación, src/landing.css: diseño y adaptación a pantallas

### Community 1 - "Continuidad y publicación"
Cohesion: 0.29
Nodes (3): Publicación comprobada de la web, Repositorio compartido en GitHub, Verificación SEO de dos páginas y doce pruebas

### Community 2 - "Primer encuentro"
Cohesion: 0.33
Nodes (6): Carles Grau, Cartel original del primer encuentro, Descubriendo perfumes nicho — 8 de noviembre de 2026, Gparfums: diez perfumes del discovery set, Sasva: seis perfumes del discovery set, Volta Restaurant & Bar

### Community 3 - "Alcance SEO aprobado"
Cohesion: 0.70
Nodes (3): Publicación SEO comprobada: 4f0a26b, src/EventPage.tsx: ficha propia del encuentro, src/seo.ts: metadatos e identidad común

## Knowledge Gaps
- **7 isolated node(s):** `Pendientes de producto y alcance`, `src/ClubSite.tsx: propuesta archivada`, `Volta Restaurant & Bar`, `Sasva: seis perfumes del discovery set`, `Gparfums: diez perfumes del discovery set` (+2 more)
  These have ≤1 connection - possible missing edges. (Counts symbols only; 8 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Descubriendo perfumes nicho — 8 de noviembre de 2026` connect `Primer encuentro` to `Identidad y memoria`, `Alcance SEO aprobado`, `Registro y confirmación`, `Programación y Luma`?**
  _High betweenness centrality (0.423) - this node is a cross-community bridge._
- **What connects `Pendientes de producto y alcance`, `src/ClubSite.tsx: propuesta archivada`, `Volta Restaurant & Bar` to the rest of the system?**
  _7 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Why does `src/EventPage.tsx: ficha propia del encuentro` connect `Alcance SEO aprobado` to `Primer encuentro`, `Generación estática`, `Registro y confirmación`, `Interfaz activa y archivo`?**
  _High betweenness centrality (0.282) - this node is a cross-community bridge._
- **Why does `Bóveda compartida de Obsidian` connect `Identidad y memoria` to `Continuidad y publicación`?**
  _High betweenness centrality (0.250) - this node is a cross-community bridge._

## Método y límites

Extracción semántica del asistente sobre las notas originales actualizadas de `memory/`, con cobertura completa comprobada. Los contadores de tokens del subagente no están disponibles: los ceros de la plantilla no significan consumo cero. El grafo es un derivado; las notas y el código son las fuentes de verdad.
