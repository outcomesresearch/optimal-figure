import { Text, Stack } from "@mantine/core";
import TabLayout from "../layout/TabLayout";

export default function DotPlotTabs() {
  return (
    <TabLayout
      description="A dot plot graph uses dots or markers to represent data along an axis.
        It shows the frequency or distribution of values and is effective at
        highlighting clusters or gaps in the data. Dot plots present data in a
        simple, one-dimensional format with a single variable along an axis."
      imageLink="../../../images/dotPlot.png"
      tabsConfiguration={[
        {
          key: "characteristics",
          label: "Characteristics",
          content: (
            <Text>Displays each data point as a dot on a single axis.</Text>
          ),
        },
        {
          key: "purpose",
          label: "Purpose",
          content: (
            <Text>
              Highlight individual values and identify patterns/outliers.
            </Text>
          ),
        },
        {
          key: "whenToUse",
          label: "When to Use",
          content: (
            <Text>
              Dot plots are appropriate for illustrating the distribution of a
              single variable, comparing frequency or spread of values, and
              identifying patterns or variations in data.
            </Text>
          ),
        },
        {
          key: "variables",
          label: "Independent & Dependent Variables",
          content: (
            <Stack>
              <Text>
                <strong>Independent Variable:</strong> Categorical
                (Single-level, Two-level, More than Two-level), Dichotomous.
              </Text>
              <Text>
                <strong>Dependent Variable:</strong> Continuous.
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
            <Text>
              Presents distribution, spread, or frequency in an intuitive manner
              and highlights clusters, gaps, and outliers.
            </Text>
          ),
        },
        {
          key: "weaknesses",
          label: "Weaknesses",
          content: (
            <Text>
              Potential clutter with many data points or variables and reliance
              on accurate perception of dot position and density.
            </Text>
          ),
        },
      ]}
    />
  );
}
