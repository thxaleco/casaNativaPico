# Casa Nativa

Landing page responsive para una casa de hospedaje rural en Pereira, Risaralda.
Proyecto académico de Aplicaciones móviles y web (Diseño Crossmedia, UCC).

## Tecnologías
- Pico CSS v2 (tema `pumpkin` y paleta oficial de colores)
- Anime.js v3.2.1
- HTML5 y CSS3 (`css/styles.css` para estilos propios)
- JavaScript (`js/animations.js`)

## Framework asignado
- **Nombre:** Pico CSS
- **Instalación utilizada:** CDN (jsDelivr) con `<link>` en el `<head>`, sin npm ni compilación:
  - `pico.pumpkin.min.css`: Pico con el tema de color precompilado *pumpkin*.
  - `pico.colors.min.css`: paleta oficial, que expone los colores como variables `--pico-color-*`.
- **Tres características que resultaron útiles:**
  1. Estilos automáticos sobre etiquetas semánticas (`<nav>`, `<article>`, `<form>`, `<details>`), que mantienen el HTML limpio.
  2. 148 variables CSS `--pico-*` y una paleta de 380 colores (20 familias × 19 tonos), que permiten personalizar sin romper la lógica del framework.
  3. Diseño responsive integrado: `.container` y `.grid` se adaptan y se apilan solos en móvil.
- **Tres componentes/utilidades usados en la landing:**
  1. `<nav>` con `<details class="dropdown">` como menú móvil.
  2. `<article>` como tarjetas de servicios y contenedor del formulario.
  3. `.container`, `.grid`, botones (`role="button"`, `.outline`, `.secondary`), `<hgroup>` y los campos de formulario nativos.

## Investigación sobre Pico CSS
**¿Qué es?** Un framework CSS minimalista (unos 80 KB) que aplica estilos directamente a las etiquetas HTML semánticas, con muy pocas clases. No incluye JavaScript ni requiere compilación.

**¿Cómo funciona?**
- Se carga con un `<link>` y estiliza etiquetas como `<button>`, `<article>`, `<input>` o `<nav>` sin que se agreguen clases.
- Sus estilos leen variables CSS (por ejemplo `--pico-primary-background`); al redefinirlas en un archivo propio cargado después de Pico cambia todo el aspecto sin tocar el HTML.
- La cascada obliga a usar el mismo selector que Pico para los colores (`:root:not([data-theme="dark"])`); con un simple `:root` la regla propia pierde por especificidad.

**Datos clave:**
- Layout: `.container` (anchos máximos de 510, 700, 950, 1200 y 1450 px) y `.grid` (columnas iguales que se apilan en móvil).
- Breakpoints: 576, 768, 1024, 1280 y 1536 px.
- Incluye modo claro y oscuro (`data-theme`), 20 temas de color precompilados y una paleta oficial de 380 colores.
- Limitaciones encontradas: no trae menú hamburguesa (se resolvió con `<details class="dropdown">`), ni clases de utilidad, ni un grid de 12 columnas (el diseño 2×2 de servicios se ajustó con una regla propia).

**Comparación breve:** frente a Bootstrap y Tailwind, Pico escribe menos clases y deja el HTML más limpio, a cambio de menos componentes y menos control del layout.

**Fuente consultada:** documentación oficial, https://picocss.com/docs

## Personalización
Toda la identidad visual (en `css/styles.css`) se define con variables de Pico (colores `--pico-color-*`, `--pico-primary`, `--pico-font-family`, `--pico-border-width`, etc.). Tipografías: Merriweather (títulos) y DM Sans (texto). El CSS propio solo resuelve lo que Pico no trae: el hero con foto de fondo, el cambio entre menú de escritorio y móvil y el footer.

## Animaciones con Anime.js
- **Menú:** entrada del logo y de los enlaces con efecto escalonado, pulso del botón "Reservar ahora" y aparición escalonada de los enlaces al abrir el menú móvil.
- **Servicios:** entrada escalonada de las tarjetas al llegar a la sección (IntersectionObserver) y elevación al pasar el cursor.
- Se respeta `prefers-reduced-motion`.

## Cómo ejecutar el proyecto
Abrir `index.html` en el navegador. Requiere conexión a internet para cargar Pico, Anime.js y las fuentes, y una foto en `img/hero.jpg`.

## Autora
Alejandra Correa