/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef2ff',
          100: '#dbe4ff',
          500: '#2563eb',
          700: '#1e40af',
        },
        surface: '#f8fafc',
        muted: '#94a3b8',
        accent: '#10b981',
        danger: '#ef4444',

        // Semantic utilities
        success: { 50: '#ecfdf5', 500: '#10b981', 700: '#047857' },
        warning: { 50: '#fffbeb', 500: '#f59e0b', 700: '#b45309' },
        info: { 50: '#eff6ff', 500: '#3b82f6', 700: '#1e40af' },
      },
    },
  },
  plugins: [],
};
