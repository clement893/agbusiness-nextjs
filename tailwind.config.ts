import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1B4D3E", // AG Forest Green
          50: "#E8F5F1",
          100: "#D1EBE3",
          200: "#A3D7C7",
          300: "#75C3AB",
          400: "#47AF8F",
          500: "#1B4D3E",
          600: "#163D32",
          700: "#112E25",
          800: "#0C1F19",
          900: "#070F0C",
        },
        accent: {
          DEFAULT: "#8BC34A", // Fresh Green for CTAs
          light: "#AED581",
          dark: "#689F38",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
    },
  },
  plugins: [],
} satisfies Config;
