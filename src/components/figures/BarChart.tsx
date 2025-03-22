import { Stack, Text } from "@mantine/core";
import TabLayout from "../layout/TabLayout";

const Component = () => {
  return (
    <TabLayout
      description="The bar chart is a simple and easy-to-read visualization that compares categories, making it ideal for highlighting individual values and comparing distributions within a group."
      imageLink={`${import.meta.env.BASE_URL}images/barChart.png`}
      tabsConfiguration={[
        {
          key: "characteristics",
          label: "Characteristics",
          content: (
            <Text>
              Uses rectangular bars to represent and compare the values of
              different categories. The height or length of each bar corresponds
              to the value it represents.
            </Text>
          ),
        },
        {
          key: "purpose",
          label: "Purpose",
          content: (
            <Text>
              Highlight individual values and compare distributions within a
              single group.
            </Text>
          ),
        },
        {
          key: "whenToUse",
          label: "When to Use",
          content: (
            <Text>
              Bar charts provide a clear, straightforward way to
              compare discrete categories or to emphasize individual counts or
              values.
            </Text>
          ),
        },
        {
          key: "variables",
          label: "Independent Variable",
          content: (
            <Text>
              Categorical or nominal variables — including single-level,
              two-level, or multi-level — such as diagnosis type, department, or
              patient category.
            </Text>
          ),
        },
        {
          key: "datasetSize",
          label: "Dataset Size",
          content: (
            <Text>
              Suitable for small, moderate, and large datasets. However, with
              many categories, visual clutter can reduce interpretability.
            </Text>
          ),
        },
        {
          key: "strengths",
          label: "Strengths",
          content: (
            <Stack>
              <Text>
                <strong>Easy Interpretation:</strong> Straightforward to read
                and compare across categories.
              </Text>
              <Text>
                <strong>Versatility:</strong> Works well with a wide range of
                data sizes and types.
              </Text>
              <Text>
                <strong>Familiar Format:</strong> Universally recognized and
                commonly used in reporting.
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
                <strong>Visual Clutter:</strong> Becomes harder to read with too
                many categories or long labels.
              </Text>
              <Text>
                <strong>Not Ideal for Part-to-Whole:</strong> Does not naturally
                convey part-to-whole relationships (use pie or stacked bar for
                that).
              </Text>
            </Stack>
          ),
        },
      ]}
    />
  );
};

export default Component;
