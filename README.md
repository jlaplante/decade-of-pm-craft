## Decade of PM Craft

Personal site built with React + Vite, styled with Tailwind and shadcn/ui (Radix). It includes imported static projects rendered in styled modals, GitHub Pages deployment to a custom build folder, and Google Analytics (gtag) pageview tracking.

### Stack
- React 18 + TypeScript
- Vite (dev/build)
- React Router (SPA routing)
- Tailwind CSS
- shadcn/ui over Radix primitives
- TanStack Query (client cache)
- lucide-react (icons)

### Local development
```sh
npm i
npm run dev
# dev server: http://localhost:8080
```

Routing is mounted with `basename={import.meta.env.BASE_URL}` so:
- Dev uses `/` base.
- Production (GitHub Pages) uses `/decade-of-pm-craft/` base.

### Build
Vite output is configured to `distro/`.
```sh
npm run build
# output → ./distro
```

### Deployment (GitHub Pages)
This repo uses a GitHub Actions workflow to build and publish the `distro/` folder to the `gh-pages` branch.

- Base path is conditional in `vite.config.ts`:
  - Dev: `/`
  - Prod: `/decade-of-pm-craft/`
- Workflow: `.github/workflows/gh-pages.yml` publishes `./distro`.
- After the first successful run, enable Pages:
  - Repo → Settings → Pages → Source: `Deploy from a branch`
  - Branch: `gh-pages`, Folder: `/`

If you use a custom domain, set `base: '/'` and add `public/CNAME` with your domain.

### Optional: Cloudflare Pages
- Framework preset: Vite
- Build command: `npm ci && npm run build`
- Output directory: `distro`
- For SPA routing, ensure 404 falls back to `index.html` (Cloudflare Pages sets this automatically; for GitHub Pages the workflow copies `404.html`).

### Imported static projects
Two legacy static HTML projects live under `public/imports/` (or `/imports` at runtime). They are displayed via a modal in `src/components/ThoughtLeadershipSection.tsx`, not in iframes:
- The HTML is fetched, headers/footers/scripts are removed, and relative asset links are rewritten so assets load within this app’s styling.

If you add more, place them under `public/imports/<ProjectName>/index.html` and add an entry to the `importedProjects` array.

### Google Analytics (gtag)
GA4 is wired using `gtag` with your measurement ID `G-LQWWDRM01Y`.
- Initialization: `src/lib/analytics.ts`
- Boot: `initializeAnalytics(...)` in `src/main.tsx`
- SPA pageviews: `PageviewTracker` in `src/App.tsx` calls `trackPageview` on route changes.

To change the measurement ID, either set `VITE_GA_ID` in `.env.production`, or update the hardcoded default in `src/lib/analytics.ts`.

### Scripts
- `npm run dev` – start dev server
- `npm run build` – production build to `distro/`
- `npm run preview` – preview local build

### Notes
- Ensure only one package manager lockfile is used (this project uses npm’s `package-lock.json`).
- If you relocate static imports, keep paths under `public/` so Vite serves them as-is.
