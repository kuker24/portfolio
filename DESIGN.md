# Portfolio Cosmic — Style Reference

Pinned Motionsites world for Fahmi Harun's static GitHub Pages portfolio, intensified as a curved-crease first viewport (Impeccable surface seed `6d3ca14b` index 7). Resend / `Designnew1/` is anti-reference.

**Theme:** dark, forced. No light mode.

A near-black canvas (`hsl(0 0% 4%)`) with one 4K night-city plate filling the first viewport. The given name and family name ride a single steel arc as landscape type. The real portrait sits in the saddle of that arc, large, not a toolbar avatar. Later sections keep the same Cosmic materials and refuse equal card grids.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Canvas | `hsl(0 0% 4%)` | `--bg` | Page background |
| Surface | `hsl(0 0% 8%)` | `--surface` | Pill nav fill |
| Ink | `hsl(0 0% 96%)` | `--text` | Headings, primary copy |
| Mute | `hsl(0 0% 53%)` | `--muted` | Secondary copy, labels |
| Stroke | `hsl(0 0% 12%)` | `--stroke` | Hairlines |
| Accent from | `#89AACC` | `--accent-from` | Gradient start, course nodes |
| Accent to | `#4E85BF` | `--accent-to` | Gradient end, scrollbar |

## Tokens — Typography

- **Instrument Serif italic** — landscape name, project artifacts, principle titles. `--font-display`
- **Inter 300–600** — UI, body, nav, buttons. `--font-sans`

## Shape

- Pill: `9999px` (nav, buttons, portrait ring)
- Drawer: `1.5rem`
- Page max: `1200px` (hero layout `1320px`)
- Signature form: one sweeping steel arc; journey as a vertical course, not pills

## Motion

One authored Cosmic arrival, then quiet supporting states. CSS + WAAPI only. No GSAP, Framer, or background video.

- **Ease:** `--ease-out: cubic-bezier(0.16, 1, 0.3, 1)` for entrances
- **Focal:** arc draw + name unmask + portrait settle over a still 4K city plate
- **City plate:** static. No Ken Burns, no spin, no autoplay.
- **Feedback:** `.pressable` scales to `0.97` on `:active` (140ms)
- **Hover:** steel color on links/bands, gated to `(hover: hover) and (pointer: fine)`
- **Continuity:** Astro `ClientRouter` view transitions; header persists
- **Fallback:** content stays visible unless `html.motion.ready` is set
- **Reduced motion:** keep opacity/color; kill drift, clip-path, translate, loops, dash draw

## Assets

- Portrait: `public/images/myself.jpeg` — real photo, circular crop, no retouch
- City still: `public/images/nebula.jpg` + `.webp` — 3840×2160 night city plate from Unsplash (`photo-1444723121867-7a241cacace9`), cropped 16:9. License: Unsplash. No video.
- Approved first viewport: `.impeccable/found-this-design/portfolio-cosmic-hero-comp.jpg`
