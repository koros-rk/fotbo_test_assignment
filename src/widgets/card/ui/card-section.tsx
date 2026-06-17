import type { FC, PropsWithChildren } from "react";
import { HStack, type HstackProps } from "../../../../styled-system/jsx";

interface CardSectionProps extends PropsWithChildren, HstackProps {}
export const CardSection: FC<CardSectionProps> = ({ children, ...rest }) => {
  return (
    <HStack
      alignItems={"start"}
      px={"6px"}
      py={"6px"}
      style={{
        background:
          "linear-gradient(90deg, rgb(83 45 114 / 0.1) 0%, rgb(83 45 114 / 0.26) 50%, rgb(83 45 114 / 0.1) 100%)",
        color: "rgb(83 45 114 / 0.1)",
      }}
      {...rest}
    >
      {children}
    </HStack>
  );
};
