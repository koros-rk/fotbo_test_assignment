import { queryOptions } from "@tanstack/react-query";
import { TariffListContract } from "./tariff-list.contract.ts";

export const TariffListQuery = ({ datacenter }: { datacenter: string }) =>
  queryOptions({
    queryKey: ["tariffList", { datacenter }],
    queryFn: async () => {
      const data = await TariffListContract({ datacenter });
      return data.doc.list[0].elem.filter(
        (item) => item.title_tag?.$ === "forex_server",
      );
    },
  });
