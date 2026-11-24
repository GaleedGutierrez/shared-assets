# Changelog

<!-- Same rule as .markdownlint-cli2.jsonc, for super-linter's markdownlint -->
<!-- markdownlint-configure-file { "MD024": { "siblings_only": true } } -->

Este proyecto sigue [Semantic Versioning](https://semver.org/lang/es/). Antes de
`1.0.0`, un cambio de versión menor (`0.x.0`) puede romper la API.

## Sin publicar

### Mantenimiento

- Se eliminó el workflow de compresión de imágenes. Astro regenera cada imagen
  en el build, así que comprimirlas acá solo sumaba una pérdida de calidad y un
  commit del bot en cada PR.
- El workflow de publicación solo publica cuando el push cambia `version` en
  `package.json`. Antes solo consultaba el registro de npm, que tarda unos
  minutos en mostrar una versión nueva, así que un merge justo después de
  publicar intentaba publicarla de nuevo y fallaba.

## 0.6.0

### Novedades

- `education`: la formación universitaria y técnica, de la más nueva a la más
  vieja. Cada entrada tiene `id`, `level` (`university` o `technical-school`),
  `status` (`in-progress`, `graduated` o `unfinished`), `title`, `institution`
  (`{ name, faculty?, location, url?, logo? }`), `startDate` y, si terminó,
  `endDate`. Las fechas son por mes. Opcionales: `description` y `achievements`.
  - Universidad Nacional de Chilecito: Tecnicatura Universitaria en Ciencia de
    Datos (en curso).
  - Universidad Nacional de Jujuy: Analista Programador Universitario (en
    curso).
  - EET N.º 1 "Escolástico Zegada": Técnico en Equipos e Instalaciones
    Electromecánicas (recibido).
  - EET N.º 1 "General Savio": Técnico Informático (sin terminar).
- Nuevos tipos: `Education`, `EducationLevel`, `EducationStatus` e
  `Institution`.
- Los logos de la Universidad Nacional de Chilecito (SVG) y de las dos escuelas
  técnicas (PNG), en `assets/icons/courses-platform/`.

### Mantenimiento

- Los tests validan la formación: IDs únicos, orden por fecha de inicio, fecha
  de fin según el estado y links `https`.

## 0.5.0

### Cambios que rompen la API

- `ImageCoursePlatform` pasa de `models/personalProject.model` a
  `models/shared.model` y suma `png`. Si se importa desde `.` o `./models`, no
  cambia nada.

### Novedades

- `certificates`: los 137 certificados, del más nuevo al más viejo. Cada uno
  tiene `id`, `kind` (`course`, `learning-path` o `program`), `title`,
  `platform`, `date` y `diploma`. Los de Platzi suman `badge`. `url` es la
  página pública del diploma (Platzi y Alura) y `credentialId`, su código de
  verificación (todos menos Codely, que no tiene).
  - Platzi: 119 cursos y 2 rutas (HTML y CSS desde cero, y JavaScript para
    Frontend).
  - Codely: 9 cursos. Código Facilito: 6 cursos.
  - Alura: el programa ONE (Oracle Next Education) de frontend.
- `certificatePlatforms`: el catálogo de plataformas (`alura`, `codely`,
  `codigo-facilito`, `platzi`) con nombre, URL y logo.
- Nuevos tipos: `Certificate`, `CertificateKind`, `CertificatePlatform` y
  `CertificatePlatformId`.
- Los diplomas y las insignias de las rutas de Platzi, en
  `assets/images/certificates/platzi/paths/`.

### Mantenimiento

- Los tests validan los certificados: IDs únicos, orden por fecha, diploma JPEG
  con el año en el nombre, insignia con el mismo nombre que su diploma y códigos
  con formato UUID.

## 0.4.2

### Novedades

- Los 119 certificados aprobados en Platzi, en
  `assets/images/certificates/platzi/`: `diplomas/` tiene cada diploma en JPEG
  (864×667) y `badges/`, el ícono del curso en PNG. El diploma y su ícono tienen
  el mismo nombre, `<año>-<id>-<slug>`, donde `año` es el año en que se aprobó
  el curso e `id` es el ID del curso en Platzi. Se importan por ruta con el
  export `./assets/*`, por ejemplo
  `assets/images/certificates/platzi/badges/2025-7395-react.png`.
- Los diplomas de Codely (9) y Código Facilito (6) en JPEG, en
  `assets/images/certificates/{codely,codigo-facilito}/diplomas/`, con el nombre
  `<año>-<slug>`, por ejemplo `codely/diplomas/2023-css-grid-a-fondo.jpg`.
- Los logos de Platzi (SVG) y Código Facilito (PNG) en
  `assets/icons/courses-platform/`, junto a los de Alura y Codely.

### Mantenimiento

- El workflow de compresión de imágenes no toca los certificados.

## 0.4.1

### Correcciones

- Gramática y ortografía de las descripciones, los títulos y los demás textos de
  todos los proyectos. Por ejemplo: `cree` → `creé` (LEGO), `clone` → `clon`,
  `Figura Geométricas` → `Figuras geométricas` y tildes en los nombres de
  cursos.

## 0.4.0

### Cambios que rompen la API

- Cada proyecto tiene una sola captura en PNG: `screenshot` (en singular)
  reemplaza a `screenshots`, que tenía AVIF y WebP en tres tamaños. Astro genera
  los formatos y anchos a partir de esa imagen con `<Picture>`. Para migrar:
  `project.screenshots.webp.large` → `project.screenshot`.
- Se eliminaron los tipos `ResponsiveImages`, `SizedImages` e `ImageSize`. El
  nuevo tipo es `Screenshot`.
- Las capturas pasan de
  `images/<carpeta>/{avif,webp}/{small,medium,large}/<id>-<slug>.<ext>` a
  `images/<carpeta>/<id>-<slug>.png`.

### Novedades

- Las capturas de proyectos personales son PNG de 2560×1600 (viewport de
  1280×800 a densidad 2), sin compresión con pérdida.

### Mantenimiento

- Los tests validan que cada captura sea un PNG nombrado con su `id` y de al
  menos 1280 px de ancho.
- El workflow de compresión de imágenes ya no toca las capturas.

## 0.3.0

### Cambios que rompen la API

- `technologies` ahora es una lista de objetos `Technology`
  (`{ id, name, icon }`) que salen del catálogo `technologies`. Se eliminó
  `technologiesIcons`. Para obtener los nombres:
  `project.technologies.map((t) => t.name)`.
- Las imágenes se tipan como `ImageAsset`, compatible con `ImageMetadata` de
  Astro. Ya no hace falta forzar el tipo con `as unknown as`.
- Nombres de tecnologías normalizados: `ViteJS` → `Vite`, `SASS` → `Sass`, `PUG`
  → `Pug`, `Nodejs` → `Node.js`, `ytdlp` → `yt-dlp`, `TailwindCSS` →
  `Tailwind CSS`, `Shadcn UI` → `shadcn/ui`.
- Se eliminaron el export `./assets` (no tenía contenido) y el archivo
  `src/global.d.ts` publicado.
- Se eliminaron los tipos `SizesImages` e `ImagesProject` de cada modelo. Ahora
  se usan `SizedImages` y `ResponsiveImages` de `models/shared.model`.

### Novedades

- `./models` funciona y exporta todos los tipos.
- `./assets/*` apunta directo a los archivos, por ejemplo
  `@galeedgutierrez/shared-assets/assets/images/me/me-large.webp`.
- Se exportan `technologies` y el tipo `TechnologyId`.
- `sideEffects: false`.

### Correcciones

- Los proyectos 28 y 29 tenían los íconos de Vite y Playwright cruzados.
- El proyecto freelance 0 tenía una frase en `demoUrl` y un `caseStudyUrl`
  vacío. Se quitaron ambos.

### Mantenimiento

- Pruebas de datos con Vitest: IDs únicos, las 6 variantes de cada captura con
  el nombre correcto, links `https`, íconos SVG válidos y assets sin usar.
- `publint` y `@arethetypeswrong/cli` corren antes de publicar.
- El CI usa la versión de Node de `.nvmrc` y publica con trusted publishing
  (OIDC) de npm, sin token y con provenance.
