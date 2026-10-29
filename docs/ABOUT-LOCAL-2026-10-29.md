# Sobre el club — revisión local del 29 de octubre de 2026

Petición inicial: preparar el About sin subirlo ni publicarlo. Tras revisarlo y aprobar el relato conjunto, Carles solicita «súbelo a producción» el 29 de octubre. Esta autorización supera la restricción inicial; el resultado del despliegue se añade tras comprobarlo.

`/sobre-el-club/` presenta el motivo del club, a Carles y Laura, los objetivos y las redes personales de Carles Grau Perfume. El relato conjunto se amplía a petición de Carles: perfumista autodidacta y divulgador de perfumería, contenido como Carles Grau Perfume y objetivo de crear su propia marca. Se enlaza con el impulso, confianza y visión de negocio de Laura, su evolución en la perfumería y el motivo del club, sin biografías separadas ni afirmar lanzamientos. La fotografía profesional conjunta queda para más adelante; de momento se utiliza el retrato de Carles proporcionado por él. WebP de 320/640 px sin metadatos, presentación en blanco y negro mediante CSS, pie identificativo y carga diferida. No se añade a la home.

La página se abre desde «Quiénes somos» del menú. Orden aprobado: Inicio · El club · Eventos · Quiénes somos · Contacto. Inicio, El club y Eventos conservan la home y sus secciones anteriores; la presentación de Carles y Laura está en una página aparte. Conserva la paleta, fuentes locales y scroll central. Incluye metadatos propios, AboutPage, Person y migas de pan; los perfiles personales no se mezclan con las redes oficiales de Organization.

- `npm run build`: tres páginas prerenderizadas sin JavaScript de cliente y sitemap derivado.
- `npm run seo:check`: títulos y descripciones únicos, canonical, identidad, enlaces y sitemap correctos para las tres rutas.
- `BROWSER_PATH='/Applications/Brave Browser.app/Contents/MacOS/Brave Browser' npm test`: 16 pruebas correctas en escritorio y móvil, incluidas navegación y metadatos sin JavaScript y accesibilidad axe.
- Sin desbordamiento horizontal en 320, 375, 768, 1000 y 1440 px. Cabecera y redes permanecen fijas.
- Revisión independiente del código sin incidencias. No se repite Lighthouse.

Capturas: [escritorio](previews/about-local-desktop.png), [móvil](previews/about-local-mobile.png), [organizadores en escritorio](previews/about-local-desktop-organizers.png) y [organizadores en móvil](previews/about-local-mobile-organizers.png).

El aviso de acceso sigue exigiendo registro y plaza confirmada en Luma. No se han editado perfiles externos. La publicación de esta versión está autorizada y pendiente de verificación.
