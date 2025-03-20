import { Stack, Text } from "@mantine/core";
import TabLayout from "../layout/TabLayout";

const Component = () => {
  return (
    <TabLayout
      description="The funnel plot is used in meta-analysis to detect publication bias by visualizing the relationship between study size and effect size. It helps in identifying asymmetry that may indicate bias."
      imageLink="https://static.cambridge.org/binary/version/id/urn:cambridge.org:id:binary:20190607131712065-0265:S0899823X19001235:S0899823X19001235_fig3g.jpeg?pub-status=live"
      tabsConfiguration={[
        {
          key: "characteristics",
          label: "Characteristics",
          content: (
            <Text>
              Scatter plot showing the relationship between study size and
              effect size, resembling an inverted funnel.
            </Text>
          ),
        },
        {
          key: "purpose",
          label: "Purpose",
          content: (
            <Text>
              To assess publication bias in meta-analyses by visualizing the
              distribution of study results.
            </Text>
          ),
        },
        {
          key: "whenToUse",
          label: "When to Use",
          content: (
            <Text>
              Ideal for evaluating the presence of publication bias in
              meta-analyses.
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
                <strong>Bias Detection:</strong> Effective in detecting
                publication bias.
              </Text>
              <Text>
                <strong>Visual Insight:</strong> Provides a visual
                representation of study distribution and potential asymmetry.
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
                <strong>Subjectivity:</strong> Interpretation can be subjective
                and influenced by the number of studies.
              </Text>
              <Text>
                <strong>Limited Effectiveness:</strong> Less effective with a
                small number of studies.
              </Text>
            </Stack>
          ),
        },
      ]}
    />
  );
};

export default Component;
