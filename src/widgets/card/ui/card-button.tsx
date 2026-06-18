import {
  forwardRef,
  type HTMLAttributes,
  type PropsWithChildren,
  type ReactNode,
} from "react";
import { Box } from "../../../../styled-system/jsx";
import {
  cardButtonIconStyles,
  cardButtonMainStyles,
  cardButtonRootStyles,
} from "../styles/card-button.styles.ts";

export interface ButtonProps
  extends HTMLAttributes<HTMLAnchorElement>, PropsWithChildren {
  icon?: ReactNode;
  href?: string;
}

export const CardButton = forwardRef<HTMLAnchorElement, ButtonProps>(
  function Component(props, ref) {
    const { children, onClick, icon, href, ...rest } = props;

    return (
      <a
        {...rest}
        href={href}
        ref={ref}
        onClick={onClick}
        className={`${cardButtonRootStyles} ${rest.className}`}
      >
        <Box className={`card-button-main ${cardButtonMainStyles}`}>
          {children}
        </Box>
        <Box className={`card-button-icon ${cardButtonIconStyles}`}>{icon}</Box>
      </a>
    );
  },
);
