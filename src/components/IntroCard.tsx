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
            Selecting the correct figure or diagram
          </Title>
        </Group>

        <Stack>
          <Text c="dark">
            Inferential statistics are essential in clinical and research
            studies for making conclusions about populations based on sample
            data. These methods allow researchers to assess whether observed
            effects are likely due to the intervention or if they occurred by
            chance. Selecting the correct statistical test is critical because
            it impacts the validity of the study’s conclusions and the ability
            to detect a true effect when it exists.
          </Text>
          <Text c="dark">
            There are numerous inferential statistical tests available, each
            suited to specific study designs, data types, and research
            questions. The choice of statistical method depends on factors such
            as the scale of the data (nominal, ordinal, continuous), the number
            of groups being compared, and whether the data meet certain
            assumptions (e.g., normality, homogeneity of variance). Choosing the
            wrong test can result in misleading conclusions or underpowered
            studies that fail to detect meaningful effects.
          </Text>
          <Text c="dark">
            This tool assists researchers in selecting the most appropriate
            inferential statistical test based on their data and research
            objectives, helping to ensure accurate and reliable results. Please
            note that this wizard only presents the most commonly used
            statistics in clinical research.
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
