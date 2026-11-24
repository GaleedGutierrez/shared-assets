# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with
code in this repository.

## What this is

`@galeedgutierrez/shared-assets` is a public npm package (ESM only) that holds
the portfolio data and the image/icon assets used by the owner's personal sites
(galeed.link, galeedgutierrez.com). It has no runtime logic. It is typed data
arrays plus raw asset files. The content strings (titles, descriptions) are
written in Spanish.

## Commands

```bash
npm run build          # clean dist, tsc, copy src/assets → dist/assets
npm run lint           # ESLint, --max-warnings 0 (CI fails on any warning)
npm run lint:fix
npm run prettier       # check; prettier:fix to write
npm run lint-md        # markdownlint-cli2 + textlint
npm run check-for-dupes  # jscpd, 5% threshold
npm test               # Vitest data checks (tests/data.test.ts)
npm run check-package  # publint + attw on the packed tarball; needs a build
```

`tests/data.test.ts` validates the data: unique IDs, one PNG screenshot per
entry named `<id>-…` and at least 1280px wide, `https` links, SVG icons, and no
unused assets. A file that is meant to stay unused goes in `KNOWN_UNUSED`.

Node version: `.nvmrc` pins 22.17.1, and every workflow reads it.

### Dependency gotchas

- `vite` is an explicit devDependency on purpose. Without it, npm marks
  `rolldown` as peer-only and drops its native bindings from the lockfile on
  every incremental install (npm/cli#4828), which breaks Vitest in CI.
- `prettier` is pinned to `~3.6.2`, because 3.10 reformats the existing code.
  `@vitest/eslint-plugin` is pinned to `1.6.27`, because 1.6.28 asks for
  TypeScript 6.

## Architecture

The only consumer is galeed.link (Astro). Types target Astro.

- `src/index.ts` is the root entry point. It reexports the three data arrays
  (`personalProjects`, `freelanceProjects`, `openSourceProjects`), the
  `technologies` catalog and every model type.
- `src/models/shared.model.ts` holds the types shared by all project kinds:
  `ImageAsset` (assignable to Astro's `ImageMetadata`), `LazyImage`, `LazySvg`,
  `Screenshot`, `Technology` and the `TechnologyId` union.
  `src/models/*.model.ts` holds one interface file per project kind, and
  `src/models/index.ts` reexports them all.
- `src/technologies.ts` is the single catalog of technology names and icons.
  Projects list `technologies: [technologies.react, ...]`, so a name can't drift
  from its icon. Adding a technology means adding it to `TechnologyId` and to
  the catalog.
- `src/*Projects.ts` are large hand-written data arrays. Each entry has a
  numeric `id`, and its screenshot files are named after that ID.
- `src/assets/` holds the raw files: `icons/technologies/<tech>/`,
  `icons/courses-platform/`,
  `images/screenshot-{projects,freelance-projects,open-source}/`, `images/me/`,
  `images/certificates/` and `favicon/`.

### How assets are referenced (non-obvious)

- The data files refer to assets through **relative dynamic `import()`**, for
  example `import('./assets/icons/technologies/react/react.svg?raw')`. The
  promises are not resolved inside this package. The consuming site's bundler
  (Astro's Vite) resolves them: images become `ImageAsset` (`LazyImage`) and
  `?raw` SVGs become strings (`LazySvg`). galeed.link sets `resolve.noExternal`
  for this package so Vite processes it.
- `tsc` does not copy non-TS files. `scripts/copyAssets.ts` mirrors `src/assets`
  into `dist/assets` so that the relative imports still resolve from
  `dist/*.js`. Moving or renaming an asset breaks those paths without any
  compile-time error.
- `src/global.d.ts` declares the `*.png`, `*.avif`, `*.webp` and `*.svg?raw`
  modules for compiling this package only. It is not published. Keep exported
  values explicitly typed (as `technologies` is), or the emitted `.d.ts` will
  reference the asset modules and break for consumers.
- Screenshot layout: one full-quality PNG per entry,
  `images/<dir>/<id>-<slug>.png`. Do not ship sizes or formats: Astro's
  `<Picture>` derives AVIF/WebP and every width from this one source at build
  time. Personal-project screenshots are DevTools "Nest Hub Max" captures, a
  1280×800 viewport at DPR 2, so 2560×1600. The freelance and open-source ones
  are 1280×720, converted from the old WebP because those projects can't be
  recaptured. Optimize new PNGs losslessly only, never with palette
  quantization. `calibreapp-image-actions.yml` skips `screenshot-*` for that
  reason.
- Course logos still ship as AVIF + WebP (or a raw SVG).
- Platzi certificates live in `images/certificates/platzi/`: `diplomas/` holds
  each diploma as JPEG (864×667, Platzi's `diploma-og` image) and `badges/`
  holds the course badge as PNG. Both are named
  `<approval-year>-<platzi-course-id>-<slug>`, so a diploma and its badge share
  a name and the folder sorts by year (a year inside the slug, like
  `marca-personal-2018`, is Platzi's course version, not the approval year). The
  year is taken from the UTC `approved_date`. They were downloaded from Platzi's
  public diplomas API (`api.platzi.com/students/v1/diplomas/<user>/`), which
  only answers from a browser. No data entry references them yet, and
  `calibreapp-image-actions.yml` skips them too.
- Codely and Código Facilito diplomas live in
  `images/certificates/{codely,codigo-facilito}/diplomas/` as
  `<completion-year>-<slug>.jpg`. Neither platform has a public course ID, so
  the slug comes from the course name. They are the first page of the PDF
  certificates, rendered at 2x (Codely 1584×1224, Código Facilito 1684×1190)
  with PyMuPDF, JPEG quality 90. The year is the date printed on the
  certificate.

### Package exports

`.`, `./models`, `./models/*` and `./assets/*`. The last one maps straight to
`dist/assets/*`, so raw files that no data entry uses (`images/me/`,
`images/certificates/`, `favicon/`) are imported by path, for example
`@galeedgutierrez/shared-assets/assets/images/me/me-large.webp`.

### Agent skills

`.agents/skills/` and `skills-lock.json` are versioned.
`.claude/skills/modern-web-guidance` is a local junction to `.agents/skills/`
and is gitignored. On a fresh clone, run
`npx modern-web-guidance@latest install` to recreate it. All linters ignore
`.agents/` and `.claude/`.

## Release flow

Every push to `main` runs `.github/workflows/npm-publish.yml` (lint → test →
build → check-package → `npm publish`). Publishing uses npm trusted publishing
(OIDC, npm ≥ 11.5.1, which the workflow installs): there is no `NPM_TOKEN`
secret, and provenance is attached automatically. The trusted publisher on
npmjs.com is tied to this workflow's filename, so renaming `npm-publish.yml`
breaks publishing.

A step before `npm publish` skips it when the `version` in `package.json` is
already on npm, so to release, bump `version` in `package.json` (this is what
the `chore: bumps package version` commits do), and add an entry to
`CHANGELOG.md`.

Pick the bump by what changed, because galeed.link acts on it:

- **Patch** (`0.4.x`): content only (new project, text fix, new screenshot).
  Dependabot in galeed.link opens the PR without a cooldown, and
  `shared-assets-automerge.yml` merges it once CI passes.
- **Minor** (`0.x.0`): any change to the types or exports. Before `1.0.0` that
  is a breaking change, and galeed.link's `^0.x` range will not pick it up, so
  it needs a manual update there.

## Conventions and hooks

- Commits must follow Conventional Commits (commitlint runs in the `commit-msg`
  hook and in CI).
- `pre-commit` and `pre-push` both run `lint-staged` (ESLint --fix,
  markdownlint, textlint, prettier) and `jscpd`.
- ESLint uses `eslint-plugin-check-file`, which enforces kebab-case folder names
  under `src/`. Imports use `simple-import-sort`, and relative TS imports use
  the `.js` extension (`verbatimModuleSyntax`, ESM).
- Formatting: tabs (`.editorconfig`), and Prettier wraps Markdown at 80 columns.
- PRs use `.github/PULL_REQUEST_TEMPLATE.md`. A workflow compresses jpg/png/webp
  images on PRs, except the screenshot sources.
