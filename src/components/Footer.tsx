import {
  Anchor,
  Text,
  Stack,
  Title,
  Divider,
  useMatches,
  Box,
} from "@mantine/core";
import WidthContainer from "./WidthContainer";

export default function Footer() {
  const isMobile = useMatches(
    { base: true, sm: false },
    { getInitialValueInEffect: false }
  );

  const lines = [
    {
      label: "title",
      value: "Department of Otolaryngology-Head & Neck Surgery",
    },
    {
      label: "email",
      value: "piccirij@wustl.edu",
    },
    {
      label: "campusBox",
      value: "Campus Box 8115",
    },
    {
      label: "address",
      value: "660 S. Euclid Ave.",
    },
    {
      label: "cityStateZip",
      value: "St. Louis, MO, 63110",
    },
    {
      label: "phone",
      value: "314-362-8641",
    },
  ];

  return (
    <WidthContainer backgroundColor={"#3d3d3d"}>
      <Stack c="white" py="lg">
        <Title
          order={4}
          size="1.2rem"
          ff="Libre Baskerville"
          fw={400}
          pb={0}
          mb={"-5px"}
          ta={isMobile ? "center" : "left"}
        >
          Clinical Outcomes Research
        </Title>
        <Stack gap={5} align={isMobile ? "center" : "left"}>
          {lines.map(({ value, label }) =>
            label === "email" ? (
              <Anchor
                href="mailto:piccirij@wustl.edu"
                size="14px"
                c="white"
                td="underline"
                ff="'Source Sans 3'"
                pb={0}
                mb={0}
                key={label}
              >
                {value}
              </Anchor>
            ) : (
              <Text size="14px" ff="'Source Sans 3'" pb={0} mb={0} key={label}>
                {value}
              </Text>
            )
          )}
        </Stack>
        <Box>
          <Divider />
        </Box>
        <Text size="14px" ff="'Source Sans 3'" pb={0} mb={0}>
          Copyright © 2020 Washington University School of Medicine, St. Louis,
          Missouri
        </Text>
      </Stack>
    </WidthContainer>
  );
}
