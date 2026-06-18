import type { Tariff } from "../../../api/tariff.types.ts";

export const getDetail = (tariff: Tariff, detail: string) => {
  return (
    tariff.detail.find((t) => {
      return t.name.$.toLocaleLowerCase() === detail.toLowerCase();
    })?.value.$ ?? ""
  );
};
