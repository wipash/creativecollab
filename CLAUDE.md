# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Creative Collab is a marketing website for children's art classes in New Zealand. It's a Next.js 15 application deployed to Cloudflare Workers via OpenNext.

## Commands

```bash
# Development
pnpm dev              # Start dev server with Turbopack

# Build & Deploy
pnpm build            # Next.js production build
pnpm preview          # Build and preview on Cloudflare locally
pnpm deploy           # Build and deploy to Cloudflare Workers
pnpm upload           # Build and upload to Cloudflare

# Other
pnpm lint             # Run ESLint
pnpm cf-typegen       # Generate Cloudflare env types
```

## Architecture

- **Framework**: Next.js 15 with App Router (React 19)
- **Styling**: Tailwind CSS v4 with CSS variables for theming
- **Deployment**: Cloudflare Workers via `@opennextjs/cloudflare`
- **Package Manager**: pnpm

### Key Files

- `wrangler.jsonc` - Cloudflare Workers configuration (worker name: `creativecollabconz`)
- `open-next.config.ts` - OpenNext configuration for Cloudflare adapter
- `tailwind.config.js` - Custom colors (`creative-purple`, `creative-pink`, `creative-orange`, `creative-blue`, `warm-white`)

### Structure

Single-page site with sections: Hero, About, Features, Classes, Contact, Footer. All content is in `app/page.tsx`.

Components in `components/`:
- `navbar.tsx` - Responsive nav with mobile menu (uses client-side state)
- `art-grid.tsx` - 4x4 decorative grid with art supply images
- `scallop-border.tsx` - Decorative section divider with CSS mask


### Notes
- When using the Playwright skill, make sure screenshots are less than 2000px high to avoid Claude limitations.
