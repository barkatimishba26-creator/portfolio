# Mishba Zuber Barkati — Portfolio

A premium, dark-themed, ATS-friendly portfolio for a Senior Web Developer,
built with Next.js 15 (App Router), TypeScript, Tailwind CSS, and Framer
Motion.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

```bash
npm run build   # production build
npm run start   # serve the production build
npm run typecheck
npm run lint
```

## Project structure

```
app/                  Routes, layout, global styles, SEO files
  layout.tsx           Fonts, <head> metadata, JSON-LD, Navbar/Footer shell
  page.tsx              Assembles all sections
  globals.css            Tailwind layers + design tokens (glass, gradients, buttons)
  loading.tsx              Route-level loading state
  sitemap.ts / robots.ts    Generated SEO files

components/
  layout/                Navbar, Footer
  sections/              Hero, About, Skills, Experience, Projects,
                          Achievements, Testimonials, Contact
  ui/                    Reusable building blocks: Button, GlassCard,
                          SectionHeading, Badge, TerminalCard,
                          AnimatedCounter, BrowserFrame

data/                  Plain TypeScript data — edit content here, not in components
  nav.ts                  Site config, nav links, social links
  skills.ts, experience.ts, projects.ts, achievements.ts, testimonials.ts

types/                 Shared TypeScript interfaces
lib/                   Small utilities (className combiner)
```

Content lives in `data/*.ts`, separate from the components that render it —
update a job, a project, or a stat in one place without touching JSX.

## Before you deploy

1. **Resume**: drop your PDF at `public/resume.pdf` (see
   `public/RESUME_PLACEHOLDER.md`). The Download Resume buttons already
   point at `/resume.pdf`.
2. **Project links**: `data/projects.ts` has `githubUrl`/`liveUrl` set to
   `"#"` placeholders — swap in real repo and demo links.
3. **Project screenshots**: `components/ui/BrowserFrame.tsx` renders a
   CSS-only browser-chrome placeholder so the site ships with zero external
   image dependencies. Swap it for a real `next/image` screenshot per
   project whenever you have one — the component is a clean 1:1
   replacement point.
4. **Contact form**: `components/sections/Contact.tsx` is UI-only — it
   simulates a successful send. Wire `handleSubmit` to a real `app/api/contact/route.ts`
   backed by an email service (e.g. Resend, Nodemailer) before relying on
   it in production.
5. **Site URL**: update `siteConfig.url` in `data/nav.ts` to your real
   deployed domain — it feeds the `<head>` metadata, Open Graph tags,
   sitemap, and JSON-LD structured data.
6. **GitHub link**: `data/nav.ts` → `socialLinks` has a placeholder GitHub
   URL; replace with your profile.

## Design notes

- Dark, glassmorphic SaaS aesthetic: deep ink background, violet/amber
  accent pair, Space Grotesk for display type, Inter for body copy,
  JetBrains Mono for code, labels, and stats.
- The hero's signature element is a typing "profile.ts" code card — a
  developer-native way to introduce a frontend engineer instead of a
  generic headshot-and-tagline layout.
- The experience timeline borrows a git-branch visual since the content is
  genuinely chronological (a real commit history of roles).
- All interactive elements have visible focus states, and motion respects
  `prefers-reduced-motion`.
