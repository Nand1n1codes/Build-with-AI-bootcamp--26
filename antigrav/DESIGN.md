---
name: Orbital Glass
colors:
  surface: '#101221'
  surface-dim: '#101221'
  surface-bright: '#363848'
  surface-container-lowest: '#0b0d1b'
  surface-container-low: '#191b29'
  surface-container: '#1d1f2d'
  surface-container-high: '#272938'
  surface-container-highest: '#323443'
  on-surface: '#e1e1f5'
  on-surface-variant: '#cfc2d6'
  inverse-surface: '#e1e1f5'
  inverse-on-surface: '#2e2f3f'
  outline: '#988d9f'
  outline-variant: '#4d4354'
  surface-tint: '#ddb7ff'
  primary: '#ddb7ff'
  on-primary: '#490080'
  primary-container: '#b76dff'
  on-primary-container: '#400071'
  inverse-primary: '#842bd2'
  secondary: '#7bd0ff'
  on-secondary: '#00354a'
  secondary-container: '#00a6e0'
  on-secondary-container: '#00374d'
  tertiary: '#d0bcff'
  on-tertiary: '#3c0091'
  tertiary-container: '#a078ff'
  on-tertiary-container: '#340080'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#f0dbff'
  primary-fixed-dim: '#ddb7ff'
  on-primary-fixed: '#2c0051'
  on-primary-fixed-variant: '#6900b3'
  secondary-fixed: '#c4e7ff'
  secondary-fixed-dim: '#7bd0ff'
  on-secondary-fixed: '#001e2c'
  on-secondary-fixed-variant: '#004c69'
  tertiary-fixed: '#e9ddff'
  tertiary-fixed-dim: '#d0bcff'
  on-tertiary-fixed: '#23005c'
  on-tertiary-fixed-variant: '#5516be'
  background: '#101221'
  on-background: '#e1e1f5'
  surface-variant: '#323443'
typography:
  display:
    fontFamily: Space Grotesk
    fontSize: 72px
    fontWeight: '700'
    lineHeight: 80px
    letterSpacing: -0.04em
  display-mobile:
    fontFamily: Space Grotesk
    fontSize: 44px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 56px
    letterSpacing: -0.03em
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 38px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 32px
    letterSpacing: -0.01em
  title-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  title-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: 0em
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: 0em
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-lg:
    fontFamily: Space Grotesk
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.04em
  label-md:
    fontFamily: Space Grotesk
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.06em
  label-sm:
    fontFamily: Space Grotesk
    fontSize: 10px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.08em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-sm: 1rem
  gutter-lg: 2rem
  margin: 1.5rem
  margin-md: 3rem
  margin-lg: 5rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

# Design System: Orbital Glass (LaunchPad)

This design system is extracted directly from the **LaunchPad** project via Stitch. It embodies **Cosmic Glassmorphism** layered over deep void backgrounds, balancing high-density mission telemetry with ethereal luminescence.

---

## 1. Brand & Aesthetic Concept

* **Aesthetic Philosophy:** Deep-space aerospace instrumentation, precision telemetry deck, weightless yet tactile optical glass layers.
* **Surface Dynamics:** Frosted acrylic surfaces with specular top-edge illumination, chromatic light-refraction borders, and volumetric neon glow falloffs.
* **Base Atmosphere:** Void Obsidian canvases with stationary radial atmospheric wash (`rgba(168, 85, 247, 0.12)` and `rgba(56, 189, 248, 0.08)`).

---

## 2. Color Palette

### 2.1 Brand Accent Colors
| Role | Color Name | Hex Code | RGB / Alpha | Usage |
| :--- | :--- | :--- | :--- | :--- |
| **Primary Plasma** | Brand Accent Primary | `#A855F7` | `rgb(168, 85, 247)` | Primary actions, CTA buttons, active state indicators |
| **Plasma Light** | Accent Highlight | `#C084FC` | `rgb(192, 132, 252)` | Specular text highlights, hover gradients, top borders |
| **Electric Violet** | Brand Accent Tertiary | `#8B5CF6` | `rgb(139, 92, 246)` | Secondary button gradients, subtle ambient glows |
| **Solar Cyan** | Telemetry Accent | `#38BDF8` | `rgb(56, 189, 248)` | Live telemetry status, diagnostic links, pulse badges |

### 2.2 Void & Surface Hierarchy
| Token Name | Hex Code | Purpose & Description |
| :--- | :--- | :--- |
| `surface-container-lowest` / Cosmic Obsidian | `#070814` | Deepest root background layer and canvas |
| `background` / `surface` / `surface-dim` | `#101221` | Base viewport and view container fill |
| `surface-container-low` | `#191b29` | Recessed cards, secondary sections |
| `surface-container` | `#1d1f2d` | Standard card and module background |
| `surface-container-high` | `#272938` | Elevated panels, active popovers |
| `surface-container-highest` | `#323443` | Top-level interactive cards, hovered items |
| `surface-bright` | `#363848` | Prominent highlights, high-contrast surface fills |

### 2.3 Semantic & Functional Tokens
| Token | Hex | Intended Role |
| :--- | :--- | :--- |
| `primary` | `#ddb7ff` | High-contrast lavender accent text and icons |
| `on-primary` | `#490080` | High-contrast text on solid primary backgrounds |
| `primary-container` | `#b76dff` | Tonal container fill for primary elements |
| `on-primary-container` | `#400071` | Text on primary containers |
| `secondary` | `#7bd0ff` | Light solar cyan accent for sub-actions |
| `on-secondary` | `#00354a` | Text on secondary accent fills |
| `secondary-container` | `#00a6e0` | Vivid cyan container fill |
| `on-secondary-container`| `#00374d` | Text on secondary container |
| `tertiary` | `#d0bcff` | Soft violet metadata and subtle indicators |
| `on-surface` | `#e1e1f5` | High-emphasis body and heading text |
| `on-surface-variant` | `#cfc2d6` | Medium-emphasis text, secondary labels, icons |
| `outline` | `#988d9f` | Component borders and dividers |
| `outline-variant` | `#4d4354` | Subtle internal card boundaries |
| `error` | `#ffb4ab` | Error messages and alert text |
| `error-container` | `#93000a` | Background for danger/error modules |

### 2.4 Translucent Overlays & Glass Specs
* **Standard Glass Fill (L1):** `rgba(18, 22, 46, 0.65)` with `backdrop-filter: blur(16px) saturate(180%)`
* **Sub-Glass Fill:** `rgba(255, 255, 255, 0.03)` for nested interactive targets
* **Glass Border:** `linear-gradient(180deg, rgba(255, 255, 255, 0.18) 0%, rgba(255, 255, 255, 0.04) 100%)`
* **Interactive Glass (L2):** `rgba(26, 32, 66, 0.75)` with `backdrop-filter: blur(24px)` and `border: 1px solid rgba(168, 85, 247, 0.3)`

---

## 3. Typography

### 3.1 Font Families
* **Display, Headlines & Labels:** [`Space Grotesk`](https://fonts.google.com/specimen/Space+Grotesk) — Geometric, technical, aerospace rhythm.
* **Body, Titles & Long-form:** [`Plus Jakarta Sans`](https://fonts.google.com/specimen/Plus+Jakarta+Sans) — Highly legible modern humanist sans-serif.

```html
<!-- Google Fonts Embed Link -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet">
```

### 3.2 Type Scale
| Level | Font Family | Size | Line Height | Weight | Letter Spacing | Target Use |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **`display`** | Space Grotesk | 72px | 80px | 700 (Bold) | `-0.04em` | Hero landing numbers, telemetry big-stats |
| **`display-mobile`** | Space Grotesk | 44px | 48px | 700 (Bold) | `-0.03em` | Mobile hero numbers |
| **`headline-lg`** | Space Grotesk | 48px | 56px | 600 (SemiBold) | `-0.03em` | Main section titles (H1) |
| **`headline-lg-mobile`**| Space Grotesk | 32px | 38px | 600 (SemiBold) | `-0.02em` | Mobile section titles |
| **`headline-md`** | Space Grotesk | 32px | 40px | 600 (SemiBold) | `-0.02em` | Card section titles (H2) |
| **`headline-sm`** | Space Grotesk | 24px | 32px | 500 (Medium) | `-0.01em` | Module group headers (H3) |
| **`title-lg`** | Plus Jakarta Sans | 20px | 28px | 600 (SemiBold) | `-0.01em` | Panel titles, modal headers |
| **`title-md`** | Plus Jakarta Sans | 16px | 24px | 600 (SemiBold) | `0em` | Sub-section headers, card titles |
| **`body-lg`** | Plus Jakarta Sans | 18px | 28px | 400 (Regular) | `0em` | Lead paragraphs, hero introductions |
| **`body-md`** | Plus Jakarta Sans | 15px | 24px | 400 (Regular) | `0em` | Standard body copy, descriptions |
| **`body-sm`** | Plus Jakarta Sans | 13px | 20px | 400 (Regular) | `+0.01em` | Captions, secondary metadata |
| **`label-lg`** | Space Grotesk | 14px | 20px | 600 (SemiBold) | `+0.04em` | Buttons, navigation links, tabs |
| **`label-md`** | Space Grotesk | 12px | 16px | 500 (Medium) | `+0.06em` | Badges, tags, form field labels |
| **`label-sm`** | Space Grotesk | 10px | 14px | 600 (SemiBold) | `+0.08em` | Micro-telemetry status, uppercase caps |

---

## 4. Spacing & Roundness Tokens

### 4.1 Spacing Scale
* `space-xs`: `0.25rem` (4px)
* `space-sm`: `0.5rem` (8px)
* `space-md`: `1rem` (16px)
* `space-lg`: `1.5rem` (24px)
* `space-xl`: `2.5rem` (40px)
* `gutter-sm`: `1rem` (16px)
* `gutter`: `1.5rem` (24px)
* `gutter-lg`: `2rem` (32px)
* `margin`: `1.5rem` (24px)
* `margin-md`: `3rem` (48px)
* `margin-lg`: `5rem` (80px)

### 4.2 Corner Radii
* `sm`: `0.25rem` (4px) — Checkboxes, micro-chips
* `DEFAULT` / `md`: `0.5rem` (8px) — Buttons, form inputs, small cards
* `rounded-md`: `0.75rem` (12px) — Standard cards, dialogs
* `lg`: `1rem` (16px) — Telemetry widgets, modular containers
* `xl`: `1.5rem` (24px) — Hero frames, major dashboard hubs
* `full`: `9999px` — Telemetry pills, status badges, avatar rounds

---

## 5. Elevation & Optical Depth System

1. **L0 (Deep Canvas):** Background `#070814` with ambient radial purple (`#a855f71f`) and cyan (`#38bdf814`) light emissions.
2. **L1 (Glass Container):** `background: rgba(18, 22, 46, 0.6)`, `backdrop-filter: blur(16px) saturate(180%)`, border `1px solid rgba(255, 255, 255, 0.08)`, box-shadow `0 8px 32px 0 rgba(0, 0, 0, 0.37)`.
3. **L2 (Elevated / Interactive Glass):** `background: rgba(26, 32, 66, 0.75)`, `backdrop-filter: blur(24px)`, border `1px solid rgba(168, 85, 247, 0.3)`, aura `0 0 24px -4px rgba(168, 85, 247, 0.25)`.
4. **L3 (Overlay / Modal / Flyout):** `background: rgba(11, 13, 27, 0.9)`, `backdrop-filter: blur(32px)`, border `1px solid rgba(56, 189, 248, 0.4)`, shadow `0 24px 48px -12px rgba(0, 0, 0, 0.7), 0 0 40px rgba(56, 189, 248, 0.15)`.

---

## 6. CSS Custom Properties Reference

```css
:root {
  /* Fonts */
  --font-headline: 'Space Grotesk', sans-serif;
  --font-body: 'Plus Jakarta Sans', sans-serif;
  --font-label: 'Space Grotesk', sans-serif;

  /* Accent & Brand Colors */
  --color-primary-plasma: #a855f7;
  --color-plasma-light: #c084fc;
  --color-electric-violet: #8b5cf6;
  --color-solar-cyan: #38bdf8;

  /* Surfaces */
  --color-surface-obsidian: #070814;
  --color-surface-dim: #101221;
  --color-surface-container: #1d1f2d;
  --color-surface-container-high: #272938;
  --color-surface-container-highest: #323443;
  --color-surface-bright: #363848;

  /* Text & Contrast */
  --color-on-surface: #e1e1f5;
  --color-on-surface-variant: #cfc2d6;
  --color-outline: #988d9f;
  --color-outline-variant: #4d4354;

  /* Semantic Containers */
  --color-primary: #ddb7ff;
  --color-on-primary: #490080;
  --color-primary-container: #b76dff;
  --color-secondary: #7bd0ff;
  --color-on-secondary: #00354a;
  --color-secondary-container: #00a6e0;
  --color-tertiary: #d0bcff;
  --color-error: #ffb4ab;
  --color-error-container: #93000a;

  /* Glass Overlays */
  --glass-bg-l1: rgba(18, 22, 46, 0.6);
  --glass-bg-l2: rgba(26, 32, 66, 0.75);
  --glass-border: rgba(255, 255, 255, 0.08);
  --glass-border-accent: rgba(168, 85, 247, 0.3);
  --glass-blur-sm: blur(16px);
  --glass-blur-lg: blur(24px);

  /* Radii */
  --radius-sm: 0.25rem;
  --radius-md: 0.5rem;
  --radius-lg: 1rem;
  --radius-xl: 1.5rem;
  --radius-full: 9999px;
}
```
