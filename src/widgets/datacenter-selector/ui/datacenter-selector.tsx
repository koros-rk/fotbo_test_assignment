import { type FC } from "react";
import { VStack } from "../../../../styled-system/jsx";
import { ButtonGroup } from "../../../ui/group-button/button-group.tsx";
import { DatacenterSelectorItems } from "../model/datacenter-selector.items.tsx";
import { datacenterSelectorLabelStyles } from "../styles/datacenter-selector-label.styles.ts";

interface CountrySelectorProps {
  dataCenter: string;
  setDataCenter: (dataCenter: string) => void;
}

export const DatacenterSelector: FC<CountrySelectorProps> = ({
  dataCenter,
  setDataCenter,
}) => {
  return (
    <VStack
      flexGrow={{ smDown: "1", sm: "1", lg: "0" }}
      alignItems={"stretch"}
      gap={"9px"}
    >
      <p className={datacenterSelectorLabelStyles}>Data Center</p>
      <ButtonGroup
        items={DatacenterSelectorItems}
        value={dataCenter}
        onChange={setDataCenter}
      />
    </VStack>
  );
};
