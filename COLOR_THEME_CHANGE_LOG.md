# Seafoam Renewal Palette Update

## Palette overview
- `--foreground` (`#1F1F1F` – Charcoal): Primary text tone, keeping content crisp atop light seafoam washes.
- `--background` (`#F4F9F6` – Misty Cream): Base surface that keeps long-form content calm and breathable across sections.
- `--rose` (`#5AA6A5` – Seafoam Teal): Reserved for calls-to-action, interactive highlights, and celebratory accents.
- `--accent-soft` (`color-mix(--rose 20%, white 80%)` – Soft Tide): Hover states, outlines, badges, and gentle emphasis fills.
- `--support` (`color-mix(--sage 70%, white 30%)` – Aqua Mist): Card surfaces, testimonial panels, and pricing table frames.
- `--forest` (`#1E3F3A` – Deep Evergreen): Header/footer anchor, navigation chrome, and gradient roots.
- `--sage` (`#9FC7C0` – Clouded Aqua): Comforting mid-tone for surface tints and navigation backgrounds.
- `--earth` (`#497B78` – Ocean Pine): Stabilizing borders, dividers, and typographic accents that hint at mineral springs.

## Why this palette fits holistic wellness
Deep evergreen evokes vitality and nature, clouded aqua surfaces nod to mineral baths, and ocean pine detailing grounds forms with spa-like calm. Seafoam teal accents reinforce premium care while misty cream backgrounds and charcoal copy preserve clarity. Together the palette feels restorative, balanced, and trustworthy for holistic seekers.

## Adjusting theme values later
- Update the CSS variables in `app/globals.css` to tweak the core palette. Every component references these tokens rather than hard-coded colors.
- Tailor button behavior by editing the `.btn-primary` rule or extending it with utility classes in components as needed.
- Section and card backgrounds inherit from `.surface-section` and `.surface-card`. Modify those classes once to recolor all large panels and testimonials.

## Components refreshed in this pass
- `app/layout.tsx` – Body gradient now drifts through misty aqua hues for a spa-inspired shell.
- `components/site-header.tsx` & `components/site-footer.tsx` – Navigation chrome and footer accents anchor to deep evergreen with teal highlights.
- `app/page.tsx`, `app/about/page.tsx`, `app/services/page.tsx`, `app/consultation/page.tsx`, `app/contact/page.tsx` – Each view leans on the seafoam, aqua, and evergreen accents while preserving layout structure.
- `app/globals.css` – Palette tokens, surface helpers, and button styling align with the seafoam renewal scheme.

## Contrast refinement sprint
- Tuned `.btn-primary` and default link colors toward deeper teal mixes so white text and pale backgrounds now exceed 4.5:1 contrast.
- Lightened `.surface-card` panels and added `.surface-overlay` to keep testimonial quotes and contact guidance legible on layered surfaces.
- Updated navigation hover/active states, consultation badges, and service links with darker seafoam blends to preserve readability during interaction.
- Added `html[data-theme="test"]` overrides and `toggleThemeTestMode` to flip into an A/B readability variant without code changes.
