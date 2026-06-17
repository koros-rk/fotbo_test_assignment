import type { FC, ReactNode } from "react";
import { HStack } from "../../../styled-system/jsx";
import {
  ButtonGroupItemStyles,
  ButtonGroupRootStyles,
} from "./button-group.styles.ts";

interface ButtonGroupItem {
  label: string;
  value: string;
  icon: ReactNode;
}

interface ButtonGroupProps {
  value: string;
  onChange: (value: string) => void;
  items: ButtonGroupItem[];
}

export const ButtonGroup: FC<ButtonGroupProps> = ({
  value,
  onChange,
  items,
}) => {
  const isActive = (item: ButtonGroupItem) => {
    return value === item.value;
  };

  const handleClick = (item: ButtonGroupItem) => {
    return () => {
      onChange(item.value);
    };
  };

  return (
    <HStack className={ButtonGroupRootStyles}>
      {items.map((item) => (
        <button
          onClick={handleClick(item)}
          className={ButtonGroupItemStyles({ active: isActive(item) })}
        >
          {item.icon}
          {item.label}
        </button>
      ))}
    </HStack>
  );
};
