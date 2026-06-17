import { Germany } from "../../../ui/icons/germany.tsx";
import { Netherlands } from "../../../ui/icons/netherlands.tsx";
import { Poland } from "../../../ui/icons/poland.tsx";
import { Usa } from "../../../ui/icons/usa.tsx";

export const DATACENTERS = {
  poland: {
    id: "12",
    label: "Poland",
  },
  netherlands: {
    id: "17",
    label: "Netherlands",
  },
  germany: {
    id: "19",
    label: "Germany",
  },
  usa: {
    id: "21",
    label: "USA",
  },
};

export const DatacenterSelectorItems = [
  {
    label: DATACENTERS.poland.label,
    value: DATACENTERS.poland.id,
    icon: <Poland />,
  },
  {
    label: DATACENTERS.netherlands.label,
    value: DATACENTERS.netherlands.id,
    icon: <Netherlands />,
  },
  {
    label: DATACENTERS.germany.label,
    value: DATACENTERS.germany.id,
    icon: <Germany />,
  },
  {
    label: DATACENTERS.usa.label,
    value: DATACENTERS.usa.id,
    icon: <Usa />,
  },
];
