# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is Carmelina Ayala's professional portfolio website built using the Astrofy template. It's a personal portfolio site for a professional nanny, featuring a CV, blog, services page, and project showcase.

**Tech Stack:**
- Astro 4.x (SSR mode with Netlify adapter)
- TailwindCSS + DaisyUI for styling
- TypeScript with strict null checks
- MDX for content
- pnpm for package management

**Deployment:**
- Hosted on Netlify (carmelina-ayala.netlify.app)
- GitHub Actions workflow handles CI/CD
- Output mode: server (SSR)
- Adapter: @astrojs/netlify

## Development Commands

```bash
# Install dependencies
pnpm install

# Start development server (http://localhost:4321)
pnpm run dev

# Build for production (outputs to dist/)
pnpm run build

# Preview production build locally
pnpm run preview

# Convert blog post to DOCX/PDF (requires pandoc)
pnpm run convert-docs
```

**Note:** The `postbuild` script runs `convert-docs` automatically after builds, converting `src/content/blog/post1.md` to DOCX and PDF formats using pandoc.

## Architecture

### Content Collections

Content is managed through Astro's content collections system, defined in `src/content/config.ts`:

- **Blog Collection** (`src/content/blog/`): Blog posts with schema validation for title, description, pubDate, heroImage, badge, and tags. Tags must be unique (enforced by schema).
- **Store Collection** (`src/content/store/`): Portfolio items/services with pricing, custom links, and checkout URLs.

Both use Zod schemas for type-safe frontmatter validation.

### Component System

**Layout Components:**
- `BaseLayout.astro`: Primary layout wrapper, sets `sideBarActiveItemID` prop to highlight active menu item
- `PostLayout.astro`: Blog post wrapper with metadata display
- `StoreItemLayout.astro`: Store/portfolio item wrapper

**Core Components:**
- `SideBar.astro`: Left sidebar container
- `SideBarMenu.astro`: Navigation links (add new pages here with matching IDs)
- `SideBarFooter.astro`: Social icons using BoxIcons SVG
- `Header.astro`, `Footer.astro`: Page chrome
- `BaseHead.astro`: Meta tags and SEO

**Content Components:**
- `Card.astro`: Basic project card
- `HorizontalCard.astro`: Horizontal layout card with tags
- `HorizontalShopItem.astro`: Store item card with pricing
- `TimeLineElement.astro` (cv/): CV timeline entries

### Routing & Pages

- **Static pages**: `index.astro`, `cv.astro`, `services.astro`, `projects.astro`
- **Blog**: Dynamic routing via `blog/[slug].astro` using title-based slugs (see Slug Generation below)
- **Store**: Dynamic routing in `store/` directory
- **RSS Feed**: `rss.xml.js` generates RSS from blog collection

### Slug Generation

The `src/lib/createSlug.ts` utility generates URL slugs from post titles:
- Controlled by `GENERATE_SLUG_FROM_TITLE` in `src/config.ts`
- When `true`: generates slugs from post titles (current setting)
- When `false`: uses Astro's file-based slugs
- Applied in `blog/[slug].astro` via `getStaticPaths()`

### Global Configuration

`src/config.ts` contains site-wide constants:
- `SITE_TITLE`: "Carmelina Ayala | Professional Nanny"
- `SITE_DESCRIPTION`: Site meta description
- `GENERATE_SLUG_FROM_TITLE`: true (use title-based blog slugs)
- `TRANSITION_API`: true (enables View Transitions API)

### Path Aliases

Configured in `tsconfig.json`:
- `@components/*` → `src/components/*`
- `@layouts/*` → `src/layouts/*`

### Theming

DaisyUI themes configured in `tailwind.config.cjs`:
- All DaisyUI themes available
- Dark theme: "dark"
- Change theme via `data-theme` attribute in `BaseLayout.astro`

## Adding New Pages

1. Create `.astro` file in `src/pages/`
2. Import and use `BaseLayout` with unique `sideBarActiveItemID`
3. Add navigation link in `SideBarMenu.astro` with matching `id` attribute
4. Example:
   ```astro
   ---
   import BaseLayout from "@layouts/BaseLayout.astro";
   ---
   <BaseLayout sideBarActiveItemID="new-page">
     <!-- content -->
   </BaseLayout>
   ```

## Adding Blog Posts

Create `.md` or `.mdx` files in `src/content/blog/` with frontmatter:

```yaml
---
title: "Post Title"
description: "Post description"
pubDate: "Jan 15 2024"
heroImage: "/images/hero.jpg" # optional
badge: "Featured" # optional
tags: ["tag1", "tag2"] # optional, must be unique
---
```

URL will be generated from title if `GENERATE_SLUG_FROM_TITLE` is true.

## Netlify Deployment

**Automated via GitHub Actions** (`.github/workflows/deploy-to-netlify.yml`):
- Triggers on push to `main` branch
- Uses Node 20 and pnpm 9.14
- Installs pandoc and LaTeX for document conversion
- Builds with `pnpm run build`
- Deploys to Netlify using NETLIFY_TOKEN and NETLIFY_SITE_ID secrets

**Manual deployment:**
```bash
pnpm run build
netlify deploy --prod --dir=dist
```

**Configuration:**
- Build command: `pnpm run build`
- Publish directory: `dist`
- Environment: NODE_ENV=production
- SSR mode requires Netlify Functions support

## GitHub CLI Configuration

**IMPORTANT:** This repository is a fork. To prevent PRs from being created to the upstream repository by mistake:

```bash
# Set default repository (already configured)
gh repo set-default aaronlippold/astrofy

# Verify it's set correctly
gh repo set-default --view
```

This ensures `gh pr create` and other gh commands default to YOUR fork, not the upstream repository.

## Important Notes

- **SSR Mode**: Site uses `output: 'server'` with Netlify adapter (not static)
- **Blog Pagination**: Not compatible with SSR due to dynamic route parameters - avoid enabling pagination with current SSR setup
- **Document Conversion**: Requires pandoc and LaTeX installed for PDF/DOCX generation
- **Content Validation**: All content must pass Zod schema validation or build will fail
- **Sitemap**: Auto-generated on build, update `robots.txt` with site URL
