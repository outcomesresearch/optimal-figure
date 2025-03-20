import { Stack, Text } from "@mantine/core";
import TabLayout from "../layout/TabLayout";

const Component = () => {
  return (
    <TabLayout
      description="A vertical bar graph (column chart) uses vertical bars to represent data values for different categories, making it an effective tool for comparing quantities across categories."
      imageLink="/images/verticalBarGraph.png"
      tabsConfiguration={[
        {
          key: "characteristics",
          label: "Characteristics",
          content: (
            <Text>
              Uses vertical bars to represent data values for different
              categories.
            </Text>
          ),
        },
        {
          key: "purpose",
          label: "Purpose",
          content: (
            <Text>To compare quantities across different categories.</Text>
          ),
        },
        {
          key: "whenToUse",
          label: "When to Use",
          content: (
            <Text>
              Best used for visualizing and comparing data values across
              multiple categories.
            </Text>
          ),
        },
        {
          key: "variables",
          label: "Variables",
          content: (
            <Text>
              <strong>Independent Variable:</strong> Categorical (Single-level,
              Two-level, More than Two-level), Nominal (Single-level, Two-level,
              More than Two-level), Dichotomous. <br />
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
                <strong>Clear Comparison:</strong> Provides a clear comparison
                of categories.
              </Text>
              <Text>
                <strong>Scalability:</strong> Handles large datasets well.
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
                <strong>Cluttered Display:</strong> Can become cluttered with
                too many categories.
              </Text>
              <Text>
                <strong>Less Effective for Small Data:</strong> Not ideal for
                small datasets.
              </Text>
            </Stack>
          ),
        },
      ]}
    />
  );
};

export default Component;
