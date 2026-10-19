---
type: brief
project: Barcelona Perfume Club
created: 2026-10-18
estado: plan listo para ejecutar (pendiente de assets de Carles)
---

# Barcelona Perfume Club: web one-page en React (brief para el agente que la construye)

Este documento es autosuficiente: quien lo ejecute no necesita leer nada más de este proyecto.

## 0. Objetivo

Una web de una sola página para Barcelona Perfume Club, con la **estructura, el ritmo y la sensación** de https://theeightclub.com (club privado, oscuro, editorial, animado con el scroll), pero con identidad, textos e imágenes propios del club.

**Prohibido copiar de The Eight:** sus textos, su logo, sus ilustraciones, sus vídeos, su fuente (Edicted Display es de pago) y sus SVG. Se replica la arquitectura y el tipo de interacción, nada más.

**Prohibido usar imágenes generadas con IA** (regla del cliente). Solo fotos y vídeos reales que entrega Carles, o patrones geométricos hechos con CSS/SVG.

## 1. Referencia: cómo está hecha The Eight (analizada el 18 oct 2026)

1. **Header fijo:** menú hamburguesa a la izquierda, logo manuscrito centrado, enlace "MEMBERS" a la derecha. El menú abre un overlay con Join, About, Privacy, Terms.
2. **Hero:** fondo casi negro granate, un "8" manuscrito gigante que aparece con el scroll, "SCROLL DOWN" abajo y botones de mute/pausa de un vídeo de fondo abajo a la derecha.
3. **Transición de vídeo:** un vídeo a pantalla completa que entra desenfocado y se enfoca al hacer scroll.
4. **Manifiesto:** texto serif grande, centrado, que se va "encendiendo" palabra a palabra con el scroll (las palabras pasan de opacidad baja a plena).
5. **Slider de 3 tarjetas** tipo carta de tarot (borde crema, esquinas redondeadas, reverso con patrón), con contador "1 / 3", flechas, nombre del nivel, descripción y CTA "DISCOVER". La tercera solo dice "PLEASE INQUIRE".
6. **Footer enmarcado:** marco fino con ornamentos art déco en las esquinas, una estrella roja, frase grande ("Crafted to be Remembered"), CTA "INQUIRE" y enlaces legales en mayúsculas espaciadas.

Paleta de The Eight: fondo rgb(28,4,4), sección alterna rgb(45,3,3), texto crema rgb(243,238,224), texto secundario rgb(142,126,118). Tipografía: serif display para titulares y sans humanista en mayúsculas con mucho tracking para la UI.

## 2. Identidad de Barcelona Perfume Club

- **Burdeos de marca:** #640817 (sale de la foto de perfil de Instagram)
- **Fondo profundo:** #2A0309 (para el hero y el manifiesto; da la profundidad de The Eight sin perder el burdeos)
- **Superficie alterna:** #640817
- **Texto principal:** #FFFFFF; texto crema para cuerpo largo: #F3EEE0
- **Texto secundario:** #B9A7A2
- **Titulares:** Playfair Display (Google Fonts), la más parecida a la serif del logo del club. Si Carles da el nombre exacto de la fuente del logo, se cambia.
- **UI (menú, CTAs, etiquetas):** Jost (Google Fonts), mayúsculas, letter-spacing 0.25em, 11-13 px
- **Logo:** archivo que entrega Carles (texto "BARCELONA" espaciado arriba, "PERFUME CLUB" debajo, blanco sobre burdeos). Pedir SVG o PNG a 2000 px.

## 3. Estructura y contenido de la página (todo en español, tuteando)

Regla de escritura: nunca guion largo en ningún texto. Usar punto, coma o dos puntos.

### 3.1 Header (fijo)
- Izquierda: icono de menú (dos líneas).
- Centro: logo pequeño del club.
- Derecha: "CALENDARIO" → enlace al calendario de Luma (URL pendiente).
- Menú overlay a pantalla completa en #640817: El club · Encuentros · Instagram · Contacto. Cada item en Playfair grande.

### 3.2 Hero
- Fondo #2A0309.
- Centro: el logo del club entrando letra a letra con el scroll (equivalente al "8" de The Eight). Alternativa: una mouillette (tira de papel) dibujada en SVG que se traza con el scroll.
- Abajo: "DESLIZA" en Jost.
- Si hay vídeo: botones de mute/pausa abajo a la derecha.

### 3.3 Vídeo de transición
- Vídeo propio de Carles, 10-15 s, en bucle y sin audio por defecto: perfume pulverizado sobre una mouillette, frascos, manos oliendo. Entra desenfocado (filter: blur) y se enfoca con el scroll.
- Si todavía no hay vídeo: usar la foto de las mouillettes en abanico con el mismo efecto.

### 3.4 Manifiesto (palabra a palabra con el scroll)
Texto:
"En Barcelona, un círculo para quien ama el perfume. Aquí primero hueles, y después hablamos. Descubrimos marcas, abrimos discovery sets y compartimos lo que llevamos. Y, sobre todo, conocemos a gente que siente lo mismo."

### 3.5 Slider "Formas de vivir el club" (3 tarjetas)
Las tarjetas llevan una foto real dentro de un marco tipo carta (borde #F3EEE0, esquinas redondeadas, un pequeño logo del club en dos esquinas). Reverso: patrón geométrico burdeos hecho en SVG/CSS. Al cambiar de tarjeta, la saliente se gira y enseña el reverso.

1. **1 / 3 · ENCUENTROS**
   "Trae tu perfume y lo olemos entre todos. Primero hueles, después leemos las notas. No hace falta saber, solo tener ganas."
   Foto: perfumes con mouillettes. CTA: "VER CALENDARIO" → Luma.
2. **2 / 3 · DESCUBRIMIENTOS**
   "Marcas que vienen a presentarse, discovery sets abiertos entre todos y algunas marcas que no encontrarás en ninguna perfumería."
   Foto: varios discovery sets. CTA: "VER CALENDARIO" → Luma.
3. **3 / 3 · CENAS OLFATIVAS**
   Solo: "MUY PRONTO". (Equivalente al "PLEASE INQUIRE" de The Eight. No dar fechas ni detalles.)
   Foto: mano con mouillettes en abanico, o tarjeta solo tipográfica si no hay foto.

### 3.6 Footer enmarcado
- Marco fino #F3EEE0 al 40% con ornamentos art déco propios en las esquinas (SVG geométrico simple, no copiar los de The Eight).
- Pequeño punto o estrella burdeos claro como acento.
- Frase grande: "El perfume se disfruta más en compañía."
- CTA: "ÚNETE AL CALENDARIO" → Luma.
- Enlaces: INSTAGRAM (https://www.instagram.com/ + handle pendiente) · CONTACTO (mailto pendiente) · AVISO LEGAL.

### 3.7 Aviso legal
Página o modal simple con la identificación del titular (obligatoria en España por la LSSI). Datos pendientes de Carles. Sin cookies de terceros ni analítica, así no hace falta banner de cookies. Si se añade analítica, usar una sin cookies.

## 4. Stack técnico

- **Vite + React + TypeScript.**
- **Estilos:** CSS Modules o Tailwind, a elección del agente; tokens de color y tipografía en variables CSS en `:root`.
- **Animación con scroll:** GSAP + ScrollTrigger (reveal del logo, blur del vídeo, manifiesto palabra a palabra). Scroll suave con Lenis.
- **Slider:** componente propio con flip 3D en CSS (transform: rotateY) y navegación con flechas, teclado y swipe en móvil.
- **Fuentes:** Google Fonts (Playfair Display, Jost) con `font-display: swap`.
- **Vídeo:** MP4 H.264 + WebM, `muted playsinline loop autoplay`, póster en JPG, máximo ~4 MB.
- **Despliegue:** Vercel o Netlify. Dominio pendiente (comprobar disponibilidad de barcelonaperfumeclub.com / .es).

## 5. Requisitos de calidad

- **Móvil primero:** a 375 px todo legible, slider con swipe, menú usable con el pulgar, sin scroll horizontal.
- **prefers-reduced-motion:** sin animaciones de scroll; el manifiesto se muestra entero y el vídeo con póster fijo.
- **Accesibilidad:** contraste AA (blanco sobre #2A0309 y #640817 lo cumple), botones con aria-label, foco visible, alt en todas las fotos.
- **Rendimiento:** Lighthouse ≥90 en móvil; imágenes en WebP/AVIF con srcset.
- **SEO básico:** title "Barcelona Perfume Club", meta description con la bio ("Comunidad de Barcelona para amantes de la perfumería..."), Open Graph con el logo, idioma `es`.

## 6. Assets que tiene que entregar Carles

- [ ] Logo en SVG o PNG grande (y nombre de la fuente si lo sabe)
- [ ] Vídeo propio 10-15 s (si no hay, se usa foto)
- [ ] 3 fotos reales para las tarjetas (ya las tiene del carrusel: perfumes con mouillettes, discovery sets, mano con mouillettes)
- [ ] URL del calendario de Luma
- [ ] Handle de Instagram del club y email de contacto
- [ ] Datos del titular para el aviso legal
- [ ] Dominio

Mientras faltan, el agente usa marcadores claramente visibles (`TODO: URL de Luma`) y nunca inventa enlaces ni datos.

## 7. Orden de trabajo para el agente

1. Proyecto Vite + React + TS, tokens de diseño y fuentes.
2. Header y menú overlay.
3. Hero con reveal del logo.
4. Vídeo/foto con efecto blur → foco.
5. Manifiesto palabra a palabra.
6. Slider de 3 tarjetas con flip.
7. Footer enmarcado y aviso legal.
8. Pasada móvil, reduced-motion, accesibilidad y Lighthouse.
9. Capturas en 375 px y 1440 px para que Carles revise antes de publicar.

## 8. Criterios de aceptación

- La página se reconoce como "del estilo de The Eight" (oscura, editorial, animada con el scroll, slider de cartas, footer enmarcado) sin un solo texto, imagen o fuente suya.
- Todos los textos son los de este brief, sin guiones largos y tuteando.
- Ninguna imagen generada con IA.
- Ninguna fecha de evento publicada en la web: los eventos viven en Luma.
- Funciona bien en móvil.
