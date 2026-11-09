# Design direction — ATELIER GLASS

## Identity

**Position:** Command Center as a calm operational instrument, not an AI sales page. The interface makes hidden system decisions visible. Personality comes from precise spacing, light, hierarchy and custom iconography, rather than gimmicks.

**Three ideas:** *Clarity, proof, momentum.* The home screen should answer "What requires my attention?". Mission detail should answer "What has really happened?". Access screens should answer "What is permitted?".

## Optical materials

Follows the intent of Apple's [Materials HIG](https://developer.apple.com/design/human-interface-guidelines/materials): place glass above content on navigation and interactive chrome, while using translucent-but-opaque **readable surfaces** for information. The moving ambient layers sit behind the app, not behind body text. Do not apply glass everywhere.

## Original brand and module marks

`assets/aurion-mark.svg` is an independent ribbon-like continuity mark: a flowing pair of arcs joined by a terminal dot. Its purpose is to suggest coordination, not a generic robot/brain symbol. It is not a licensed third-party mark.

`assets/marks/*.svg` form an original, editable 64×64 icon system based on 24×24 geometry with rounded joints and controlled stroke weights. The exporter in `scripts/export_marks.py` regenerates them from the handwritten glyphs in `app.js`.

### Optical QA before adopting a mark

- At 16px and 24px, is the symbol still recognizable?
- Does it work in a monochrome mode without the background tile?
- Is its optical center balanced, not only the mathematical center?
- Does it read as a function (mission, authorization, Jarvis) rather than "AI" generally?
- Has it been checked for accidental similarities to registered third-party marks?

These are original **functional marks** and design explorations, not clearance for trademark registration.

## Tokens

| Purpose | Light | Notes |
| --- | --- | --- |
| Primary text | `#243244` | Deep slate, not pure black |
| Functional accent | `#3a667e` | Calm Atlantic blue |
| Accent backdrop | `#e7f2f4` | Active navigation, light highlight |
| Background | `#f2f5f8` | Barely blue stone |
| Caution | `#b77843` | Attention, not failed action |
| Observed success | `#31856e` | Real measured pass only |
| Error | `#ad5d62` | A fault or failed action |

Type: system UI stack, SF Pro on Apple platforms, Segoe UI on Windows; Georgian editorial italic for one intentionally rare phrase, not for data labels. 10–13px supporting labels, 12–14px operational content, 35–60px titles. Preserve legibility in viewport zoom.

## Motion

Subtle transform and opacity only, most durations 150–250ms. Ambient background motion 18 seconds; ring motion 42 seconds. All disabled in `prefers-reduced-motion: reduce`; the user can also choose reduced animations from Preferences.

## Content patterns

- **Operational priority row:** clear title → why it matters → observed state → inspectable detail.
- **Failure sheet:** intent → responsible agent → attempts → missing capability → confirmed effect → recommended recovery; no "success" without proof.
- **Approval sheet:** scope and risk, prerequisites, evidence, human decision. Demo buttons are explicitly simulated.
- **Agent card:** meaningful role and capability, never invented success rate.
- **Infrastructure:** unknown/unconnected must be explicit, not shown as green.
- **Glass surfaces:** navigation, toolbar, floating inspector. Keep data tables relatively opaque.

## Responsive

At 660px the sidebar becomes a collapsible overlay; metric tiles and content grids stack. Minimum keyboard targets generally 36px. Must verify iOS Safari, mobile scroll, on-screen keyboard, virtual keyboards and full-page overflow before production integration.

## Sources (do not copy artwork)

- Apple Human Interface Guidelines, Materials
- `nextlevelbuilder/ui-ux-pro-max-skill`
- `addyosmani/agent-skills` via OpenDesign's frontend UI skill
- `kaankiziltug/logo-design-skill` (process and SVG geometry, NOT trademark library redistribution)
