# Mapa de la memoria del club

Grafo actualizado con Graphify 0.9.97 a partir de las diez notas originales de `memory/`, el 29 de octubre de 2026: 50 conceptos y decisiones, 84 relaciones y nueve comunidades. Incluye la ficha publicada del evento, identidad SEO compartida, lista de espera y Quiénes somos publicado y comprobado en `4df3f11` tras la revisión local y la fotografía conjunta aplazada. La portada incorpora la mejora de relevancia local de `650efeb`, publicada y comprobada para orientar las tres consultas de marca y club en Barcelona, sin acreditar posiciones. Los nodos y enlaces conservan su nota de origen; las relaciones distinguen lo explícito de lo inferido. La cobertura de las diez notas y la integridad de los enlaces se comprobaron antes de exportar.

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
