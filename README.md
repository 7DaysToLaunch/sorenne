# Sorenne

Portfolio website for Sorenne, a Los Angeles creative director. The site is built with SvelteKit, Svelte 5, TypeScript, Vite, and GSAP.

## Getting Started

This project uses npm. Install dependencies from the project root:

```sh
npm install
```

Start the local development server:

```sh
npm run dev
```

Open the site in a browser automatically:

```sh
npm run dev -- --open
```

## Available Scripts

```sh
npm run dev
```

Runs the Vite development server.

```sh
npm run check
```

Runs SvelteKit sync and `svelte-check` against the TypeScript config.

```sh
npm run check:watch
```

Runs the same checks in watch mode.

```sh
npm run build
```

Creates a production build.

```sh
npm run preview
```

Serves the production build locally for review.

## Project Structure

```text
src/
  app.css                     Global CSS entry point
  app.html                    SvelteKit HTML shell
  hooks.server.ts             Server hooks
  lib/
    assets/                   Shared source assets
    components/               Reusable Svelte components
    components/work/          Work-detail page building blocks
    components/logos/         Brand/logo components
    data/                     Portfolio project registry and page loaders
    seo.ts                    Site metadata and schema helpers
    styles/                   Fonts, design tokens, and shared CSS
    transitions/              Page transition helpers
  routes/
    +layout.svelte            Global site shell, nav, footer, transitions
    +page.svelte              Home page
    about/+page.svelte        About page
    work/+page.svelte         Work index
    work/[slug]/              Bespoke project detail pages
    sitemap.xml/+server.ts    Dynamic sitemap
    llms.txt/+server.ts       LLM-readable site summary

static/
  robots.txt                  Robots configuration
  work-images/                Public work image assets
  fonts/                      Public font files
```

## How Content Is Organized

Portfolio metadata lives in `src/lib/data/work.ts`. This file defines the controlled project tags, shared project types, and the ordered `PROJECTS` registry used by the home page, work listing, SEO helpers, and project pages.

Each project detail page lives under `src/routes/work/<project-slug>/`. Most project pages use a small `+page.ts` loader that calls `projectPageLoad(slug)` so page metadata stays tied to the central registry, plus a `+page.svelte` file for the custom case study layout.

Reusable case study primitives live in `src/lib/components/work/`, including hero, prose, image grid, masonry, full-bleed media, Vimeo embeds, section dividers, and shared page rhythm styles.

## Styling

Global styles start in `src/app.css`, which imports:

- `src/lib/styles/fonts.css` for font setup.
- `src/lib/styles/tokens.css` for colors, spacing, typography, layout widths, radii, and other design tokens.

Component styles are colocated in each `.svelte` file where possible. Work-specific shell styles also live in `src/lib/styles/work-project-shell.css`.

## SEO

Shared SEO constants and structured data helpers live in `src/lib/seo.ts`. Pages use `src/lib/components/Seo.svelte` for titles, descriptions, canonical URLs, and JSON-LD.

The site also exposes:

- `/sitemap.xml` from `src/routes/sitemap.xml/+server.ts`
- `/llms.txt` from `src/routes/llms.txt/+server.ts`

## Adding A New Work Project

1. Add the project metadata to `PROJECTS` in `src/lib/data/work.ts`.
2. Add public images under `static/work-images/<project-slug>/`.
3. Create `src/routes/work/<project-slug>/+page.ts` using `projectPageLoad('<project-slug>')`.
4. Create `src/routes/work/<project-slug>/+page.svelte` using the work components in `src/lib/components/work/`.
5. Run `npm run check` before committing.

## Deployment

The project currently uses `@sveltejs/adapter-auto`, so deployment should work with supported SvelteKit hosts. Run a production build locally before deploying:

```sh
npm run build
npm run preview
```
