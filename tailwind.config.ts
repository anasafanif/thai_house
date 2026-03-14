import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#c9a227",
          dark: "#a8841f",
          light: "#e0c04a",
        },
        cream: {
          DEFAULT: "#f5f0e8",
          dark: "#ebe4d9",
          warm: "#efe9e0",
        },
        sage: {
          DEFAULT: "#5C6B5C",
          light: "#7A8A7A",
          muted: "#4a554a",
        },
        charcoal: "#2C2C2C",
        "charcoal-soft": "#3d3d3d",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-outfit)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 20px 40px -15px rgba(44, 44, 44, 0.06)",
        softGold: "0 8px 24px -4px rgba(212, 175, 119, 0.15)",
        softGoldHover: "0 8px 24px -4px rgba(212, 175, 119, 0.25)",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
      },
      animation: {
        shimmer: "shimmer 4s ease-in-out infinite",
      },
      backgroundSize: {
        shimmer: "200% 100%",
      },
    },
  },
  plugins: [],
};

export default config;
