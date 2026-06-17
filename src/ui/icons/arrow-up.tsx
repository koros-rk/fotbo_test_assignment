import type { FC } from "react";
import type { ColorPalette } from "../../../styled-system/tokens";

interface Props {
  size?: number | string;
  color?: ColorPalette;
}

export const ArrowUp: FC<Props> = ({ size = 16 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 11 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.666504 5.43848L5.16234 0.942643L9.65817 5.43848"
        stroke="currentcolor"
        stroke-width="1.33333"
        stroke-linecap="round"
      />
    </svg>
  );
};
