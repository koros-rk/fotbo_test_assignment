import { css } from "../../../../styled-system/css";

export const CardContainerStyles = css({
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

    background:
      "linear-gradient(90deg, rgb(190 78 255 / 0.1) 38%, rgb(255 74 183 / 0.1) 100%)",

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
    _before: {
      background:
        "linear-gradient(180deg, #E6BCFF 0%, rgb(190 78 255 / 0.5) 100%)",
    },
  },
});
