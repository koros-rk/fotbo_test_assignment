import type { FC } from "react";
import { HStack, VStack } from "../../../../styled-system/jsx";
import response from "../../../api/respons.json";
import { Text } from "../../../ui/text/text.tsx";
import { CardTitleDropdown } from "./card-title-dropdown.tsx";

interface CardTitleProps {
  tariff: (typeof response)["doc"]["list"][0]["elem"][number];
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
      <CardTitleDropdown parameters={props.tariff.detail} />
    </VStack>
  );
};
