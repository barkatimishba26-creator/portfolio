import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0B0D12",
        surface: "#12151D",
        "surface-2": "#171B26",
        border: {
          subtle: "rgba(237,239,243,0.08)",
        },
        violet: {
          DEFAULT: "#8B7CF6",
          50: "#F1EEFE",
          200: "#C9C0FB",
          400: "#A595F8",
          600: "#7C6AE8",
          700: "#6452C9",
        },
        amber: {
          DEFAULT: "#F2B84B",
          400: "#F5C977",
          600: "#D89A2A",
        },
        mist: {
          DEFAULT: "#8B93A7",
          400: "#6B7384",
        },
        fg: "#EDEFF3",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, transparent, rgba(11,13,18,1)), linear-gradient(rgba(237,239,243,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(237,239,243,0.05) 1px, transparent 1px)",
        "violet-glow":
          "radial-gradient(circle at 50% 0%, rgba(139,124,246,0.18), transparent 60%)",
        "amber-glow":
          "radial-gradient(circle at 50% 50%, rgba(242,184,75,0.14), transparent 65%)",
      },
      boxShadow: {
        glass: "0 1px 0 0 rgba(255,255,255,0.06) inset, 0 24px 48px -24px rgba(0,0,0,0.6)",
        "glow-violet": "0 0 0 1px rgba(139,124,246,0.4), 0 0 32px rgba(139,124,246,0.25)",
      },
      keyframes: {
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-dot": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.4" },
        },
      },
      animation: {
        blink: "blink 1s step-end infinite",
        "fade-up": "fade-up 0.6s ease-out forwards",
        "pulse-dot": "pulse-dot 2s ease-in-out infinite",
      },
      maxWidth: {
        content: "1180px",
      },
    },
  },
  plugins: [],
};

export default config;
