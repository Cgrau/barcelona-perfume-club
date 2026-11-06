# Mapa de la memoria del club

Grafo actualizado con Graphify 0.9.97 a partir de las doce notas originales de `memory/`, el 6 de noviembre de 2026: 61 conceptos, 111 relaciones y ocho comunidades. Conserva las decisiones y publicaciones de octubre y añade Claude SEO, la exportación de Search Console y la consulta directa posterior como cortes distintos, las inspecciones y tres solicitudes de indexación aceptadas, la autorización expresa y la publicación comprobada en `710f282`. No convierte solicitudes en indexación completada ni acredita posiciones de Google. Los nodos y enlaces conservan su nota de origen y distinguen relaciones explícitas e inferidas. Cobertura de las doce notas e integridad de enlaces comprobadas antes de exportar.

- `graph.json`: grafo portable para consultas.
- `graph.html`: visor interactivo generado por Graphify.
- `GRAPH_REPORT.md`: análisis y preguntas sugeridas.
- `labels.json`: nombres de las comunidades.
- `../memory/Mapa/graph.canvas`: canvas de Obsidian; `memory/Mapa/` contiene las notas exportadas.

La memoria de referencia empieza en [memory/Inicio.md](../memory/Inicio.md). El mapa es un derivado, no una fuente alternativa de decisiones. No incluye una transcripción literal del chat.

Para consultar desde otro equipo:

```sh
python3 -m venv build/graphify-venv
build/graphify-venv/bin/python -m pip install -r requirements-memory.txt
build/graphify-venv/bin/graphify query "registro Luma" --graph graphify-out/graph.json
```

Para repetir solo la exportación del grafo ya guardado:

```sh
build/graphify-venv/bin/graphify export html --graph graphify-out/graph.json --labels graphify-out/labels.json
build/graphify-venv/bin/graphify export obsidian --graph graphify-out/graph.json --labels graphify-out/labels.json --dir memory/Mapa
python3 scripts/adapt-memory-vault.py
```

Si cambian las notas, la extracción semántica debe actualizarse mediante la skill oficial de [Graphify](https://github.com/Graphify-Labs/graphify) antes de exportar. Excluir `memory/Mapa`, `.obsidian` y los propios resultados. No ejecutar una reextracción de código para sustituir este grafo de notas: podría omitir su contenido.

Los entornos Python, cachés y rutas del intérprete son locales y se excluyen de Git. Los contadores de tokens del subagente no están disponibles; los ceros de su plantilla no significan consumo cero.

El paso de adaptación añade a las notas generadas su contexto y un enlace a la nota original, ajusta las rutas del canvas a la bóveda raíz `memory/` y copia allí los colores de comunidades. Abre `memory/`, no la subcarpeta `Mapa`, como bóveda.
