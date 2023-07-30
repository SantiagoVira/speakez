import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bg: {
          main: {
            light: "#fcedcf",
            dark: "#6d3619",
          },
          secondary: {
            light: "#FFD19A",
            dark: "#a74916",
          },
        },
        highlight: {
          light: "#F47C38",
          dark: "#FDE9CE",
        },
        text: {
          100: "#000000",
          200: "#3E3E3E",
          300: "#757575",
        },
      },
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
      },
      transitionProperty: {
        width: "width",
      },
    },
  },
  plugins: [],
} satisfies Config;
