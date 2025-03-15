import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    plugin(({ addComponents }) =>
      addComponents({
        ".pageWrapper": {
          position: "relative !important",
          display: "flex",
          "justify-content": "center",
          gap: "0.75rem",
          padding: "2rem 0rem",
          "font-weight": "700",
          "user-select": "none",
        },
      })
    ),
  ],
} satisfies Config;
