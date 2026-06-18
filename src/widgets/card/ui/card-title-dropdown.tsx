import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { type FC, useState } from "react";
import { Box, Grid, GridItem, HStack } from "../../../../styled-system/jsx";
import type { Tariff } from "../../../api/tariff.types.ts";
import { MoreVert } from "../../../ui/icons/more-vert.tsx";
import { getDetail } from "../lib/get-detail.ts";
import {
  dropdownRecipe,
  dropdownText,
} from "../styles/cart-dropdown.styles.ts";

interface CardTitleProps {
  tariff: Tariff;
}

export const CardTitleDropdown: FC<CardTitleProps> = (props) => {
  const [open, setOpen] = useState(false);
  const recipe = dropdownRecipe();

  return (
    <DropdownMenu.Root open={open} onOpenChange={setOpen}>
      <DropdownMenu.Trigger className={recipe.trigger}>
        <HStack
          p={"3px 5px 3px 9px"}
          justify={"space-between"}
          backgroundColor={"#FFEDF8/80"}
          borderRadius={"full"}
        >
          <p className={dropdownText}>
            {[
              getDetail(props.tariff, "CPU count") + " TRM",
              getDetail(props.tariff, "Memory"),
              getDetail(props.tariff, "Disk space"),
              getDetail(props.tariff, "Port speed"),
            ].join(" · ")}
          </p>
          <Box
            transition={"all 0.3s ease-in-out"}
            transform={`rotate(${open ? 90 : 0}deg)`}
          >
            <MoreVert />
          </Box>
        </HStack>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className={recipe.content}>
          {props.tariff.detail.map(({ name, value }) => (
            <DropdownMenu.Item className={recipe.item}>
              <Grid flexGrow={"1"} columns={2}>
                <GridItem className={recipe.label}>{name.$}</GridItem>
                <GridItem className={recipe.value}>{value.$}</GridItem>
              </Grid>
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
