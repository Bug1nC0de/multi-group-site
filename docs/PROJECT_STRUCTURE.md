# Project Structure

## Application Shell

- [src/main.jsx](/Users/eagle/Dev/Multi-Group/src/main.jsx): React entry point
- [src/App.jsx](/Users/eagle/Dev/Multi-Group/src/App.jsx): router, lazy-loaded pages, navbar/footer shell
- [src/index.css](/Users/eagle/Dev/Multi-Group/src/index.css): global theme tokens and utility classes

## Shared Components

Key shared UI files:

- [src/components/Navbar.jsx](/Users/eagle/Dev/Multi-Group/src/components/Navbar.jsx)
- [src/components/Footer.jsx](/Users/eagle/Dev/Multi-Group/src/components/Footer.jsx)
- [src/components/Hero.jsx](/Users/eagle/Dev/Multi-Group/src/components/Hero.jsx)
- [src/components/PageHero.jsx](/Users/eagle/Dev/Multi-Group/src/components/PageHero.jsx)
- [src/components/SectionIntroBlock.jsx](/Users/eagle/Dev/Multi-Group/src/components/SectionIntroBlock.jsx)
- [src/components/SolutionTemplate.jsx](/Users/eagle/Dev/Multi-Group/src/components/SolutionTemplate.jsx)
- [src/components/WordmarkLogo.jsx](/Users/eagle/Dev/Multi-Group/src/components/WordmarkLogo.jsx)

## Route Pages

Main route pages live in `src/pages/`.

Examples:

- [src/pages/Home.jsx](/Users/eagle/Dev/Multi-Group/src/pages/Home.jsx)
- [src/pages/About.jsx](/Users/eagle/Dev/Multi-Group/src/pages/About.jsx)
- [src/pages/Capabilities.jsx](/Users/eagle/Dev/Multi-Group/src/pages/Capabilities.jsx)
- [src/pages/Innovation.jsx](/Users/eagle/Dev/Multi-Group/src/pages/Innovation.jsx)
- [src/pages/Solutions.jsx](/Users/eagle/Dev/Multi-Group/src/pages/Solutions.jsx)
- [src/pages/Products.jsx](/Users/eagle/Dev/Multi-Group/src/pages/Products.jsx)
- [src/pages/Contact.jsx](/Users/eagle/Dev/Multi-Group/src/pages/Contact.jsx)

## Solutions

Solution detail pages live in:

- `src/pages/solutions/`

These mostly reuse:

- [src/components/SolutionTemplate.jsx](/Users/eagle/Dev/Multi-Group/src/components/SolutionTemplate.jsx)

Examples:

- [src/pages/solutions/SecuritySolutions.jsx](/Users/eagle/Dev/Multi-Group/src/pages/solutions/SecuritySolutions.jsx)
- [src/pages/solutions/ITSolutions.jsx](/Users/eagle/Dev/Multi-Group/src/pages/solutions/ITSolutions.jsx)
- [src/pages/solutions/ElectricalSolutions.jsx](/Users/eagle/Dev/Multi-Group/src/pages/solutions/ElectricalSolutions.jsx)

## Products

Product pages live in:

- `src/pages/products/`

This area is split into category hubs and product detail pages, including:

- access control
- alarms
- asset tracking
- facial recognition
- Mul-T-Lock
- smart cards
- surveillance
- time attendance
- vehicle security
- other products

## Theme

Theme state is managed in:

- [src/context/ThemeContext.jsx](/Users/eagle/Dev/Multi-Group/src/context/ThemeContext.jsx)

Global theme variables are defined in:

- [src/index.css](/Users/eagle/Dev/Multi-Group/src/index.css)

## Static Output

Production files are built to:

- `dist/`

This directory should be treated as generated output.
