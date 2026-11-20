---
title: Eventos y Luma
type: operations
updated: 2026-11-20
tags: [eventos, luma]
---

# Eventos y Luma

Primer encuentro: [[eventos/2026-11-08-perfumes-nicho]].
Segundo encuentro: [[eventos/2026-11-22-perfumes-gourmand]].

Calendario del club: https://luma.com/barcelonaperfumeclub

Las fichas se mantienen en `events` de `src/content.ts`, en orden de fecha. Incluyen `path`, título, edición, estado (`upcoming` o `past`), texto propio, fecha, horario, lugar, cartel local y URL de Luma. Pueden incluir una galería. El prerender genera una página propia y la añade al sitemap. La portada destaca el primero de los próximos encuentros y muestra los anteriores en un apartado propio. Actualizar manualmente el estado después de celebrar cada encuentro.

No hay sincronización automática con el calendario. Publicar un evento en Luma no lo incorpora por sí solo a esta web. No prometer lo contrario.

## Condición de acceso

Plazas limitadas. Es imprescindible registrarse en **ese evento** en Luma y recibir la confirmación de la plaza. Sin registro y confirmación no se podrá acceder. Seguir el calendario no equivale a estar inscrito. Carles quiere evitar personas que se presenten sin invitación; mantener visible el recuadro destacado de [[Decisiones]].

La disponibilidad y la gestión de inscripciones corresponden a Luma; no mostrar una cifra estática de plazas restantes.

El 29 de octubre el primer encuentro figura en lista de espera. La ficha remite a Luma y aclara que la lista de espera no confirma plaza. El nombre, dominio y handles del calendario coinciden con los de la web; no se han cambiado perfiles externos. Ver [[sesiones/2026-10-29]].

## Canales del club

- Instagram: https://www.instagram.com/barcelonaperfumeclub/
- TikTok: https://www.tiktok.com/@barcelonaperfumeclub
- Contacto: contacto@barcelonaperfumeclub.com

Al añadir un evento, verificar sus datos públicos, usar el cartel proporcionado, optimizarlo sin cortar contenido, comprobar móvil y escritorio y registrar los cambios en [[Estado]] y la nota de sesión. Procedimiento técnico: [[Web]].
