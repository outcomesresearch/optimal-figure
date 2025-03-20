import { Stack, Text } from "@mantine/core";
import TabLayout from "../layout/TabLayout";

const Component = () => {
  return (
    <TabLayout
      description="The cumulative meta-analysis plot is a technique that sequentially adds studies to show how the cumulative effect size estimate changes over time. It is useful for assessing the stability and trends of the overall effect size."
      imageLink={`${import.meta.env.BASE_URL}images/cumulativeMetaAnalysis.png`}
      tabsConfiguration={[
        {
          key: "characteristics",
          label: "Characteristics",
          content: (
            <Text>
              Sequentially adds studies to show how the cumulative effect size
              estimate changes over time.
            </Text>
          ),
        },
        {
          key: "purpose",
          label: "Purpose",
          content: (
            <Text>
              To assess the robustness of the overall effect size and to
              identify trends or shifts in the effect size as more data becomes
              available.
            </Text>
          ),
        },
        {
          key: "whenToUse",
          label: "When to Use",
          content: (
            <Text>
              Ideal for evaluating the stability of effect sizes over time and
              determining when additional studies stop influencing results.
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
          content: <Text>Medium to Large (more than 10 studies).</Text>,
        },
        {
          key: "strengths",
          label: "Strengths",
          content: (
            <Stack>
              <Text>
                <strong>Trend Analysis:</strong> Provides insights into the
                stability and trends of the effect size.
              </Text>
              <Text>
                <strong>Effect Size Stability:</strong> Useful for identifying
                the point at which additional studies no longer significantly
                change the effect size.
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
                <strong>Order Dependency:</strong> Can be influenced by the
                order in which studies are added.
              </Text>
              <Text>
                <strong>Interpretation Complexity:</strong> Interpretation may
                be complex without statistical expertise.
              </Text>
            </Stack>
          ),
        },
      ]}
    />
  );
};

export default Component;
