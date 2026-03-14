# Thai House Massage & Spa — Morocco

Premium single-page landing site for Thai House Massage & Spa. Built with Next.js 15 (App Router), Tailwind CSS, and Framer Motion.

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Logo

Place your **logo.png** (golden lotus + Buddha) in the `public` folder. The site currently uses a placeholder `public/logo.svg`. To use your PNG:

1. Add `public/logo.png`.
2. In `components/Navbar.tsx`, `components/Hero.tsx`, and `components/Footer.tsx`, change `src="/logo.svg"` to `src="/logo.png"`.

## Build & deploy

```bash
npm run build
npm run start
```

- **Vercel:** Import this repo; build command `npm run build`, output is the default Next.js output.
- **Netlify:** Use the Next.js preset; build command `npm run build`.

## WhatsApp

Update the phone number in `components/WhatsAppFab.tsx`: set `WHATSAPP_NUMBER` to your full international number (e.g. `212612345678` for Morocco).

## Tech

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
