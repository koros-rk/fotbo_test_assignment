import type { FC, PropsWithChildren } from "react";
import { VStack } from "../../../../styled-system/jsx";
import { cardContainerStyles } from "../styles/card-container-styles.ts";

export const CardContainer: FC<PropsWithChildren> = ({ children }) => {
  return (
    <VStack
      className={cardContainerStyles}
      position={"relative"}
      flexGrow={"1"}
      minH={"614px"}
      alignItems={"stretch"}
      borderRadius={"32px"}
      p={"20px 16px 16px"}
      gap={"22px"}
    >
      {children}
    </VStack>
  );
};
