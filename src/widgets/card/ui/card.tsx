import { type FC } from "react";
import { Box, Flex, HStack, VStack } from "../../../../styled-system/jsx";
import type { Tariff } from "../../../api/tariff.types.ts";
import monitors_1 from "../../../assets/monitors_1.svg";
import monitors_2 from "../../../assets/monitors_2.svg";
import monitors_3 from "../../../assets/monitors_3.svg";
import monitors_4 from "../../../assets/monitors_4.svg";
import monitors_m from "../../../assets/monitors_6.svg";
import { Question } from "../../../ui/icons/question.tsx";
import { ShoppingBag } from "../../../ui/icons/shopping-bag.tsx";
import { Tick } from "../../../ui/icons/tick.tsx";
import { Text } from "../../../ui/text/text.tsx";
import { getDetail } from "../lib/get-detail.ts";
import { cardGlowStyles } from "../styles/card-glow.styles.ts";
import { CardButton } from "./card-button.tsx";
import { CardChip } from "./card-chip.tsx";
import { CardContainer } from "./card-container.tsx";
import { CardSection } from "./card-section.tsx";
import { CardTag } from "./card-tag.tsx";
import { CardTitle } from "./card-title.tsx";

interface CardProps {
  best: boolean;
  index: number;
  period: string;
  tariff: Tariff;
}

export const Card: FC<CardProps> = ({ tariff, best, index, period }) => {
  const monitor_icon = [monitors_2, monitors_3, monitors_4, monitors_m];

  const selectedPrice = tariff.prices.price.find(
    (price) => price.period.$ === period,
  );

  return (
    <CardContainer>
      {best && <CardChip />}

      <Box className={`card-glow ${cardGlowStyles}`} />

      <CardTitle
        tariff={tariff}
        label={tariff.title.$.split("|")[0]}
        image={monitor_icon[index]}
        price={+(selectedPrice?.cost?.$ ?? 0)}
        currency={selectedPrice?.currency?.$ ?? ""}
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

      <Box mt={"auto"} as={"footer"}>
        <CardButton
          href={`/buy?tariff_id=${tariff.id.$}`}
          icon={<ShoppingBag />}
        >
          Купить
        </CardButton>
      </Box>
    </CardContainer>
  );
};
