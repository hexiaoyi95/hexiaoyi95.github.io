# Personal Website for Shawn He

A static personal website built with Next.js, TypeScript, and Tailwind CSS. The current redesign uses an original mini 4WD-inspired visual system for the homepage, blog, navigation, and route structure.

## Features

- Static export, suitable for GitLab Pages
- Centralized route config in `src/config/routes.ts`
- Centralized profile/site content in `src/config/site.ts`
- Markdown blog pipeline with generated article routes and tag routes
- Static `sitemap.xml`, `robots.txt`, and custom 404 page

## Routes

- `/` - Home overview
- `/resume/` - Experience and CV
- `/publications/` - Publications and patents
- `/projects/` - Project archive
- `/blog/` - Blog index
- `/blog/[slug]/` - Blog article
- `/blog/tag/[tag]/` - Static tag route
- `/contact/` - Contact

## Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Blog Content

Add Markdown files to `src/content/blog`. Frontmatter supports:

```yaml
---
title: "Post title"
date: "March 30, 2025"
excerpt: "Short summary"
coverImage: "/images/blog/example.jpg"
tags: ["Next.js", "Engineering"]
readingTime: "8 min read"
author:
  name: "Shawn He"
---
```

If `readingTime` is omitted, the site calculates it from word count. If `coverImage` points to a missing file, the UI falls back to a generated racing plate instead of showing a broken image.

## GitLab Pages

The project is configured for GitLab Pages with `.gitlab-ci.yml`.

For a standard project page such as:

```text
https://<namespace>.gitlab.io/<project-name>/
```

the CI sets:

```bash
NEXT_PUBLIC_BASE_PATH="/${CI_PROJECT_NAME}"
NEXT_PUBLIC_SITE_URL="${CI_PAGES_URL}"
```

For a custom domain or root namespace page, override `NEXT_PUBLIC_BASE_PATH` to an empty string in GitLab CI/CD variables.

Manual static build:

```bash
npm run build
```

The exported site is generated in `out/`.
