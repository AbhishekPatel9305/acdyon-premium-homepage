# RunwayDesk Premium Homepage

RunwayDesk is a fictional but believable SaaS homepage built for the Acdyon Technologies Frontend Challenge Part 2. It presents a launch readiness workspace for small SaaS teams that need one place to track release work, risks, owners, and customer-facing copy.

## Features

- Responsive premium homepage with navbar, hero, product showcase, feature grid, interactive demo, final CTA, and footer.
- Realistic dashboard UI built in React instead of static placeholder art.
- Interactive demo tabs that change the product view by launch decision mode.
- Accessible buttons, semantic sections, visible focus states, and mobile navigation.
- Subtle easter egg: type `LAUNCH` to toggle focus mode in the demo.

## Tech Stack

- React
- Vite
- TypeScript
- Tailwind CSS
- lucide-react icons
- puppeteer-core for local verification

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

## Production Build

```bash
npm run build
```

## Verification

```bash
npm run verify
```

The verification script uses local Chrome through `puppeteer-core` to check the 390px and 1440px layouts, console/page errors, mobile menu, demo tabs, easter egg, and horizontal overflow.

## Deployment

The project can be deployed to Netlify, Vercel, or any static host.

1. Push this folder to a GitHub repository.
2. Create a new site in the hosting provider.
3. Use `npm run build` as the build command.
4. Use `dist` as the publish directory.

## Implementation Notes

- The design avoids fake testimonials, fake logos, fake user counts, and invented growth claims.
- Dark mode was intentionally skipped so the visual system stays complete and consistent.
- The dashboard is data-driven through `src/data/product.ts`, with reusable page sections under `src/sections`.
