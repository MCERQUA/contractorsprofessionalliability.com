import type { Config } from "tailwindcss";

/* ============================================================
   CONTRACTORS PROFESSIONAL LIABILITY — "Navy & Gold" palette
   Token NAMES inherited from shared component architecture;
   VALUES remapped to navy (primary) / steel blue (secondary) / gold (accent).
   clay = navy · sage = steel blue · gold = contractor gold
   cream = off-white · sand = cool light gray
   ============================================================ */

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FBF9F6",
        sand: "#F5F0EA",
        white: "#FFFFFF",
        clay: {
          DEFAULT: "#5A3017",
          dark: "#32190B",
          light: "#8F4E28",
          50: "#F5EFE6",
          100: "#E7DACE",
          200: "#DFAE91",
          300: "#CE8256",
          400: "#AA5E31",
          500: "#8F4E28",
          600: "#5A3017",
          700: "#32190B",
          800: "#1A130D",
          900: "#0F0B07",
        },
        sage: {
          DEFAULT: "#8F4E28",
          dark: "#5A3017",
          light: "#C56D39",
          50: "#F9F1E6",
          100: "#EADED3",
          200: "#E8B79B",
          300: "#C56D39",
          400: "#A85C31",
          500: "#8F4E28",
          600: "#5A3017",
          700: "#32190B",
        },
        gold: {
          DEFAULT: "#C9A227",
          dark: "#9E7D12",
          light: "#E8C65A",
          50: "#FBF5E3",
          100: "#F5E9B8",
          200: "#EDD472",
          300: "#E8C65A",
          400: "#C9A227",
          500: "#B08A16",
          600: "#9E7D12",
        },
        espresso: "#32190B",
        cocoa: "#6E3C20",
        mocha: "#856A53",
        adobe: "#E1D2C5",
        adobeDark: "#CEB9A7",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        arch: "2rem 2rem 2rem 2rem",
        arch2: "2.5rem 2.5rem 1.5rem 1.5rem",
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      backgroundImage: {
        "sunrise-bands":
          "linear-gradient(180deg, #FBF9F6 0%, #F5F0EA 40%, #F4ECE0 70%, #FBF9F6 100%)",
        "warm-radial":
          "radial-gradient(circle at 30% 20%, rgba(90,48,23,0.10) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(143,78,40,0.08) 0%, transparent 55%)",
        "clay-gradient": "linear-gradient(135deg, #5A3017 0%, #8F4E28 100%)",
        "sage-gradient": "linear-gradient(135deg, #8F4E28 0%, #C56D39 100%)",
        "gold-gradient": "linear-gradient(135deg, #C9A227 0%, #E8C65A 100%)",
      },
      boxShadow: {
        warm: "0 10px 40px -15px rgba(50,25,11,0.22), 0 4px 12px -6px rgba(50,25,11,0.08)",
        "warm-lg": "0 30px 70px -20px rgba(50,25,11,0.28), 0 10px 30px -10px rgba(50,25,11,0.10)",
        card: "0 2px 8px -2px rgba(50,25,11,0.06), 0 1px 3px -1px rgba(50,25,11,0.04)",
        "card-hover": "0 20px 50px -15px rgba(50,25,11,0.22), 0 8px 20px -8px rgba(50,25,11,0.10)",
        arch: "inset 0 -8px 30px -10px rgba(90,48,23,0.10)",
      },
      keyframes: {
        "fade-up": { "0%": { opacity: "0", transform: "translateY(20px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        "slow-zoom": { "0%, 100%": { transform: "scale(1)" }, "50%": { transform: "scale(1.05)" } },
        shimmer: { "0%": { backgroundPosition: "-200% 0" }, "100%": { backgroundPosition: "200% 0" } },
        "arch-rise": { "0%": { transform: "scaleY(0.6)", opacity: "0", transformOrigin: "bottom" }, "100%": { transform: "scaleY(1)", opacity: "1", transformOrigin: "bottom" } },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out forwards",
        "slow-zoom": "slow-zoom 20s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        "arch-rise": "arch-rise 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;
