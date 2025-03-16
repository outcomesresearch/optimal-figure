import { Stack, Text } from "@mantine/core";
import TabLayout from "../layout/TabLayout";

const Component = () => {
  return (
    <TabLayout
      description="A Faceted Bar Chart displays multiple bar charts for different subsets of data, making it effective for comparing distributions across more than two groups."
      tabsConfiguration={[
        {
          key: "characteristics",
          label: "Characteristics",
          content: (
            <Text>Multiple bar charts for different subsets of data.</Text>
          ),
        },
        {
          key: "purpose",
          label: "Purpose",
          content: (
            <Text>Compare distribution across more than two groups.</Text>
          ),
        },
        {
          key: "whenToUse",
          label: "When to Use",
          content: (
            <Stack>
              <Text>
                <strong>Independent Variable:</strong> Categorical (More than
                Two-level), Nominal (More than Two-level), Dichotomous.
              </Text>
              <Text>
                <strong>Dataset Size:</strong> Suitable for all sizes (Small,
                Moderate, Large).
              </Text>
              <Text>
                <strong>Example:</strong> Comparing infection rates across
                different age groups, genders, and hospital departments.
              </Text>
            </Stack>
          ),
        },
        {
          key: "strengths",
          label: "Strengths",
          content: (
            <Stack>
              <Text>
                <strong>Detailed Comparisons:</strong> Provides detailed
                comparisons across multiple subgroups.
              </Text>
              <Text>
                <strong>Interpretability:</strong> Easy to interpret within
                individual facets.
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
                <strong>Complexity:</strong> Can become complex with too many
                facets.
              </Text>
              <Text>
                <strong>Organization Challenge:</strong> Requires careful
                organization for clarity.
              </Text>
            </Stack>
          ),
        },
      ]}
    />
  );
};

export default Component;
