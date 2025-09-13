// tailwind.config.js
import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: "var(--font-sans)",
        mono: "var(--font-mono)",
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        simonTheme: {
          primary: "#1E40AF", // Blue
          secondary: "#2563EB", // Light Blue
          accent: "#FBBF24", // Yellow
          neutral: "#1f2937",
          "base-100": "var(--background)", // Link to your background variable
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
    ],
  },
};

export default tailwindConfig;
