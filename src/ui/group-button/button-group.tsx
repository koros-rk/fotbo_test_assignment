import type { FC, ReactNode } from "react";
import { css } from "../../../styled-system/css";
import { HStack } from "../../../styled-system/jsx";
import {
  buttonGroupItemRecipe,
  buttonGroupRootStyles,
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
    <HStack flexGrow={"1"} className={buttonGroupRootStyles}>
      {items.map((item) => (
        <button
          key={item.value}
          onClick={handleClick(item)}
          className={buttonGroupItemRecipe({ active: isActive(item) })}
        >
          {item.icon}
          <p className={css({ display: { smDown: "none" } })}>{item.label}</p>
        </button>
      ))}
    </HStack>
  );
};
