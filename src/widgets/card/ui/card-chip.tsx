import { Box } from "../../../../styled-system/jsx";
import { token } from "../../../../styled-system/tokens";
import { Text } from "../../../ui/text/text.tsx";

export const CardChip = () => {
  return (
    <Box
      position={"absolute"}
      top={"0"}
      left={"50%"}
      transition={"all 0.3s ease-in-out"}
      transform={"translate(-50%, -50%)"}
      background={token("gradients.card-chip-background")}
      p={"10px"}
      borderRadius={"50px"}
      zIndex={"1"}
    >
      <Text
        css={{ lineHeight: "0", textTransform: "uppercase" }}
        variant={"caption"}
      >
        Best Choise
      </Text>
    </Box>
  );
};
