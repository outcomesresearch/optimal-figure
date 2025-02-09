import { Text, Stack } from "@mantine/core";
import TabLayout from "../layout/TabLayout";

export default function LineGraphTabs() {
  return (
    <TabLayout
      description="Line graphs display changes in variables over time or across different
        conditions. They are useful for representing trends, relationships, or
        comparisons of continuous data points. For example, they can be used to
        show changes in patient vital signs over time or response to different
        treatment regimens."
      tabsConfiguration={[
        {
          key: "characteristics",
          label: "Characteristics",
          content: (
            <Text>
              Plots data points connected by a line; shows trends over time.
            </Text>
          ),
        },
        {
          key: "purpose",
          label: "Purpose",
          content: (
            <Text>
              Show trends over time or demonstrate changes in data over space.
            </Text>
          ),
        },
        {
          key: "whenToUse",
          label: "When to Use",
          content: (
            <Stack>
              <Text>
                <strong>Time Series Data:</strong> Demonstrating changes in
                variables over time (e.g., patient vital signs).
              </Text>
              <Text>
                <strong>Continuous Variables:</strong> Illustrating
                relationships between continuous variables (e.g., response to
                treatment regimens).
              </Text>
            </Stack>
          ),
        },
        {
          key: "variables",
          label: "Independent Variable",
          content: (
            <Text>
              <strong>Independent Variable:</strong> Continuous (Single-level),
              Time-based.
            </Text>
          ),
        },
        {
          key: "datasetSize",
          label: "Dataset Size",
          content: <Text>Any size.</Text>,
        },
        {
          key: "strengths",
          label: "Strengths",
          content: (
            <Stack>
              <Text>
                <strong>Trend Visualization:</strong> Ideal for displaying
                trends over time or relationships between continuous variables.
              </Text>
              <Text>
                <strong>Pattern Identification:</strong> Effectively shows
                patterns and changes in data.
              </Text>
              <Text>
                <strong>Clarity:</strong> Provides a clear visual representation
                of data progression over time.
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
                <strong>Group Comparison:</strong> Can be less effective for
                comparing multiple groups or categories simultaneously.
              </Text>
              <Text>
                <strong>Overlapping Lines:</strong> Multiple lines can overlap,
                making it difficult to distinguish between them.
              </Text>
            </Stack>
          ),
        },
      ]}
    />
  );
}
