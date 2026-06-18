import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import { css } from "../styled-system/css";
import { Center, Flex, HStack, VStack } from "../styled-system/jsx";
import { token } from "../styled-system/tokens";
import { TariffListQuery } from "./api/tariff-list.query.ts";
import { Text } from "./ui/text/text.tsx";
import { Card } from "./widgets/card/ui/card.tsx";
import { DATACENTERS } from "./widgets/datacenter-selector/model/datacenter-selector.items.tsx";
import { DatacenterSelector } from "./widgets/datacenter-selector/ui/datacenter-selector.tsx";
import { Heading } from "./widgets/heading/ui/heading.tsx";
import { PeriodSelector } from "./widgets/period-selector/ui/period-selector.tsx";

export const App = () => {
  const [period, setPeriod] = useState(`-50`);
  const [datacenter, setDataCenter] = useState(DATACENTERS.poland.id);

  const { data, isSuccess, isLoading } = useQuery(
    TariffListQuery({ datacenter }),
  );

  return (
    <Flex
      background={token("gradients.background-radial")}
      overflow={"hidden"}
      minH="100vh"
      w="100vw"
    >
      <Center mx={"auto"} maxW="1440px" h={"100vh"}>
        <VStack w="1440px" gap={"9"} py={"8"} alignItems={"stretch"}>
          <Heading />
          <HStack gap={"10px"}>
            <DatacenterSelector
              dataCenter={datacenter}
              setDataCenter={setDataCenter}
            />
            <PeriodSelector period={period} setPeriod={setPeriod} />
          </HStack>
          <HStack alignItems={"stretch"} h={"614px"} gap={"18px"}>
            {isLoading &&
              new Array(4)
                .fill("")
                .map((_, index) => (
                  <Skeleton
                    key={index}
                    height={"100%"}
                    style={{ flexGrow: "1" }}
                    containerClassName={css({ flexGrow: "1" })}
                    borderRadius={"32px"}
                  />
                ))}

            {isSuccess &&
              data.map((item, index, arr) => (
                <Card
                  key={item.id.$}
                  tariff={item}
                  best={index === arr.length - 2}
                  index={index}
                  period={period}
                />
              ))}
            {isSuccess && data.length === 0 && (
              <Center flexGrow={"1"}>
                <Text variant={"h2"}>No Tariffs found</Text>
              </Center>
            )}
          </HStack>
        </VStack>
      </Center>
    </Flex>
  );
};
