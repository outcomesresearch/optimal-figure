import { Text, Stack } from "@mantine/core";
import TabLayout from "../layout/TabLayout";

export default function SpaghettiPlotTabs() {
  return (
    <TabLayout
      description="A spaghetti plot is a data visualization technique used for displaying individual trajectories or trends over time, often in longitudinal or repeated measures data. Each individual's data is represented by a separate line or curve on the same graph, resulting in a 'tangle' of lines resembling spaghetti. Spaghetti plots allow for easy visual comparison of patterns and trends across subjects or groups, revealing variability and individual differences in the data. They are valuable in situations with multiple observations per individual, such as clinical studies."
      tabsConfiguration={[
        {
          key: "characteristics",
          label: "Characteristics",
          content: <Text>Plots individual trajectories over time.</Text>,
        },
        {
          key: "purpose",
          label: "Purpose",
          content: (
            <Text>Show changes in data over time for individual subjects.</Text>
          ),
        },
        {
          key: "whenToUse",
          label: "When to Use",
          content: (
            <Text>
              Spaghetti plots effectively display individual trajectories,
              identify patterns, and understand variability or trends in
              longitudinal or repeated measures data.
            </Text>
          ),
        },
        {
          key: "variables",
          label: "Independent & Dependent Variables",
          content: (
            <Stack>
              <Text>
                <strong>Independent Variable:</strong> Continuous (Single-level,
                Two-level).
              </Text>
            </Stack>
          ),
        },
        {
          key: "datasetSize",
          label: "Dataset Size",
          content: (
            <Text>
              Small (up to 30 subjects), Moderate (31 to 100 subjects).
            </Text>
          ),
        },
        {
          key: "strengths",
          label: "Strengths",
          content: (
            <Stack>
              <Text>
                <strong>Trajectories Comparison:</strong> Spaghetti plots
                facilitate comparing individual trajectories, identifying
                variations, patterns, and outliers in longitudinal studies or
                tracking progress.
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
                <strong>Cluttered Visualization:</strong> By plotting many
                trajectories together, spaghetti plots can appear cluttered,
                making individual pattern analysis challenging. They may require
                careful labeling or additional techniques for readability.
              </Text>
            </Stack>
          ),
        },
      ]}
    />
  );
}
