import { css, cva } from "../../../styled-system/css";

export const ButtonGroupRootStyles = css({
  p: "4px",
  gap: "4px",
  borderRadius: "10px",
  border: "1px solid",
  borderColor: "#999/20",
  background:
    "linear-gradient(90deg, rgba(255 255 255 / 0.1) 0%, rgba(153 153 153 / 0.1) 100%)",
});

export const ButtonGroupItemStyles = cva({
  base: {
    display: "flex",
    alignItems: "center",
    gap: "8px",

    cursor: "pointer",

    px: "9px",
    py: "12px",
    backgroundColor: "transparent",
    borderRadius: "10px",
    transition: "background-color 0.2s ease-in-out",

    fontFamily: "Inter, sans-serif",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "18.4%",
    letterSpacing: "0%",
    textTransform: "capitalize",

    color: "#BEACC7",
  },
  variants: {
    active: {
      true: {
        background: "linear-gradient(90deg, #B3B6C8 0%, #FFFFFF 100%)",
        color: "#1E132D",
      },
    },
  },
});
