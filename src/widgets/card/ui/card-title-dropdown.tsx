import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { type FC, useState } from "react";
import { Box, Grid, GridItem, HStack } from "../../../../styled-system/jsx";
import response from "../../../api/respons.json";
import { MoreVert } from "../../../ui/icons/more-vert.tsx";
import { dropdownRecipe } from "../styles/cart-dropdown.styles.ts";
import { dropdownText } from "../styles/cart-typography.styles.ts";

interface CardTitleProps {
  parameters: (typeof response)["doc"]["list"][0]["elem"][number]["detail"];
}

const getDetail = (
  details: (typeof response)["doc"]["list"][0]["elem"][number]["detail"],
  detail: string,
) => {
  return (
    details.find((t) => {
      return t.name.$.toLocaleLowerCase() === detail.toLowerCase();
    })?.value.$ ?? ""
  );
};

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
              getDetail(props.parameters, "CPU count") + " TRM",
              getDetail(props.parameters, "Memory"),
              getDetail(props.parameters, "Disk space"),
              getDetail(props.parameters, "Port speed"),
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
          {props.parameters.map(({ name, value }) => (
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
