import { Stack, Text } from "@mantine/core";
import TabLayout from "../layout/TabLayout";

const Component = () => {
  return (
    <TabLayout
      description="The forest plot is a key tool in meta-analysis, providing a visual summary of the results from multiple studies. It helps in comparing individual study estimates and the overall pooled estimate."
      imageLink="https://www.cdc.gov/pcd/issues/2022../../../images/21_0228_02.gif?_=26526"
      tabsConfiguration={[
        {
          key: "characteristics",
          label: "Characteristics",
          content: (
            <Text>
              Displays estimated results (effect sizes) from multiple studies
              with confidence intervals.
            </Text>
          ),
        },
        {
          key: "purpose",
          label: "Purpose",
          content: (
            <Text>
              To visually summarize the results of multiple studies in a
              meta-analysis, showing both the individual study estimates and the
              overall pooled estimate.
            </Text>
          ),
        },
        {
          key: "whenToUse",
          label: "When to Use",
          content: (
            <Text>
              Ideal for meta-analyses when multiple study estimates need to be
              synthesized.
            </Text>
          ),
        },
        {
          key: "variables",
          label: "Variables",
          content: (
            <Text>
              <strong>Independent Variable:</strong> Categorical, Continuous,
              Nominal, Dichotomous. <br />
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
                <strong>Clear Comparison:</strong> Provides a clear visual
                comparison of individual and pooled study results.
              </Text>
              <Text>
                <strong>Consistency Check:</strong> Useful for identifying the
                consistency of study findings.
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
                <strong>Interpretation Complexity:</strong> Can be difficult to
                interpret with a large number of studies.
              </Text>
              <Text>
                <strong>Expertise Required:</strong> Requires statistical
                expertise to understand confidence intervals and pooled
                estimates.
              </Text>
            </Stack>
          ),
        },
      ]}
    />
  );
};

export default Component;
