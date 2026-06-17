import { queryOptions } from "@tanstack/react-query";
import { TariffListContract } from "./tariff-list.contract.ts";

export const TariffListQuery = ({
  data_center,
  period,
}: {
  data_center: string;
  period: string;
}) =>
  queryOptions({
    queryKey: ["tariffList", { data_center, period }],
    queryFn: async () => {
      const data = await TariffListContract();
      return data.doc.list[0].elem
        .filter(
          (item) =>
            item.title_tag?.$ === "forex_server" &&
            item.datacenter?.id?.$ === data_center,
        )
        .map((item) => ({
          ...item,
          selectedPrice: item.prices.price.find(
            (price) => price.period.$ === period,
          ),
        }));
    },
  });
