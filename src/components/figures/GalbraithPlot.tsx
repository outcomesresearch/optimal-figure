import { Stack, Text } from "@mantine/core";
import TabLayout from "../layout/TabLayout";

const Component = () => {
  return (
    <TabLayout
      description="The Galbraith plot, also known as the radial plot, is a tool used in meta-analysis to assess the consistency of study results. It is particularly useful for identifying outliers and sources of heterogeneity."
      imageLink="https://www.metafor-project.org/lib/exe/fetch.php/plots:radial_plot.png"
      tabsConfiguration={[
        {
          key: "characteristics",
          label: "Characteristics",
          content: (
            <Text>
              Scatter plot displaying standardized effect sizes (z-scores)
              against the inverse of their standard errors.
            </Text>
          ),
        },
        {
          key: "purpose",
          label: "Purpose",
          content: (
            <Text>
              To assess heterogeneity among study results and detect potential
              outliers.
            </Text>
          ),
        },
        {
          key: "whenToUse",
          label: "When to Use",
          content: (
            <Text>
              Useful for evaluating the consistency of study results and
              identifying heterogeneity in meta-analysis.
            </Text>
          ),
        },
        {
          key: "variables",
          label: "Variables",
          content: (
            <Text>
              <strong>Independent Variable:</strong> Continuous. <br />
              <strong>Dependent Variable:</strong> Continuous.
            </Text>
          ),
        },
        {
          key: "datasetSize",
          label: "Dataset Size",
          content: <Text>Medium to Large.</Text>,
        },
        {
          key: "strengths",
          label: "Strengths",
          content: (
            <Stack>
              <Text>
                <strong>Outlier Detection:</strong> Effective in identifying
                outliers and sources of heterogeneity.
              </Text>
              <Text>
                <strong>Visual Clarity:</strong> Provides a clear visual
                representation of study consistency.
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
                <strong>Data Requirement:</strong> Requires a moderate to large
                dataset for meaningful interpretation.
              </Text>
              <Text>
                <strong>Complexity:</strong> Can be complex to interpret without
                statistical knowledge.
              </Text>
            </Stack>
          ),
        },
      ]}
    />
  );
};

export default Component;
