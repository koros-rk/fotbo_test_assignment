import type { FC } from "react";
import type { ColorPalette } from "../../../styled-system/tokens";

interface Props {
  size?: number | string;
  color?: ColorPalette;
}

export const ArrowDown: FC<Props> = ({ size = 16 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 11 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.666504 0.666504L5.16234 5.16234L9.65817 0.666504"
        stroke="white"
        stroke-width="1.33333"
        stroke-linecap="round"
      />
    </svg>
  );
};
