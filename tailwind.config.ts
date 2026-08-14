import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "400px",
      sm: "640px",
      md: "800px",
      lg: "900px",
      xl: "1180px",
    },
    extend: {
      colors: {
        ink: "#15111F",
        paper: "#FAF8FF",
        "paper-dim": "#F0ECFA",
        violet: "#5B2EFF",
        coral: "#FF5A3C",
        lime: "#C6FF4D",
        sun: "#FFC93C",
        line: "rgba(21, 17, 31, 0.12)",
        "accent-violet": "#B79CFF",
        "accent-green": "#3FA37A",
        "accent-amber": "#C79A00",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-ibm-plex-mono)", "monospace"],
      },
      boxShadow: {
        hard: "4px 4px 0px #15111F",
        "hard-lg": "6px 6px 0px #15111F",
        "hard-paper": "4px 4px 0px #FAF8FF",
        "hard-violet": "4px 4px 0px #5B2EFF",
      },
      maxWidth: {
        maxw: "1180px",
      },
      letterSpacing: {
        display: "-0.035em",
        tight: "-0.02em",
      },
      fontSize: {
        display: "clamp(3rem, 9vw, 6rem)",
      },
      backgroundImage: {
        "blueprint-light":
          "radial-gradient(rgba(21,17,31,0.55) 1px, transparent 1.5px)",
        "blueprint-dark":
          "radial-gradient(rgba(250,248,255,0.07) 1px, transparent 1.5px)",
      },
    },
  },
  plugins: [],
};

export default config;