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
  extends HTMLAttributes<HTMLAnchorElement>, PropsWithChildren {
  icon?: ReactNode;
  href?: string;
}

export const CardButton = forwardRef<HTMLAnchorElement, ButtonProps>(
  function Component(props, ref) {
    const { children, onClick, icon, href } = props;

    return (
      <a
        href={href}
        ref={ref}
        onClick={onClick}
        className={CardButtonRootStyles}
      >
        <Box className={`card-button-main ${CardButtonMainStyles}`}>
          {children}
        </Box>
        <Box className={`card-button-icon ${CardButtonIconStyles}`}>{icon}</Box>
      </a>
    );
  },
);
