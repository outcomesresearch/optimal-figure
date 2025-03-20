import { Stack, Text } from "@mantine/core";
import TabLayout from "../layout/TabLayout";

const Component = () => {
  return (
    <TabLayout
      description="The bar chart is a simple and easy-to-read visualization that compares categories, making it ideal for highlighting individual values and comparing distributions within a group."
      imageLink="../../../images/barChart.png"
      tabsConfiguration={[
        {
          key: "characteristics",
          label: "Characteristics",
          content: <Text>Simple, easy to read, compares categories.</Text>,
        },
        {
          key: "purpose",
          label: "Purpose",
          content: (
            <Text>
              Highlight individual values and compare distribution within a
              group.
            </Text>
          ),
        },
        {
          key: "whenToUse",
          label: "When to Use",
          content: (
            <Stack>
              <Text>
                <strong>Independent Variable:</strong> Categorical
                (Single-level, Two-level, More than Two-level), Nominal
                (Single-level, Two-level, More than Two-level), Dichotomous.
              </Text>
              <Text>
                <strong>Dataset Size:</strong> Suitable for all sizes (Small,
                Moderate, Large).
              </Text>
              <Text>
                <strong>Example:</strong> Comparing the number of patients with
                different types of infections.
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
                compare different categories.
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
                <strong>Clutter:</strong> Can become cluttered with too many
                categories.
              </Text>
              <Text>
                <strong>Limited Part-to-Whole Representation:</strong> Does not
                show part-to-whole relationships effectively.
              </Text>
            </Stack>
          ),
        },
      ]}
    />
  );
};

export default Component;
