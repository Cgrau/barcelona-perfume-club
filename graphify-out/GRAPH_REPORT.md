# Graph Report - memory  (2026-10-27)

## Corpus Check
- Corpus is ~2,237 words - fits in a single context window. You may not need a graph.

## Summary
- 32 nodes · 38 edges · 5 communities
- Extraction: 97% EXTRACTED · 3% INFERRED · 0% AMBIGUOUS · INFERRED: 1 edges (avg confidence: 0.95)
- Token cost: no disponible; extracción realizada por el asistente de esta sesión

## Community Hubs (Navigation)
- [Continuidad y publicación](../memory/Mapa/_COMMUNITY_Continuidad%20y%20publicaci%C3%B3n.md)
- [Primer encuentro y club](../memory/Mapa/_COMMUNITY_Primer%20encuentro%20y%20club.md)
- [Memoria y decisiones](../memory/Mapa/_COMMUNITY_Memoria%20y%20decisiones.md)
- [Eventos y acceso](../memory/Mapa/_COMMUNITY_Eventos%20y%20acceso.md)
- [Arquitectura web](../memory/Mapa/_COMMUNITY_Arquitectura%20web.md)

## God Nodes (most connected - your core abstractions)
1. `Descubriendo perfumes nicho — 8 de noviembre de 2026` - 8 edges
2. `Bóveda compartida de Obsidian` - 6 edges
3. `Continuar el proyecto desde otro equipo` - 4 edges
4. `Mantenimiento manual de eventos` - 4 edges
5. `Arquitectura React, Vite y TypeScript con HTML prerenderizado` - 4 edges
6. `Aprobación del diseño y autorización de publicación` - 4 edges
7. `Barcelona Perfume Club` - 3 edges
8. `Repositorio compartido en GitHub` - 3 edges
9. `Publicación comprobada del primer evento` - 3 edges
10. `Grafo portable y exportación para Obsidian` - 3 edges

## Surprising Connections (you probably didn't know these)
- `Diseño aprobado: burdeos, marfil y portada tipográfica` --conceptually_related_to--> `src/landing.css: diseño y adaptación a pantallas`  [INFERRED]
  memory/Decisiones.md → memory/Web.md
- `Descubriendo perfumes nicho — 8 de noviembre de 2026` --references--> `Acceso obligatorio con registro y plaza confirmada en Luma`  [EXTRACTED]
  memory/eventos/2026-11-08-perfumes-nicho.md → memory/Decisiones.md
- `Memoria sin credenciales ni datos de asistentes` --conceptually_related_to--> `Bóveda compartida de Obsidian`  [EXTRACTED]
  memory/Continuidad.md → memory/Inicio.md
- `Grafo portable y exportación para Obsidian` --references--> `Bóveda compartida de Obsidian`  [EXTRACTED]
  memory/Graphify.md → memory/Inicio.md
- `Aprobación del diseño y autorización de publicación` --references--> `Bóveda compartida de Obsidian`  [EXTRACTED]
  memory/sesiones/2026-10-27.md → memory/Inicio.md

## Hyperedges (group relationships)
- **Continuidad mediante repositorio, bóveda y grafo derivado** — memory_inicio_repositorio, memory_inicio_boveda_obsidian, memory_continuidad_continuar_proyecto, memory_graphify_artefactos_derivados [EXTRACTED 1.00]
- **Archivos que componen la web activa** — memory_web_app_tsx, memory_web_landing_css, memory_web_content_ts, memory_web_prerender [EXTRACTED 1.00]

## Communities (5 total, 0 thin omitted)

### Community 0 - "Continuidad y publicación"
Cohesion: 0.32
Nodes (3): Publicación comprobada del primer evento, Bóveda compartida de Obsidian, Repositorio compartido en GitHub

### Community 1 - "Primer encuentro y club"
Cohesion: 0.25
Nodes (7): Carles Grau, Cartel original del primer encuentro, Descubriendo perfumes nicho — 8 de noviembre de 2026, Gparfums: diez perfumes del discovery set, Sasva: seis perfumes del discovery set, Volta Restaurant & Bar, Barcelona Perfume Club

### Community 2 - "Memoria y decisiones"
Cohesion: 0.33
Nodes (3): Grafo portable y exportación para Obsidian, Graphify 0.9.97, Aprobación del diseño y autorización de publicación

### Community 3 - "Eventos y acceso"
Cohesion: 0.40
Nodes (3): Pendientes de producto y alcance, Luma: calendario, inscripciones y disponibilidad, src/content.ts: eventos y enlaces

### Community 4 - "Arquitectura web"
Cohesion: 0.40
Nodes (4): src/App.tsx: web activa, src/ClubSite.tsx: propuesta archivada, src/landing.css: diseño y adaptación a pantallas, scripts/prerender.mjs: HTML inicial

## Knowledge Gaps
- **8 isolated node(s):** `Pendientes de producto y alcance`, `src/ClubSite.tsx: propuesta archivada`, `scripts/prerender.mjs: HTML inicial`, `Volta Restaurant & Bar`, `Sasva: seis perfumes del discovery set` (+3 more)
  These have ≤1 connection - possible missing edges. (Counts symbols only; 11 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Descubriendo perfumes nicho — 8 de noviembre de 2026` connect `Primer encuentro y club` to `Eventos y acceso`?**
  _High betweenness centrality (0.481) - this node is a cross-community bridge._
- **What connects `Pendientes de producto y alcance`, `src/ClubSite.tsx: propuesta archivada`, `scripts/prerender.mjs: HTML inicial` to the rest of the system?**
  _8 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Why does `Bóveda compartida de Obsidian` connect `Continuidad y publicación` to `Primer encuentro y club`, `Memoria y decisiones`?**
  _High betweenness centrality (0.456) - this node is a cross-community bridge._
- **Why does `Barcelona Perfume Club` connect `Primer encuentro y club` to `Continuidad y publicación`?**
  _High betweenness centrality (0.377) - this node is a cross-community bridge._

## Método y límites

Extracción semántica del asistente sobre las nueve notas originales de `memory/`, con cobertura completa comprobada. Los contadores de tokens del subagente no están disponibles: los ceros de la plantilla no significan consumo cero. El grafo es un derivado; las notas y el código son las fuentes de verdad.
