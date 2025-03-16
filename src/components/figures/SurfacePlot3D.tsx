import { Stack, Text } from "@mantine/core";
import TabLayout from "../layout/TabLayout";

const Component = () => {
  return (
    <TabLayout
      description="A 3D Surface Plot visualizes relationships between three continuous variables, providing a detailed three-dimensional representation of data."
      tabsConfiguration={[
        {
          key: "characteristics",
          label: "Characteristics",
          content: (
            <Text>
              Visualizes relationships between three continuous variables.
            </Text>
          ),
        },
        {
          key: "purpose",
          label: "Purpose",
          content: <Text>Show relationship between variables.</Text>,
        },
        {
          key: "whenToUse",
          label: "When to Use",
          content: (
            <Stack>
              <Text>
                <strong>Independent Variable:</strong> Continuous (Single-level,
                Two-level, More than Two-level).
              </Text>
              <Text>
                <strong>Dataset Size:</strong> Suitable for Moderate to Large
                datasets.
              </Text>
              <Text>
                <strong>Example:</strong> Relationship between age, BMI, and
                cholesterol levels.
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
                <strong>Detailed Visualization:</strong> Provides a detailed
                three-dimensional view of data.
              </Text>
              <Text>
                <strong>Complex Relationship Analysis:</strong> Effective for
                visualizing complex relationships.
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
                <strong>Interpretation Difficulty:</strong> Can be difficult to
                interpret without interactive tools.
              </Text>
              <Text>
                <strong>Obscured Details:</strong> Overlapping surfaces may
                obscure details.
              </Text>
            </Stack>
          ),
        },
      ]}
    />
  );
};

export default Component;
