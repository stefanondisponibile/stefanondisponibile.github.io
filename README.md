# stefanofrassetto.com

Personal website and portfolio, built with Vite, React, TypeScript and Tailwind CSS.

## Development

Requires Node.js (LTS) and npm. First time, run:

```sh
make setup        # install dependencies (idempotent)
make dev          # start dev server
```

Or with npm directly:

```sh
npm ci            # install dependencies
npm run dev       # start dev server
npm run build     # type-check and build to dist/
npm run preview   # serve the production build
npm run lint      # lint with oxlint
```

## Content

Edit `src/content.ts` to update the profile, projects and links.

## Deployment

Pushes to `main` deploy via `.github/workflows/deploy.yml`.
In the repository settings, set **Pages → Source** to **GitHub Actions**.
The custom domain is kept by `public/CNAME`.
