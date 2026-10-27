---
title: Continuar desde otro equipo
type: workflow
updated: 2026-10-27
tags: [memoria, continuidad]
---

# Continuar el proyecto

1. Clonar el repositorio o hacer `git pull` para tener los últimos cambios.
2. Abrir la carpeta del proyecto en el asistente. `AGENTS.md` dirige a [[Inicio]], [[Estado]] y la nota de sesión más reciente.
3. Leer las decisiones aplicables en [[Decisiones]] antes de proponer cambios.
4. Para ver las notas y sus relaciones, abrir `memory` como bóveda en Obsidian y usar su vista de grafo o el canvas exportado por [[Graphify]].

Mensaje útil para una nueva conversación: «Continúa Barcelona Perfume Club. Lee AGENTS.md y memory/Inicio.md, memory/Estado.md y la última nota de memory/sesiones/ antes de trabajar».

Esto conserva contexto en archivos; no transfiere automáticamente el historial del chat ni los recuerdos internos de una aplicación. El nuevo asistente debe tener acceso al repositorio y leer las notas.

## Mantener la memoria

Al terminar una sesión relevante, actualizar [[Estado]], las decisiones realmente aprobadas y una nota fechada en `sesiones/`: petición, cambios, verificaciones, publicación y pendientes. Enlazar las notas relacionadas con `[[wikilinks]]`. No registrar hipótesis como hechos ni marcar un despliegue correcto antes de comprobarlo.

El grafo nativo de Obsidian sigue los enlaces de las notas. El mapa derivado de Graphify debe regenerarse si cambia el contenido que indexa. Si hay discrepancias, consultar el código y las notas originales.

Subir las notas a GitHub para compartirlas entre equipos. Antes de editar desde otra máquina, traer los cambios; antes de subir, revisar y resolver conflictos. No guardar tokens, datos de asistentes, archivos `.env` ni rutas locales como si existieran en todos los equipos. Las preferencias de paneles de Obsidian se excluyen de Git.

Consulta [[Web]] para los comandos de desarrollo y publicación, y [[Graphify]] para consultar el mapa.
