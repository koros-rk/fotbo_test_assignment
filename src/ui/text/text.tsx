import type { PropsWithChildren } from "react";
import { forwardRef } from "react";
import { css, type Styles } from "../../../styled-system/css";
import type { RecipeVariant } from "../../../styled-system/types";
import { textRecipe } from "./text.recipe.ts";

export type TextVariantProps = Partial<RecipeVariant<typeof textRecipe>>;
export interface TextProps extends PropsWithChildren, TextVariantProps {
  className?: string;
  css?: Styles;
}

export const Text = forwardRef<HTMLParagraphElement, TextProps>(
  function Component(props, ref) {
    const { children, className, variant } = props;
    const recipe = textRecipe({ variant });

    return (
      <p ref={ref} className={`${css(props.css)} ${recipe} ${className ?? ""}`}>
        {children}
      </p>
    );
  },
);
