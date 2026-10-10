# Shivam Raj — Portfolio

A personal portfolio website for Shivam Raj, Computer Engineering student at Thapar Institute of Engineering and Technology (batch of 2028). It presents projects, experience, achievements, education and skills in a dark, editorial layout with smooth scrolling and scroll-driven animation.

## Features

- **Hero and about** sections with a short personal statement and focus areas
- **Selected work:** project cards with tags, metrics and an expandable detail modal (LoanLens, PresentPlus, Placement Engine)
- **Experience, achievements and education** timelines
- **What I build** and **skills** sections grouped by domain (Android, full-stack, machine learning, backend, databases)
- **Résumé modal** with view and download links
- **Contact** section and footer
- Custom cursor, Lenis smooth scrolling and GSAP scroll animations, switched off for visitors who prefer reduced motion

## Tech stack

| Area | Tools |
|---|---|
| Framework | React 19, TypeScript |
| Build tool | Vite 6 |
| Styling | Tailwind CSS 4 |
| Animation | GSAP (ScrollTrigger), Motion, Lenis, Three.js |
| Icons | lucide-react |

## Getting started

Requires Node.js 18 or newer.

```bash
npm install
```

```bash
npm run dev
```

The site runs at http://localhost:3000.

| Script | What it does |
|---|---|
| `npm run dev` | Start the development server on port 3000 |
| `npm run build` | Build the production site into `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Type-check the project with TypeScript |

## Project structure

```
├── index.html               Page shell, fonts and meta tags
├── public/                  Static files (favicon image)
└── src/
    ├── main.tsx             React entry point
    ├── App.tsx              Page layout, smooth scrolling and animation setup
    ├── index.css            Tailwind and global styles
    ├── types.ts             TypeScript types for projects, experience and skills
    ├── data/
    │   └── portfolioData.ts All content: personal info, projects, experience, skills
    ├── assets/              Avatar image
    └── components/          One component per section (Hero, SelectedWork, SkillsSection, ...)
```

## Editing the content

Every piece of text on the site lives in [`src/data/portfolioData.ts`](src/data/portfolioData.ts). To add a project, append an entry to `PROJECTS`; to update experience, skills or contact details, edit the matching export. No component code needs to change.

## Environment variables

`.env.example` lists `GEMINI_API_KEY` and `APP_URL`, left over from the Google AI Studio template this project started from. The current site does not call the Gemini API, so neither variable is needed to run it locally.

## Contact

- GitHub: [svm-codes-fs](https://github.com/svm-codes-fs)
- LinkedIn: [Shivam Raj](https://www.linkedin.com/in/shivam-raj-qwertyuiop/)
