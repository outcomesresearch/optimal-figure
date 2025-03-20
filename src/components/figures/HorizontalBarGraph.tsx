import { Stack, Text } from "@mantine/core";
import TabLayout from "../layout/TabLayout";

const Component = () => {
  return (
    <TabLayout
      description="The horizontal bar graph (or row chart) uses horizontal bars to represent data values for different categories. It is particularly useful when category names are long and need to be displayed clearly."
      tabsConfiguration={[
        {
          key: "characteristics",
          label: "Characteristics",
          content: (
            <Text>
              Uses horizontal bars to represent data values for different
              categories.
            </Text>
          ),
        },
        {
          key: "purpose",
          label: "Purpose",
          content: (
            <Text>
              To compare quantities across different categories, especially when
              category names are long.
            </Text>
          ),
        },
        {
          key: "whenToUse",
          label: "When to Use",
          content: (
            <Text>
              Best used for visualizing and comparing data values across
              multiple categories with long names.
            </Text>
          ),
        },
        {
          key: "variables",
          label: "Variables",
          content: (
            <Text>
              <strong>Independent Variable:</strong> Continuous (Single-level,
              Two-level, More than Two-level). <br />
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
                <strong>Handles Long Labels:</strong> Ideal for displaying long
                category names without truncation.
              </Text>
              <Text>
                <strong>Clear Comparison:</strong> Provides a clear comparison
                of different categories.
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
                <strong>Limited Effectiveness:</strong> Less effective for very
                small datasets.
              </Text>
            </Stack>
          ),
        },
      ]}
      imageLink="https://archive.cdc.gov/www_cdc_gov/csels/dsepd/ss1978/lesson4/section4_html_files/figure4.20.jpg"
    />
  );
};

export default Component;
