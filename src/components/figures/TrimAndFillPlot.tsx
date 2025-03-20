import { Stack, Text } from "@mantine/core";
import TabLayout from "../layout/TabLayout";

const Component = () => {
  return (
    <TabLayout
      description="A trim-and-fill plot is a method used in meta-analysis to adjust for publication bias. It helps create a more accurate and symmetrical funnel plot by accounting for missing studies."
      imageLink={`${import.meta.env.BASE_URL}images/trimAndFill.png`}
      tabsConfiguration={[
        {
          key: "characteristics",
          label: "Characteristics",
          content: (
            <Text>
              Adjusts for publication bias by trimming and filling studies to
              create a symmetrical funnel plot.
            </Text>
          ),
        },
        {
          key: "purpose",
          label: "Purpose",
          content: (
            <Text>
              To identify and correct for asymmetry in funnel plots caused by
              publication bias.
            </Text>
          ),
        },
        {
          key: "whenToUse",
          label: "When to Use",
          content: (
            <Text>
              Suitable for meta-analyses where publication bias is a concern and
              needs to be adjusted.
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
                <strong>Bias Correction:</strong> Helps correct for publication
                bias, providing a more accurate meta-analysis.
              </Text>
              <Text>
                <strong>Improved Reliability:</strong> Enhances the reliability
                of the funnel plot.
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
                <strong>Incomplete Bias Adjustment:</strong> May not fully
                account for all sources of bias.
              </Text>
              <Text>
                <strong>Study Requirement:</strong> Requires a sufficient number
                of studies to be effective.
              </Text>
            </Stack>
          ),
        },
      ]}
    />
  );
};

export default Component;
