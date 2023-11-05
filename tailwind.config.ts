import type { Config } from 'tailwindcss';
import { shadcnPreset } from './lib/shadcn-preset';

const config = {
  presets: [shadcnPreset],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': 'url("assets/hero3.png")', 
        'about': 'url("assets/hero2.png")', 
      },
    },
  },
} satisfies Config;

export default config;
