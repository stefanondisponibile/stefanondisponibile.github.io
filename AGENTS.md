# Agent instructions

## Communication

- Be **very** concise.

## Project

- This repository is Stefano's personal website and portfolio.
- Build a static site with Vite and React. Use npm and commit its lockfile.
- Keep components small, dependencies minimal, and portfolio content easy to update.
- Use only supplied or verified personal details, projects, and links; do not invent credentials or achievements.
- Prioritize responsive layouts, semantic HTML, keyboard accessibility, readable contrast, and fast loading. Respect reduced-motion preferences.

## Development

- Provide `npm run dev`, `npm run build`, and `npm run preview` scripts when scaffolding the app.
- Keep source code in `src/` and static assets in `public/`. Do not commit `node_modules/` or generated `dist/` files.
- Before finishing code changes, run `npm run build` and any relevant existing lint or test scripts. For UI changes, check mobile and desktop layouts and navigation in the production preview when available.
- Update the README when setup or deployment instructions change. Report checks that could not be run.

## Commit style

- Use Conventional Commits: `<type>[optional scope]: <description>`.
- Use `feat` for features, `fix` for bug fixes, and `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, or `chore` as appropriate.
- Write concise, imperative descriptions, such as `feat(portfolio): add project gallery` or `docs: update setup instructions`.
- Mark breaking changes with `!` before the colon or a `BREAKING CHANGE:` footer explaining the impact.
- Keep each commit focused on one logical change.

## GitHub Pages

- Follow the [official Vite deployment guide](https://vite.dev/guide/static-deploy.html#github-pages).
- Use Vite's default `base: '/'` for this user-site repository and its custom domain. Preserve the existing domain by keeping the root `CNAME` and copying its contents to `public/CNAME` when scaffolding, so it is included in `dist/`.
- Deploy the built `dist/` directory through `.github/workflows/deploy.yml` using GitHub Actions as the Pages source.
- The workflow should run on pushes to the default branch and manual dispatch, install with `npm ci`, build with `npm run build`, and use the official Pages configuration, artifact upload, and deployment actions.
- Grant `contents: read`, `pages: write`, and `id-token: write`; use the `github-pages` environment and a Pages concurrency group.
- Keep navigation compatible with static hosting: prefer section anchors; if client-side routes are needed, ensure direct visits and refreshes work on GitHub Pages.
- Never put secrets in frontend code or `VITE_*` variables; these values are public in the build.
