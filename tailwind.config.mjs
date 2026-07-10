import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        dark: 'var(--color-dark)',
        white: 'var(--color-white)',
        accent: 'var(--color-accent)',
        'bg-warm': 'var(--color-bg-warm)',
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 12px 30px rgba(26, 26, 26, 0.08)',
      },
    },
  },
  plugins: [typography],
};
