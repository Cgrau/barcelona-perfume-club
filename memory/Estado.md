---
title: Estado actual del proyecto
type: status
updated: 2026-10-29
tags: [estado, web]
---

# Estado actual

## Quiénes somos publicado

El 29 de octubre se prepara `/sobre-el-club/`, con el propósito del club, relato conjunto ampliado de Carles y Laura y redes personales de Carles Grau Perfume. Carles se presenta como perfumista autodidacta y divulgador de perfumería, con el objetivo de crear su propia marca de perfumes; se conecta con el apoyo de Laura y el origen del club. **Tras revisar y aprobar el texto en local, Carles pide «súbelo a producción» el 29 de octubre de 2026.** Esta autorización sustituye la restricción inicial de no subir ni publicar. Compilación, control SEO y dieciséis pruebas correctos; despliegue y dominio público comprobados. Carles proporciona su retrato de redes para usarlo ahora en «Quiénes somos»; se muestra en blanco y negro mediante CSS, con pie que lo identifica. La foto profesional conjunta se añadirá más adelante. Contexto y redacción en [[sesiones/2026-10-29]].

Compilación y control SEO correctos para tres páginas estáticas; dieciséis pruebas Playwright correctas en móvil y escritorio, incluidas navegación sin JavaScript y accesibilidad axe. Capturas en `docs/previews/about-local-*.png`. Menú aprobado: Inicio · El club · Eventos · Quiénes somos · Contacto. La home y sus secciones se conservan como antes; Carles y Laura van únicamente en la página aparte «Quiénes somos». Carles aprueba con «me encanta» el relato conjunto ampliado de Quiénes somos. Publicado en `4df3f11`, con [GitHub Pages correcto](https://github.com/Cgrau/barcelona-perfume-club/actions/runs/40939189954). Verificados en https://barcelonaperfumeclub.com/ portada, menú, Quiénes somos, relato aprobado, redes personales, retrato y su presentación en blanco y negro, canonical, AboutPage y sitemap de tres URLs. El evento conserva el acceso condicionado a registro y plaza confirmada en Luma. La ficha e identidad SEO previas de `4f0a26b` se conservan.

## Indexación confirmada el 29 de octubre

Carles aporta una captura actual de Search Console de `https://barcelonaperfumeclub.com/`: «URL is on Google», «Page is indexed» y HTTPS correcto. La portada está indexada según esa evidencia; no se deduce su posición para una consulta. Antes muestra el repositorio de GitHub y comunica que aparece como noveno al buscar la marca; es una observación del usuario, no una medición independiente del agente. Comprobación pública: portada 200, sin noindex, robots permite rastreo, canonical al dominio y redirecciones HTTP/www/github.io correctas. En la revisión inicial, el campo Website del repositorio estaba vacío. Tras la autorización «hazlo entonces», se configura con https://barcelonaperfumeclub.com/, la descripción pasa a «Código fuente de la web oficial de Barcelona Perfume Club.» y el README abre con «Código fuente» y un enlace destacado a la web oficial. Los metadatos se verifican mediante la API de GitHub. No se ha solicitado reindexación; el rendimiento por consulta aún no es visible. Carles aporta después el informe Performance con rango «3 months»: 6 impresiones, 0 clics y posición media agregada de 4,7; la tabla Queries muestra «No data» y el gráfico visible llega al 27 de octubre. Una captura posterior de la pestaña PAGES confirma que las seis impresiones y cero clics corresponden exactamente a https://barcelonaperfumeclub.com/. Esto acredita apariciones de la portada, pero no una posición para «Barcelona perfume club» ni un ranking actual desde Barcelona. Las consultas no se identifican; su ocultación por escaso volumen y anonimización es una explicación compatible, no un diagnóstico demostrado. Referencia: https://support.google.com/webmasters/answer/17010575. Estos datos no se atribuyen a la versión publicada el 29. Después del diagnóstico, el usuario autoriza los ajustes de identidad del repositorio; la web publicada se conserva.

## Relevancia para variantes y búsqueda local

Carles reitera el objetivo de posicionar la portada por «Barcelona perfume club», «perfume club Barcelona» y «perfume club» desde Barcelona. Se ajustan el título y la descripción de portada y la primera respuesta de preguntas frecuentes para expresar el carácter de club de perfumería en Barcelona. Se conservan titular visible, evento, diseño y registro y plaza confirmada en Luma. El marcado Organization ya declara Barcelona como área atendida; no se atribuye una sede permanente al club. La posición genérica depende también de ubicación, idioma y dispositivo. Compilación, control SEO y dieciséis pruebas correctos; revisión independiente sin incidencias. Despliegue de esta actualización pendiente de comprobar; ninguna posición para esas consultas está acreditada.

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
