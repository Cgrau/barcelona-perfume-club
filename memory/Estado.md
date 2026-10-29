---
title: Estado actual del proyecto
type: status
updated: 2026-10-29
tags: [estado, web]
---

# Estado actual

## Quiénes somos: publicación autorizada

El 29 de octubre se prepara `/sobre-el-club/`, con el propósito del club, relato conjunto ampliado de Carles y Laura y redes personales de Carles Grau Perfume. Carles se presenta como perfumista autodidacta y divulgador de perfumería, con el objetivo de crear su propia marca de perfumes; se conecta con el apoyo de Laura y el origen del club. **Tras revisar y aprobar el texto en local, Carles pide «súbelo a producción» el 29 de octubre de 2026.** Esta autorización sustituye la restricción inicial de no subir ni publicar. Compilación, pruebas y despliegue se comprueban antes de dar la publicación por terminada. Carles proporciona su retrato de redes para usarlo ahora en «Quiénes somos»; se muestra en blanco y negro mediante CSS, con pie que lo identifica. La foto profesional conjunta se añadirá más adelante. Contexto y redacción en [[sesiones/2026-10-29]].

Compilación y control SEO correctos para tres páginas estáticas; dieciséis pruebas Playwright correctas en móvil y escritorio, incluidas navegación sin JavaScript y accesibilidad axe. Capturas en `docs/previews/about-local-*.png`. Menú aprobado: Inicio · El club · Eventos · Quiénes somos · Contacto. La home y sus secciones se conservan como antes; Carles y Laura van únicamente en la página aparte «Quiénes somos». Carles aprueba con «me encanta» el relato conjunto ampliado de Quiénes somos. El texto queda aprobado y la publicación está autorizada; falta comprobar el nuevo despliegue y el dominio público. La versión pública comprobada sigue siendo la ficha e identidad SEO de `4f0a26b` descrita más abajo.

## Web publicada

La web anuncia el primer encuentro de Barcelona Perfume Club: [[eventos/2026-11-08-perfumes-nicho]]. La portada tiene enlace directo a Luma; el listado aparece después de la portada, con cartel, fecha, lugar, descripción y acceso a la inscripción.

El requisito de acceso está destacado en un recuadro marfil: registro obligatorio y plaza confirmada en Luma. Sin registro y confirmación no se podrá acceder. También se explica en la portada y las preguntas frecuentes. La intención expresa de Carles es evitar que se presente gente sin invitación.

Sasva y Gparfums enlazan a sus Instagram desde la descripción. Los eventos siguen manteniéndose manualmente en `src/content.ts`.

Carles aprueba el diseño y solicita subirlo todo a GitHub en [[sesiones/2026-10-27]]. La actualización de la web está publicada: commit `9e4ab8a`, [despliegue correcto](https://github.com/Cgrau/barcelona-perfume-club/actions/runs/40570602908). Se comprueba el HTML del dominio público y aparecen el evento, cartel, aviso obligatorio y enlaces de Luma y las marcas. La memoria se guarda también en este repositorio.

Comprobaciones locales actualizadas el 29 de octubre: compilación, control SEO de las dos páginas y doce pruebas Playwright correctas, con móvil, escritorio y accesibilidad. Capturas en `docs/previews/event-page-*.png`; las de la revisión anterior se conservan en `first-event-*`. No se ha repetido Lighthouse localmente para este cambio.

Pendientes de producto: añadir los siguientes encuentros cuando existan y revisar el anuncio de portada al cambiar la programación. La sincronización automática con Luma no está implementada ni aprobada como trabajo adicional. Los datos del titular para el aviso legal siguen pendientes según el README.

Contexto: [[Decisiones]], [[Web]], [[Eventos]] y [[Continuidad]].

## Mejora SEO del 29 de octubre

Carles autoriza solo la página propia del evento y coherencia de identidad; descarta pedir enlaces a colaboradores y deja crónica y seguimiento periódico para después del encuentro. La ficha se prepara en `/eventos/descubriendo-perfumes-nicho/`, con metadatos propios, navegación, acceso condicionado y sitemap generado. Organization y WebSite comparten la identidad de `src/content.ts` mediante `src/seo.ts`.

Luma confirma el nombre del calendario, dominio y handles oficiales y conserva fecha, horario y lugar del evento. La inscripción está en lista de espera al consultarlo; no se promete una plaza por registrarse. No se han editado perfiles externos.

La ficha y la identidad SEO se publican en `4f0a26b`, con [despliegue correcto](https://github.com/Cgrau/barcelona-perfume-club/actions/runs/40828628191). Se comprueban en el dominio la ficha, canonical, acceso condicionado, enlace desde portada, identidad WebSite y sitemap. La nueva URL es https://barcelonaperfumeclub.com/eventos/descubriendo-perfumes-nicho/. No se acredita una primera posición en Google. Detalle en [[sesiones/2026-10-29]].
