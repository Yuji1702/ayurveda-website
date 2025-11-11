# Color Theme Balance Log

## Style B Palette
| Token | Hex | Primary Use |
| --- | --- | --- |
| --forest | #3E6A55 | Headlines, body text, header/footer surfaces |
| --sage | #6B8F6E | Card backgrounds, supportive panels |
| --rose | #D26D82 | Calls-to-action, buttons, interactive accents |
| --rose-light | #E48CA7 | Highlights, soft badges, light gradients |
| --rose-pale | #F9E3E7 | Page background wash, hero foundations |

## Accent Discipline
Keeping `--rose` for CTAs and interactive states protects readability; the vivid rose pairs with white text at WCAG AA levels while preventing supporting paragraphs from drifting toward pink. Reserving body copy for `--forest` maintains a professional herbal tone aligned with the physician brand.

## Surface Layering
Sections now follow a clear depth stack: page shells wash with `--rose-pale`, cards and forms rest on the sage mid-tone via `.surface-card`, and key chrome (navigation, footer) uses the deep forest anchor. This progression creates hierarchy without overwhelming the user.

## Test Mode Toggle
Enable the higher-contrast testing palette in the browser console:

```js
document.documentElement.toggleAttribute("data-theme", "test");
```
