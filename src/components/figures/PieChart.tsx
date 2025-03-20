import { Stack, Text } from "@mantine/core";
import TabLayout from "../layout/TabLayout";

const Component = () => {
  return (
    <TabLayout
      description="A pie chart visually represents parts of a whole, making it easy to interpret proportions within a group."
      imageLink="../../../images/pieChart.png"
      tabsConfiguration={[
        {
          key: "characteristics",
          label: "Characteristics",
          content: <Text>Shows parts of a whole, easy to read.</Text>,
        },
        {
          key: "purpose",
          label: "Purpose",
          content: <Text>Compare distribution within a group.</Text>,
        },
        {
          key: "whenToUse",
          label: "When to Use",
          content: (
            <Stack>
              <Text>
                <strong>Independent Variable:</strong> Categorical
                (Single-level), Nominal (Single-level), Dichotomous.
              </Text>
              <Text>
                <strong>Dataset Size:</strong> Best for Small datasets due to
                simplicity.
              </Text>
              <Text>
                <strong>Example:</strong> Proportion of different infection
                types in a patient population.
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
                <strong>Easy Interpretation:</strong> Easy to interpret and
                visually appealing.
              </Text>
              <Text>
                <strong>Proportional Clarity:</strong> Best for showing
                proportions and parts of a whole.
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
                <strong>Dataset Limitations:</strong> Not suitable for large
                datasets due to simplicity.
              </Text>
              <Text>
                <strong>Comparison Difficulty:</strong> Harder to compare
                between different groups with too many slices.
              </Text>
            </Stack>
          ),
        },
      ]}
    />
  );
};

export default Component;
