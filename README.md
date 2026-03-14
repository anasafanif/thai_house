# Thai House Massage & Spa — Morocco

Premium single-page landing site for Thai House Massage & Spa. Built with Next.js 15 (App Router), Tailwind CSS, and Framer Motion.

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Logo

The site uses **logo.png** from the `public` folder (golden lotus + Buddha). If your repo has a folder named `Public` (capital P), rename it to `public` so Next.js serves static files on all platforms. A placeholder `logo.svg` is also included; you can remove it if using only PNG.

## Build & deploy

```bash
npm run build
npm run start
```

### Deploy on Vercel

1. Push your code to GitHub ([anasafanif/thai_house](https://github.com/anasafanif/thai_house)).
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
3. Click **Add New** → **Project**.
4. Import the **thai_house** repository (select `anasafanif/thai_house`).
5. Leave the defaults (Vercel detects Next.js; build command `npm run build`, output `.next`).
6. Click **Deploy**. Vercel will build and give you a URL like `thai-house-xxx.vercel.app`.

After the first deploy, every push to `main` will trigger a new deployment. To use a custom domain, go to your project → **Settings** → **Domains**.

## WhatsApp

Update the phone number in `components/WhatsAppFab.tsx`: set `WHATSAPP_NUMBER` to your full international number (e.g. `212612345678` for Morocco).

## Tech

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
hfkgf
hgh
