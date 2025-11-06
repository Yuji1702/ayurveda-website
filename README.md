## Overview

This repository contains the source code for the **Ayurveda Wellness** website. It is a [Next.js](https://nextjs.org) application configured with Tailwind CSS v4 for styling and TypeScript for type safety. The project intentionally keeps its font stack local to ensure builds succeed in fully offline environments.

## Project structure

| Path | Purpose |
| --- | --- |
| `app/layout.tsx` | Defines the root layout that wraps every page. It sets global metadata and applies the global styles from `app/globals.css`. |
| `app/page.tsx` | Renders the current landing page. While the long-form Ayurveda content is still being drafted, the page includes quick-start guidance for exploring the codebase. |
| `app/globals.css` | Declares shared colors and font stacks and enables Tailwind's base styles. |
| `public/` | Static assets (favicons, images, etc.) served directly by Next.js. |

Each component file includes short comments describing the main function so newcomers can quickly understand the flow.

## Scripts

All commands are run from the project root:

- `npm run dev` – Starts the development server with hot module reloading on [http://localhost:3000](http://localhost:3000).
- `npm run build` – Creates an optimized production build. Run this before deploying.
- `npm run start` – Serves the production build locally so you can verify the output.
- `npm run lint` – Runs ESLint using the configuration in `eslint.config.mjs` to ensure the codebase follows the project's standards.

## Making changes

1. Install dependencies with `npm install`.
2. Start the dev server using `npm run dev` and edit files inside the `app/` directory.
3. Update or add Tailwind styles in `app/globals.css` or directly via utility classes.
4. Run `npm run lint` and `npm run build` to confirm the project is production-ready.

## Additional resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
