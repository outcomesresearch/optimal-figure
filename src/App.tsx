// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "@mantine/core/styles.css";

import {
  AppShell,
  Text,
  createTheme,
  Box,
  MantineProvider,
  Group,
  Stack,
} from "@mantine/core";
import Footer from "./components/Footer";
import NavbarSubtitle from "./components/NavbarSubtitle";
import WidthContainer from "./components/WidthContainer";
import Header from "./components/Header";

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
      <AppShell header={{ height: 48 }}>
        <AppShell.Header withBorder={false}>
          <Header />
        </AppShell.Header>

        <AppShell.Main w="100vw" pl={0} pr={0} pb={0} h="100%">
          <Stack pt="sm" gap={0} mih="100%">
            <NavbarSubtitle />
            <Group styles={{ root: { flexGrow: 1 } }}>
              <WidthContainer>
                <>main body of app</>
              </WidthContainer>
            </Group>
            <Footer />
          </Stack>
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}
