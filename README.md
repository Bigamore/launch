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
