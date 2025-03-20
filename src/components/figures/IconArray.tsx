import { Stack, Text } from "@mantine/core";
import TabLayout from "../layout/TabLayout";

const Component = () => {
  return (
    <TabLayout
      description="An icon array uses icons to represent units or proportions, grouped and colored to show categories or outcomes. It provides a simple and intuitive way to visualize part-to-whole relationships."
      imageLink="https://www.cdc.gov/ncird/whats-new../../../images/identical-population-level-vax-rate.png"
      tabsConfiguration={[
        {
          key: "characteristics",
          label: "Characteristics",
          content: (
            <Text>
              Uses icons to represent units or proportions, grouped and colored
              to show categories or outcomes.
            </Text>
          ),
        },
        {
          key: "purpose",
          label: "Purpose",
          content: (
            <Text>
              To visually represent proportions and part-to-whole relationships
              in a straightforward and intuitive manner.
            </Text>
          ),
        },
        {
          key: "whenToUse",
          label: "When to Use",
          content: (
            <Text>
              Suitable for visually representing categorical proportions in an
              easy-to-interpret format.
            </Text>
          ),
        },
        {
          key: "variables",
          label: "Variables",
          content: (
            <Text>
              <strong>Independent Variable:</strong> Categorical (Single-level,
              Two-level, More than Two-level), Nominal (Single-level, Two-level,
              More than Two-level), Dichotomous. <br />
              <strong>Dependent Variable:</strong> Categorical.
            </Text>
          ),
        },
        {
          key: "datasetSize",
          label: "Study Size",
          content: <Text>Small (up to 30 subjects).</Text>,
        },
        {
          key: "strengths",
          label: "Strengths",
          content: (
            <Stack>
              <Text>
                <strong>Intuitive:</strong> Easy to understand and interpret.
              </Text>
              <Text>
                <strong>Visual Appeal:</strong> Engaging and visually appealing.
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
                <strong>Limited Precision:</strong> May not be precise for
                detailed quantitative analysis.
              </Text>
              <Text>
                <strong>Clutter:</strong> Can become cluttered with many
                categories.
              </Text>
              <Text>
                <strong>Space Consumption:</strong> Requires more space compared
                to other visualizations.
              </Text>
            </Stack>
          ),
        },
      ]}
    />
  );
};

export default Component;
