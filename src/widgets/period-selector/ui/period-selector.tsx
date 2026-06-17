import { type Dispatch, type FC, type SetStateAction } from "react";
import { VStack } from "../../../../styled-system/jsx";
import { Calendar } from "../../../ui/icons/calendar.tsx";
import { AppSelect } from "../../../ui/select/select.tsx";
import { PeriodSelectorItems } from "../model/period-selector.items.tsx";
import { periodSelectorLabelStyles } from "../styles/period-selector-label.styles.ts";

interface PeriodSelectorProps {
  period: string;
  setPeriod: Dispatch<SetStateAction<string>>;
}

export const PeriodSelector: FC<PeriodSelectorProps> = ({
  period,
  setPeriod,
}) => {
  return (
    <VStack alignItems={"stretch"} gap={"9px"}>
      <p className={periodSelectorLabelStyles}>Price per</p>
      <AppSelect
        value={period}
        onChange={setPeriod}
        items={PeriodSelectorItems}
        startIcon={<Calendar />}
      />
    </VStack>
  );
};
