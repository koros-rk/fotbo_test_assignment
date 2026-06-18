import { sva } from "../../../styled-system/css";
import { token } from "../../../styled-system/tokens";

export const selectRecipe = sva({
  slots: ["trigger", "icon", "content", "item", "viewport"],
  base: {
    trigger: {
      display: "flex",
      alignItems: "center",
      gap: "4px",
      minWidth: "280px",
      height: "48px",
      px: "16px",
      borderRadius: "10px",
      border: "1px solid",
      borderColor: "#FFF/20",
      outline: "none",
      background: token("gradients.select"),
      "& input": {
        outline: "none",
      },

      fontFamily: "Inter, sans-serif",
      fontWeight: "400",
      fontSize: "16px",
      lineHeight: "140%",
      letterSpacing: "-3%",
      color: "#FFF",
    },
    content: {
      mt: "12px",
      position: "relative",
      overflow: "hidden",

      minWidth: "320px",

      p: "16px",
      borderRadius: "16px",
      border: "1px solid",
      borderColor: "#FFF/20",
      outline: "none",
      background: token("gradients.select"),

      _before: {
        position: "absolute",
        content: '""',
        inset: "0",
        zIndex: "-1",
        background: "rgba(38, 20, 51, 1)",
      },
    },

    viewport: {
      display: "flex",
      flexDirection: "column",
      gap: "5.5px",
    },

    item: {
      outline: "none",

      fontFamily: "Inter, sans-serif",
      fontWeight: "400",
      fontSize: "14px",
      lineHeight: "19.6px",
      letterSpacing: "0%",
      color: "#FFF",

      cursor: "pointer",

      "&[data-state = checked]": {
        color: "#FF4AB7",
      },

      _hover: {
        color: "#FF4AB7",
      },
    },

    icon: {
      ml: "auto",
    },
  },
});
