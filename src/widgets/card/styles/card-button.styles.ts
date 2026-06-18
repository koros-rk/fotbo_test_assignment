import { css } from "../../../../styled-system/css";
import { hstack } from "../../../../styled-system/patterns";

export const cardButtonRootStyles = hstack({
  w: "100%",
  gap: "0",

  _hover: {
    "& .card-button-main": {
      backgroundColor: "#FF4AB7",
      color: "#fff",
    },

    "& .card-button-icon": {
      borderColor: "#FFF",
      backgroundColor: "#FFF",
      color: "#FF4AB7",
    },
  },
});

export const cardButtonMainStyles = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  flexGrow: 1,

  px: "48px",
  height: "52px",

  borderRadius: "100px",
  border: "1px solid #FF4AB7",

  color: "#FF4AB7",
  textTransform: "uppercase",

  fontFamily: "Inter, sans-serif",
  fontWeight: 700,
  fontSize: "12px",
  letterSpacing: "0%",
  lineHeight: "130%",

  transition: "all 0.3s ease-in-out",
});

export const cardButtonIconStyles = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,

  width: "fit-content",

  height: "52px",
  aspectRatio: "1/1",

  borderRadius: "100px",
  border: "1px solid #FF4AB7",

  color: "#FF4AB7",
  textTransform: "uppercase",

  fontFamily: "Inter, sans-serif",
  fontWeight: 700,
  fontSize: "12px",
  letterSpacing: "0%",
  lineHeight: "130%",

  transition: "all 0.3s ease-in-out",
});
