# TPRM Next.js Scaffold (Custom Domain Fixed)

- App Router with `app/layout.tsx` importing `styles/globals.css`
- Includes `tsconfig.json` and `next-env.d.ts`
- Tailwind wired (content includes `/components`)
- GitHub Pages workflow writes `out/CNAME` from repo var `CUSTOM_DOMAIN`

## Deploy (Pages, custom domain)
1) Push to GitHub `main`
2) Repo → Settings → Pages → Source: GitHub Actions
3) Repo → Settings → Secrets and variables → Actions → **Variables** → add:
   - `CUSTOM_DOMAIN` = `www.yourdomain.com`
4) DNS: CNAME `www` → `<your-username>.github.io`
5) Push to `main` → workflow builds, writes `out/CNAME`, deploys

## Local dev
```bash
npm install
npm run dev
```
