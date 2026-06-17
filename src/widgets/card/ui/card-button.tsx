import {
  forwardRef,
  type HTMLAttributes,
  type PropsWithChildren,
  type ReactNode,
} from "react";
import { Box } from "../../../../styled-system/jsx";
import {
  CardButtonIconStyles,
  CardButtonMainStyles,
  CardButtonRootStyles,
} from "../styles/card-button.styles.ts";

export interface ButtonProps
  extends HTMLAttributes<HTMLButtonElement>, PropsWithChildren {
  icon?: ReactNode;
}

export const CardButton = forwardRef<HTMLButtonElement, ButtonProps>(
  function Component(props, ref) {
    const { children, onClick, icon } = props;

    return (
      <button ref={ref} onClick={onClick} className={CardButtonRootStyles}>
        <Box className={`card-button-main ${CardButtonMainStyles}`}>
          {children}
        </Box>
        <Box className={`card-button-icon ${CardButtonIconStyles}`}>{icon}</Box>
      </button>
    );
  },
);
