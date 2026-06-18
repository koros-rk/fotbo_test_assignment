import { defineTokens } from "@pandacss/dev";

export const gradients = defineTokens({
  gradients: {
    // radial-gradient(circle,rgba(38, 20, 51, 1) 0%, rgba(22, 7, 32, 1) 100%)

    "background-radial": {
      value: {
        type: "radial",
        placement: "circle",
        stops: ["rgba(38, 20, 51, 1) 0%", "rgba(22, 7, 32, 1) 100%"],
      },
    },

    "card-section": {
      value: {
        type: "linear",
        placement: "to right",
        stops: [
          "rgba(83, 45, 114, 0.1) 0%",
          "rgba(83, 45, 114, 0.26) 50%",
          "rgba(83, 45, 114, 0.1) 100%",
        ],
      },
    },

    "card-border-idle": {
      value: {
        type: "linear",
        placement: "to right",
        stops: ["rgba(190, 78, 255, 0.1) 38%", "rgba(255, 74, 183, 0.1) 100%"],
      },
    },

    "card-border-hover": {
      value: {
        type: "linear",
        placement: "to bottom",
        stops: ["#E6BCFF 0%", "rgba(190, 78, 255, 0.5) 100%"],
      },
    },

    "card-glow": {
      value: {
        type: "linear",
        placement: "to right",
        stops: [
          "rgba(255, 150, 241, 0) 0%",
          "#E5C5D8 50%",
          "rgba(255, 150, 241, 0) 100%",
        ],
      },
    },

    "card-dropdown": {
      value: {
        type: "linear",
        placement: "90.03deg",
        stops: [
          "rgba(249, 240, 237, 0.3) -0.01%",
          "rgba(204, 203, 211, 0.16) 53.84%",
          "rgba(225, 220, 223, 0.3) 99.04%",
        ],
      },
    },

    "card-chip-background": {
      value: {
        type: "linear",
        placement: "to right",
        stops: ["#FF4AB7 0%", "#C830B9 100%"],
      },
    },

    "button-group-root": {
      value: {
        type: "linear",
        placement: "to right",
        stops: ["rgba(255, 255, 255, 0.1) 0%", "rgba(153, 153, 153, 0.1) 100%"],
      },
    },

    "button-group-item": {
      value: {
        type: "linear",
        placement: "to right",
        stops: ["#B3B6C8 0%", "#FFFFFF 100%"],
      },
    },

    select: {
      value: {
        type: "linear",
        placement: "to right",
        stops: ["rgba(255, 255, 255, 0.1) 0%", "rgba(153, 153, 153, 0.1) 100%"],
      },
    },
  },
});
