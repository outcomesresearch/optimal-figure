import { Stack, Text } from "@mantine/core";
import TabLayout from "../layout/TabLayout";

const Component = () => {
  return (
    <TabLayout
      description="A L’Abbe plot is a graphical method used in meta-analysis to compare the event rates between two groups. It helps in identifying patterns and potential outliers in the data."
      imageLink={`${import.meta.env.BASE_URL}images/labbePlot.png`}
      tabsConfiguration={[
        {
          key: "characteristics",
          label: "Characteristics",
          content: (
            <Text>
              Scatter plot comparing event rates in the experimental group
              against the control group.
            </Text>
          ),
        },
        {
          key: "purpose",
          label: "Purpose",
          content: (
            <Text>
              To visualize the relationship between the event rates in two
              groups and assess heterogeneity in meta-analysis studies.
            </Text>
          ),
        },
        {
          key: "whenToUse",
          label: "When to Use",
          content: (
            <Text>
              Suitable for comparing event rates in meta-analysis studies to
              detect patterns and outliers.
            </Text>
          ),
        },
        {
          key: "variables",
          label: "Variables",
          content: (
            <Text>
              <strong>Independent Variable:</strong> Dichotomous. <br />
              <strong>Dependent Variable:</strong> Continuous.
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
                <strong>Comparative Visualization:</strong> Effective in
                visualizing differences between groups.
              </Text>
              <Text>
                <strong>Heterogeneity Detection:</strong> Useful for detecting
                heterogeneity and outliers in meta-analysis.
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
                <strong>Sample Size Sensitivity:</strong> May be less
                informative with small sample sizes.
              </Text>
              <Text>
                <strong>Interpretation Difficulty:</strong> Interpretation can
                be challenging without statistical expertise.
              </Text>
            </Stack>
          ),
        },
      ]}
    />
  );
};

export default Component;
