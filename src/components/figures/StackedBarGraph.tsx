import { Stack, Text } from "@mantine/core";
import TabLayout from "../layout/TabLayout";

const Component = () => {
  return (
    <TabLayout
      description="A stacked bar graph (or stacked column chart) uses stacked bars to show the composition of categories within a total. It is useful for comparing part-to-whole relationships across multiple categories."
      imageLink="https://archive.cdc.gov/www_cdc_gov/csels/dsepd/ss1978/lesson4/section4_html_files/Figure4.23.jpg"
      tabsConfiguration={[
        {
          key: "characteristics",
          label: "Characteristics",
          content: (
            <Text>
              Uses stacked bars to show the composition of categories within a
              total.
            </Text>
          ),
        },
        {
          key: "purpose",
          label: "Purpose",
          content: (
            <Text>
              To compare the composition of different categories and show
              part-to-whole relationships.
            </Text>
          ),
        },
        {
          key: "whenToUse",
          label: "When to Use",
          content: (
            <Text>
              Best for visualizing how different components contribute to a
              total across multiple categories.
            </Text>
          ),
        },
        {
          key: "variables",
          label: "Variables",
          content: (
            <Text>
              <strong>Independent Variable:</strong> Continuous (Single-level,
              Two-level, More than Two-level). <br />
              <strong>Dependent Variable:</strong> Categorical.
            </Text>
          ),
        },
        {
          key: "datasetSize",
          label: "Study Size",
          content: <Text>Medium to Large (more than 30 subjects).</Text>,
        },
        {
          key: "strengths",
          label: "Strengths",
          content: (
            <Stack>
              <Text>
                <strong>Composition Analysis:</strong> Shows composition within
                categories.
              </Text>
              <Text>
                <strong>Part-to-Whole Visualization:</strong> Effective for
                understanding part-to-whole relationships.
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
                interpret with many categories.
              </Text>
              <Text>
                <strong>Limited Effectiveness for Small Data:</strong> Less
                effective for small datasets.
              </Text>
            </Stack>
          ),
        },
      ]}
    />
  );
};

export default Component;
