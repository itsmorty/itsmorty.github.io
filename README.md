# Portfolio

Personal portfolio of Morteza Rahmani — a terminal-style single page built with Next.js, TypeScript, Tailwind CSS, and Motion.

Live at **https://itsmorty.github.io/**

## Development

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

The site is a fully static export (`output: "export"` in `next.config.ts`), so `next build` writes plain HTML/CSS/JS to `out/`:

```bash
pnpm build
```

To preview the production output exactly as GitHub Pages serves it, build with the same environment the workflow uses and serve `out/`:

```bash
GITHUB_PAGES=true GITHUB_REPOSITORY=itsmorty/itsmorty.github.io pnpm build
npx serve out
```

Then open [http://localhost:3000/](http://localhost:3000/).

`GITHUB_PAGES=true` turns on the GitHub Pages base path. Because this repo is named `<user>.github.io`, it is served from the domain root and the base path stays empty. A project repo (anything not ending in `.github.io`) is instead mounted under `/<repo>/`, read from `GITHUB_REPOSITORY` — so renaming the repo needs no config change either way.

## Deployment

Pushes to `main` deploy automatically through `.github/workflows/deploy.yml`:

1. Install dependencies with pnpm, run `pnpm lint`, then `pnpm build` (static export into `out/`).
2. Upload `out/` as a Pages artifact and publish it with the official Pages actions.

The first run needs Pages enabled for the repository with **Source: GitHub Actions** (Settings → Pages). After that, every push to `main` publishes a new version.

Notes:

- `next/image` runs with `unoptimized: true` because the default optimizer needs a Node.js server.
- `public/.nojekyll` is copied into `out/` so GitHub Pages does not run Jekyll over the `_next` directory.
- The version string in the header (`v<run>-<sha>`) comes from `GITHUB_RUN_NUMBER` and `GITHUB_SHA` at build time, and falls back to a timestamp locally.
