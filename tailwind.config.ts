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
          DEFAULT: "#D4AF77",
          dark: "#B8975C",
        },
        cream: {
          DEFAULT: "#FBF9F6",
          dark: "#F5F0E8",
        },
        sage: {
          DEFAULT: "#5C6B5C",
          light: "#7A8A7A",
        },
        charcoal: "#2C2C2C",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-outfit)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 20px 40px -15px rgba(44, 44, 44, 0.06)",
        softGold: "0 8px 24px -4px rgba(212, 175, 119, 0.15)",
      },
    },
  },
  plugins: [],
};

export default config;
