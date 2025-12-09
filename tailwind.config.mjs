/**** Tailwind config ****/
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,mdx,md}',
    './content/**/*.{md,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['system-ui', 'ui-sans-serif', 'sans-serif']
      }
    }
  },
  plugins: []
};
