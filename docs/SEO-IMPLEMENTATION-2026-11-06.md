# Relevancia local y actualización en Google — 6 de noviembre de 2026

Carles solicita mejorar el dominio oficial para «Barcelona perfume club», «perfume club Barcelona» y «perfume club» desde Barcelona, frente al resultado del repositorio. No se garantiza el primer puesto. Se aplica la skill SEO a contenido y enlaces existentes, conservando el titular principal, diseño y acceso condicionado a Luma.

## Cambios

- El encabezado de El club pasa a «Un perfume club en Barcelona»; el menú sigue diciendo «El club».
- La introducción del listado describe encuentros de perfumería en Barcelona, y una respuesta práctica explica el lugar del primer encuentro enlazando su ficha. La dirección pertenece al evento, sin declarar una sede permanente.
- Portada enlaza contextualmente a la historia del club; About enlaza el nombre del club a la portada. Los nuevos enlaces se distinguen visualmente.
- WebSite incorpora el dominio como nombre alternativo de respaldo; se añade `og:site_name`. El nombre preferido sigue siendo Barcelona Perfume Club. La [guía de Google sobre nombres de sitio](https://developers.google.com/search/docs/appearance/site-names) permite indicar el dominio como alternativa. Esto ayuda a expresar identidad, no fuerza un resultado ni una posición.
- README se reduce a documentación de desarrollo, con acceso destacado al dominio oficial. Las instrucciones completas se conservan en [DEVELOPMENT.md](DEVELOPMENT.md). El campo Website y la descripción pública del repositorio ya eran correctos; se verifican mediante la API y se conservan. GitHub sigue siendo público. No se puede aplicar un `noindex` al repositorio desde el código del sitio.

No se crean páginas por cada variante de palabras, sede ficticia, marcado Event ni enlaces solicitados a colaboradores. El H1 «El perfume se disfruta más en compañía.» se conserva. La estrategia de crónica y fotografías reales sigue pendiente de que ocurra el encuentro.

## Search Console: comprobación directa posterior a la auditoría

Se consulta la sesión existente de Search Console en Brave, sin conectar una API ni guardar datos de la cuenta.

| Página | Estado observado el 6 de noviembre | Acción |
| --- | --- | --- |
| Portada | «URL is on Google», «Page is indexed». Canonical declarado `https://barcelonaperfumeclub.com/`, Google-selected canonical: «Inspected URL». Último rastreo mostrado: 24 Oct 2026, 00:12:32; Googlebot smartphone; rastreo, descarga e indexación permitidos | Solicitud enviada y confirmada: «Indexing requested», añadida a cola prioritaria |
| Sobre el club | «URL is unknown to Google», sin último rastreo | Solicitud enviada y confirmada: «Indexing requested», añadida a cola prioritaria |
| Ficha del encuentro | «Discovered – currently not indexed», sitemap reconocido, sin último rastreo | Solicitud enviada y confirmada: «Indexing requested», añadida a cola prioritaria |

El sitemap figura **Success**, último leído el **4 de noviembre**, **tres páginas descubiertas**. No se reenvía un sitemap correcto sin necesidad. La portada no está canonicalizada al repositorio. Los estados anteriores de las interiores se observan directamente aquí; no se deducen de su ausencia en el ZIP. Las solicitudes aceptadas no significan que Google las haya indexado ya ni aseguran una fecha.

El informe de rendimiento abierto muestra **3 clics y 17 impresiones**, CTR 17,6 % y media 3,9, con el gráfico del 22 de octubre al 4 de noviembre y una única consulta visible «perfumes club barcelona», dos impresiones. Es una observación posterior y distinta del ZIP (15 impresiones hasta el 3); se conservan ambos cortes y no se mezclan ni se atribuyen a estas mejoras.

## Validación

Compilación y `seo:check` correctos para tres páginas. Se amplía el control de identidad para comprobar `og:site_name` y el nombre alternativo del dominio en todas. Se actualizan las referencias al encabezado en las pruebas existentes.

Playwright: **16/16 correctas con un worker**, móvil y escritorio, tras completar la compilación. En una ejecución paralela reaparece el fallo previo de desplazamiento móvil con `End`; la suite en serie pasa completa, sin cambiar producto ni aserciones para evitarlo. Se corrigen también dos expectativas que aún buscaban el encabezado anterior.

Revisión adicional sin JavaScript: enlaces contextuales de ida y vuelta correctos, nueva respuesta visible, sin desbordamiento horizontal a 320, 375, 768, 1000 y 1440 px. Capturas: [escritorio](previews/seo-local-desktop.png), [móvil](previews/seo-local-mobile.png), [respuesta en escritorio](previews/seo-local-desktop-faq.png) y [respuesta en móvil](previews/seo-local-mobile-faq.png). No se repite Lighthouse tras estos ajustes de texto; las medidas anteriores pertenecen a la auditoría previa.

## Publicación

Carles confirma expresamente «Si, publicar esta versión». Se sube `0e7c378` a `main`. [SEO y Lighthouse](https://github.com/Cgrau/barcelona-perfume-club/actions/runs/42268878031) terminan correctamente. El [primer workflow de Pages](https://github.com/Cgrau/barcelona-perfume-club/actions/runs/42268877852) compila correctamente, pero sus dos intentos de despliegue fallan después de permanecer en `deployment_queued`, con «Deployment failed, try again later». El dominio sigue sirviendo la versión anterior; no se declara publicación completada. Se prepara una nueva ejecución completa con artefacto nuevo.

Mientras se reintenta, se solicita actualizar la portada que ya está activa y contiene cambios anteriores al rastreo del 24 de octubre. Google confirma «Indexing requested», por lo que las tres solicitudes quedan aceptadas. No se afirma que Google haya descargado todavía esta versión nueva ni se repiten solicitudes para intentar subir su prioridad.

Referencia previa: [auditoría y datos del ZIP](seo/2026-11-06/barcelonaperfumeclub.com-audit/FULL-AUDIT-REPORT.md).
