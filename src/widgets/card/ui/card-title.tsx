import type { FC } from "react";
import { css } from "../../../../styled-system/css";
import { HStack, VStack } from "../../../../styled-system/jsx";
import { MoreVert } from "../../../ui/icons/more-vert.tsx";
import { Text } from "../../../ui/text/text.tsx";

interface CardTitleProps {
  label: string;
  price: number;
  currency: string;
  image: string;
  parameters: string[];
}

export const CardTitle: FC<CardTitleProps> = (props) => {
  return (
    <VStack
      px={"12px"}
      py={"16px"}
      alignItems={"stretch"}
      borderRadius={"16px"}
      className={"card-header"}
      transition={"all 0.3s ease-in-out"}
    >
      <HStack gap={"10px"} justifyContent={"space-between"}>
        <VStack alignItems={"stretch"} gap={"4px"}>
          <Text variant={"h2"}>{props.label}</Text>
          <HStack alignItems={"baseline"} gap={"6px"}>
            <Text variant={"h2"}>
              {props.currency} {props.price}
            </Text>
            <Text variant={"body"}>month</Text>
          </HStack>
        </VStack>
        <img src={props.image} alt="cloud-forex-1" />
      </HStack>
      <HStack
        p={"3px 5px 3px 9px"}
        justify={"space-between"}
        backgroundColor={"#FFEDF8/80"}
        borderRadius={"full"}
      >
        <p
          className={css({
            fontFamily: "Inter, sans-serif",
            fontWeight: "medium",
            fontSize: "12px",
            lineHeight: "140%",
            letterSpacing: "-2%",
          })}
        >
          {props.parameters.join(" · ")}
        </p>
        <MoreVert />
      </HStack>
    </VStack>
  );
};
