# Rendimiento y experiencia visual — 6 de noviembre de 2026

Auditoría de producción, sin cambiar la web. Se aplican las guías `seo-performance` y `seo-visual` de Claude SEO 2.5.0 con Lighthouse y Playwright ya disponibles. No se instala ningún paquete ni se conectan APIs de pago.

## Mediciones de laboratorio

Lighthouse **13.5.0**, navegador HeadlessChrome 156 vía Brave en este Mac. Una pasada por perfil de la portada pública, iniciadas a las 17:30:00 y 17:30:04 UTC. Simulación móvil estándar (412 × 823, CPU ×4/red simulada) y preset escritorio (1350 × 940). Ambas se lanzaron próximas en el tiempo; son diagnósticos puntuales, no medianas ni un control de laboratorio aislado.

| Medida | Móvil | Escritorio |
|---|---:|---:|
| Rendimiento Lighthouse | 99/100 | 100/100 |
| Accesibilidad automatizada | 100/100 | 100/100 |
| Buenas prácticas | 100/100 | 100/100 |
| SEO técnico automatizado | 100/100 | 100/100 |
| LCP de laboratorio | 1,815 s | 0,542 s |
| CLS de laboratorio | 0,01783 | 0,00268 |
| TBT de laboratorio | 4 ms | 0 ms |
| First Contentful Paint | 1,459 s | 0,340 s |

Archivos: `lighthouse-mobile.json` y `lighthouse-desktop.json`. No hubo advertencias de ejecución. Estas notas no afirman que la web pase Core Web Vitals de usuarios reales: **CrUX e INP de campo no se han medido**. TBT no sustituye a INP. El 100 SEO de Lighthouse tampoco mide posiciones de Google ni calidad completa de contenido/autoridad.

## Comprobación visual y navegación

Playwright sobre las tres rutas públicas a **1440 × 1000** y **375 × 812**, con JavaScript habilitado. Resultados DOM en `visual.json`; diez capturas en `screenshots/` (entrada, listado y acceso).

- No hay desbordamiento horizontal del documento ni del contenido central en ninguna de las seis combinaciones ruta/dispositivo. Imágenes cargadas correctamente y H1 visible en todas.
- Portada: título, presentación local del club, botón «Apúntate al primer evento», fecha y advertencia «Acceso solo con registro y plaza confirmada en Luma» visibles sin desplazar en ambos tamaños. Botón de 56 px de alto.
- Cabecera y redes permanecen fijas; `main` tiene desplazamiento vertical propio. En la portada, pulsar «Eventos» actualiza `#eventos` y desplaza el contenido central (616 px escritorio; 591 px móvil). No se ha confundido esta arquitectura aprobada con un error de página truncada.
- Ficha del evento: título y descripción visibles al entrar. El botón «Solicitar plaza en Luma» y el aviso completo se alcanzan desplazando el contenido; inicialmente quedan más abajo. En móvil, el cartel precede a la información práctica y al registro.
- «Quiénes somos»: título visible; el botón «Ver próximos encuentros» está al final del relato, por tanto no aparece en la primera pantalla. Esto es compatible con la finalidad informativa de esa ruta.
- Lectura visual de las capturas: jerarquía clara, burdeos/marfil coherentes, navegación accesible a simple vista, sin elementos superpuestos al contenido visible. El final visible en las capturas coincide con el borde del área desplazable; no demuestra pérdida de contenido.

## Hallazgos y propuestas

**Medio — reducir recorrido para quienes llegan directamente a la ficha.** La ficha requiere desplazarse antes de ver fecha/lugar/registro, especialmente en móvil tras el cartel. Propuesta para revisión: un breve resumen de fecha/lugar y enlace «Ver requisitos y solicitar plaza» antes del cartel que lleve al aviso y botón existentes. Conservar registro **y plaza confirmada**, evitar duplicar un CTA que omita condiciones. No es un bloqueo de rastreo ni prueba de pérdida de conversiones: no hay datos de embudo en esta auditoría. Verificar después con captura móvil, navegación por teclado y eventos de clic, si se aprueba el cambio. La portada ya resuelve bien el acceso inmediato.

**Bajo — optimización adicional del cartel.** Lighthouse móvil descargó el WebP de 960 × 1200 (186.688 bytes de recurso) y estima ahorro de unos 161 KiB; escritorio descargó el de 480 × 600 y estima 19 KiB. Ya existen `srcset`, `sizes`, dimensiones y carga diferida. La selección móvil también depende de DPR 1,75 y no demuestra por sí sola un `sizes` incorrecto. Comprobar compresión/una variante intermedia conservando legibilidad del cartel; no reducir automáticamente una imagen destinada a pantallas densas. Con rendimiento 99/100 y cartel bajo el primer pantallazo, no es la prioridad de visibilidad orgánica.

**Bajo — caché de estáticos.** Lighthouse observa TTL de 600 s en recursos propios y estima reutilización mejorable. Es un detalle del alojamiento GitHub Pages; valorar control de caché solo si surge una necesidad de infraestructura. No migrar el alojamiento por esta alerta aislada.

**Sin acción urgente — CSS/fuentes.** Lighthouse señala dependencia CSS → fuentes locales y CSS que bloquea pintura (unos 4 KiB transferidos); con estos tiempos y puntuaciones no justifica rediseño ni añadir herramientas de animación. No se recomienda perseguir cada diagnóstico informativo para alcanzar una puntuación que ya es alta.

No se ha medido rendimiento de las dos rutas secundarias con Lighthouse, interacción real de asistentes, conversión en Luma, ranking localizado, ni accesibilidad manual exhaustiva. Las capturas muestran la situación actual, no un experimento antes/después.
