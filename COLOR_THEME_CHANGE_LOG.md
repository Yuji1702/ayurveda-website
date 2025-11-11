# Ayurvedic Harmony Palette Update

## Palette overview
- `--foreground` (`#1F1F1F` – Charcoal): Primary text tone, keeping content sharp on cream and white foundations.
- `--background` (`#F9F6F2` – Cream): Base surface that keeps long-form content calm and breathable across sections.
- `--rose` (`#F4C430` – Warm Gold): Reserved for calls-to-action, interactive highlights, and celebratory accents.
- `--accent-soft` (`color-mix(--rose 20%, white 80%)` – Soft Gilding): Hover states, outlines, badges, and gentle emphasis fills.
- `--support` (`color-mix(--sage 65%, white 35%)` – Olive Mist): Card surfaces, testimonial panels, and pricing table frames.
- `--forest` (`#2D6B57` – Deep Green): Header/footer anchor, navigation chrome, and gradient roots.
- `--sage` (`#6B9362` – Soft Olive): Comforting mid-tone for surface tints and navigation backgrounds.
- `--earth` (`#A67C52` – Warm Brown): Stabilizing borders, dividers, and typographic accents that hint at wood and spice.

## Why this palette fits holistic wellness
Deep herbal green evokes vitality and nature, soft olive surfaces nod to fresh leaves, and warm brown recalls crafted wood and herbal apothecaries. Muted gold accents reinforce premium care while cream backgrounds and charcoal copy preserve clarity. Together the palette feels restorative, balanced, and trustworthy for holistic seekers.

## Adjusting theme values later
- Update the CSS variables in `app/globals.css` to tweak the core palette. Every component references these tokens rather than hard-coded colors.
- Tailor button behavior by editing the `.btn-primary` rule or extending it with utility classes in components as needed.
- Section and card backgrounds inherit from `.surface-section` and `.surface-card`. Modify those classes once to recolor all large panels and testimonials.

## Components refreshed in this pass
- `app/layout.tsx` – Body gradient now drifts from herbal green to warm gold for a spa-inspired shell.
- `components/site-header.tsx` & `components/site-footer.tsx` – Navigation chrome and footer accents anchor to deep forest with gold edge details.
- `app/page.tsx`, `app/about/page.tsx`, `app/services/page.tsx`, `app/consultation/page.tsx`, `app/contact/page.tsx` – Each view leans on the new green, brown, and gold accents without structural changes.
- `app/globals.css` – Palette tokens, surface helpers, and button styling align with the Ayurvedic harmony scheme.

## Contrast refinement sprint
- Tuned `.btn-primary` and default link colors toward deeper rose mixes so white text and pale backgrounds now exceed 4.5:1 contrast.
- Lightened `.surface-card` panels and added `.surface-overlay` to keep testimonial quotes and contact guidance legible on layered surfaces.
- Updated navigation hover/active states, consultation badges, and service links with darker blends to preserve readability during interaction.
- Added `html[data-theme="test"]` overrides and `toggleThemeTestMode` to flip into an A/B readability variant without code changes.
