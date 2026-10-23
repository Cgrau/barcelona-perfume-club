# Analítica con Umami Cloud

La integración mide las visitas de la landing y los clics en sus enlaces de Luma, email e Instagram y TikTok. Se ha elegido Umami Cloud para conservar GitHub Pages sin mantener un servidor y una base de datos propios. No requiere instalar paquetes en la aplicación ni modifica el diseño.

## Activación

1. Crear una cuenta del club en https://cloud.umami.is/signup y elegir el plan Hobby.
2. En Websites → Add website, usar el nombre **Barcelona Perfume Club** y el dominio **barcelonaperfumeclub.com**.
3. Abrir Edit → Tracking code y copiar el código. La integración espera el script de Umami Cloud `https://cloud.umami.is/script.js` y su `data-website-id`. Si Umami entrega otro origen, revisar la configuración antes de activarla.
4. Guardar ese ID público como variable de repositorio `UMAMI_WEBSITE_ID` en GitHub → Settings → Secrets and variables → Actions → Variables. No es una contraseña ni una API key.
5. Ejecutar el workflow **Publicar en GitHub Pages** sobre `main`, o publicar un cambio. Verificar después que se carga el script y llegan visitas y clics al panel de Umami.

Sin `UMAMI_WEBSITE_ID`, la compilación no incluye el script ni envía datos a Umami. `npm run dev` tampoco incorpora el script, aunque exista una configuración local.

Para revisar una compilación configurada en local, copiar `.env.example` a `.env.local` y completar el ID. Umami limita la medición a `barcelonaperfumeclub.com` y `www.barcelonaperfumeclub.com` mediante `data-domains`. El script puede cargarse al abrir una compilación con analítica en localhost, pero no debe enviar mediciones desde ese dominio.

## Eventos

| Evento | Acción |
| --- | --- |
| `luma-menu` | Abrir Luma desde el menú |
| `luma-hero` | Pulsar Eventos en Luma en la portada |
| `luma-calendar` | Pulsar Ver calendario en Próximos eventos |
| `contact-menu` | Abrir el email desde el menú |
| `contact-email` | Pulsar el email en el apartado de contacto |
| `instagram` | Abrir Instagram desde el footer |
| `tiktok` | Abrir TikTok desde el footer |

Los clics representan intención de salir al destino: no confirman una inscripción en Luma ni el envío de un email. La integración no envía propiedades con emails, nombres o contenido de mensajes, no llama a `identify` ni configura identificadores de usuario y no habilita grabaciones de sesiones. Las URLs y parámetros de campaña se procesan según el comportamiento estándar de Umami; no introducir datos personales en esos parámetros.

Se excluyen los fragmentos de URL (`#el-club`, etc.) para que la navegación interna no se registre como otra página. Se activa la opción de Umami para respetar Do Not Track en los navegadores que la exponen; esta opción no equivale a una solución de consentimiento ni establece por sí misma las obligaciones de privacidad del responsable del sitio.

## Comprobaciones de integración, 23 de octubre de 2026

- Compilación TypeScript y Vite correcta con y sin el ID configurado. Sin ID no se incorpora el script.
- Las seis pruebas existentes de la landing pasan en Brave, en móvil y escritorio.
- El script oficial de Umami se ha ejecutado en un navegador con las peticiones de analítica interceptadas localmente: una visita y los siete eventos de enlaces en 375 y 1440 px. Estas comprobaciones no envían datos de prueba al panel real del club.
- Verificados los parámetros UTM, la exclusión de fragmentos de URL, la ausencia de mediciones desde localhost y la opción Do Not Track. Sin errores JavaScript durante estas comprobaciones.

## Desactivación

Eliminar o vaciar `UMAMI_WEBSITE_ID` y volver a publicar. Los atributos de eventos no envían datos por sí mismos cuando no se carga el script.

Documentación oficial: [añadir un sitio](https://docs.umami.is/docs/add-a-website), [instalar el script](https://docs.umami.is/docs/collect-data), [eventos](https://docs.umami.is/docs/track-events) y [configuración del tracker](https://docs.umami.is/docs/tracker-configuration).
