import { Text } from "@mantine/core";
import WidthContainer from "./WidthContainer";

const NavbarSubtitle = () => {
  return (
    <WidthContainer>
      <>
        <Text
          c="red.9"
          span
          fw={600}
          ff="'Source Sans 3'"
          tt="uppercase"
          size="14px"
        >
          Department of Otolaryngology&nbsp;
        </Text>
        <Text
          c="red.9"
          span
          fw={600}
          ff="'Source Sans 3'"
          tt="uppercase"
          size="14px"
        >
          Clinical Outcomes Research
        </Text>
      </>
    </WidthContainer>
  );
};

export default NavbarSubtitle;
