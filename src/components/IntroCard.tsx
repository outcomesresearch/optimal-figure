import { Text, Stack, Title, Button, Group, Card } from "@mantine/core";
import { NavLink } from "react-router";

const IntroCard = () => {
  return (
    <Card
      shadow="sm"
      padding="lg"
      my={{ base: "lg", md: "48px" }}
      radius="md"
      withBorder
    >
      <Stack>
        <Group justify="space-between">
          <Title order={3} fw={400}>
            Finding the best type of figure or diagram for showcasing research
          </Title>
        </Group>
        <Stack>
          <Text c="dark">
            Visualizing data effectively is essential for understanding
            patterns, relationships, and trends in research findings. Choosing
            the appropriate figure or diagram ensures that key insights are
            communicated clearly and accurately, making it easier for audiences
            to interpret the results.
          </Text>
          <Text c="dark">
            This tool is designed to help researchers and analysts determine the
            most suitable visualization based on their data type, study
            objective, and the relationships they wish to illustrate. By guiding
            users through a structured decision-making process, it simplifies
            the selection of figures such as bar charts, scatter plots, heat
            maps, and more.
          </Text>
          <Text c="dark">
            Whether highlighting distributions, comparing groups, or identifying
            trends, selecting the right visualization enhances clarity, supports
            accurate interpretation, and strengthens the overall impact of the
            analysis.
          </Text>
        </Stack>
        <NavLink to="/decision-tree" style={{ marginLeft: "auto" }}>
          <Button variant="subtle" color="gray" w="max-content" tt="uppercase">
            Begin
          </Button>
        </NavLink>
      </Stack>
    </Card>
  );
};

export default IntroCard;
