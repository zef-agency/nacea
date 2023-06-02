module.exports = {
  mode: "jit",
  safelist: ["lg:grid-cols-[1fr_4fr]", "lg:grid-cols-[1fr_3fr_1fr]"],
  content: [
    "../../packages/ui/**/*.{js,ts,jsx,tsx}",
    "../../packages/utils/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        screen: "100vh",
      },
      maxWidth: {
        maximum: "95%",
      },
      brightness: {
        25: ".25",
        40: ".40",
      },
      gridTemplateColumns: {
        instagram: "repeat(3, minmax(0, 300px))",
      },
      colors: {
        beige: "#F9EFE1",
        black: "#000000",
        red: "#B2403F",
        white: "#FFFFFF",
        whiteTransparent: "rgba(255, 255, 255, 0.39)",
        whiteGray: "rgba(221, 220, 211, 0.31)",
        gray: "#B8B8B8",
        grayLight: "#C4C4C4",
      },
      fontFamily: {
        Montserrat: ["var(--font-montserrat)"],
        BlackMango: ["var(--font-blackMango)"],
      },
      fontWeight: {
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
      },
    },
    borderRadius: {
      xs: "7px",
      xl: "20px",
      full: "100%",
    },
    screens: {
      xs: "375px",
      sm: "780px",
      md: "1080px",
      md2: "1243px",
      lg: "1512px",
    },

    fontSize: {
      12: "0.75rem",
      13: "0.813rem",
      14: "0.875rem",
      15: "0.925rem",
      16: "1rem",
      18: "1.125rem",
      20: "1.25rem",
      22: "1.35rem",
      24: "1.50rem",
      28: "1.75rem",
      30: "1.95rem",
      35: "2.188rem",
      40: "2.5rem",
      50: "3.125rem",
      60: "3.725rem",
    },
  },
  plugins: [],
};
