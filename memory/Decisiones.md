---
title: Decisiones y preferencias aprobadas
type: decisions
updated: 2026-10-29
tags: [diseno, decisiones]
---

# Decisiones aprobadas

## Identidad

Barcelona Perfume Club reúne en Barcelona a personas que disfrutan del perfume para descubrir marcas, compartir fragancias y conocer gente con la misma pasión. No hace falta ser experto. Tono cercano, claro y sin inventar hechos, fechas o colaboradores.

## Diseño de la web

- Burdeos `#640817` y marfil `#f3eee0` en toda la interfaz.
- Logo original, con lettering conservado, en SVG transparente: `public/media/logo-vector.svg`.
- Fuentes locales Playfair Display y Jost.
- Titular aprobado: «El perfume se disfruta más en compañía.»
- Portada tipográfica, sin fotografía de stock. Altura natural, sin grandes huecos ni centrado a pantalla completa.
- Cabecera y redes sociales fijas; solo se desplaza el contenido central.
- Sin animaciones de entrada o movimiento continuo.

El cartel del primer evento sí se usa en [[Eventos]], completo y sin recortes. Carles lo proporciona durante esta sesión. No se reintroduce la fotografía de stock descartada.

## Primer evento y acceso

Se sustituye «próximamente» por el anuncio real del primer encuentro. «Eventos» navega al listado de la web. Cada ficha lleva a la página específica de Luma, y el calendario completo sigue disponible.

El acceso requiere registro **y plaza confirmada** en Luma. Carles pide recalcarlo mucho para evitar asistentes sin invitación. El aviso aparece en un recuadro de alto contraste antes del botón, y también en portada y preguntas frecuentes. No suavizarlo a una recomendación opcional.

Carles aprueba el resultado y autoriza subirlo en [[sesiones/2026-10-27]]. Las pautas técnicas están en [[Web]]; la continuidad entre equipos, en [[Continuidad]].

## Alcance SEO aprobado el 29 de octubre

Solo se realizan ahora la página propia del primer evento y coherencia de identidad entre la web y sus canales oficiales. Carles descarta solicitar enlaces a colaboradores. La crónica con fotos y el seguimiento periódico de consultas se dejan para después del evento. No convertirlos en tareas actuales ni prometer un primer puesto en Google.

Se conserva el diseño y el acceso condicionado. Se mantiene HTML estático y un sitemap generado para las rutas reales; no se añade un router de cliente. Se usa WebPage con migas de pan y se pospone Event para rich results mientras la admisión requiera confirmación. No se debilita el requisito de acceso para ajustarse a una función de Google. Contexto: [[sesiones/2026-10-29]].

## Quiénes somos: contenido y publicación

Carles solicita una página sobre el club y sus organizadores, Carles y Laura, con el motivo de crear esta comunidad y sus objetivos. Carles pide después ampliar el relato conjunto de «Somos Carles y Laura»: se explica que es perfumista autodidacta y divulgador de perfumería, comparte contenido como Carles Grau Perfume y quiere crear su propia marca de perfumes. Se enlaza con el impulso y visión de negocio de Laura y su evolución del gusto, sin dividirlo en biografías separadas ni afirmar que la marca o sus perfumes ya se han lanzado. Carles aclara después que la home debe quedar como antes, con anuncio y evento; Carles y Laura van únicamente en «Quiénes somos», una opción nueva del menú. Orden aprobado: Inicio · El club · Eventos · Quiénes somos · Contacto; «El club» conserva el ancla de la home. El trasfondo de Laura se redacta con otras palabras: confianza e impulso para empezar a crear contenido, visión de negocio y gusto que se amplía desde los gourmand hacia fragancias de cuero. No inventar credenciales, productos acabados ni apellido de Laura.

TikTok personal confirmado: `@carles.grau`; YouTube: `@carles.grau.perfume`. Se usa el perfil de Instagram encontrado `@carles.grau.perfume`. Son redes personales de Carles Grau Perfume, separadas de los canales del club. Una foto profesional de los dos queda para más adelante. Después Carles proporciona su retrato de redes y pide colocarlo ahora; deja el blanco y negro al criterio de diseño. Se elige mostrarlo en blanco y negro mediante CSS, conservando el color de la imagen fuente optimizada y sin retocar su aspecto. Solo aparece en «Quiénes somos», con pie que identifica a Carles.

**Carles solicita «súbelo a producción» el 29 de octubre de 2026, después de revisar la versión local y aprobar el relato conjunto.** Se autoriza subir y publicar esta versión con su memoria y grafo. La restricción inicial de mantener el About solo en local queda superada por esta instrucción; no pedir de nuevo autorización para este despliegue. Detalle: [[sesiones/2026-10-29]].

## Diferenciar repositorio y web oficial

Ante el resultado de Google del repositorio, Carles autoriza «hazlo entonces»: añadir https://barcelonaperfumeclub.com/ al campo Website de GitHub y presentar el README como código fuente con enlace destacado a la web oficial. La descripción pública se aclara también como código fuente de la web oficial. Es un ajuste de identidad del repositorio, sin prometer una posición ni cambiar la web o su acceso a eventos. Las métricas de Search Console no prueban que el dominio aparezca cuarto o quinto para la búsqueda de marca.

## Consultas de marca y club local

Carles recalca que quiere visibilidad por «Barcelona perfume club», «perfume club Barcelona» y «perfume club» para quien busca desde Barcelona. Las tres consultas se orientan a la portada. Como criterio de implementación, se refuerzan título, descripción y una respuesta existente de preguntas frecuentes con la actividad de club de perfumería en Barcelona, conservando el nombre, titular visible, diseño y condiciones de acceso. No se prometen posiciones ni se convierten los 4,7 agregados de Search Console en una medición de estas consultas.
