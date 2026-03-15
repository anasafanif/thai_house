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
          DEFAULT: "#C6A55C",
          dark: "#b89448",
          light: "#D8BE82",
        },
        cream: {
          DEFAULT: "#F6F1E9",
          dark: "#E9DDCC",
          warm: "#EDE6DC",
        },
        beige: "#E9DDCC",
        brown: "#1F1A17",
        sage: {
          DEFAULT: "#5C6B5C",
          light: "#7A8A7A",
        },
        charcoal: "#1F1A17",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 20px 50px -20px rgba(31, 26, 23, 0.08)",
        softGold: "0 10px 30px -8px rgba(198, 165, 92, 0.2)",
        softGoldHover: "0 14px 40px -10px rgba(198, 165, 92, 0.35)",
        card: "0 4px 24px -4px rgba(31, 26, 23, 0.06)",
        cardHover: "0 20px 40px -12px rgba(31, 26, 23, 0.12)",
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
