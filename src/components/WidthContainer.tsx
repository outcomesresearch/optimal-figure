import { Box } from "@mantine/core";

const WidthContainer = ({
  children,
  backgroundColor = "white",
}: {
  children: JSX.Element;
  backgroundColor?: string;
}) => {
  return (
    <Box w="100%" bg={backgroundColor}>
      <Box w="92%" mx="auto">
        {children}
      </Box>
    </Box>
  );
};

export default WidthContainer;
