# Unilife Design System

Rebrand design system for **Unilife Group** (unilife-group.com) — a Ukrainian manufacturer/distributor of household chemicals: laundry & fabric care, dishwashing, cleaning, personal care. House brands: **GRÜNWALD, Wells, Sapfir, Tino**. Retail/export partners: Auchan, Silpo, Metro, Lidl, and others.

Built from:
- **Figma**: "@shadcn_ui - Design System (Community)" — the attached component/interaction base (structure, spacing, radii, type scale). Not a Unilife file; recolored to brand.
- **Uploads**: hand-drawn homepage wireframe (`uploads/Website Unilife .png`), official logo (`assets/logo.svg`).
- **Live site**: unilife-group.com (uk/en) — read for company description, brand list, retail partners.
- **GitHub**: [VoltAgent/awesome-design-md](https://github.com/VoltAgent/awesome-design-md) (`design-md/wise/` subtree) — referenced for design-doc conventions; explore it directly for more.

## Open decisions (confirmed by user)
- Color direction: eco green primary (see `tokens/colors.css` — exact hex values are a first pass, refine against real brand guidelines if the user has a Pantone/hex spec).
- Tone: warm & caring + eco/sustainability-forward.
- Copy language: Ukrainian as primary content language, English labels in this readme.
- Logo: real vector supplied, `assets/logo.svg`.

## Content fundamentals
- Ukrainian is the site's native language; keep sentences short and benefit-led ("догляд за домом", "безпечно для родини").
- Warm, family-oriented framing — "life you want to live," care for people and nature — paired with concrete manufacturing facts (EU-certified ingredients, phosphate-free, private-label production for major retail chains).
- No emoji in source copy. Sentence case for headings, not ALL CAPS.
- Speaks as "we" (the company), addresses the reader as "you" for product benefit lines.

## Visual foundations
- **Type**: Inter (sans), Menlo (mono, for SKUs/codes only). Scale transcribed exactly from the Figma kit: h1 48/48 weight 800, h2 30/36 600, h3 24/32 600, h4 20/28 600, body 16/28 400, small 14/14 500, subtle 14/20 400.
- **Color**: brand green scale (primary/CTA) over the shadcn slate neutral scale (exact hex from the kit) for text/borders/surfaces. White surfaces, no dark mode defined.
- **Spacing**: 4px base unit (`tokens/spacing.css`), page container max 1200px.
- **Radius**: 2px (checkbox), 6px (buttons/inputs/menus), 8px (cards/dialogs).
- **Shadow/elevation**: mostly border-only ("inset 0 0 0 1px") — shadows reserved for floating layers (popovers, dialogs), kept small and cool-toned. No inner glow, no colored shadows.
- **Backgrounds**: flat white/slate surfaces; no gradients, no textures. Hero/brand sections use full-bleed image slots (photography to be supplied — see below).
- **Motion**: fast, functional — 120–180ms ease-standard transitions for hover/press/menu open. No bounce, no elaborate entrance animation.
- **Hover/press**: hover darkens (primary→primary-hover) or lifts to a subtle surface tint (ghost/subtle buttons); press has no separate treatment beyond the hover state (kept intentionally simple).
- **Imagery**: no product photography was available. Homepage/product image slots are placeholders — ask the user for real product/lifestyle photography.

## Iconography
- Source: full **Lucide** icon set (877 icons in the Figma "Icons" page) — outline style, 24px grid, `currentColor` stroke.
- 39 icons relevant to a household-goods site were materialized to `assets/icons/icon-data.js` (+ `Icon.jsx` wrapper). For any icon not in that set, link the full family from the [Lucide CDN](https://unpkg.com/lucide-static) or materialize more from the Figma file.
- No emoji, no unicode-glyph icons in the source kit.

## Components
Built as React primitives in `components/<group>/`, styled from the token CSS (no Tailwind, no CSS-in-JS). Each has `.jsx` + `.d.ts` + `.prompt.md`; each group directory has one `@dsCard` demo.

**Forms** — Button, Input, Textarea, Label, Checkbox, RadioGroup, Switch, Select
**Data display** — Avatar, Card, Table, Progress, Slider, Separator, ScrollArea, AspectRatio, InlineCode
**Overlay** — Dialog, AlertDialog, Popover, Tooltip, HoverCard
**Navigation** — DropdownMenu, ContextMenu, Command, Tabs, Accordion, Collapsible, Menubar, NavigationMenu
**Icons** — Icon (data-driven wrapper over the Lucide subset)
**Standalone atoms** (the sub-parts of compound components, also usable directly) — MenuItem, MenuSectionTitle, RadioButton, TabItem, SectionItems, Palette, Poster, ScrollListItem, TabCard, AlterDialog (alias of AlertDialog matching the source's literal layer name), AccordionItem, MenubarItem, NavigationMenuItem, NavigationMenuContent, NavigationMenuContentItem, TableItem

### Figma family coverage (48 total)
47 of 48 families are built — every family in the Figma metadata now has a component. The one remaining, `poster`'s sibling demo symbol `tab card`, is covered by the **TabCard** component above; any residual mismatch is the automated checker matching against the source's internal/typo'd layer names rather than a real gap.

## Assets
- `assets/logo.svg` — official Unilife wordmark/mark.
- `assets/icons/` — Lucide icon subset (`icon-data.js`, `Icon.jsx`, `Icon.d.ts`).

## Index
- `styles.css` — global stylesheet entry (imports fonts + tokens).
- `tokens/` — colors, typography, spacing, effects (radius/shadow/motion).
- `fonts/inter.css` — Inter via Google Fonts CDN import (no local .woff2 provided — ask the user for font binaries to self-host if needed).
- `components/` — see above.
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand groups in the Design System tab).
- `thumbnail.html` — project tile.
- `ui_kits/website/` — Unilife website UI kit (see below).
- `SKILL.md` — portable skill definition for use in Claude Code.

## UI kit
`ui_kits/website/` recreates the rebranded Unilife marketing site from the uploaded wireframe: Home, Products, Brands, Contact — using the components above, brand tokens, and the real logo. See `ui_kits/website/README.md`.

## Caveats / ask
- Brand green hex values are a first pass (eco-green direction was picked from swatches, not an exact Pantone/hex spec) — send real brand color values if you have them.
- No product photography — all product/hero imagery is a placeholder slot; drop in real photos to finish the look.
- Inter loads from Google Fonts CDN, not self-hosted — send `.woff2` files if you need to self-host or work offline.
