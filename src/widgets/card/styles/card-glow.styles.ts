import { css } from "../../../../styled-system/css";
import { token } from "../../../../styled-system/tokens";

export const cardGlowStyles = css({
  position: "absolute",
  top: "1px",
  left: "50%",
  transform: "translateX(-50%)",
  w: "90px",
  h: "2px",
  filter: "blur(4px)",
  background: token("gradients.card-glow"),
  transition: "all 0.3s ease-in-out",
});
