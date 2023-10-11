/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  important:
    "#__next" /* Podemos darle un id a una etiqueta y luego colocar dicho id aqui */,
  theme: {
    container: {
      center: true,
    },
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/img/hero-pattern.svg')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
      colors: {
        "accent-1": "#FAFAFA",
        "accent-2": "#EAEAEA",
        "accent-7": "#333",
        success: "#0070f3",
        cyan: "#79FFE1",
        "vinas-brown-1": "#3B302D",
        "vinas-brown-2": "#B29149",
        "vinas-brown-3": "#3a302d",
        "vinas-brown-4": "#333",
        "vinas-brown-5": "#e4d9bf",
        "vinas-gray-1": "#E7E7E7",
        "vinas-gray-2": "#EEEEEE",
        "vinas-gray-3": "#3b302d",
        "vinas-gray-4": "#cac9c8",
      },
      spacing: {
        28: "7rem",
      },
      letterSpacing: {
        tighter: "-.04em",
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        "5xl": "2.5rem",
        "6xl": "2.75rem",
        "7xl": "4.5rem",
        "8xl": "6.25rem",
      },
      boxShadow: {
        small: "0 5px 10px rgba(0, 0, 0, 0.12)",
        medium: "0 8px 30px rgba(0, 0, 0, 0.12)",
      },
    },
  },
  plugins: [],
};
