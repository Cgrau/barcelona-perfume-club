---
source_file: "memory/Web.md"
type: "concept"
community: "Arquitectura y diseño web"
location: "L39"
tags:
  - graphify/concept
  - graphify/EXTRACTED
  - community/Arquitectura_y_diseño_web
---

# src/App.tsx: web activa

<!-- project-memory:start -->
Portada, eventos, club, FAQ y contacto. La home conserva anuncio, evento y contenido anterior, sin presentación de Carles y Laura ni enlace añadido dentro del resumen del club. Menú aprobado: Inicio · El club · Eventos · Quiénes somos · Contacto. Inicio apunta a home#inicio, El club a home#el-club y Eventos a home#eventos. Solo «Quiénes somos» abre /sobre-el-club/ en la versión aprobada para publicar, publicada y comprobada en 4df3f11. El título del evento sigue enlazando a su ficha. El texto visible del contacto se deriva de club.links.contact para coincidir con el mailto; nuevo correo implementado el 30 de octubre, despliegue pendiente.

[Nota original](../Web.md)
<!-- project-memory:end -->

## Connections
- [[Arquitectura React, Vite y TypeScript con HTML prerenderizado]] - `references` [EXTRACTED]
- [[srcAboutPage.tsx Quiénes somos publicado y comprobado]] - `references` [EXTRACTED]
- [[srcClubSite.tsx propuesta archivada]] - `conceptually_related_to` [EXTRACTED]
- [[srcEventPage.tsx ficha propia del encuentro]] - `references` [EXTRACTED]

#graphify/concept #graphify/EXTRACTED #community/Arquitectura_y_diseño_web