---
title: Estado actual del proyecto
type: status
updated: 2026-10-27
tags: [estado, web]
---

# Estado actual

La web anuncia el primer encuentro de Barcelona Perfume Club: [[eventos/2026-11-08-perfumes-nicho]]. La portada tiene enlace directo a Luma; el listado aparece después de la portada, con cartel, fecha, lugar, descripción y acceso a la inscripción.

El requisito de acceso está destacado en un recuadro marfil: registro obligatorio y plaza confirmada en Luma. Sin registro y confirmación no se podrá acceder. También se explica en la portada y las preguntas frecuentes. La intención expresa de Carles es evitar que se presente gente sin invitación.

Sasva y Gparfums enlazan a sus Instagram desde la descripción. Los eventos siguen manteniéndose manualmente en `src/content.ts`.

Carles aprueba el diseño y solicita subirlo todo a GitHub en [[sesiones/2026-10-27]]. La actualización de la web está publicada: commit `9e4ab8a`, [despliegue correcto](https://github.com/Cgrau/barcelona-perfume-club/actions/runs/40570602908). Se comprueba el HTML del dominio público y aparecen el evento, cartel, aviso obligatorio y enlaces de Luma y las marcas. La memoria se guarda también en este repositorio.

Comprobaciones locales: compilación, control SEO y seis pruebas Playwright correctas, con móvil, escritorio y accesibilidad. Capturas en `docs/previews/first-event-*.png`. No se ha repetido Lighthouse para este cambio.

Pendientes de producto: añadir los siguientes encuentros cuando existan y revisar el anuncio de portada al cambiar la programación. La sincronización automática con Luma no está implementada ni aprobada como trabajo adicional. Los datos del titular para el aviso legal siguen pendientes según el README.

Contexto: [[Decisiones]], [[Web]], [[Eventos]] y [[Continuidad]].
