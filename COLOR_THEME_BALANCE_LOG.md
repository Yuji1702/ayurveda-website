# Color Theme Balance Log

## Ayurvedic Harmony Palette
| Token | Hex | Primary Use |
| --- | --- | --- |
| --forest | #2D6B57 | Header/footer anchor, deep overlays, grounding gradients |
| --sage | #964B00 | Stabilizing accents, borders, card frames |
| --rose | #F4C430 | Buttons, callouts, hover/active emphasis |
| --rose-light | color-mix(--rose 45%, white 55%) | Gentle gold wash for focus and badges |
| --rose-pale | #F8F4EC | Section washes and hero backgrounds |

## Accent Discipline
Keeping warm gold `--rose` reserved for CTAs and interactive states protects readability; the luminous metal pairs with white text at WCAG AA levels while preventing supporting paragraphs from drifting toward overly saturated hues. Reserving copy for the charcoal `--foreground` keeps messaging modern and calm.

## Surface Layering
Sections now follow a clear depth stack: page shells wash with `--rose-pale`, cards and forms rest on soft brown cream blends via `.surface-card`, and key chrome (navigation, footer) uses the deep forest anchor. This progression creates hierarchy without overwhelming the user.

## Test Mode Toggle
Enable the higher-contrast testing palette in the browser console:

```js
document.documentElement.toggleAttribute("data-theme", "test");
```
