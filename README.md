# Midlothian Wildflowers Website

Modern Next.js website for Midlothian Wildflowers, a community-led environmental charity based in Midlothian, Scotland.

## Tech Stack

- Next.js 15 App Router
- React and TypeScript
- Tailwind CSS
- shadcn/ui-style reusable components
- Lucide React icons
- Framer Motion for subtle reveal animations

## Running Locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open `http://localhost:3000`.

Run checks:

```bash
npm run typecheck
npm run build
```

## Folder Structure

- `src/app` - App Router pages and global layout.
- `src/components/layout` - Header and footer.
- `src/components/sections` - Reusable page sections such as hero, gallery, Eventbrite CTA and contact form.
- `src/components/ui` - Small reusable UI primitives based on shadcn/ui conventions.
- `src/lib` - Shared constants, image paths, links, content and utilities.
- `public/images` - Placeholder image assets.

## Updating Links

Eventbrite, Facebook and email values are centralised in:

```txt
src/lib/links.ts
```

Replace the placeholder URLs with the organisation's live Eventbrite and Facebook links.

## Replacing Images

All image paths are centralised in:

```txt
src/lib/images.ts
```

Add client photography to `public/images`, then update the matching `src` and `alt` values in `src/lib/images.ts`.

## Deploying to Vercel

1. Push the repository to GitHub.
2. Import the repository in Vercel.
3. Use the default Next.js build settings.
4. Set any future environment variables in Vercel Project Settings.
5. Deploy.

## Content Notes

The site uses realistic placeholder copy for Midlothian Wildflowers. Before launch, confirm the charity email address, final privacy policy, Facebook URL and Eventbrite organiser URL.
