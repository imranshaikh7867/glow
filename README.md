# Glow — Sarah campaign page

A pixel-faithful reproduction of the supplied `screen.jpeg` campaign/profile page, built in
Next.js 16 (App Router) + Tailwind CSS v4 + custom CSS for the brand light effects.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
```

## Reproduction notes

**Design scale.** The supplied artwork is 1206 px wide but is a ~0.84× export of a 1440 px
design (measured from ink extents: 12 px body text in the image ⇒ 14.5 px at 1:1). The page is
therefore built to a **1440 px reference**: container `max-width: 1440px`, `34px` page gutters,
`1372px` content width. Viewed at 1440 the layout matches the artwork 1:1.

**Measured, not eyeballed.** Column ratios, card paddings, type sizes and colours were sampled
from the artwork:

| | |
|---|---|
| Hero columns | `628fr / 520fr`, 12 px gap |
| Story columns | `310fr / 399fr / 404fr`, 21 px gap |
| Portrait | 366 × 395, 24 px radius |
| Glow Orb | 143 px |
| Glow meter | 33 px tall, 68 % fill |

**Typography.** Playfair Display (name, figures, card titles), Nunito Sans (UI/body),
Cormorant Garamond (wordmark), Allura (the *Gift a little glow* script). All self-hosted via
`next/font`; the CSS variables are set on `<html>` so Tailwind's `:root` theme tokens resolve.

**Colour.** Cream surfaces (`#f7f3ea` page, `#fefcf8` cards), warm ink (`#241c15`), ember amber
(`#e07b18` → `#f2b56f`) used only as accent. The orange in Sarah's photograph is image treatment
and was deliberately **not** sampled into the UI palette.

## Signature elements

**The Glow Orb** (`GlowOrb.tsx` + `.glow-orb__*`) is built from stacked layers of light rather
than a filled circle:

```
bloom → corona → sphere → ember speckles → edge → halo band → rim arc → flares
```

The rim is a `conic-gradient` masked to a ring and blurred, so it reads as a *band of light*
that is brighter on the upper-left and lower arcs — not a drawn outline. Every outward layer
ends on a fully transparent colour stop, so the glow has no hard outer edge.

**The ember rim** (`.ember-rim`, `.glow-node__rim`, `.glow-meter__rays`) is the glowing outline
that appears on every lit element — the meter, the orb, the two completed journey nodes, and the
Gift / Get Started buttons. It is always two layers: a blurred warm colour band hugging the edge
(the rays) plus a crisp warm-white stroke on the edge itself. On circles the stroke is a
`conic-gradient` masked to a ring so it is hotter on the left arcs and at the lower-right flare,
matching the artwork's light distribution. `.ember-rim` works on any element via pseudo-elements
and inherits `border-radius`, so pills and circles share one treatment.

**The Glow meter** (`GlowMeter.tsx` + `.glow-meter__*`) is a glass capsule holding molten ember
light: a 14-stop horizontal ramp (pale gold → deep ember → gold → white-hot tip), a vertical
tube shade that is lighter at both edges, two glitter passes (one hand-placed, one tiled), a
centre streak, and a bright bloom cap at the fill edge. Colours were matched numerically against
the artwork and `screw_bar.jpeg`.

## Structure

```
src/
  app/
    layout.tsx        fonts + document shell
    page.tsx          section composition only
    globals.css       brand tokens, card/button styles, orb + meter effects
  components/
    SiteHeader.tsx    nav, search, Log in / Get Started, mobile drawer
    GlowLogo.tsx      wordmark + sparkle + tagline
    ProfileCard.tsx   portrait, name/age, verified, location, quote, procedure/clinic/date
    GlowGoalCard.tsx  Glow Goal, amount, orb, meter, supporters + days left
    GlowOrb.tsx       signature orb
    GlowMeter.tsx     signature progress meter
    TrustBand.tsx     verified fundraiser + privacy
    AboutCard.tsx     About Sarah
    JourneyCard.tsx   4-step timeline
    SupportersCard.tsx recent supporters
    GiftBar.tsx       gift lockup, amount chips, primary CTA
  data/campaign.ts    all page content + derived values (percent, remaining)
```

Content lives in `src/data/campaign.ts` — swap it for a Supabase query without touching layout.
`percentFunded` and `remaining` (A$3,850) are derived; the remaining amount is surfaced on the
Glow Goal ⓘ affordance, since the artwork does not display it as its own line.

## Responsive

The desktop composition is anchored at `xl` (1280 px) — below that the fixed proportions of the
1440 design cannot hold. `md` (768 px) gives a two-column story grid and a side-by-side profile
card; below that everything stacks. The orb centres beneath the figures on mobile. Verified for
zero horizontal overflow at 1440 / 1280 / 1150 / 1024 / 820 / 640 / 390.

## Asset

`public/sarah.jpg` is extracted from the supplied artwork at 2× so the portrait matches exactly.
Replace it with the production asset (366 × 395 or larger, same 366:395 crop).
