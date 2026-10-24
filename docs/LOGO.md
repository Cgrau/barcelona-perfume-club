# Logo de cabecera

El archivo activo es `public/media/logo-vector.svg`, referenciado desde `src/content.ts`. Es un SVG con contornos trazados desde `photos/logo.PNG`, conservando su composición y su lettering. El trazado interpreta los bordes del original; no es el archivo vectorial de diseño original ni una nueva composición con fuentes del navegador.

Solo contiene paths con tinta marfil #f3eee0. No contiene una imagen raster incrustada, filtros, máscaras ni un rectángulo de fondo. Toda la zona fuera de las letras es transparente: el único burdeos visible pertenece a la propia cabecera. La paleta de la web permanece intacta.

El recurso anterior `logo-mark.svg` conseguía transparencia filtrando un WebP. Se conserva como archivo histórico para no romper pestañas antiguas; la cabecera carga la nueva URL para evitar reutilizar el recurso anterior desde caché. `logo.webp` y `og-logo.jpg` no se han modificado.

La preparación local utilizó la separación entre tinta clara y fondo burdeos del PNG de 1254 × 1254, y Potrace 1.16 para trazar los contornos. No requiere incorporar Potrace al proyecto ni ejecutarlo durante la publicación. Los archivos temporales y las capturas de comparación están en `build/logo-vector/`.

Validación: compilación y comprobación SEO correctas; seis pruebas Playwright aprobadas en móvil y escritorio. Revisados el resultado en ambos tamaños y toda la periferia transparente del logo, no solo sus cuatro esquinas. La cabecera y el cuerpo tienen el mismo color computado. El nuevo recurso no depende de que un navegador aplique un filtro para eliminar el fondo.
