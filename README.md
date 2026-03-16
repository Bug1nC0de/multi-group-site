# Multi Group Site

Marketing and corporate website for Multi Group Inc, built with React, Vite, and React Router.

## Overview

This project is a multi-page-style single-page application for presenting:

- company overview and positioning
- capabilities and innovation pages
- solutions by sector
- product category and product detail pages
- legal and contact pages

The site is optimized for static hosting and is currently configured for Vercel deployment.

## Stack

- React 19
- Vite 7
- React Router 7
- Framer Motion
- Lucide React

## Local Development

Requirements:

- Node.js 20+ recommended
- npm

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Scripts

- `npm run dev`: start the Vite dev server
- `npm run build`: run TypeScript build checks and produce a production bundle in `dist/`
- `npm run preview`: serve the built site locally
- `npm run lint`: run ESLint

## Project Structure

Top-level application code lives in `src/`.

- `src/components/`: reusable UI building blocks
- `src/context/`: shared React context such as theme state
- `src/pages/`: route-level pages
- `src/pages/solutions/`: solution detail pages
- `src/pages/products/`: product category and product detail pages
- `src/index.css`: shared design system utilities and global styles
- `src/App.jsx`: route definitions and app shell

Additional notes are in:

- [docs/DEPLOYMENT.md](/Users/eagle/Dev/Multi-Group/docs/DEPLOYMENT.md)
- [docs/PROJECT_STRUCTURE.md](/Users/eagle/Dev/Multi-Group/docs/PROJECT_STRUCTURE.md)

## Routing

The site uses client-side routing with `react-router-dom`.

Because of that, static hosting must rewrite unknown routes to `index.html`. This repo includes:

- [vercel.json](/Users/eagle/Dev/Multi-Group/vercel.json)

That rewrite is required so routes like `/solutions/it` and `/products/access-control` work when opened directly.

## Deployment

The current production-friendly target is Vercel.

Basic Vercel settings:

- Framework preset: `Vite`
- Build command: `npm run build`
- Output directory: `dist`

See [docs/DEPLOYMENT.md](/Users/eagle/Dev/Multi-Group/docs/DEPLOYMENT.md) for the full deployment notes.

## Content and Design Notes

- Shared hero and intro patterns live in reusable components.
- Solution pages use a shared template.
- The site includes a light/dark theme toggle, but recent work focused on making light mode reliable.
- Branding currently uses a custom wordmark component in the header and footer.

## Current Production Repo

Primary deployable GitHub repo:

- `https://github.com/Bug1nC0de/multi-group-site`

## Verification

Before deploying or opening a PR, run:

```bash
npm run build
```

If the build passes, the static output is ready for hosting.
