import { Stack, Text } from "@mantine/core";
import TabLayout from "../layout/TabLayout";

const Component = () => {
  return (
    <TabLayout
      description="The grouped bar chart is a visualization that compares multiple categories within groups. It is useful for comparing distributions across two groups."
      imageLink={`${import.meta.env.BASE_URL}images/groupedBarChart.png`}
      tabsConfiguration={[
        {
          key: "characteristics",
          label: "Characteristics",
          content: <Text>Compares multiple categories within groups.</Text>,
        },
        {
          key: "purpose",
          label: "Purpose",
          content: <Text>Compare distribution across two groups.</Text>,
        },
        {
          key: "whenToUse",
          label: "When to Use",
          content: (
            <Stack>
              <Text>
                <strong>Independent Variable:</strong> Categorical (Two-level,
                More than Two-level), Nominal (Two-level, More than Two-level),
                Dichotomous.
              </Text>
              <Text>
                <strong>Dataset Size:</strong> Suitable for all sizes (Small,
                Moderate, Large).
              </Text>
              <Text>
                <strong>Example:</strong> Comparing infection rates between male
                and female patients across different age groups.
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
                <strong>Comparative Clarity:</strong> Easy to compare multiple
                groups.
              </Text>
              <Text>
                <strong>Versatility:</strong> Suitable for various dataset
                sizes.
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
                <strong>Cluttered Display:</strong> Can become cluttered with
                too many categories.
              </Text>
              <Text>
                <strong>Interpretation Complexity:</strong> Harder to interpret
                relationships between groups.
              </Text>
            </Stack>
          ),
        },
      ]}
    />
  );
};

export default Component;
