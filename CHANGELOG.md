# Changelog

Este proyecto sigue [Semantic Versioning](https://semver.org/lang/es/). Antes de
`1.0.0`, un cambio de versión menor (`0.x.0`) puede romper la API.

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
