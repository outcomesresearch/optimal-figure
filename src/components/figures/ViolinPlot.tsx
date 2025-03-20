import { Text, Stack } from "@mantine/core";
import TabLayout from "../layout/TabLayout";

export default function ViolinPlotTabs() {
  return (
    <TabLayout
      description="Violin plots visually represent the distribution of data by combining box plots with kernel density plots. They are useful for comparing multiple groups and displaying the shape of the distribution. Violin plots can handle large datasets and show multimodal distributions. However, they may appear complex and require some familiarity to interpret."
      imageLink="https://www.medcalc.org/manual/svgimg/violinplot.svg"
      tabsConfiguration={[
        {
          key: "characteristics",
          label: "Characteristics",
          content: (
            <Text>
              Combines box plot and density plot to show the distribution of
              data.
            </Text>
          ),
        },
        {
          key: "purpose",
          label: "Purpose",
          content: (
            <Text>Compare distributions across groups and show density.</Text>
          ),
        },
        {
          key: "whenToUse",
          label: "When to Use",
          content: (
            <Text>
              Comparing multiple groups or when presenting multimodal
              distributions.
            </Text>
          ),
        },
        {
          key: "variables",
          label: "Variables",
          content: (
            <Text>
              Independent Variable: Categorical (Two-level, More than
              Two-level), Nominal (Two-level, More than Two-level), Dichotomous.
            </Text>
          ),
        },
        {
          key: "datasetSize",
          label: "Dataset Size",
          content: (
            <Text>
              Moderate (31 to 100 subjects), Large (more than 100 subjects).
            </Text>
          ),
        },
        {
          key: "strengths",
          label: "Strengths",
          content: (
            <Stack>
              <Text>
                <strong>Distribution visualization:</strong> Violin plots
                effectively display the distribution of data, providing insights
                into its shape, skewness, and multimodality. They can reveal
                patterns, gaps, and concentrations within the data that might
                not be apparent with other plot types.
              </Text>
              <Text>
                <strong>Comparison between groups:</strong> Violin plots allow
                for easy visual comparison of multiple groups or categories. By
                placing violins side by side, differences in the distributions
                between groups become apparent.
              </Text>
              <Text>
                <strong>Information density:</strong> Violin plots can handle
                large datasets containing numerous observations or categories,
                making them suitable for displaying a high volume of data in a
                concise visual format.
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
                <strong>Complexity for unfamiliar viewers:</strong> Violin plots
                can appear complex and may require some familiarity to interpret
                accurately. The inclusion of both the box plot component and the
                kernel density plot can make it more challenging to grasp for
                individuals unfamiliar with the plot type.
              </Text>
              <Text>
                <strong>Potential misinterpretation:</strong> Due to their
                visual nature, violin plots can potentially lead to
                misinterpretation by viewers if not clearly labeled, especially
                if they are not familiar with the underlying statistical
                concepts being depicted.
              </Text>
            </Stack>
          ),
        },
      ]}
    />
  );
}
