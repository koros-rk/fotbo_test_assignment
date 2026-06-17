import { cva } from "../../../styled-system/css";

export const textRecipe = cva({
  base: {
    fontFamily: "Inter, sans-serif",
    color: "#fff",
  },

  variants: {
    variant: {
      h1: {
        fontSize: "54px",
        fontWeight: "400",
        letterSpacing: "-2.7px",
        lineHeight: "54px",
      },

      h2: {
        fontSize: "24px",
        fontWeight: 500,
        letterSpacing: "-4%",
        lineHeight: "27px",
      },

      bodyLg: {
        fontSize: "16px",
        fontWeight: 400,
        letterSpacing: "-3%",
        lineHeight: "22px",
      },

      body: {
        fontSize: "16px",
        fontWeight: 400,
        letterSpacing: "0",
        lineHeight: "18px",
      },

      bodySm: {
        fontSize: "14px",
        fontWeight: 400,
        letterSpacing: "0",
        lineHeight: "20px",
      },

      label: {
        fontSize: "14px",
        fontWeight: 400,
        letterSpacing: "-4%",
        lineHeight: "16px",
      },

      caption: {
        fontSize: "12px",
        fontWeight: 400,
        letterSpacing: "0",
        lineHeight: "16px",
      },

      captionStrong: {
        fontSize: "12px",
        fontWeight: 500,
        letterSpacing: "-2%",
        lineHeight: "17px",
      },

      overline: {
        fontSize: "10px",
        fontWeight: 600,
        letterSpacing: "-2%",
        lineHeight: "12px",
        textTransform: "uppercase",
      },

      other: {
        fontSize: "12",
        fontWeight: 400,
        letterSpacing: "-4%",
        lineHeight: "113%",
        textTransform: "uppercase",
      },
    },
  },

  defaultVariants: {
    variant: "body",
  },
});
