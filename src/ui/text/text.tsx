import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ElementType,
  type PropsWithChildren,
} from "react";
import { css, type Styles } from "../../../styled-system/css";
import type { RecipeVariant } from "../../../styled-system/types";
import { textRecipe } from "./text.recipe.ts";

export type TextVariantProps = Partial<RecipeVariant<typeof textRecipe>>;

type TextOwnProps = PropsWithChildren<
  TextVariantProps & {
    className?: string;
    css?: Styles;
    as?: ElementType;
  }
>;

type TextProps<T extends ElementType = "p"> = TextOwnProps &
  Omit<ComponentPropsWithoutRef<T>, keyof TextOwnProps>;

export const Text = forwardRef<HTMLElement, TextProps>(
  function Text(props, ref) {
    const {
      children,
      className,
      variant,
      css: cssProp,
      as: Component = "p",
      ...rest
    } = props;

    const recipe = textRecipe({ variant });

    return (
      <Component
        ref={ref}
        className={`${css(cssProp)} ${recipe} ${className ?? ""}`}
        {...rest}
      >
        {children}
      </Component>
    );
  },
);
