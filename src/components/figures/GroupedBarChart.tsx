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
          content: (
            <Text>
              A grouped bar chart displays multiple bars side-by-side within
              each category to show comparisons across different groups.
            </Text>
          ),
        },
        {
          key: "purpose",
          label: "Purpose",
          content: (
            <Text>
              Used to compare the distribution of values across two or more
              groups, often across multiple subcategories.
            </Text>
          ),
        },
        {
          key: "whenToUse",
          label: "When to Use",
          content: (
            <Text>
              Use when comparing multiple subcategories within two or more main
              groups—for example, when analyzing how different treatments affect
              outcomes across patient demographics.
            </Text>
          ),
        },
        {
          key: "variables",
          label: "Independent Variable",
          content: (
            <Text>
              Typically categorical, nominal, or dichotomous variables — either
              two-level or multi-level — that define both the primary grouping
              and the categories being compared.
            </Text>
          ),
        },
        {
          key: "datasetSize",
          label: "Dataset Size",
          content: (
            <Text>
              Suitable for small, moderate, or large datasets. However, with
              larger datasets or many categories, the chart can become visually
              dense.
            </Text>
          ),
        },
        {
          key: "strengths",
          label: "Strengths",
          content: (
            <Stack>
              <Text>
                <strong>Comparative Clarity:</strong> Allows for direct
                comparison of multiple categories across groups.
              </Text>
              <Text>
                <strong>Versatility:</strong> Can be used with a wide range of
                data sizes and types.
              </Text>
              <Text>
                <strong>Familiar Format:</strong> Bar charts are intuitive and
                widely understood by most audiences.
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
                <strong>Cluttered Display:</strong> May become visually crowded
                or difficult to read with many groups or subcategories.
              </Text>
              <Text>
                <strong>Interpretation Complexity:</strong> Visual comparison
                between distant bars may be harder, especially if the chart is
                not sorted or aligned intuitively.
              </Text>
            </Stack>
          ),
        },
      ]}
    />
  );
};

export default Component;
