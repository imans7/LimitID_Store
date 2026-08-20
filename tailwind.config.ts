import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: { "2xl": "1280px" },
    },
    extend: {
      colors: {
        bg: "#0C0C0E",
        surface: "#18181B",
        surface2: "#212124",
        border: "#2B2B2F",
        foreground: "#F4F2EF",
        muted: "#9B9AA0",
        crimson: {
          DEFAULT: "#E6392B",
          dim: "#B92A1F",
          bright: "#FF5A46",
        },
        limit: "#F5B93E",
      },
      fontFamily: {
        display: ["Rajdhani", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(ellipse 60% 50% at 70% 20%, rgba(230,57,43,0.25), transparent)",
      },
      keyframes: {
        "meter-fill": {
          "0%": { width: "0%" },
          "100%": { width: "var(--meter, 70%)" },
        },
      },
      animation: {
        "meter-fill": "meter-fill 1.2s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
