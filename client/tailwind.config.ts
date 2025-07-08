import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./hooks/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/**/*.{js,ts,jsx,tsx,mdx}",
    "./*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
        serif: ["var(--font-playfair)", ...defaultTheme.fontFamily.serif],
      },
      colors: {
        gold: {
          400: "#fbbf24",
          500: "#f59e0b",
        },
        green: {
          50: "#f0fdf4",
          100: "#dcfce7",
          700: "#15803d",
          800: "#166534",
          900: "#14532d",
        },
        yellow: {
          300: "#fcd34d",
          400: "#fbbf24",
        },
      },
      animation: {
        bounce: "bounce 2s infinite",
        "fade-in": "fadeIn 0.6s ease-in-out",
        "slide-up": "slideUp 0.8s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
