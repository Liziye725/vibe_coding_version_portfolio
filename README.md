# Ziye Li  Portfolio Website

Modern, simple, modular portfolio built with **Astro** + **Tailwind CSS**, optimized for
Markdown/MDX content and GitHub Pages deployment.

## 1. Overview

This repository contains the source code for my personal portfolio website.

The website showcases:

- Robotics, machine learning, cloud, and embedded engineering projects
- Technical blogs
- Project documentation
- MDX-based slides and diagrams
- Publications, talks, and community contributions

## 2. Tech Stack

- **Framework**: Astro
- **Styling**: Tailwind CSS
- **Content**: Markdown + MDX
- **Hosting**: GitHub Pages
- **CI/CD**: GitHub Actions

## 3. Project Structure

```text
my-portfolio/
  src/
    pages/
    components/
    layouts/
    styles/
  content/
    blog/
    projects/
    slides/
  public/
    images/
    diagrams/
    resume.pdf (optional)
  astro.config.mjs
  tailwind.config.mjs
  package.json
  README.md
  CHANGELOG.md
```

## 4. Installation & Development

```bash
npm install
npm run dev
```

The dev server normally runs on `http://localhost:4321`.

### Build & Preview

```bash
npm run build
npm run preview
```

## 5. Deployment to GitHub Pages

1. Edit `astro.config.mjs` and set `site` to your Pages URL, for example:
   - `https://<your-username>.github.io/<repo-name>`
2. Push this repository to GitHub.
3. Ensure GitHub Actions are enabled for the repo.
4. The included workflow (`.github/workflows/deploy.yml`) will build and deploy to `gh-pages` on
   pushes to `main`.
5. In GitHub: **Settings → Pages** and set the source to `Deploy from a branch` / `gh-pages`.

## 6. Content

- Blog posts: `content/blog/*.mdx` or `.md`
- Projects: `content/projects/*.mdx` or `.md`
- Slides: `content/slides/*.mdx` or `.md`

Each file is loaded via Astro Content Collections and rendered on the corresponding page:

- `/blog` reads from `content/blog`
- `/projects` reads from `content/projects`
- `/slides` reads from `content/slides`

To add or update content, edit or add Markdown/MDX files in those folders while `npm run dev`
is running. The site will hot-reload and show your changes.

## 7. License

MIT (unless changed later).
