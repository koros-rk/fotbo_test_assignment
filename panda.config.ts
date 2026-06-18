import { defineConfig } from "@pandacss/dev";
import { gradients } from "./src/tokens/gradients";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        ...gradients,
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",

  jsxFramework: "react",
});

// Card Section
//"linear-gradient(90deg, rgb(83 45 114 / 0.1) 0%, rgb(83 45 114 / 0.26) 50%, rgb(83 45 114 / 0.1) 100%)"

// Card Container border idle
// "linear-gradient(90deg, rgb(190 78 255 / 0.1) 38%, rgb(255 74 183 / 0.1) 100%)",
// Card Container border hover
// "linear-gradient(180deg, #E6BCFF 0%, rgb(190 78 255 / 0.5) 100%)",

// Card Glow
// "linear-gradient(90deg, rgba(255, 150, 241, 0) 0%, #E5C5D8 50%, rgba(255, 150, 241, 0) 100%)",

// Card dropdown
// "linear-gradient(90.03deg, rgba(249, 240, 237, 0.3) -0.01%, rgba(204, 203, 211, 0.16) 53.84%, rgba(225, 220, 223, 0.3) 99.04%)",

// Card Chip background
// "linear-gradient(90deg, #FF4AB7 0%, #C830B9 100%)"
// Card Chip

// Button Group Root
// linear-gradient(90deg, rgba(255 255 255 / 0.1) 0%, rgba(153 153 153 / 0.1) 100%)"
// Button Group Item
// "linear-gradient(90deg, #B3B6C8 0%, #FFFFFF 100%)",

// Select
// "linear-gradient(90deg, rgba(255 255 255 / 0.1) 0%, rgba(153 153 153 / 0.1) 100%)",
