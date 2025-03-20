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
              Visually represents concepts, processes, or relationships, making
              abstract ideas easier to understand and communicate.
            </Text>
          ),
        },
        {
          key: "purpose",
          label: "Purpose",
          content: <Text>Illustrate a concept or theory.</Text>,
        },
        {
          key: "whenToUse",
          label: "When to Use",
          content: (
            <Stack>
              <Text>
                <strong>Independent Variable:</strong> Any type.
              </Text>
              <Text>
                <strong>Dataset Size:</strong> Suitable for all sizes.
              </Text>
              <Text>
                <strong>Example:</strong> Diagram showing the infection
                transmission pathway.
              </Text>
            </Stack>
          ),
        },
        {
          key: "strengths",
          label: "Strengths",
          content: (
            <Stack>
              <Text>
                <strong>Theoretical Representation:</strong> Ideal for
                theoretical and conceptual visualization.
              </Text>
              <Text>
                <strong>Customization:</strong> Customizable to suit specific
                needs and concepts.
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
                <strong>Limited for Quantitative Data:</strong> Less effective
                for quantitative data representation.
              </Text>
              <Text>
                <strong>Design Dependency:</strong> Can be subjective and
                dependent on design quality.
              </Text>
            </Stack>
          ),
        },
      ]}
    />
  );
};

export default Component;
