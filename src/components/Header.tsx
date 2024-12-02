import { Box } from "@mantine/core";
import WidthContainer from "./WidthContainer";

const Header = () => {
  return (
    <WidthContainer backgroundColor="washu.9">
      <Box h={48} py="sm" maw="100%">
        <img
          src="/washuLogo.svg"
          style={{ margin: "auto", height: "100%", maxWidth: "100%" }}
        />
      </Box>
    </WidthContainer>
  );
};

export default Header;
