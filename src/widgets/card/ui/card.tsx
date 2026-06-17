import type { FC } from "react";
import { Flex, HStack, VStack } from "../../../../styled-system/jsx";
import response from "../../../api/respons.json";
import monitors_1 from "../../../assets/monitors_1.svg";
import monitors_2 from "../../../assets/monitors_2.svg";
import { Question } from "../../../ui/icons/question.tsx";
import { ShoppingBag } from "../../../ui/icons/shopping-bag.tsx";
import { Tick } from "../../../ui/icons/tick.tsx";
import { Text } from "../../../ui/text/text.tsx";
import { CardButton } from "./card-button.tsx";
import { CardChip } from "./card-chip.tsx";
import { CardContainer } from "./card-container.tsx";
import { CardSection } from "./card-section.tsx";
import { CardTag } from "./card-tag.tsx";
import { CardTitle } from "./card-title.tsx";

interface CardProps {
  tariff: (typeof response)["doc"]["list"][0]["elem"][number] & {
    selectedPrice?: (typeof response)["doc"]["list"][0]["elem"][number]["prices"]["price"][number];
  };
}

const getDetail = (
  tariff: (typeof response)["doc"]["list"][0]["elem"][number],
  detail: string,
) => {
  return (
    tariff.detail.find((t) => {
      return t.name.$.toLocaleLowerCase() === detail.toLowerCase();
    })?.value.$ ?? ""
  );
};

export const Card: FC<CardProps> = ({ tariff }) => {
  return (
    <CardContainer>
      <CardChip />

      <CardTitle
        label={tariff.title.$.split("|")[0]}
        image={monitors_2}
        price={+(tariff.selectedPrice?.cost?.$ ?? 0)}
        currency={tariff.selectedPrice?.currency?.$ ?? ""}
        parameters={[
          getDetail(tariff, "CPU count") + " TRM",
          getDetail(tariff, "Memory"),
          getDetail(tariff, "Disk space"),
          getDetail(tariff, "Port speed"),
        ]}
      />

      <CardSection alignItems={"center"} px={"14px"}>
        <img src={monitors_1} alt="monitors" />
        <Text variant={"bodySm"}>Terminals</Text>

        <HStack ml={"auto"}>
          <Text>{getDetail(tariff, "CPU count")}</Text>
          <Question />
        </HStack>
      </CardSection>

      <VStack alignItems={"stretch"} gap={"8px"}>
        <Text variant={"other"}>Возможности</Text>
        <CardSection>
          <Tick />
          <Text variant={"bodySm"}>
            Базовый Windows RDP для повседневных задач
          </Text>
        </CardSection>
        <CardSection>
          <Tick />
          <Text variant={"bodySm"}>
            Стабильная работа браузера и офисных программ
          </Text>
        </CardSection>
        <CardSection>
          <Tick />
          <Text variant={"bodySm"}>Быстрый доступ к удаленному ПК</Text>
        </CardSection>
      </VStack>

      <VStack alignItems={"stretch"} gap={"8px"}>
        <Text variant={"other"}>Возможности</Text>
        <Flex gap={"8px"} flexWrap={"wrap"}>
          <CardTag>Базовый офис</CardTag>
          <CardTag>CRM / кабинеты</CardTag>
          <CardTag>Учёба</CardTag>
          <CardTag>Браузер + почта</CardTag>
          <CardTag>Браузер + почта</CardTag>
        </Flex>
      </VStack>

      <HStack mt={"auto"} gap={"0"}>
        <CardButton icon={<ShoppingBag />}>Купить</CardButton>
      </HStack>
    </CardContainer>
  );
};
