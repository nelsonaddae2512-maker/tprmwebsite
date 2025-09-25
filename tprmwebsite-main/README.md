# TPRM Website — Custom Domain GitHub Pages

## Deploy
1) Push this repo to GitHub on branch `main`.
2) Repo → Settings → Pages → Source = GitHub Actions.
3) Repo → Settings → Secrets and variables → Actions → Variables → add:
   - `CUSTOM_DOMAIN` = `www.yourdomain.com`
4) DNS: CNAME `www` → `<your-username>.github.io`
5) Push to `main` → workflow builds static files to `out/`, writes `out/CNAME`, and deploys.

## Routes included
- `/` (home)
- `/vendors/`
- `/pricing/`
- `/trust/`
- `404.html` via `app/not-found.tsx`

## Local dev
```bash
npm install
npm run dev
```
