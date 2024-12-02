// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "@mantine/core/styles.css";

import {
  AppShell,
  createTheme,
  MantineProvider,
  Group,
  Stack,
  Card,
} from "@mantine/core";
import Stepper from "./components/Stepper";
import Footer from "./components/Footer";
import NavbarSubtitle from "./components/NavbarSubtitle";
import WidthContainer from "./components/WidthContainer";
import Header from "./components/Header";
import IntroCard from "./components/IntroCard";
import { BrowserRouter, Routes, Route } from "react-router";

export default function App() {
  const theme = createTheme({
    fontFamily: "Roboto, sans-serif",
    primaryColor: "washu",
    primaryShade: 9,
    components: {
      Button: {
        styles: () => {
          return {
            root: { fontFamily: "Roboto,sans-serif", fontWeight: 500 },
          };
        },
      },
    },
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

  console.log({ theme });

  return (
    <MantineProvider theme={theme}>
      <AppShell header={{ height: 48 }}>
        <AppShell.Header withBorder={false}>
          <Header />
        </AppShell.Header>

        <AppShell.Main w="100vw" pl={0} pr={0} pb={0} h="100%">
          <Stack pt="sm" gap={0} mih="100%">
            <NavbarSubtitle />
            <Group styles={{ root: { flexGrow: 1 } }} align="start">
              <WidthContainer>
                <Group maw="1185px" mx="auto" mt={0} justify="center">
                  <Card
                    shadow="sm"
                    padding="lg"
                    my={{ base: "lg", md: "48px" }}
                    radius="md"
                    withBorder
                  >
                    <BrowserRouter>
                      <Routes>
                        <Route path="/intro" Component={IntroCard} />
                        <Route
                          path="/decision-tree/:step"
                          Component={Stepper}
                        />
                        <Route path="/decision-tree/" Component={Stepper} />
                        <Route path="*" Component={IntroCard} />
                      </Routes>
                    </BrowserRouter>
                  </Card>
                </Group>
              </WidthContainer>
            </Group>
            <Footer />
          </Stack>
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}
