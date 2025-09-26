import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "sky-night": {
          50: "#f5f8ff",
          100: "#e6efff",
          200: "#bfd9ff",
          300: "#94c2ff",
          400: "#6aa9ff",
          500: "#468fff",
          600: "#2f70db",
          700: "#1f55b0",
          800: "#153d80",
          900: "#0c284f",
        },
      },
      keyframes: {
        drift: {
          "0%": {
            transform: "translateX(-20%) scale(var(--cloud-scale))",
          },
          "100%": {
            transform: "translateX(120%) scale(var(--cloud-scale))",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        drift: "drift var(--cloud-duration) linear infinite",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
