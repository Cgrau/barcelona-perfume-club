# Página del evento e identidad — 29 de octubre de 2026

Alcance autorizado: página propia del primer evento y coherencia de identidad; sin captación de enlaces de colaboradores, crónica ni seguimiento periódico de posiciones.

- Compilación: portada y `/eventos/descubriendo-perfumes-nicho/` prerenderizadas, sin JavaScript de cliente. Sitemap derivado de ambas rutas.
- `npm run seo:check`: ambas páginas con un H1, título y descripción únicos, canonical y URL social propios, Organization y WebSite comunes y WebPage; migas de pan y enlace de inscripción propio en la ficha.
- `BROWSER_PATH='/Applications/Brave Browser.app/Contents/MacOS/Brave Browser' npm test`: 12 pruebas correctas en móvil y escritorio sobre producción estática. Entrada directa y navegación sin JavaScript; axe en contexto con JavaScript para ejecutar su analizador.
- Capturas revisadas: [escritorio](previews/event-page-desktop.png), [móvil](previews/event-page-mobile.png), [aviso en escritorio](previews/event-page-desktop-access.png) y [aviso en móvil](previews/event-page-mobile-access.png).
- Sin desbordamiento del documento o del contenido central en 320, 375, 768, 1000 y 1440 px, con JavaScript desactivado.
- Revisión independiente: sin bloqueos de la ficha actual. Corregidos el tratamiento literal de sustituciones de metadatos y los textos particulares de cada evento, ahora alojados en sus datos.

Luma consultado de nuevo el 29 de octubre: mismo nombre, fecha, horario, lugar, dominio y handles del club. La inscripción figura como lista de espera; la web remite a Luma y mantiene el acceso condicionado a registro y plaza confirmada. No se editaron perfiles externos ni se comprobó una posición actual en Google. No se repitió Lighthouse localmente.

La ficha usa WebPage y BreadcrumbList. Event para resultados enriquecidos queda pospuesto por la restricción de acceso mediante confirmación; no se modifica esa condición para cumplir una función del buscador.

Publicación comprobada: commit `4f0a26b`, [GitHub Pages correcto](https://github.com/Cgrau/barcelona-perfume-club/actions/runs/40828628191). Se comprueban en el dominio público la ficha, su canonical, condiciones y enlace Luma, vínculo desde portada, identidad WebSite y entrada del sitemap. La publicación no acredita una posición en Google.

La [auditoría automática SEO de GitHub](https://github.com/Cgrau/barcelona-perfume-club/actions/runs/40828628193) también termina correctamente. Una prueba adicional del prerender con metadatos que contienen `$&`, comillas y HTML conserva sus valores literales en portada y ruta anidada.
