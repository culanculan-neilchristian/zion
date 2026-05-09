# Zion Project - Phase 1 Roadmap

This document outlines the foundation and initial setup for the Zion Systems and Build platform, following the established patterns and technical excellence of the JesusPh project.

## 1. Technical Stack & Infrastructure

The project will be built using a modern, high-performance stack focused on type safety, modularity, and premium user experience.

### Core Framework
- **Next.js 15+ (App Router)**: Utilizing Server Components by default for optimal performance and SEO.
- **TypeScript**: Strict typing for maintainable and error-free development.
- **React 19**: Leveraging the latest React features and concurrent rendering.

### Styling & UI
- **Tailwind CSS v4**: Utility-first styling with the latest performance optimizations.
- **Sass (SCSS)**: For complex styling logic and advanced CSS features.
- **Framer Motion**: Premium, smooth animations and micro-interactions.
- **Lucide React**: Consistent, high-quality iconography.
- **Embla Carousel**: For high-performance, accessible sliders and carousels.

### Utilities
- **clsx & tailwind-merge**: For clean, dynamic Tailwind class management.
- **Zod**: Schema-based validation for all data boundaries.

## 2. Project Structure

The repository follows a modular `src` directory pattern:

```text
zion/
├── public/              # Static assets (fonts, icons, raw images)
├── src/
│   ├── app/            # Next.js App Router (pages, layouts, actions)
│   ├── components/     # Reusable UI components (modularized)
│   │   ├── ui/         # Atomic UI elements (buttons, inputs)
│   │   ├── sections/   # Major page sections (Hero, ZPL, etc.)
│   │   └── shared/     # Layout-wide components (Navbar, Footer)
│   ├── lib/            # Utilities, constants, and shared logic
│   ├── assets/         # Processed assets and styles
│   └── hooks/          # Custom React hooks
├── docs/               # Documentation (Roadmaps, Design specs)
└── tailwind.config.ts  # Design system tokens (Gold/Gray palette)
```

## 3. Phase 1 Implementation Goals

### Task 1: Environment Setup
- Initialize Next.js project with TypeScript and Tailwind CSS.
- Configure `clsx` and `tailwind-merge` utility for class composition.
- Setup `src` directory structure.

### Task 2: Design System Foundation
- Implement the "Kingdom-Driven" color palette:
  - **Gold**: Primary accent (`#CDA246`) with light/dark variants.
  - **Gray**: Deep slate neutrals (`#111115` to `#EDEDF4`).
- Configure typography: `Cormorant Garamond` (Display) and `Outfit` (Body).
- Setup global CSS for glassmorphism and premium blurs.

### Task 4: Modular Component Development
- **Navigation**: Responsive glassmorphism navbar with mobile drawer.
- **Hero**: Dynamic entrance with animated orbs and grid patterns.
- **Zion Production Line (ZPL)**: Interactive terminal-style process visualizer.
- **Services & Portfolio**: Responsive grids with hover-triggered animations.
- **Contact**: Validated form with custom-styled inputs.

### Task 5: Responsive & Animated Polish
- Ensure mobile-first responsiveness across all components.
- Implement scroll-reveal animations using Framer Motion.
- Add micro-animations (blinking dots, hover scales, gradient flows).
