# Barcelona Perfume Club — auditoría SEO del 6 de noviembre de 2026

Este informe conserva la auditoría previa. Después, el usuario solicita implementar mejoras: [cambios y comprobación directa de Search Console](../../../SEO-IMPLEMENTATION-2026-11-06.md), con nuevos datos de indexación que no estaban en el ZIP.

**La web tiene una base técnica correcta. El problema acreditado es una visibilidad todavía muy pequeña, cuya causa no permite determinar esta exportación.** No hay evidencia para prometer primeras posiciones ni para justificar rehacer la portada. Las prioridades son comprobar el estado de las páginas interiores, mantener coherente la identidad del club y actualizar la información del encuentro según su disponibilidad y fecha.

Aplicadas las guías de [Claude SEO de AgriciDaniel](https://github.com/AgriciDaniel/claude-seo), versión 2.5.0. Plugin de Claude Code instalado y habilitado para el proyecto; auditoría realizada por Codex con especialistas en técnica, contenido y rendimiento. Se usan HTTP, Playwright/Brave y Lighthouse del proyecto, además de lectura del ZIP con Python estándar. El entorno Python/Chromium del plugin no se ha inicializado; véase [instalación y alcance](../../README.md). No se conectan servicios de pago ni cuentas de Google.

**Estado del trabajo: local, sin modificar el producto ni publicar.** Referencia del código auditado: `4432f14`. Comprobación pública el 6 de noviembre, desde las 17:28 UTC. Tipo de proyecto: club comunitario con encuentros en Barcelona, sin sede permanente acreditada.

## Search Console: qué sabemos

Fuente: exportación `https___barcelonaperfumeclub.com_-Performance-on-Search-2026-11-06.zip`, siete CSV. SHA-256: `b2787a46d947547792f2d83e508f82271df8015bd6591f0d570c3a0ff715866d`.

El filtro dice **Last 12 months**, pero el gráfico exportado contiene **13 filas diarias, del 22 de octubre al 3 de noviembre de 2026**. No hay doce meses de observaciones. Los días 4–6 de noviembre no aparecen; no se cuentan como ceros. Las fechas de los informes diarios de Search Console usan hora del Pacífico, según su [documentación sobre discrepancias](https://support.google.com/webmasters/answer/17010575).

| Métrica | Resultado |
| --- | ---: |
| Clics | 3 |
| Impresiones | 15 |
| CTR agregado | 20 % |
| Posición media de la portada | 3,67 |
| Páginas con rendimiento en el export | 1: la portada |
| Consultas identificadas | 1 |
| Impresiones con consulta identificada | 2 de 15 |

Se comprueba que gráfico, páginas, países y dispositivos suman los mismos 3 clics y 15 impresiones. Se conserva el 3,67 del agregado de la portada; no se promedian sin ponderar las posiciones diarias ni se convierten celdas vacías en cero.

| Consulta visible | Clics | Impresiones | CTR | Posición media |
| --- | ---: | ---: | ---: | ---: |
| perfumes club barcelona | 0 | 2 | 0 % | 5 |

La consulta está en **plural**. No se identifica la búsqueda que originó ninguno de los tres clics. Las otras **13 impresiones —86,7 %—** no tienen consulta visible en esta tabla. Google explica que la anonimización y los límites de los informes pueden producir estas diferencias; no demuestra ausencia de demanda ni un error de la web. [Documentación de Search Console](https://support.google.com/webmasters/answer/17010575).

| País | Clics | Impresiones |
| --- | ---: | ---: |
| España | 3 | 13 |
| Colombia | 0 | 1 |
| Francia | 0 | 1 |

| Dispositivo | Clics | Impresiones | CTR |
| --- | ---: | ---: | ---: |
| Escritorio | 2 | 6 | 33,33 % |
| Móvil | 1 | 9 | 11,11 % |

El volumen es insuficiente para concluir que el móvil convierte peor o que el CTR sea estable. Estos son clics orgánicos hacia la web: **no son registros ni plazas confirmadas en Luma**. El ZIP no incluye conversiones.

## Las búsquedas que interesan al club

| Objetivo | Evidencia disponible |
| --- | --- |
| Barcelona perfume club | Sin fila identificada en esta exportación |
| perfume club Barcelona | Sin fila identificada en esta exportación |
| perfume club desde Barcelona | Sin consulta identificada ni segmentación por ciudad |
| perfumes club barcelona | Dos impresiones, posición media 5, sin clics |

**La media 3,67 no significa que salgamos terceros o cuartos para esas tres búsquedas.** La posición es un promedio de las apariciones registradas, con variaciones por consulta y contexto. El export no acredita una posición actual desde Barcelona. [Cómo interpreta Google las posiciones](https://support.google.com/webmasters/answer/7042828?hl=es).

La captura histórica del 29 de octubre mostraba seis impresiones y cero clics, con el gráfico hasta el 27. El nuevo export incorpora nueve impresiones y tres clics después del 27; son periodos de distinta duración y una muestra mínima. Hubo un clic el 28 y dos el 3 de noviembre. No se atribuye una mejora causal a los ajustes SEO publicados el 29, ni se infiere el estado actual del resultado de GitHub.

## Auditoría del dominio público

| Área | Resultado comprobado | Límite |
| --- | --- | --- |
| Rastreo | Tres rutas 200, robots permite acceso, sitemap válido de tres URLs | No equivale a indexación individual |
| HTML y enlaces | Contenido completo sin JavaScript, enlaces y anclas internos válidos | No mide autoridad externa |
| Metadatos | Títulos y descripciones únicos, canonical propio por ruta | No garantiza el título que mostrará Google |
| Identidad | Organization y WebSite coherentes; personas y redes personales separadas | No se auditan todas las bios externas |
| Schema | JSON-LD parseable, referencias e identificadores coherentes | Sin validación remota de Rich Results |
| Imágenes | Alt y dimensiones; cartel y retrato WebP con srcset | No se estima impacto en posiciones |
| Experiencia | Escritorio y móvil revisados; CTA de portada visible, sin desbordamiento horizontal | No es un estudio con usuarios |
| IA y agentes | HTML estático y semántico legible; robots no bloquea específicamente | No se miden citas en IA ni Agentic Browsing |

La portada ya explica club, perfumería y Barcelona en título, descripción y texto. Las tres variantes objetivo pueden seguir orientadas a la misma portada. No se propone duplicar páginas por orden de palabras ni sustituir el titular aprobado. Google recomienda contenido útil y advierte contra la repetición artificial de palabras. [Guía de SEO](https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=es).

## Rendimiento: laboratorio favorable, campo pendiente

Lighthouse **13.5.0**, web pública, 6 de noviembre alrededor de las 17:30 UTC. **Una pasada por perfil**; una prueba aislada puede variar.

| Medición de laboratorio | Móvil | Escritorio |
| --- | ---: | ---: |
| Rendimiento | 99/100 | 100/100 |
| Accesibilidad | 100/100 | 100/100 |
| Buenas prácticas | 100/100 | 100/100 |
| SEO de Lighthouse | 100/100 | 100/100 |
| LCP | 1,815 s | 0,542 s |
| CLS | 0,01783 | 0,00268 |
| TBT | 4 ms | 0 ms |

Esto reduce la prioridad de rehacer recursos o diseño por rendimiento. **No acredita que Core Web Vitals de usuarios reales esté aprobado**: no se dispone de LCP, INP y CLS de campo. TBT no es INP. Tampoco significa que Google otorgue un «SEO 100» a la web o que deba posicionarla primera.

No se calcula una puntuación global ponderada de Claude SEO: faltan mediciones de campo, visibilidad local, backlinks y citación en IA. Sus categorías se evalúan cualitativamente y esos campos se dejan en `null` en [audit-data.json](audit-data.json), en vez de convertir desconocidos en aprobados o ceros.

## Oportunidades concretas

**1. Comprobar indexación de las páginas interiores.** El export solo lista la portada. Inspeccionar en Search Console `/sobre-el-club/` y `/eventos/descubriendo-perfumes-nicho/`: indexación, canonical elegido y último rastreo. Si están indexadas correctamente, esta hipótesis queda descartada. Si no lo están, actuar según el motivo, sin pedir repetidamente indexación de URLs que ya están incluidas.

**2. Alinear el botón con la disponibilidad.** La [página de Luma](https://luma.com/tdhs6lr0), abierta el 6 de noviembre, muestra evento completo y lista de espera. La home dice «Apúntate al primer evento»; la ficha ya habla de solicitar plaza y confirmación. Propuesta si el estado se mantiene al editar: «Únete a la lista de espera en Luma», dejando visible que lista de espera no equivale a plaza. Se conserva el requisito de registro **y plaza confirmada**. Es una mejora de expectativas, no un bloqueo SEO acreditado. No se ha aplicado.

**3. Diferenciar la entidad con consistencia.** [Smell Lab publica un Perfume Club BCN distinto](https://www.smell-lab.org/perfume-club). Esto prueba que hay nombres parecidos en la misma ciudad, sin demostrar un ranking localizado ni una relación entre proyectos. Comprobar en los canales propios el nombre completo, dominio oficial y organizadores Carles y Laura, además del enlace operativo de Luma. La web ya contiene esa identidad. No se propone renombrar el club, editar perfiles ajenos ni solicitar enlaces a colaboradores.

**4. Actualizar la vigencia después del encuentro.** Ahora el 8 de noviembre es futuro y la home es correcta. Después de que termine, `events[0]` y los textos fijos seguirían anunciándolo como próximo si no se actualizan. Conservar su URL, presentarlo como celebrado y publicar crónica y fotos propias cuando existan. No inventar un siguiente evento, asistentes ni reseñas. Es la prioridad de contenido más clara a partir del 9 de noviembre.

Las propuestas sobre idioma, precio o qué traer quedan condicionadas a información confirmada. El CTA de la ficha aparece debajo del primer pantallazo; un enlace superior podría ayudar, pero la información y navegación están disponibles. No se presenta como un fallo de posicionamiento ni requiere alterar el diseño aprobado.

## Qué mantener y cómo evaluar el siguiente paso

Conservar el H1, la home, el relato aprobado, el HTML prerenderizado, las fuentes locales, el correo oficial y el registro con plaza confirmada. No atribuir al club una sede permanente en Volta ni crear un perfil comercial con datos supuestos. No añadir marcado, llms.txt o WebMCP como requisito de Google: su [documentación de funciones de IA](https://developers.google.com/search/docs/appearance/ai-features?hl=es) mantiene los requisitos normales de SEO, sin optimizaciones especiales obligatorias.

Después del evento, comparar periodos de igual duración con consultas, páginas, país y dispositivo. Separar las tres búsquedas objetivo de variantes y del agregado. Si Search Console sigue sin desglosarlas, informar «sin datos visibles», sin rellenar con estimaciones. No iniciar seguimiento periódico antes de lo acordado ni asumir que los cambios son efectivos sin observar resultados.

El [plan de acciones](ACTION-PLAN.md) detalla dependencias, indicadores y cómo descartar cada hipótesis. Evidencias por categoría: [técnica](findings/technical.md), [contenido e intención local](findings/content.md) y [rendimiento y visual](findings/performance-visual.md). Los HTML, capturas, CSV calculados y JSON completos de Lighthouse quedan localmente en `build/seo-2026-11-06/`, ignorado por Git. No se guardan datos de asistentes.

La instalación, configuración y este informe están preparados en local. No se ha hecho commit, push, solicitud de indexación ni modificación de perfiles externos. Puede prepararse un PDF del informe; el generador del plugin requiere antes su configuración `/seo setup`.

## Verificación del proyecto

`npm run build` y `npm run seo:check` correctos el 6 de noviembre. La ejecución completa de Playwright con Brave produjo 15 casos correctos y un fallo en la comprobación móvil de `End` → botón final de About. Ese caso pasó al repetirlo de forma aislada (1/1). Se registra como un fallo no reproducido en la repetición, sin atribuirle una causa ni afirmar que la ejecución completa fuera 16/16. No se cambian producto ni pruebas para ocultarlo. Las comprobaciones visuales independientes de las tres rutas y las mediciones de laboratorio se describen por separado.
