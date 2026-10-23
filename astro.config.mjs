import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Update `site` to your GitHub Pages URL, e.g. "https://USERNAME.github.io/REPO_NAME"
export default defineConfig({
  site: 'https://Liziye725.github.io/vibe_coding_version_portfolio',
  base: '/vibe_coding_version_portfolio/',
  integrations: [tailwind()],
  output: 'static'
});
