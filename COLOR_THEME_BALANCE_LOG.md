# Color Theme Balance Log

## Ayurvedic Harmony Palette
| Token | Hex | Primary Use |
| --- | --- | --- |
| --forest | #1E3F3A | Header/footer anchor, mobile nav overlay, rich gradients |
| --sage | #9FC7C0 | Card surfaces, navigation panels, supportive backgrounds |
| --earth | #497B78 | Borders, dividers, depth accents |
| --rose | #5AA6A5 | Buttons, callouts, hover/active emphasis |
| --rose-light | color-mix(--rose 32%, white 68%) | Gentle aqua wash for focus and badges |
| --rose-pale | #F4F9F6 | Section washes and hero backgrounds |

## Accent Discipline
Keeping the seafoam-teal `--rose` accent focused on CTAs and interactive states protects readability; the saturated aqua pairs with white text at WCAG AA levels while preventing supporting paragraphs from drifting toward overly vivid hues. Supporting elements rely on misty `--sage` and grounded `--earth`, while body copy leans on charcoal `--foreground` for calm clarity.

## Surface Layering
Sections now follow a clear depth stack: page shells wash with `--rose-pale`, cards and forms rest on seafoam blends via `.surface-card`, and key chrome (navigation, footer) uses the deep forest anchor with blue-green dividers. This progression creates hierarchy without overwhelming the user.

## Asset Notes
- Replaced binary WebP portraits and trust badges with vector-driven placeholders so the repo remains text-based for hosting environments that disallow binary artifacts.

## Test Mode Toggle
Enable the higher-contrast testing palette in the browser console:

```js
document.documentElement.toggleAttribute("data-theme", "test");
```
