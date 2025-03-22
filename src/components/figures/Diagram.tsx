import { Stack, Text } from "@mantine/core";
import TabLayout from "../layout/TabLayout";

const Component = () => {
  return (
    <TabLayout
      description="The diagram is a visualization tool that illustrates concepts or theories. It is useful for explaining abstract ideas and relationships."
      tabsConfiguration={[
        {
          key: "characteristics",
          label: "Characteristics",
          content: (
            <Text>
              Diagrams visually represent concepts, processes, or relationships,
              helping to simplify abstract or theoretical ideas and make them
              easier to understand.
            </Text>
          ),
        },
        {
          key: "purpose",
          label: "Purpose",
          content: (
            <Text>
              Illustrate a concept, theory, or process that may not be
              data-driven but still requires visual explanation.
            </Text>
          ),
        },
        {
          key: "whenToUse",
          label: "When to Use",
          content: (
            <Text>
              Use diagrams when your goal is to communicate a framework, causal
              relationship, mechanism, or process that supports or
              contextualizes the rest of your findings.
            </Text>
          ),
        },
        {
          key: "variables",
          label: "Independent Variable",
          content: (
            <Text>
              Diagrams are highly flexible — they can incorporate categorical,
              continuous, nominal, or theoretical constructs depending on the
              concept being illustrated.
            </Text>
          ),
        },
        {
          key: "datasetSize",
          label: "Dataset Size",
          content: (
            <Text>
              Suitable for all dataset sizes — often used independently of
              sample size, especially when no raw data is involved.
            </Text>
          ),
        },
        {
          key: "strengths",
          label: "Strengths",
          content: (
            <Stack>
              <Text>
                <strong>Conceptual Clarity:</strong> Helps explain mechanisms,
                frameworks, and relationships visually.
              </Text>
              <Text>
                <strong>Customizability:</strong> Can be adapted to a wide
                variety of topics and audiences.
              </Text>
              <Text>
                <strong>Non-Data-Driven:</strong> Doesn’t require quantitative
                data to be effective.
              </Text>
            </Stack>
          ),
        },
        {
          key: "weaknesses",
          label: "Weaknesses",
          content: (
            <Stack>
              <Text>
                <strong>Limited for Quantitative Interpretation:</strong> Not
                suitable for showing numeric trends or comparisons.
              </Text>
              <Text>
                <strong>Subjectivity:</strong> Design choices can affect clarity
                and may introduce bias or misinterpretation.
              </Text>
              <Text>
                <strong>Not Standardized:</strong> Interpretation may vary
                across audiences without clear labeling or guidance.
              </Text>
            </Stack>
          ),
        },
      ]}
    />
  );
};

export default Component;
