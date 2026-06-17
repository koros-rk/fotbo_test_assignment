import type { FC, PropsWithChildren } from "react";
import { HStack } from "../../../../styled-system/jsx";
import { Text } from "../../../ui/text/text.tsx";

export const CardTag: FC<PropsWithChildren> = ({ children }) => {
  return (
    <HStack
      px={"8px"}
      py={"4px"}
      borderRadius={"4px"}
      background={"#913EF5/20"}
    >
      <Text css={{ textWrap: "nowrap" }} variant={"caption"}>
        {children}
      </Text>
    </HStack>
  );
};
