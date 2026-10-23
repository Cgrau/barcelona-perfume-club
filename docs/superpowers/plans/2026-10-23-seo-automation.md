# SEO y supervisión automática

> Implementación en esta sesión por el agente principal, conforme al «vale, hazlo» de Carles.

**Objetivo:** publicar los metadatos propuestos y comprobar automáticamente el SEO técnico en GitHub; preparar Search Console sin simular su activación.

**Arquitectura:** conservar Vite, HTML estático y GitHub Pages. Lighthouse CI 0.15.1 audita únicamente la raíz compilada en móvil y escritorio, con tres mediciones por dispositivo. Los informes quedan como artefactos de GitHub, sin un servidor externo ni cuentas nuevas. SEO y accesibilidad deben conservar 100/100; rendimiento por debajo de 90 y buenas prácticas por debajo de 95 generan avisos. Una comprobación de HTML protege canonical, robots, sitemap, contenido prerenderizado y JSON-LD. Carles ha aportado el token real de Google durante la ejecución; se incorpora directamente como etiqueta pública en index.html para conservarlo también en compilaciones y PR sin acceso a variables del repositorio.

**Alternativas:** auditoría manual (no detecta regresiones por cambio), servicio SEO de pago (innecesario para esta landing), Lighthouse CI y Search Console (opción recomendada y autorizada).

**Restricciones:** no cambiar diseño ni contenido visible; conservar Umami y siete eventos; no inventar actividad ni datos de eventos; no añadir Analytics; no afirmar que Search Console está verificado sin confirmación de Google.

- [x] Actualizar title, description y Open Graph; añadir inyección opcional de verificación de Google.
- [x] Configurar Lighthouse CI y una comprobación estática del HTML; ejecutar las auditorías reales y demostrar que una regresión de metadatos falla.
- [x] Añadir workflow para pull requests, pushes a main, ejecución manual y revisión semanal. Guardar informes incluso cuando las aserciones fallen.
- [x] Documentar Search Console, sitemap y acceso a los informes; comprobar compilación y seis pruebas existentes.
- [ ] Integrar y publicar los cambios; confirmar auditorías de GitHub y metadatos en el dominio público. Si falta el token, dejar pendiente únicamente la verificación en la cuenta de Google.

**Revisión:** no auditar 404 como portada; no enviar visitas de prueba a Umami; no subir informes a almacenamiento público temporal; no depender del token de Search Console para que una PR externa compile; comprobar que los avisos de rendimiento no ocultan fallos de SEO.

Decisión de ejecución: conservar la etiqueta pública directamente en HTML simplifica la configuración y elimina un estado opcional ya innecesario. La auditoría completa informa en checks independientes; seo:check se incorpora como paso obligatorio antes de publicar.

Revisión independiente: detectó que configurar manualmente el viewport de escritorio conservaba el user agent y la limitación de red móviles. Se reprodujo la aserción fallida contra el informe y se cambió al preset oficial `desktop`. No hubo otros hallazgos materiales.

Verificación de teclado: una prueba End de escritorio falló durante la ejecución simultánea de Lighthouse; sin cambios en el código, la prueba aislada pasa. Se repite la suite completa sin carga de auditoría antes de publicar.

Resultado local final: Lighthouse CI móvil y escritorio, tres mediciones por dispositivo, 100/100 en SEO, accesibilidad, rendimiento y buenas prácticas. Perfil desktop verificado: user agent sin Android/Mobile, RTT 40 ms y CPU ×1. El control de título ausente falló y pasó al restaurar el documento.
