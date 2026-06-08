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
        ocean: {
          DEFAULT: "#0D4F8B",
          light: "#1A6BB5",
          dark: "#093C6B",
        },
        teal: {
          DEFAULT: "#16A6A3",
          light: "#1DC5C2",
          dark: "#0E7A78",
        },
        gold: {
          DEFAULT: "#F4B400",
          light: "#FFCC33",
          dark: "#C99200",
        },
        sand: {
          DEFAULT: "#FAF8F3",
          dark: "#F0EDE4",
        },
        navy: {
          DEFAULT: "#1A2333",
          light: "#243148",
          dark: "#0D1520",
        },
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)", "Montserrat", "sans-serif"],
        opensans: ["var(--font-opensans)", "Open Sans", "sans-serif"],
      },
      backgroundImage: {
        "ocean-gradient":
          "linear-gradient(135deg, #0D4F8B 0%, #16A6A3 100%)",
        "gold-gradient":
          "linear-gradient(135deg, #F4B400 0%, #FF9500 100%)",
        "navy-gradient":
          "linear-gradient(135deg, #1A2333 0%, #0D3060 100%)",
        "hero-overlay":
          "linear-gradient(to right, rgba(13,79,139,0.92) 0%, rgba(13,79,139,0.65) 50%, rgba(13,79,139,0.1) 100%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        "wave-move": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(244,180,0,0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(244,180,0,0.6)" },
        },
        "slide-in-right": {
          "0%": { opacity: "0", transform: "translateX(50px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "count-up": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        float: "float 4s ease-in-out infinite",
        "float-delay-1": "float 4s ease-in-out 1s infinite",
        "float-delay-2": "float 4s ease-in-out 2s infinite",
        shimmer: "shimmer 2.5s linear infinite",
        "wave-move": "wave-move 8s linear infinite",
        "fade-up": "fade-up 0.7s ease forwards",
        "scale-in": "scale-in 0.5s ease forwards",
        glow: "glow 2s ease-in-out infinite",
        "slide-in-right": "slide-in-right 0.6s ease forwards",
      },
      boxShadow: {
        "ocean-glow": "0 8px 32px rgba(13,79,139,0.35)",
        "gold-glow": "0 8px 32px rgba(244,180,0,0.35)",
        "teal-glow": "0 8px 32px rgba(22,166,163,0.35)",
        luxury: "0 25px 60px rgba(13,31,51,0.18)",
        card: "0 10px 30px rgba(13,31,51,0.10)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
