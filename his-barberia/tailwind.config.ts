import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Global
        "his-black": "#0A0A0A",
        "his-white": "#F5F3EF",
        "his-cream": "#EDE8E0",
        // Classic
        "clasica-green": "#2D4A3E",
        "clasica-green-light": "#3D6B59",
        "clasica-green-deep": "#1E3329",
        "clasica-grey": "#8A8A7A",
        "clasica-warm": "#C8BFA8",
        // Urban
        "urban-charcoal": "#1A1A1A",
        "urban-silver": "#B8B8B8",
        "urban-accent": "#E8E8E8",
        // Gold
        "his-gold": "#C9A84C",
        "his-gold-light": "#E8CF7A",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest: "0.3em",
        ultra: "0.5em",
      },
    },
  },
  plugins: [],
};

export default config;
