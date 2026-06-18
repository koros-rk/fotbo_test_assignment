import { css, cva } from "../../../styled-system/css";
import { token } from "../../../styled-system/tokens";

export const buttonGroupRootStyles = css({
  p: "4px",
  gap: "4px",
  borderRadius: "10px",
  border: "1px solid",
  borderColor: "#999/20",
  background: token("gradients.button-group-root"),
});

export const buttonGroupItemRecipe = cva({
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
        background: token("gradients.button-group-item"),
        color: "#1E132D",
      },
    },
  },
});
