# Color Theme Balance Log

## Style B Palette
| Token | Hex | Primary Use |
| --- | --- | --- |
| --forest | #2F3E2F | Header/footer anchor, deep overlays, contrast mode |
| --sage | #6B8E23 | Herbal gradients, supportive accents, iconography |
| --rose | #C96F48 | Calls-to-action, buttons, warm link emphasis |
| --rose-light | #C8A25F | Muted gold badges, hover states, outlines |
| --rose-pale | #FAF6EF | Page background wash, hero foundations |

## Accent Discipline
Keeping the terracotta `--rose` for CTAs and interactive states protects readability; the richer clay pairs with white text at WCAG AA levels while preventing supporting paragraphs from drifting toward saturated hues. Reserving copy for the charcoal `--foreground` keeps messaging modern and calm.

## Surface Layering
Sections now follow a clear depth stack: page shells wash with `--rose-pale`, cards and forms rest on sage-and-cream blends via `.surface-card`, and key chrome (navigation, footer) uses the deep forest anchor. This progression creates hierarchy without overwhelming the user.

## Test Mode Toggle
Enable the higher-contrast testing palette in the browser console:

```js
document.documentElement.toggleAttribute("data-theme", "test");
```
