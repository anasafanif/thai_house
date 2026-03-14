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

- **Vercel:** Import this repo; build command `npm run build`, output is the default Next.js output.
- **Netlify:** Use the Next.js preset; build command `npm run build`.

## WhatsApp

Update the phone number in `components/WhatsAppFab.tsx`: set `WHATSAPP_NUMBER` to your full international number (e.g. `212612345678` for Morocco).

## Tech

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
