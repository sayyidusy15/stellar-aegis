import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        surface: {
          base: '#000000',
          raised: '#1f1f1f',
          strong: '#0d0d0d',
        },
        text: {
          primary: '#8a8a8a',
          secondary: '#ffffff',
        },
      },
      borderRadius: {
        xl: '661px',
        md: '16px',
        lg: '24px',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'Geist', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
};

export default config;
