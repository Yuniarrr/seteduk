/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
    colors: {
      "cadmium-green": "#056934",
      "american-blue": "#38387E",
      "minion-yellow": "#EEDD53",
      "bright-gray": "#E5E7EB",
      "independence": "#4B5563",
      "eerie-black": "#111827",
      "shadow-blue": "#8080AD",
      "polished-pine": "#71AA8B",
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("flowbite/plugin")],
}

