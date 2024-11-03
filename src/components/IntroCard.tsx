import { Text, Stack, Title, Button, Card, Group } from "@mantine/core";

const IntroCard = () => {
  return (
    <Card
      shadow="sm"
      padding="lg"
      my={{ base: "lg", md: "48px" }}
      radius="md"
      withBorder
    >
      <Stack className="stack">
        <Group justify="space-between">
          <Title order={3} fw={400}>
            Selecting the Correct Effect Size Measurement{" "}
          </Title>
        </Group>

        <Stack>
          <Text c="dark">
            Effect size is a critical measurement used in clinical studies to
            evaluate the impact of an intervention on the outcome of interest.
            It quantifies the magnitude of the treatment effect, allowing
            researchers to determine whether the intervention is clinically
            significant or not. Choosing the correct effect size measurement is
            crucial as it directly impacts the power of the study, which in turn
            affects the study's ability to detect a true treatment effect.
          </Text>
          <Text c="dark">
            There are several effect size measurements available, each with its
            own strengths and weaknesses. Selecting the appropriate effect size
            measurement requires careful consideration of the study design, the
            research question, and the data being collected. The choice of
            effect size can have a significant impact on the study's
            interpretation, and incorrect selection can lead to underpowered
            studies or erroneous conclusions.
          </Text>
          <Text c="dark">
            There are several effect size measurements available, each with its
            own strengths and weaknesses. Selecting the appropriate effect size
            measurement requires careful consideration of the study design, the
            research question, and the data being collected. The choice of
            effect size can have a significant impact on the study's
            interpretation, and incorrect selection can lead to underpowered
            studies or erroneous conclusions. This wizard-based web tool helps
            investigators select the appropriate effect size measurement for
            planning and reporting the results of their research.
          </Text>
        </Stack>
        <Button variant="light" color="gray" w="max-content" ml="auto">
          Begin
        </Button>
      </Stack>
    </Card>
  );
};

export default IntroCard;
