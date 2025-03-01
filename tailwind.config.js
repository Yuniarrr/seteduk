/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    "./node_modules/flowbite/**/*.js"
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    colors: {
      'cadmium-green': '#056934',
      'american-blue': '#38387E',
      'maize': '#F9C13F',
      'bright-gray': '#E5E7EB',
      'independence': '#4B5563',
      'maximum-yellow-red': '#ECBD51',
      'eerie-black': '#1B1B1B',
      'minion-yellow': '#FFD55E',
      'white': '#FFFFFF',
    }
  },
  plugins: [require("tailwindcss-animate"), require('flowbite/plugin')],
}