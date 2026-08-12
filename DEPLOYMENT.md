# Deployment Guide — Static Export & GitHub Pages

This portfolio site is configured for **Static Export (`output: 'export'`)** and deploys automatically to **GitHub Pages** via GitHub Actions.

---

## 1. Custom Domain (`mangalam0015k.in`)

- **CNAME Configuration**: `public/CNAME` contains `mangalam0015k.in`.
- **Root Serving**: The site serves directly from the domain root (`https://mangalam0015k.in/`). No `basePath` or `assetPrefix` is required.
- **Next.js Output**: `yarn build` automatically outputs `out/CNAME` containing `mangalam0015k.in`.

### Manual DNS Configuration (Registrar Side)

Point your domain (`mangalam0015k.in`) to GitHub Pages by configuring DNS records at your domain registrar:

1. **A Records** (for apex `@` domain):
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`

2. **CNAME Record** (for `www` subdomain):
   - Host: `www`
   - Value: `Abhi0049k.github.io`

3. **HTTPS Enforcement**:
   - In GitHub repo **Settings > Pages > Custom domain**, verify `mangalam0015k.in`.
   - Once DNS propagation completes, check **"Enforce HTTPS"**.

---

## 2. GitHub Pages Deployment Workflow

Continuous Deployment is managed via `.github/workflows/deploy.yml`:

1. **Trigger**: Pushes to the `main` branch or manual invocation via `workflow_dispatch`.
2. **Build Process**:
   - Checks out repository.
   - Sets up Node.js 20 with Yarn caching.
   - Installs dependencies: `yarn install --frozen-lockfile`.
   - Runs `yarn build` to generate the static `out/` bundle.
3. **Deployment**: Uploads the `out/` directory using `actions/upload-pages-artifact@v3` and deploys using `actions/deploy-pages@v4`.

---

## 3. Local Build Verification

To test the static export locally before committing:

```bash
# Clean previous builds
rm -rf .next out

# Run type-check & lint
yarn lint

# Build static bundle (generates ./out directory)
yarn build
```
