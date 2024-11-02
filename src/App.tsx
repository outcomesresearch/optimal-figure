// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "@mantine/core/styles.css";

import { AppShell, createTheme, Box, MantineProvider } from "@mantine/core";

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
        <AppShell.Header
          styles={{
            header: { backgroundColor: `var(--mantine-color-washu-9)` },
          }}
        >
          <Box w="92%" h="100%" py="sm" m="auto">
            <img
              src="src/assets/washuLogo.svg"
              style={{ margin: "auto", height: "100%" }}
            />
          </Box>
        </AppShell.Header>

        <AppShell.Main>Main</AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}
