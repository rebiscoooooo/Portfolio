/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ['class', '[data-theme="dark"]'], // Support our existing data-theme="dark" attribute
  theme: {
    extend: {
      colors: {
        primary: "var(--bg-primary)",
        secondary: "var(--bg-secondary)",
        textPrimary: "var(--text-primary)",
        textSecondary: "var(--text-secondary)",
        accentPrimary: "var(--accent-primary)",
        accentSecondary: "var(--accent-secondary)",
        glassBg: "var(--glass-bg)",
        glassBorder: "var(--glass-border)",
        glassBorderHover: "var(--glass-border-hover)",
        glassLight: "var(--glass-light)",
        glassMedium: "var(--glass-medium)",
        glassStrong: "var(--glass-strong)",
      },
      backgroundImage: {
        'accent-gradient': "var(--accent-gradient)",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
      },
      boxShadow: {
        'glass': 'var(--glass-shadow)',
        'glass-hover': '0 10px 40px rgba(0, 0, 0, 0.4)',
        'glass-strong': '0 8px 32px rgba(0, 0, 0, 0.3)',
      },
      transitionProperty: {
        'custom': 'all 0.3s ease',
      }
    },
  },
  plugins: [],
}
