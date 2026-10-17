# HyprLan × Celestia

Two sites, one deployment:

| Path | What it is |
|---|---|
| `/` | HyprLan community homepage (static HTML) |
| `/celestia` | Celestia 2026 — 24-hour open-innovation hackathon site (React + Vite) |

The HyprLan "Enter Celestia" button links to `/celestia/`.

## Project layout

```
hyprlan/            static homepage (index.html + assets)
celestia/           Vite + React app (source)
  vite.config.ts    base "/celestia/"
scripts/build.mjs   builds Celestia, copies HyprLan to dist/
vercel.json         Vercel build + output config
```

## Develop

```bash
npm install
npm run dev      # Celestia app at http://localhost:4174/celestia/
```

For the static HyprLan page locally, serve `hyprlan/` with any static server.

## Build

```bash
npm run build
```

Outputs:

```
dist/
  index.html          <- HyprLan
  assets/             <- HyprLan images
  celestia/           <- Celestia build (index.html + assets + fonts + images)
```

## Deploy to Vercel

`vercel.json` is pre-configured:

- Build: `npm run build`
- Output: `dist`
- Framework: none (custom static output)

Import the repo at <https://vercel.com/new>, or:

```bash
npm i -g vercel
vercel --prod
```

After the first deploy, the site is at `https://<project>.vercel.app`, with the
hackathon at `https://<project>.vercel.app/celestia/`.

## Notes

- Registration buttons point to the Unstop listing (`REGISTRATION_URL` in
  `celestia/src/App.tsx`).
- Fonts and logos live in `celestia/public/` and are served under `/celestia/`.
- The HyprLan footer image `assets/img-00.png` is not included in the original
  source; add it to `hyprlan/assets/` if you want that figure to render.
