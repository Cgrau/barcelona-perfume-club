# Barcelona Perfume Club: una invitación a compartir

Propuesta local, 23 de octubre de 2026. No publicar hasta que Carles valore la vista previa. Conserva React, Vite, TypeScript y GitHub Pages, las dos fuentes locales, el logo y la analítica configurada.

## Brief y límites

Una comunidad en Barcelona para amantes del perfume, todavía preparando sus primeros eventos. La web debe despertar interés por conocer gente, descubrir marcas y compartir fragancias, y facilitar el acceso a Luma. No inventar fechas, asistentes, precios ni marcas colaboradoras. Fotografía de stock de ambiente autorizada por Carles en esta revisión, sin imágenes generadas, asteriscos o puntos decorativos. Cabecera con logo centrado y menú debajo, redes fijas abajo y scroll exclusivo del contenido central. El titular conserva su texto y ocupa dos líneas cuando hay espacio, con más líneas en móvil. Contacto por email con el tono cercano ya aprobado. No simular una suscripción de newsletter que todavía no está conectada.

Carles permite decidir si el movimiento aporta valor. Esta propuesta mantiene una escena estática en reposo y usa feedback breve de relleno y desplazamiento en los controles. No necesita un vídeo o una pieza de motion graphics, WebGL, loaders ni scroll controlado por una librería. Esta decisión adapta awwwards a las necesidades del club.

## Revisión de partida

Evidencias: `../review-before/`. Jury encuentra HTML sin contenido antes de JavaScript, ausencia de sitemap y Twitter card, y una composición uniforme que deja poco espacio para expresar las actividades. El crítico independiente revisa capturas, no el código. Sus puntuaciones son estimaciones sin afiliación a Awwwards.

## Tres conceptos considerados

| Concepto                  | Anclaje                                                                                                             | Originalidad / ajuste / viabilidad / portabilidad (1–5, menor portabilidad es mejor) |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| La invitación             | Reunirse en Barcelona para compartir perfume; formato de una invitación impresa que desemboca en el calendario real | 4 / 5 / 5 / 2                                                                        |
| El cuaderno de cata       | Explorar aromas mediante anotaciones y fichas                                                                       | 4 / 3 / 4 / 3                                                                        |
| Barcelona en conversación | Ritmo de una publicación cultural local                                                                             | 3 / 4 / 5 / 3                                                                        |

Se elige La invitación: sirve al momento de lanzamiento y al primer evento, con una fotografía ilustrativa de ambiente, sin presentar talleres ajenos como actividad propia del club.

## Concept card

- Idea: una invitación abierta a disfrutar del perfume en compañía.
- Metáfora: la invitación impresa que te presenta a las personas y al plan, antes de confirmar tu asistencia.
- Firma: el gran titular y la apertura tipográfica de la conversación del club, sobre el mismo fondo burdeos; la pieza de evento cierra la invitación en Luma.
- Emoción: cercanía, curiosidad y ganas de compartir, con criterio visual.
- Movimiento: respuesta corta al tocar o señalar, sin movimiento continuo.
- Frame: el titular burdeos/marfil y el bloque «El club» con manifiesto y verbos alineados, en burdeos y marfil.

## Sistema

- Fondo y tinta de marca: `#640817`.
- Texto principal: `#F3EEE0`.
- Texto secundario sobre burdeos: marfil al 82%; información auxiliar al 72%.
- Fondo único burdeos y tinta única marfil. Se retira el rosa tras la revisión visual de Carles.
- Líneas sobre burdeos: marfil al 25%; sin superficies de otro color.
- Playfair Display: titulares y frases de invitación. Se mantiene por su continuidad con el logo existente, no como elección automática.
- Jost: cuerpo y navegación; 17–18 px para texto, 12–14 px para enlaces y etiquetas.
- Grid: dos alineaciones claras, con cambios de proporción entre portada, manifiesto y evento. El móvil recompone en una columna y mantiene acciones de al menos 44 px.
- Sin tarjetas de tres columnas, números decorativos, flechas ni etiquetas repetidas delante de todos los títulos.

## Composición

```
Cabecera fija:            logo centrado
                       El club · Eventos · Contacto

Centro desplazable:
  Portada:     frase de comunidad                 Barcelona
               gran titular en dos líneas
               introducción                acción + aviso

  El club:     [mismo fondo burdeos, tinta marfil]
               título        manifiesto + objetivo
               Descubrir     descripción
               Compartir     descripción
               Conectar      descripción

  Eventos:     título y texto        invitación al primer evento
                                    fecha por anunciar + Luma

  Contacto:    invitación a conversar + email real

Footer fijo:                 Instagram · TikTok
```

## Entrega local y calidad

- Construcción con HTML prerenderizado desde React. La producción sirve HTML y CSS sin hidratar la interfaz; Umami se conserva en las compilaciones configuradas. El servidor de desarrollo mantiene React para editar con recarga rápida.
- Página 404 propia y metadatos sociales completos, robots y sitemap.
- No se añaden dependencias ni formularios.
- Pruebas de anclas, enlaces, scroll central, teclado, accesibilidad y tamaños de pantalla.
- Dos pasadas de capturas y revisión con jury/awwwards sobre producción local, con suplemento de capturas del scroll interior.
- Una puntuación creativa no justifica alterar necesidades reales ni añadir datos ficticios. Registrar las limitaciones de una landing de prelanzamiento y cualquier diferencia entre la herramienta y el scroll interno.

## Corrección tras revisión local

Carles señala que los varios colores y el fondo del logo restan profesionalidad. Se unifica toda la página en burdeos y marfil. El logo conserva exactamente el lettering de su archivo original: un SVG con una máscara de luminancia elimina el fondo opaco y aplica la tinta marfil, sin reconstruir la tipografía. Una prueba de las cuatro esquinas detectó primero alfa 255 en el logo original; la versión corregida debe devolver alfa 0.

## Fotografía de ambiente, revisión posterior

Carles considera plana la versión solo tipográfica y propone usar stock. Se prueba una imagen de Fulvio Ciccolo disponible bajo Unsplash License, de esencias y vidrio con luz cálida. El titular mantiene dos líneas en escritorio y tres en móvil. La fotografía acompaña al texto en escritorio y pasa delante de la introducción en móvil. Se sirve en tres tamaños WebP desde el propio sitio y lleva crédito visible e identificación como imagen de ambiente. Fuente y licencia en `docs/PHOTO-CREDITS.md`. El resto de la interfaz mantiene burdeos y marfil; no se reintroduce el rosa.

Para conservar el rendimiento con la fotografía, `static-landing` elimina únicamente la entrada React de la compilación HTML; los enlaces, anclas, scroll y estados visuales son nativos. Si se incorporan componentes interactivos de React, será necesario retirar esa optimización para hidratarlos o usar un script específico. Se verifican las seis pruebas directamente sobre el resultado estático.

## Última revisión de la portada

Carles descarta la fotografía de esencias. Se retira de la propuesta local y se restablece la composición sin imagen. Pide una portada a todo el ancho entre el menú y El club. Carles confirma que la portada será sin imágenes. Se amplía el contenedor central a todo el ancho y la portada ocupa como mínimo el área visible entre cabecera y footer; El club comienza al continuar el scroll. Los textos conservan un ancho de lectura acotado. No se selecciona otra fotografía.


## Ajuste de espacio en la portada

Carles observa demasiado espacio vacío en la primera sección. La portada conserva todo el ancho y pasa a tener altura natural, con 48 px de margen interior superior y 64 px inferior en escritorio y 28/40 px en móvil. Se elimina el centrado vertical a pantalla completa para acercar el titular al menú y permitir que El club empiece antes.


## Corrección del logo de cabecera — 24 de octubre de 2026

Carles observa una diferencia entre el fondo del logo y el de la cabecera. En la captura de producción realizada con Brave, cabecera y cuerpo computan #640817 y no se reproduce el recuadro; no se atribuye el caso a una caché o navegador concreto sin evidencia. Se retira del uso activo la presentación mediante filtro SVG sobre WebP y se sustituyen sus letras por trazos vectoriales obtenidos del PNG original. No se cambia la tipografía ni la composición. El nuevo logo, logo-vector.svg, contiene únicamente paths de tinta marfil y transparencia fuera de las letras. Una dirección nueva evita reutilizar la imagen anterior en caché.


## Preguntas frecuentes y futuras fotos de eventos — 24 de octubre de 2026

Tras acordar centrarse en SEO orgánico, Carles confirma que se incorporarán fotografías propias cuando se celebre el primer evento. Hasta entonces la landing sigue sin fotografías ni galerías vacías. Se amplía El club con cuatro preguntas frecuentes, en detalles HTML nativos, manteniendo burdeos, marfil, cabecera y redes fijas. Las respuestas explican hechos ya confirmados y los planes de lanzamiento sin inventar fechas ni condiciones de participación.
