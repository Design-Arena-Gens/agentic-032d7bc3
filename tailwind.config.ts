import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f4f6ff",
          100: "#e6ebff",
          200: "#cad5ff",
          300: "#9dafee",
          400: "#6b7be0",
          500: "#4857d2",
          600: "#3542b5",
          700: "#273291",
          800: "#1c246d",
          900: "#111643"
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui"]
      },
      boxShadow: {
        glow: "0 20px 45px -25px rgba(72, 87, 210, 0.6)"
      }
    }
  },
  plugins: []
};

export default config;
