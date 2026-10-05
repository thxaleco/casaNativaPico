# Casa Nativa

Landing page responsive para una casa de hospedaje rural en Pereira, Risaralda.
Proyecto académico de Aplicaciones móviles y web (Diseño Crossmedia, UCC).

## Tecnologías
- Pico CSS v2 (tema `pumpkin` y paleta oficial de colores)
- Anime.js v3.2.1
- HTML5 y CSS3 (`styles.css` para estilos propios)
- JavaScript (`animations.js`)

## Framework asignado
- **Nombre:** Pico CSS
- **Instalación utilizada:** CDN (jsDelivr) con `<link>` en el `<head>`, sin npm ni compilación:
  - `pico.pumpkin.min.css`: Pico con el tema de color precompilado *pumpkin*.
  - `pico.colors.min.css`: paleta oficial, que expone los colores como variables `--pico-color-*`.
- **Tres características que resultaron útiles:**
  1. Estilos automáticos sobre etiquetas semánticas (`<nav>`, `<article>`, `<form>`, `<details>`), que mantienen el HTML limpio.
  2. Más de 130 variables CSS `--pico-*` y una paleta de 380 colores, que permiten personalizar sin romper la lógica del framework.
  3. Diseño responsive integrado: `.container` y `.grid` se adaptan y se apilan solos en móvil.
- **Tres componentes/utilidades usados en la landing:**
  1. `<nav>` con `<details class="dropdown">` como menú móvil.
  2. `<article>` como tarjetas de servicios y contenedor del formulario.
  3. `.container`, `.grid`, botones (`role="button"`, `.outline`, `.secondary`), `<hgroup>` y los campos de formulario nativos.

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
