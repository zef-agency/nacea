module.exports = {
  content: [
    "../../packages/ui/**/*.{js,ts,jsx,tsx}",
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
      colors: {
        black: "#000000",
        red: "#B2403F",
        white: "#FFFFFF",
        whiteGray: "rgba(221, 220, 211, 0.31)",
        gray: "#B8B8B8",
        grayLight: "#C4C4C4",
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
      },
    },
    borderRadius: {
      xs: "9px",
      full: "100%",
    },
    screens: {
      xs: "375px",
      sm: "780px",
      md: "1080px",
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
    },
  },
  plugins: [],
};
