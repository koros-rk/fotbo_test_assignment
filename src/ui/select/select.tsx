import * as Select from "@radix-ui/react-select";
import { type FC, type ReactNode, useState } from "react";
import { ArrowDown } from "../icons/arrow-down.tsx";
import { ArrowUp } from "../icons/arrow-up.tsx";
import { selectRecipe } from "./select.styles.ts";

interface SelectItem {
  value: string;
  label: string;
}

interface SelectProps {
  value: string;
  onChange: (value: string) => void;
  items: SelectItem[];
  startIcon?: ReactNode;
}

export const AppSelect: FC<SelectProps> = ({
  value,
  items,
  onChange,
  startIcon,
}) => {
  const [open, setOpen] = useState(false);
  const recipe = selectRecipe();

  return (
    <Select.Root
      open={open}
      onOpenChange={setOpen}
      value={value}
      onValueChange={onChange}
    >
      <Select.Trigger className={recipe.trigger}>
        {startIcon}
        <Select.Value />
        <Select.Icon className={recipe.icon}>
          {open && <ArrowUp />}
          {!open && <ArrowDown />}
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content position={"popper"} className={recipe.content}>
          <Select.Viewport className={recipe.viewport}>
            {items.map((item) => (
              <Select.Item className={recipe.item} value={item.value}>
                <Select.ItemText>{item.label}</Select.ItemText>
              </Select.Item>
            ))}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};
