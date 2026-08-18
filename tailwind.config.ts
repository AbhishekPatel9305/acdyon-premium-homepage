import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Sora", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        ink: "#16201d",
        moss: "#315f4d",
        mint: "#b9efdc",
        paper: "#fbfaf5",
        clay: "#b55f45",
        steel: "#6d7d86",
        citrus: "#e5ca68",
      },
      boxShadow: {
        panel: "0 22px 70px rgba(28, 43, 38, 0.16)",
        lift: "0 16px 34px rgba(49, 95, 77, 0.18)",
      },
    },
  },
  plugins: [],
} satisfies Config;
