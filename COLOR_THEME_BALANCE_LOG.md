# Color Theme Balance Log

## Style B Palette
| Token | Hex | Primary Use |
| --- | --- | --- |
| --forest | #2F4A3D | Headlines, body text, header/footer surfaces |
| --sage | #7A9C83 | Card backgrounds, supportive panels |
| --rose | #D26D82 | Calls-to-action, buttons, interactive accents |
| --rose-light | #E9B7C9 | Highlights, soft badges, light gradients |
| --rose-pale | #F3E7EA | Page background wash, hero foundations |

## Accent Discipline
Keeping `--rose` for CTAs and interactive states protects readability; the vivid rose pairs with white text at WCAG AA levels while preventing supporting paragraphs from drifting toward pink. Reserving body copy for `--forest` maintains a professional herbal tone aligned with the physician brand.

## Surface Layering
Sections now follow a clear depth stack: page shells wash with `--rose-pale`, cards and forms rest on the sage mid-tone via `.surface-card`, and key chrome (navigation, footer) uses the deep forest anchor. This progression creates hierarchy without overwhelming the user.

## Test Mode Toggle
Enable the higher-contrast testing palette in the browser console:

```js
document.documentElement.toggleAttribute("data-theme", "test");
```
