# Contenido, intención local y experiencia de búsqueda — 6 de noviembre de 2026

Aplicadas las guías de Claude SEO 2.5.0 `seo-content`, `seo-local`, `seo-sxo` y `seo-geo` al código activo de las tres páginas. Revisión sin modificar producto ni publicar. El buscador no pudo abrir el dominio con su herramienta; eso no demuestra una caída. La comprobación HTTP del dominio corresponde al informe técnico.

## Conclusión

El contenido ya explica qué es el club, dónde se reúne, quién lo organiza y cómo solicitar plaza. No se identifica en el código un bloqueo de contenido que justifique rehacer la portada o introducir más repeticiones de palabras clave. La oportunidad concreta es distinguir mejor la entidad en sus canales propios y conservar información útil y actualizada del evento. El rendimiento por las tres consultas objetivo sigue sin acreditarse.

## Qué funciona y su evidencia

- **Portada orientada a comunidad local:** `src/App.tsx` presenta Barcelona Perfume Club como «un club de perfumería en Barcelona» inmediatamente tras el H1 aprobado. La FAQ define «perfume club en Barcelona», y `src/seo.ts` añade ciudad y actividad al título y descripción. No hace falta reemplazar «El perfume se disfruta más en compañía» ni crear tres páginas casi iguales para cada orden de palabras. Google explica que comprende variantes y desaconseja repetir palabras por sistema. [Guía oficial](https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=es).
- **Información que permite decidir:** la ficha del evento tiene título, fecha, horario 12:00–13:30, lugar, dirección, marcas, explicación de la sesión, anfitrión y aviso para quien empieza. Son datos en texto, no solamente dentro del cartel (`src/EventPage.tsx`, `src/content.ts`).
- **Acceso inequívoco:** portada, ficha, FAQ y About exigen registro **y confirmación de plaza** en Luma. La ficha aclara además que lista de espera no equivale a plaza. Debe conservarse.
- **Personas identificables:** About explica el papel conjunto de Carles y Laura, la experiencia autodidacta y divulgativa de Carles y enlaza Instagram, TikTok y YouTube personales. No atribuye un lanzamiento de marca que todavía no ha sucedido. `src/seo.ts` separa `Organization`, `WebSite`, `AboutPage` y `Person` con identificadores estables.
- **Enlaces internos suficientes para tres páginas:** menú hacia About, título del evento hacia la ficha, ficha hacia home/El club y About hacia próximos encuentros. Ninguna de esas dos páginas depende únicamente del sitemap para ser descubierta según el código.
- **Texto extraíble:** definición breve del club, descripción del evento y respuestas de FAQ son comprensibles de forma independiente. Las imágenes tienen alt específico. No se necesita alargar hasta una cantidad arbitraria de palabras.

## Hallazgos y propuestas separadas de errores

### 1. Entidad con denominación muy parecida en Barcelona — prioridad media

**Observado:** otra organización publica **Perfume Club BCN de Smell Lab** en [su propia web](https://www.smell-lab.org/perfume-club). El buscador también devuelve un [grupo Meetup llamado Barcelona Perfume Club](https://www.meetup.com/es-es/barcelona-perfume-club/) cuya descripción lo atribuye a Smell Lab. No es evidencia de relación entre proyectos ni de una posición concreta en Google.

**Propuesta:** mantener nombre completo, dominio oficial, mismos handles y referencia a Carles y Laura coherentes en los perfiles controlados por el club. En los canales propios puede revisarse que el enlace web lleve a `barcelonaperfumeclub.com`, además del enlace operativo de inscripción. No hace falta renombrar el club ni publicar alusiones a otros organizadores. **No se han editado perfiles externos.**

**Dependencia y verificación:** revisar manualmente las bios/perfiles propios; el código de la web ya es coherente. Si todos contienen identidad y enlace correctos, no queda corrección que hacer ahí. Indicador futuro: apariciones y clics identificables de la marca hacia el dominio en GSC; no atribuir automáticamente sus cambios a esta revisión.

### 2. Disponibilidad y CTA de la portada — prioridad media, experiencia de usuario

**Observado:** portada dice «Apúntate al primer evento». La ficha usa «Solicitar plaza en Luma» y remite a disponibilidad/lista de espera. La página pública de [Luma](https://luma.com/tdhs6lr0), abierta durante esta auditoría el 6 de noviembre, indica evento completo y lista de espera. El estado puede cambiar; volver a comprobarlo al implementar.

**Propuesta:** si sigue completo al editar, usar un CTA coherente con solicitar plaza o unirse a la lista de espera, con el mismo requisito de confirmación. La redacción actual **no garantiza acceso**, por lo que no es un bloqueo SEO ni una promesa falsa acreditada. Es una mejora de expectativas.

**Indicador:** al pulsar, que el estado encontrado en Luma coincida con la expectativa del botón. No usar clics al enlace como si fueran registros o plazas confirmadas.

### 3. El 8 de noviembre termina la vigencia de «próximo evento» — prioridad alta desde que termine el encuentro

**Observado:** el anuncio de portada y el bloque «Próximos eventos» toman el primer elemento de `events`, sin separar eventos pasados y futuros. Hoy, 6 de noviembre, el evento es futuro y el texto es correcto.

**Propuesta para después:** al finalizar, conservar la URL del evento, marcarlo celebrado y actualizar el anuncio de portada con información real. Cuando existan, añadir crónica y fotografías propias con permiso y contexto; no inventar un siguiente encuentro, testimonios ni asistentes. Esta tarea ya estaba aplazada por el usuario hasta después del evento.

**Verificación:** el 9 de noviembre la portada no debe invitar a apuntarse al encuentro del día anterior como si fuera futuro. La crónica no debe darse por realizada antes de disponer de material.

### 4. Dudas prácticas no cubiertas en la ficha — prioridad baja, condicionada a hechos

La ficha no indica explícitamente idioma, precio o si deben llevarse muestras. Su ausencia no demuestra una mala experiencia ni explica las 15 impresiones. Se pueden resolver brevemente si el organizador confirma los datos, remitiendo a Luma cuando cambien. No copiar precios de agregadores ni inventar gratuidad. Aviso legal e identidad del titular siguen pendientes en el proyecto (`club.legal: null`); no se convierte este dato en una supuesta penalización SEO.

## Intención de búsqueda y alcance local

- Para **«Barcelona perfume club»** y **«perfume club Barcelona»**, una portada de comunidad local con próximos encuentros es un destino plausible. Las búsquedas exploratorias devuelven Luma, plataformas de eventos y el club de Smell Lab: existe ambigüedad entre entidades y páginas de encuentros.
- No se ha medido una SERP de Google con ubicación Barcelona, idioma y dispositivo controlados. No se calculan consenso de top 10, cuota local, dificultad, volumen ni una puntuación SXO numérica. La evaluación de intención es cualitativa; no asegura que el dominio deba superar a un resultado concreto.
- La consulta visible de GSC es **«perfumes club barcelona»** (plural), 2 impresiones y posición media 5. Puede mezclar intención de club y marcas comerciales; dos impresiones no permiten decidir una estrategia nueva. No se deduce el rendimiento de las otras consultas ni la ubicación Barcelona del usuario.
- El proyecto es un **club comunitario que organiza encuentros**, sin sede permanente acreditada. La dirección de Volta pertenece al evento. No se recomienda inventar sede, teléfono, horario comercial, ficha de negocio o `LocalBusiness` para superar una rúbrica local orientada a establecimientos.

## Preparación para búsqueda con IA

La identidad, las personas, los enlaces y las respuestas concretas son una buena base. La visibilidad o citación en ChatGPT, Claude, Perplexity o Google IA **no se ha medido**; no se asigna una puntuación por plataforma ni se declara ausencia de menciones.

No se recomienda `llms.txt`, WebMCP, reescritura «para IA» o FAQPage como requisito para mejorar Google. La [documentación oficial de funciones de IA](https://developers.google.com/search/docs/appearance/ai-features?hl=es) mantiene los requisitos normales de SEO y no exige archivos o marcado especiales. El acceso de rastreadores se comprueba por separado en el informe técnico. Las pruebas originales de experiencia que podrán enriquecer el sitio son las del encuentro real, después de que ocurra.

## Límites y decisiones respetadas

No se auditaron exhaustivamente backlinks, reputación externa, Google Business Profile, conversiones en Luma, rendimiento por ciudad ni citas de IA. No se solicitarán enlaces a colaboradores: el usuario lo descartó. No se cambian H1, diseño, historia aprobada, marca ni condiciones de acceso. Ninguna propuesta de este documento constituye una modificación implementada o una garantía de posición.
