# AGENTS.md

## Project

Multi Group Inc marketing site built with React, Vite, and React Router.

This is a static, client-rendered SPA deployed to Vercel.

## Stack

- React 19
- Vite 7
- React Router 7
- Framer Motion
- Lucide React

## Important Rules

### Routing

- Routes are defined in `src/App.jsx`.
- This is an SPA, so direct route access must resolve to `index.html`.
- Keep [vercel.json](/Users/eagle/Dev/Multi-Group/vercel.json) intact unless you are deliberately changing deployment behavior.

### Theme

- Theme state lives in [src/context/ThemeContext.jsx](/Users/eagle/Dev/Multi-Group/src/context/ThemeContext.jsx).
- Default theme is currently `light`.
- Avoid hardcoded white text on normal light surfaces.
- Prefer theme-aware tokens and utilities from [src/index.css](/Users/eagle/Dev/Multi-Group/src/index.css).
- If you add new utility-style class names, make sure they actually exist in `src/index.css`.

### Layout and Shared Components

- Reuse shared components before creating new one-off structures.
- Header branding uses [src/components/WordmarkLogo.jsx](/Users/eagle/Dev/Multi-Group/src/components/WordmarkLogo.jsx).
- Page intro blocks for key top-level pages use [src/components/SectionIntroBlock.jsx](/Users/eagle/Dev/Multi-Group/src/components/SectionIntroBlock.jsx).
- Solution detail pages should generally reuse [src/components/SolutionTemplate.jsx](/Users/eagle/Dev/Multi-Group/src/components/SolutionTemplate.jsx).

### Styling

- Global styling and utility classes are in [src/index.css](/Users/eagle/Dev/Multi-Group/src/index.css).
- The project uses many Tailwind-like class names, but they are custom CSS utilities, not Tailwind.
- Do not assume a utility exists just because the class name looks familiar.
- Prefer consistent use of theme variables over inline hex values, unless a fixed brand color is intentional.

### Content and Structure

- Route-level pages live in `src/pages/`.
- Solutions are in `src/pages/solutions/`.
- Products are in `src/pages/products/`.
- Keep marketing copy consistent with the existing corporate/industrial tone.

### Deployment

- Production target is Vercel.
- Build command: `npm run build`
- Output directory: `dist`
- Main live repo for deployment: `https://github.com/Bug1nC0de/multi-group-site`
- Production domain: `https://multi-group-site.vercel.app`

## Safe Workflow

Before finishing significant UI or routing changes:

```bash
npm run build
```

If you touch deployment or routing behavior, verify:

- homepage loads
- direct route load works for a nested path like `/solutions/it`

## Documentation

See:

- [README.md](/Users/eagle/Dev/Multi-Group/README.md)
- [docs/DEPLOYMENT.md](/Users/eagle/Dev/Multi-Group/docs/DEPLOYMENT.md)
- [docs/PROJECT_STRUCTURE.md](/Users/eagle/Dev/Multi-Group/docs/PROJECT_STRUCTURE.md)
