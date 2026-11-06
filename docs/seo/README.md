# SEO del proyecto

Implementación posterior a la auditoría: [relevancia local y solicitudes en Search Console del 6 de noviembre](../SEO-IMPLEMENTATION-2026-11-06.md). Distinguir ese trabajo de la primera entrega local descrita aquí.

El proyecto utiliza [Claude SEO de AgriciDaniel](https://github.com/AgriciDaniel/claude-seo), licencia MIT. El 6 de noviembre de 2026 se instala y verifica la versión **2.5.0**, habilitada con alcance `project` en `.claude/settings.json`. La referencia inspeccionada del código upstream es `6be93f45064ffbadced572b5d5c95f55fd263af0`.

## Usarlo en Claude Code

Abre esta carpeta en una sesión nueva de Claude Code. La configuración declara el marketplace y el plugin; la instalación y su caché son locales a cada equipo. Comprueba `claude plugin list --json` si cambias de ordenador. Si necesitas reinstalar:

```sh
claude plugin marketplace add https://github.com/agricidaniel/claude-seo.git --scope project
claude plugin install claude-seo@agricidaniel-claude-seo --scope project
```

La URL en minúsculas evita el conflicto entre nombre de caché y nombre del marketplace observado en este Mac. No se añaden extensiones ni claves de servicios de pago.

Comandos del plugin:

```text
/seo doctor
/seo audit https://barcelonaperfumeclub.com/
/seo page https://barcelonaperfumeclub.com/eventos/descubriendo-perfumes-nicho/
```

El plugin y sus guías están instalados. **El entorno Python/Chromium propio del plugin no está preparado.** `doctor --json` devuelve `ready: false` y `browser_ready: false`. El análisis del 6 de noviembre aplica sus guías con las herramientas disponibles del proyecto: HTTP, Python estándar para el CSV, Playwright/Brave y Lighthouse. No se presenta como una ejecución de todos los scripts del plugin.

La [skill principal, apartado Runtime Setup](https://github.com/AgriciDaniel/claude-seo/blob/6be93f45064ffbadced572b5d5c95f55fd263af0/skills/seo/SKILL.md) indica: «Run setup only when the user explicitly invokes `/seo setup` or explicitly asks to repair dependencies.» Por eso no se instala automáticamente esa segunda capa. Para habilitar sus scripts y generador PDF, el usuario puede solicitar `/seo setup`, que prepara un entorno aislado. Los scripts del plugin deben ejecutarse mediante su lanzador `scripts/claude-seo`, sin instalar dependencias globales.

## Usarlo con otros agentes

Esta configuración registra un plugin de **Claude Code**; no registra automáticamente skills en Codex. Otros agentes pueden consultar las guías portables del repositorio upstream y aplicar el método con sus herramientas, como en esta auditoría. Deben leer antes `AGENTS.md` y la memoria: el plugin no sustituye las decisiones aprobadas del proyecto.

## Datos e informes

- [Auditoría del 6 de noviembre de 2026](2026-11-06/barcelonaperfumeclub.com-audit/FULL-AUDIT-REPORT.md).
- [Plan de acciones](2026-11-06/barcelonaperfumeclub.com-audit/ACTION-PLAN.md).
- La exportación original de Search Console se lee desde el ZIP aportado por Carles. Sus tablas calculadas en JSON, HTML y mediciones de laboratorio se conservan en `build/seo-2026-11-06/`, ignorado por Git. El ZIP original sigue en su ubicación de origen. No copiar datos privados a `public/`.
- Los informes y la memoria recogen agregados y limitaciones. No son una conexión automática a Search Console, un seguimiento periódico contratado ni una medición de registros confirmados en Luma.
- Esta instalación y auditoría se preparan en local. No se modifica ni publica la web por este trabajo.

Al cambiar la web, ejecutar las verificaciones de `AGENTS.md`. Las propuestas del informe requieren una petición de implementación; no modifican por sí solas el alcance aprobado.
