# Style B Color Theme Update

## Palette overview
- `--foreground` (`#1F1F1F` – Charcoal): Primary text tone, ensuring crisp copy across cream backdrops.
- `--background` (`#FAF6EF` – Cream): Base surface for pages and section backdrops.
- `--accent` (`#C96F48` – Terracotta): Call-to-action buttons, interactive highlights, and navigation states.
- `--accent-soft` (`#C8A25F` – Muted Gold): Hover states, outlines, and gentle emphasis fills.
- `--support` (`color-mix(var(--sage) 75%, white 25%)` – Herbal Mist): Card surfaces, testimonial panels, and pricing table frames.

## Why Style B fits holistic wellness
The herbal green, muted gold, and terracotta trio mirrors Ayurvedic apothecaries and luxury retreats—earthy yet refined. Terracotta CTAs signal attentive care, while gold glows evoke nourishing oils and sunlit rituals. Charcoal type on cream ensures legibility for all ages.

## Adjusting theme values later
- Update the CSS variables in `app/globals.css` to tweak the core palette. Every component references these tokens rather than hard-coded colors.
- Tailor button behavior by editing the `.btn-primary` rule or extending it with utility classes in components as needed.
- Section and card backgrounds inherit from `.surface-section` and `.surface-card`. Modify those classes once to recolor all large panels and testimonials.

## Components refreshed in this pass
- `app/layout.tsx` – Body, focus, and global gradient rely on the new variables.
- `components/site-header.tsx` & `components/site-footer.tsx` – Navigation, mobile menu, and footer surfaces aligned with deep sage and rose CTAs.
- `app/page.tsx`, `app/about/page.tsx`, `app/services/page.tsx`, `app/consultation/page.tsx`, `app/contact/page.tsx` – Swapped emerald utilities for herbal gradients, terracotta CTAs, and cream panels.
- `app/globals.css` – Introduced Style B tokens plus `.btn-primary`, `.surface-section`, and `.surface-card` helpers for consistent application.

## Contrast refinement sprint
- Tuned `.btn-primary` and default link colors toward deeper rose mixes so white text and pale backgrounds now exceed 4.5:1 contrast.
- Lightened `.surface-card` panels and added `.surface-overlay` to keep testimonial quotes and contact guidance legible on layered surfaces.
- Updated navigation hover/active states, consultation badges, and service links with darker blends to preserve readability during interaction.
- Added `html[data-theme="test"]` overrides and `toggleThemeTestMode` to flip into an A/B readability variant without code changes.
