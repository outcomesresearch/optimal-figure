// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "@mantine/core/styles.css";

import {
  AppShell,
  Text,
  createTheme,
  Box,
  MantineProvider,
} from "@mantine/core";

export default function App() {
  const theme = createTheme({
    fontFamily: "Open Sans, sans-serif",
    colors: {
      washu: [
        "#fdeded",
        "#f4d7d7",
        "#edaaab",
        "#e77a7b",
        "#e25353",
        "#e03b3a",
        "#df2f2d",
        "#c62421",
        "#b11d1c",
        "#9b1316",
      ],
    },
  });

  return (
    <MantineProvider theme={theme}>
      <AppShell header={{ height: 48 }} padding="md">
        <AppShell.Header withBorder={false}>
          <Box bg="washu.9" w="100%" maw="100%" h={48}>
            <Box h="100%" w="92%" py="sm" m="auto">
              <img
                src="src/assets/washuLogo.svg"
                style={{ margin: "auto", height: "100%", maxWidth: "100%" }}
              />
            </Box>
          </Box>
        </AppShell.Header>

        <AppShell.Main w="100vw">
          <Box w="calc(92% + 32px)" p={0} m="auto" mt="-5px">
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
          </Box>
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}
