"""Adapt Graphify's nested export to the repository's memory/ Obsidian vault."""

import json
import re
from pathlib import Path
from urllib.parse import quote

root = Path(__file__).resolve().parents[1]
vault = root / "memory"
export = vault / "Mapa"
graph = json.loads((root / "graphify-out/graph.json").read_text(encoding="utf-8"))
by_label = {node["label"]: node for node in graph["nodes"]}

for note in export.glob("*.md"):
    text = note.read_text(encoding="utf-8")
    heading = re.search(r"^# (.+)$", text, re.MULTILINE)
    node = by_label.get(heading[1]) if heading else None
    if not node:
        continue
    original = root / node["source_file"]
    relative_source = original.relative_to(vault)
    details = []
    if node.get("description"):
        details.append(node["description"])
    if node.get("rationale"):
        details.append(f'**Motivo:** {node["rationale"]}')
    details.append(f'[Nota original](../{relative_source.as_posix()})')
    section = "<!-- project-memory:start -->\n" + "\n\n".join(details) + "\n<!-- project-memory:end -->"
    if "<!-- project-memory:start -->" in text:
        text = re.sub(r"<!-- project-memory:start -->.*?<!-- project-memory:end -->", lambda _: section, text, flags=re.DOTALL)
    else:
        text = text[:heading.end()] + "\n\n" + section + text[heading.end():]
    note.write_text(text, encoding="utf-8")

canvas_path = export / "graph.canvas"
canvas = json.loads(canvas_path.read_text(encoding="utf-8"))
for node in canvas.get("nodes", []):
    if node.get("type") == "file":
        path = Path(node["file"])
        if path.parts[0] != "Mapa":
            node["file"] = (Path("Mapa") / path).as_posix()
        assert (vault / node["file"]).is_file(), node["file"]
canvas_path.write_text(json.dumps(canvas, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")

colors = export / ".obsidian/graph.json"
if colors.is_file():
    (vault / ".obsidian").mkdir(exist_ok=True)
    (vault / ".obsidian/graph.json").write_text(colors.read_text(encoding="utf-8"), encoding="utf-8")

report_path = root / "graphify-out/GRAPH_REPORT.md"
report = report_path.read_text(encoding="utf-8")
report = report.replace("Token cost: 0 input · 0 output", "Token cost: no disponible; extracción realizada por el asistente de esta sesión")
report = re.sub(
    r"\[\[(_COMMUNITY_[^|\]]+)\|([^\]]+)\]\]",
    lambda match: f'[{match[2]}](../memory/Mapa/{quote(match[1] + ".md")})',
    report,
)
report_path.write_text(report, encoding="utf-8")

print(f"Bóveda adaptada: {len(by_label)} conceptos con contexto y enlaces a sus fuentes; canvas relativo a memory/.")
