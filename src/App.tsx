import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import Scrollbar from "react-scrollbars-custom";
import { css } from "../styled-system/css";
import {
  Box,
  Center,
  Flex,
  Grid,
  GridItem,
  HStack,
} from "../styled-system/jsx";
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
    <Box
      as={"section"}
      background={token("gradients.background-radial")}
      h="100vh"
      w="100vw"
    >
      <Box h="100%" maxW="1440px" mx={"auto"}>
        <Scrollbar disableTracksWidthCompensation>
          <Flex
            direction={"column"}
            p={"8"}
            flexGrow={"1"}
            gap={"9"}
            alignItems={"stretch"}
          >
            <Heading />
            <HStack flexWrap={"wrap"} maxW={"900px"} gap={"10px"}>
              <DatacenterSelector
                dataCenter={datacenter}
                setDataCenter={setDataCenter}
              />
              <PeriodSelector period={period} setPeriod={setPeriod} />
            </HStack>

            <Grid gap={"6"} columns={{ sm: 1, md: 2, xl: 4 }}>
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
                  <GridItem>
                    <Card
                      key={item.id.$}
                      tariff={item}
                      best={index === arr.length - 2}
                      index={index}
                      period={period}
                    />
                  </GridItem>
                ))}
              {isSuccess && data.length === 0 && (
                <Center flexGrow={"1"}>
                  <Text variant={"h2"}>No Tariffs found</Text>
                </Center>
              )}
            </Grid>
          </Flex>
        </Scrollbar>
      </Box>
    </Box>
  );
};
