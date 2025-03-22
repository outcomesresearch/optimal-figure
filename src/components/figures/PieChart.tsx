import { Stack, Text } from "@mantine/core";
import TabLayout from "../layout/TabLayout";

const Component = () => {
  return (
    <TabLayout
      description="A pie chart visually represents parts of a whole, making it easy to interpret proportions within a group."
      imageLink={`${import.meta.env.BASE_URL}images/pieChart.png`}
      tabsConfiguration={[
        {
          key: "characteristics",
          label: "Characteristics",
          content: (
            <Text>Shows parts of a whole using slices of a circle.</Text>
          ),
        },
        {
          key: "purpose",
          label: "Purpose",
          content: <Text>Compare distribution within a single group.</Text>,
        },
        {
          key: "whenToUse",
          label: "When to Use",
          content: (
            <Text>
              Pie charts should be used to show how a whole is divided into
              categories, and when the comparison between those proportions is
              simple and clear.
            </Text>
          ),
        },
        {
          key: "variables",
          label: "Independent Variable",
          content: (
            <Text>
              Categorical (single-level), nominal (single-level), or dichotomous
              variables used to define segments of the pie.
            </Text>
          ),
        },
        {
          key: "datasetSize",
          label: "Dataset Size",
          content: (
            <Text>
              Best for small datasets with a limited number of categories;
              becomes harder to read with too many segments.
            </Text>
          ),
        },
        {
          key: "strengths",
          label: "Strengths",
          content: (
            <Stack>
              <Text>
                <strong>Easy Interpretation:</strong> Intuitive and visually
                engaging.
              </Text>
              <Text>
                <strong>Proportional Clarity:</strong> Clearly shows proportions
                of a whole.
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
                <strong>Dataset Limitations:</strong> Not ideal for large
                numbers of categories.
              </Text>
              <Text>
                <strong>Comparison Difficulty:</strong> Difficult to compare
                slices precisely, especially with similar sizes.
              </Text>
            </Stack>
          ),
        },
      ]}
    />
  );
};

export default Component;
