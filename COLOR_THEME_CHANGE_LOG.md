# Style B Color Theme Update

## Palette overview
- `--foreground` (`#3E6A55` – Deep Sage): Primary text tone, header/footer background, and brand accents.
- `--background` (`#F9E3E7` – Rose Pale): Base surface for pages and section backdrops.
- `--accent` (`#D26D82` – Rose): Call-to-action buttons, interactive highlights, and navigation states.
- `--accent-soft` (`#E48CA7` – Rose Light): Hover states, outlines, and gentle emphasis fills.
- `--support` (`#6B8F6E` – Sage): Card surfaces, testimonial panels, and pricing table headers.

## Why Style B fits holistic wellness
The deep sage and rose pairing mirrors Ayurvedic botanicals and calming spa environments, signalling earth-grounded care with a nurturing feminine touch. Rose-infused highlights reinforce compassion and healing, while sage backdrops maintain readability and trust.

## Adjusting theme values later
- Update the CSS variables in `app/globals.css` to tweak the core palette. Every component references these tokens rather than hard-coded colors.
- Tailor button behavior by editing the `.btn-primary` rule or extending it with utility classes in components as needed.
- Section and card backgrounds inherit from `.surface-section` and `.surface-card`. Modify those classes once to recolor all large panels and testimonials.

## Components refreshed in this pass
- `app/layout.tsx` – Body, focus, and global gradient rely on the new variables.
- `components/site-header.tsx` & `components/site-footer.tsx` – Navigation, mobile menu, and footer surfaces aligned with deep sage and rose CTAs.
- `app/page.tsx`, `app/about/page.tsx`, `app/services/page.tsx`, `app/consultation/page.tsx`, `app/contact/page.tsx` – Replaced emerald utilities with semantic tokens for hero messaging, cards, tables, and forms.
- `app/globals.css` – Introduced Style B tokens plus `.btn-primary`, `.surface-section`, and `.surface-card` helpers for consistent application.

## Contrast refinement sprint
- Tuned `.btn-primary` and default link colors toward deeper rose mixes so white text and pale backgrounds now exceed 4.5:1 contrast.
- Lightened `.surface-card` panels and added `.surface-overlay` to keep testimonial quotes and contact guidance legible on layered surfaces.
- Updated navigation hover/active states, consultation badges, and service links with darker blends to preserve readability during interaction.
- Added `html[data-theme="test"]` overrides and `toggleThemeTestMode` to flip into an A/B readability variant without code changes.
