import { sva } from "../../../../styled-system/css";

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
      background:
        "linear-gradient(90.03deg, rgba(249, 240, 237, 0.3) -0.01%, rgba(204, 203, 211, 0.16) 53.84%, rgba(225, 220, 223, 0.3) 99.04%)",
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
