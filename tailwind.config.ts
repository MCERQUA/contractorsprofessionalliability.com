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
        cream: "#F8F9FC",
        sand: "#EEF1F7",
        white: "#FFFFFF",
        clay: {
          DEFAULT: "#1B3A6B",
          dark: "#0D1F3C",
          light: "#2E5FA3",
          50: "#EDF0F8",
          100: "#D4DCF0",
          200: "#A8B8E1",
          300: "#7A94CE",
          400: "#4E70BB",
          500: "#2E5FA3",
          600: "#1B3A6B",
          700: "#0D1F3C",
          800: "#081429",
          900: "#040C1A",
        },
        sage: {
          DEFAULT: "#2E5FA3",
          dark: "#1B3A6B",
          light: "#5A84CC",
          50: "#EDF2FB",
          100: "#D4E1F5",
          200: "#A9C3EB",
          300: "#5A84CC",
          400: "#3E6FC0",
          500: "#2E5FA3",
          600: "#1B3A6B",
          700: "#0D1F3C",
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
        espresso: "#0D1F3C",
        cocoa: "#344A6B",
        mocha: "#5A7190",
        adobe: "#CBD5E4",
        adobeDark: "#B0BED3",
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
          "linear-gradient(180deg, #F8F9FC 0%, #EEF1F7 40%, #E8EDF7 70%, #F8F9FC 100%)",
        "warm-radial":
          "radial-gradient(circle at 30% 20%, rgba(27,58,107,0.10) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(46,95,163,0.08) 0%, transparent 55%)",
        "clay-gradient": "linear-gradient(135deg, #1B3A6B 0%, #2E5FA3 100%)",
        "sage-gradient": "linear-gradient(135deg, #2E5FA3 0%, #5A84CC 100%)",
        "gold-gradient": "linear-gradient(135deg, #C9A227 0%, #E8C65A 100%)",
      },
      boxShadow: {
        warm: "0 10px 40px -15px rgba(13,31,60,0.22), 0 4px 12px -6px rgba(13,31,60,0.08)",
        "warm-lg": "0 30px 70px -20px rgba(13,31,60,0.28), 0 10px 30px -10px rgba(13,31,60,0.10)",
        card: "0 2px 8px -2px rgba(13,31,60,0.06), 0 1px 3px -1px rgba(13,31,60,0.04)",
        "card-hover": "0 20px 50px -15px rgba(13,31,60,0.22), 0 8px 20px -8px rgba(13,31,60,0.10)",
        arch: "inset 0 -8px 30px -10px rgba(27,58,107,0.10)",
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
