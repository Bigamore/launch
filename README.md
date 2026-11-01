# StartitXP

**We Start It. You Ship It.**

An independent digital studio website with responsive design concepts, transparent dual pricing, and a project-brief booking flow.

**Production:** https://launch-i78q.vercel.app/

## Stack

- Next.js 16 App Router and React 19
- Tailwind CSS 4 and custom design tokens
- Framer Motion, with reduced-motion support
- No account system or additional runtime dependencies

## Local development

```sh
npm install
npm run dev
```

## Production validation

```sh
npm run build
npm run start
```

## Structure

- `app/page.tsx`: home page composition
- `app/booking/page.tsx`: booking route
- `app/components/`: navigation, hero, process, interactive concept previews, pricing, FAQ, footer, cursor, and booking form
- `app/lib/content.ts`: plan data, concept data, and currency conversion
- `app/globals.css`: shared design system and responsive layouts

## Pricing

Existing dollar prices are retained. Naira display uses the requested fixed rate of **₦1,380 per $1**, not a live exchange feed.

| Plan         | USD    | NGN        |
| ------------ | ------ | ---------- |
| Basic        | $150   | ₦207,000   |
| Standard     | $350   | ₦483,000   |
| Premium      | $600   | ₦828,000   |
| Custom Build | Custom | Let's Talk |

## Booking flow

Visitors provide their name, business, email, package/budget, and project details. Choosing a package or design concept carries that choice into the form.

The form generates a local StartitXP project brief. Visitors can copy it or use the prefilled WhatsApp link to **2348079941362**, beginning with “Hi StartitXP I want to build a website.” followed by the encoded project brief. Opening WhatsApp does not automatically send the message; visitors review and send it themselves. No email is sent, no enquiries are stored, and no account is required.

The Fiverr profile remains https://www.fiverr.com/thebigamore.

## Design previews

Orbit, Form & Field, and Vault are illustrative concept directions, clearly labeled as sample interfaces rather than completed client work. Filters and preview dialogs are interactive.

## Deployment

The existing Vercel project is connected to this repository. Push to its production branch to trigger deployment. Keep `.vercel/`, `.env*`, and credentials out of source control.

## Brand identity

The StartitXP signature pairs two interlocking forms with an outlined wordmark. The iris facet marks the first move: the point where an idea becomes an experience. The core silhouette also works in one color.

Use `Logo` from `app/components/Logo.tsx`: `<Logo variant="dark" />` for dark backgrounds, `<Logo variant="light" />` for light backgrounds. `size={24}` is the default height; `size={200}` scales the same vectors for larger placements. `iconOnly` and `monochrome` are also supported.

Exports: `/logo.svg`, `/logo-light.svg`, `/logo-monochrome.svg`, and `/icon.svg`. Wordmark glyphs are Inter 700 / 800 converted to paths, so the logo makes no font request and cannot fall back to a different typeface. Font license: `/brand/inter-OFL.txt`.

## Catalog visual direction

The live site now uses the same sculptural ivory-and-iris art direction as the WhatsApp catalog. The hero is live HTML with dedicated ribbon artwork, not a screenshot of a website. Concept previews use real HTML text, the approved logo, and shared artwork. The custom-build section carries the same architectural portal language.

The catalog styling lives in `app/catalog-theme.css`; artwork is saved in `public/images/` and rendered through Next.js Image. Existing dollar pricing, the fixed naira conversion, booking brief generation, and WhatsApp destination are retained.
