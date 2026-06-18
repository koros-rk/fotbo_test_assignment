import { css, sva } from "../../../../styled-system/css";
import { token } from "../../../../styled-system/tokens";

export const dropdownRecipe = sva({
  slots: ["trigger", "content", "item", "label", "value"],
  base: {
    trigger: {
      outline: "none",
    },
    content: {
      display: "flex",
      flexDirection: "column",
      gap: "4px",
      backgroundColor: "#9A42E8",
      borderRadius: "10px",
      mt: "8px",
      px: "6px",
      py: "8px",
    },
    item: {
      display: "flex",
      alignItems: "center",
      height: "22px",
      textTransform: "capitalize",
      outline: "none",
      px: "8px",
      borderRadius: "6px",
      background: token("gradients.card-dropdown"),
    },
    label: {
      fontFamily: "Inter, sans-serif",
      fontWeight: "400",
      fontStyle: "normal",
      color: "#fff/70",
      fontSize: "14px",
      lineHeight: "113%",
      letterSpacing: "-4%",
    },
    value: {
      fontFamily: "Inter, sans-serif",
      fontWeight: "400",
      fontStyle: "normal",
      color: "#fff",
      fontSize: "14px",
      lineHeight: "113%",
      letterSpacing: "-4%",
    },
  },
});

export const dropdownText = css({
  fontFamily: "Inter, sans-serif",
  fontWeight: "medium",
  fontSize: "12px",
  lineHeight: "140%",
  letterSpacing: "-2%",
});
