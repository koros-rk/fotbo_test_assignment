import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { css } from "../styled-system/css";
import { Center, Flex, HStack, VStack } from "../styled-system/jsx";
import { TariffListQuery } from "./api/tariff-list.query.ts";
import { Text } from "./ui/text/text.tsx";
import { Card } from "./widgets/card/ui/card.tsx";
import { DATACENTERS } from "./widgets/datacenter-selector/model/datacenter-selector.items.tsx";
import { DatacenterSelector } from "./widgets/datacenter-selector/ui/datacenter-selector.tsx";
import { Heading } from "./widgets/heading/ui/heading.tsx";
import { PeriodSelector } from "./widgets/period-selector/ui/period-selector.tsx";

const bg = css({
  background:
    "radial-gradient(circle,rgba(38, 20, 51, 1) 0%, rgba(22, 7, 32, 1) 100%)",
});

export const App = () => {
  const [period, setPeriod] = useState(`-50`);
  const [dataCenter, setDataCenter] = useState(DATACENTERS.poland.id);

  const { data, isSuccess } = useQuery(
    TariffListQuery({ data_center: dataCenter, period }),
  );

  return (
    <Flex className={bg} minH="100vh" w="100vw">
      <VStack
        gap={"9"}
        py={"8"}
        alignItems={"stretch"}
        mx={"auto"}
        h={"100vh"}
        maxW="1440px"
        w="1440px"
      >
        <Heading />
        <HStack gap={"10px"}>
          <DatacenterSelector
            dataCenter={dataCenter}
            setDataCenter={setDataCenter}
          />
          <PeriodSelector period={period} setPeriod={setPeriod} />
        </HStack>
        <HStack alignItems={"stretch"} h={"full"} gap={"18px"}>
          {isSuccess &&
            data.map((item) => <Card key={item.id.$} tariff={item} />)}
          {isSuccess && data.length === 0 && (
            <Center flexGrow={"1"}>
              <Text variant={"h2"}>No Tariffs found</Text>
            </Center>
          )}
        </HStack>
      </VStack>
    </Flex>
  );
};
