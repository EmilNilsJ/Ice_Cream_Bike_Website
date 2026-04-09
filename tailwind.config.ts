import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-body)", "sans-serif"],
        display: ["var(--font-heading)", "sans-serif"]
      },
      boxShadow: {
        soft: "0 24px 70px rgba(15, 23, 42, 0.08)"
      }
    }
  }
};

export default config;
