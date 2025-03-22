import { Stack, Text } from "@mantine/core";
import TabLayout from "../layout/TabLayout";

const Component = () => {
  return (
    <TabLayout
      description="An area chart is used to represent trends over time or comparisons between categories by filling the space below a line graph, emphasizing volume or magnitude."
      tabsConfiguration={[
        {
          key: "characteristics",
          label: "Characteristics",
          content: (
            <Text>
              Displays quantitative data using filled areas under a line to
              represent volume. Commonly used to show how values change over
              time or across categories.
            </Text>
          ),
        },
        {
          key: "purpose",
          label: "Purpose",
          content: (
            <Text>
              Show trends over time or compare cumulative values across groups
              or categories.
            </Text>
          ),
        },
        {
          key: "whenToUse",
          label: "When to Use",
          content: (
            <Text>
              Use an area chart when your goal is to highlight how quantities
              evolve over time or to emphasize the magnitude of differences
              between stacked groups or categories.
            </Text>
          ),
        },
        {
          key: "variables",
          label: "Independent Variable",
          content: (
            <Text>
              Continuous variables, typically representing time or ordered
              categories. Works best when data points are sequential.
            </Text>
          ),
        },
        {
          key: "datasetSize",
          label: "Dataset Size",
          content: (
            <Text>
              Area charts are suitable for moderate to large datasets. Too few
              data points can result in oversimplified or misleading shapes.
            </Text>
          ),
        },
        {
          key: "strengths",
          label: "Strengths",
          content: (
            <Stack>
              <Text>
                <strong>Trend Analysis:</strong> Excellent for visualizing how
                values change over time.
              </Text>
              <Text>
                <strong>Comparative Volume:</strong> Useful for showing the
                relative size of categories or stacked values.
              </Text>
              <Text>
                <strong>Visual Emphasis:</strong> Filling the area enhances
                perception of magnitude and growth.
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
                <strong>Overlapping Areas:</strong> Can be difficult to
                interpret when multiple series are stacked or overlap.
              </Text>
              <Text>
                <strong>Less Precise:</strong> Not ideal for reading exact
                values, especially compared to line or bar charts.
              </Text>
              <Text>
                <strong>Visual Distortion:</strong> Differences in area size may
                be visually exaggerated if axes are not well-scaled.
              </Text>
            </Stack>
          ),
        },
      ]}
    />
  );
};

export default Component;
