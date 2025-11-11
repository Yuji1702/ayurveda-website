# Color Theme Balance Log

## Ayurvedic Harmony Palette
| Token | Hex | Primary Use |
| --- | --- | --- |
| --forest | #2D6B57 | Header/footer anchor, hero gradients, deep overlays |
| --sage | #6B9362 | Card surfaces, navigation panels, supportive backgrounds |
| --earth | #A67C52 | Borders, dividers, warm typography accents |
| --rose | #F4C430 | Buttons, callouts, hover/active emphasis |
| --rose-light | color-mix(--rose 35%, white 65%) | Gentle gold wash for focus and badges |
| --rose-pale | #F9F6F2 | Section washes and hero backgrounds |

## Accent Discipline
Keeping warm gold `--rose` reserved for CTAs and interactive states protects readability; the luminous metal pairs with white text at WCAG AA levels while preventing supporting paragraphs from drifting toward overly saturated hues. Supporting elements rely on olive `--sage` and grounded `--earth`, while body copy leans on charcoal `--foreground` for calm clarity.

## Surface Layering
Sections now follow a clear depth stack: page shells wash with `--rose-pale`, cards and forms rest on olive blends via `.surface-card`, and key chrome (navigation, footer) uses the deep forest anchor with earth-toned dividers. This progression creates hierarchy without overwhelming the user.

## Test Mode Toggle
Enable the higher-contrast testing palette in the browser console:

```js
document.documentElement.toggleAttribute("data-theme", "test");
```
