import type { FC, PropsWithChildren } from "react";
import { HStack, type HstackProps } from "../../../../styled-system/jsx";
import { token } from "../../../../styled-system/tokens";

interface CardSectionProps extends PropsWithChildren, HstackProps {}
export const CardSection: FC<CardSectionProps> = ({ children, ...rest }) => {
  return (
    <HStack
      alignItems={"start"}
      px={"6px"}
      py={"6px"}
      style={{
        background: token("gradients.card-section"),
        color: "rgb(83 45 114 / 0.1)",
      }}
      {...rest}
    >
      {children}
    </HStack>
  );
};
