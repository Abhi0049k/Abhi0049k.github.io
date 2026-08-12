# Deployment Guide — Static Export & GitHub Pages

This portfolio site is configured for **Static Export (`output: 'export'`)** and deploys automatically to **GitHub Pages** via GitHub Actions.

---

## 1. Static Export Architecture

- **Next.js Version**: 14+ App Router (`output: 'export'`).
- **No Request-Time Server**: The site builds into purely static HTML, CSS, and JS assets in the `out/` directory.
- **Image Optimization**: Configured with `images: { unoptimized: true }` in `next.config.mjs`.
- **Content Updates**: Content is driven by static definitions in `lib/content.ts`. Because GitHub Pages serves static files without a Node.js server or dynamic ISR revalidation, **any content updates require a rebuild and redeployment (`yarn build`) to take effect**.

---

## 2. GitHub Pages Deployment

Continuous Deployment is managed via `.github/workflows/deploy.yml`:

1. **Trigger**: Pushes to the `main` branch or manual invocation via `workflow_dispatch`.
2. **Build Process**:
   - Checks out repository.
   - Sets up Node.js 20 with Yarn caching.
   - Installs dependencies: `yarn install --frozen-lockfile`.
   - Runs `yarn build` to generate the static `out/` bundle.
3. **Deployment**: Uploads the `out/` directory using `actions/upload-pages-artifact@v3` and deploys using `actions/deploy-pages@v4`.

---

## 3. Custom Domain Configuration

- A `public/CNAME` file exists with `mangalam.dev`.
- Next.js automatically copies `public/CNAME` into `out/CNAME` during build.
- **GitHub Repository Settings**: Ensure GitHub Pages is set to use GitHub Actions under **Settings > Pages > Build and deployment > Source: GitHub Actions**.

---

## 4. Local Build Verification

To test the static export locally before committing:

```bash
# Clean previous builds
rm -rf .next out

# Run type-check & lint
yarn lint

# Build static bundle (generates ./out directory)
yarn build
```
