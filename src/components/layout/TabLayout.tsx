import { Tabs, Text, Box, Stack, Group, Image } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

// Define Tab Titles
type TabTitle =
  | "characteristics"
  | "purpose"
  | "whenToUse"
  | "variables"
  | "datasetSize"
  | "strengths"
  | "weaknesses";

// Define the type for each tab's configuration
type TabConfiguration = {
  key: TabTitle;
  label: string;
  content: JSX.Element;
};

// Update Props to define `tabsConfiguration` as an array of TabConfiguration
type Props = {
  description: string;
  tabsConfiguration: TabConfiguration[];
};

export default function CardLayout({ description, tabsConfiguration }: Props) {
  const isMobile = useMediaQuery("(max-width: 700px)");

  return (
    <>
      <Text>{description}</Text>
      <Group
        wrap={isMobile ? "wrap" : "nowrap"}
        w="100%"
        justify="space-between"
        align="flex-start"
      >
        <Stack w={isMobile ? "100%" : "50%"}>
          <Tabs
            defaultValue="characteristics"
            orientation="vertical"
            styles={{
              tab: { paddingLeft: 0, minWidth: 120, maxWidth: 120, width: 120 },
              tabLabel: { whiteSpace: "wrap" },
              list: { minWidth: 120, maxWidth: 120, width: 120 },
            }}
          >
            <Tabs.List>
              {tabsConfiguration.map((tab) => (
                <Tabs.Tab key={tab.key} value={tab.key}>
                  {tab.label}
                </Tabs.Tab>
              ))}
            </Tabs.List>

            <Box ml="md">
              {tabsConfiguration.map((tab) => (
                <Tabs.Panel key={tab.key} value={tab.key}>
                  <Stack>{tab.content}</Stack>
                </Tabs.Panel>
              ))}
            </Box>
          </Tabs>
        </Stack>

        <Box w={isMobile ? "100%" : "50%"}>
          <Image
            src="https://pocket-syndicated-images.s3.amazonaws.com/67a6a905cf34e365412125.jpg"
            w="100%"
            height="auto"
          />
        </Box>
      </Group>
    </>
  );
}
