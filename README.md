# Tarun Kumar Pillagolla — Cybersecurity Portfolio

Single-page cybersecurity portfolio built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build        # standard Next.js build
npm run build:pages  # static export for GitHub Pages
```

## Deploy to GitHub Pages

This project deploys automatically via GitHub Actions when you push to `main`.

1. Create a public repo named `tarun_portfoilio` on GitHub
2. Push this project to `main`
3. In the repo go to **Settings → Pages → Build and deployment → Source** and select **GitHub Actions**
4. After the workflow completes, the site will be live at:

   `https://<your-username>.github.io/tarun_portfoilio/`

## Customize

- Content: `src/data/portfolio.ts`
- Resume: replace `public/resume.pdf`
