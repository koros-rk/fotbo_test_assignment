import { css } from "../../../../styled-system/css";
import { token } from "../../../../styled-system/tokens";

export const cardContainerStyles = css({
  transition: "all 0.6s ease-in-out",

  _before: {
    content: '""',
    position: "absolute",
    inset: 0,
    padding: "1px",
    borderRadius: "inherit",

    background: "#BE4EFF/50",

    WebkitMask: `
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0)
    `,
    WebkitMaskComposite: "xor",

    mask: `
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0)
    `,
    maskComposite: "exclude",

    pointerEvents: "none",
  },

  _after: {
    content: '""',
    position: "absolute",
    inset: 0,
    borderRadius: "inherit",
    opacity: "0.6",

    background: token("gradients.card-border-idle"),

    pointerEvents: "none",
  },

  "& .card-header": {
    background: "#432B54",
    transition: "all 0.3s ease-in-out",
  },

  _hover: {
    "& .card-header": {
      background: "#C54092",
    },
    "& .card-glow": {
      width: "200px",
    },

    _before: {
      background: token("gradients.card-border-hover"),
    },
  },
});
