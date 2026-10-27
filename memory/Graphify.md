---
title: Grafo de memoria con Graphify
type: tooling
updated: 2026-10-27
tags: [graphify, obsidian, memoria]
---

# Graphify y Obsidian

Se utiliza [Graphify de Graphify Labs](https://github.com/Graphify-Labs/graphify), paquete oficial `graphifyy`, versión 0.9.97. El programa queda en un entorno aislado de `build/graphify-venv`; el entorno no se sube a GitHub. La memoria fuente es esta bóveda, a partir de [[Inicio]].

Los resultados portables se guardan en `graphify-out/graph.json`, `graphify-out/graph.html` y `graphify-out/GRAPH_REPORT.md`. `memory/Mapa/` contiene la exportación generada para Obsidian, con canvas y notas enlazadas. Son derivados, no una segunda fuente de decisiones.

## Preparar otro equipo

```sh
python3 -m venv build/graphify-venv
build/graphify-venv/bin/python -m pip install -r requirements-memory.txt
build/graphify-venv/bin/graphify query "registro Luma" --graph graphify-out/graph.json
```

En Windows, los ejecutables del entorno están en `build/graphify-venv/Scripts/`.

También se puede usar `graphify explain` y `graphify path` con `--graph graphify-out/graph.json`. Los datos del grafo están versionados: consultarlos no requiere reextraer las notas. La extracción semántica inicial la hace el asistente sobre las notas, con referencias a sus fuentes; no se configura un proveedor externo ni una clave API.

Para regenerar el mapa después de cambios relevantes, usar la skill oficial de Graphify con la carpeta `memory`, excluyendo `memory/Mapa` y `.obsidian`, y exportar Obsidian a `memory/Mapa`. La extracción debe cubrir las notas originales, no volver a ingerir su propia exportación. Guardar los nuevos resultados en `graphify-out/`. `graphify update` por sí solo reextrae código; no asumir que refresca el significado de estas notas.

Las notas siguen siendo legibles en GitHub y Obsidian sin instalar Graphify. El grafo nativo de Obsidian utiliza los wikilinks existentes. Mantener la memoria según [[Continuidad]]; la arquitectura de la web está en [[Web]].
