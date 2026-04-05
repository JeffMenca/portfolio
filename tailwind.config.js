/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta Principal Batcave
        bat: {
          black: "#0a0a0a",
          dark: "#0e0e0e",
          surface: "#131313",
          card: "#1c1b1b",
          border: "#56423d", // Tono café/grisáceo táctico
          orange: "#F78166", // Tu color principal
          cyan: "#00FFFF", // Acento Cyberpunk
        },
        // Mapeo para compatibilidad con tu HTML generado
        primary: {
          DEFAULT: "#F78166",
          container: "#F78166",
          fixed: "#ffdad2",
        },
        secondary: {
          DEFAULT: "#ffffff",
          container: "#00fbfb",
        },
      },
      fontFamily: {
        mono: ["'Fira Code'", "monospace"],
        terminal: ["'Fira Code'", "monospace"],
      },
      backgroundImage: {
        "tactical-dot": "radial-gradient(circle, #56423d 1px, transparent 1px)",
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        flicker: "flicker 0.15s infinite",
      },
      keyframes: {
        flicker: {
          "0%": { opacity: "0.97" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/container-queries"),
  ],
};
