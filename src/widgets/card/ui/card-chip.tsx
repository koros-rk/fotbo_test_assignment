import { Box } from "../../../../styled-system/jsx";
import { Text } from "../../../ui/text/text.tsx";

export const CardChip = () => {
  return (
    <Box
      position={"absolute"}
      top={"0"}
      left={"50%"}
      transition={"all 0.3s ease-in-out"}
      transform={"translate(-50%, -50%)"}
      background={"linear-gradient(90deg, #FF4AB7 0%, #C830B9 100%)"}
      p={"10px"}
      borderRadius={"50px"}
      border={"1px solid"}
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
