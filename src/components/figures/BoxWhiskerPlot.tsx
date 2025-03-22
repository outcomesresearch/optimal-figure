import { Stack, Text } from "@mantine/core";
import TabLayout from "../layout/TabLayout";

const Component = () => {
  return (
    <TabLayout
      description="A box plot, also known as a box-and-whiskers plot, visualizes data distribution using a five-number summary, helping to compare distributions across groups."
      imageLink="https://archive.cdc.gov/www_cdc_gov/csels/dsepd/ss1978/lesson4/section4_html_files/Figure4.30.jpg"
      tabsConfiguration={[
        {
          key: "characteristics",
          label: "Characteristics",
          content: (
            <Text>
              A box plot displays the distribution of a dataset using a
              five-number summary: minimum, first quartile (Q1), median, third
              quartile (Q3), and maximum. Whiskers extend to show the range, and
              outliers are plotted as individual points.
            </Text>
          ),
        },
        {
          key: "purpose",
          label: "Purpose",
          content: (
            <Text>
              Compare distributions across two or more groups to evaluate
              differences in medians, spread, and presence of outliers.
            </Text>
          ),
        },
        {
          key: "whenToUse",
          label: "When to Use",
          content: (
            <Text>
              Box Plots compare the overall distribution of a numeric variable
              across different categories, especially when visualizing central
              tendency, variability, and outliers.
            </Text>
          ),
        },
        {
          key: "variables",
          label: "Independent Variable",
          content: (
            <Text>
              Typically categorical — including single-level, two-level, or
              multi-level groups — used to define the comparison categories for
              each box.
            </Text>
          ),
        },
        {
          key: "datasetSize",
          label: "Dataset Size",
          content: (
            <Text>
              Effective for small, moderate, or large datasets. For very small
              samples, interpretation may be less reliable due to limited
              summary data.
            </Text>
          ),
        },
        {
          key: "strengths",
          label: "Strengths",
          content: (
            <Stack>
              <Text>
                <strong>Visual Summary:</strong> Summarizes key statistics
                (median, quartiles, range, outliers) in a compact format.
              </Text>
              <Text>
                <strong>Group Comparison:</strong> Makes it easy to compare
                distributions across multiple groups.
              </Text>
              <Text>
                <strong>Outlier Detection:</strong> Clearly identifies extreme
                values in the data.
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
                <strong>Limited Detail:</strong> Does not show the full shape of
                the distribution (e.g., modality or skewness).
              </Text>
              <Text>
                <strong>Small Dataset Limitation:</strong> Can be misleading
                with very small datasets due to limited points to summarize.
              </Text>
              <Text>
                <strong>Interpretation Requires Context:</strong> Understanding
                quartile and outlier definitions is necessary to interpret
                accurately.
              </Text>
            </Stack>
          ),
        },
      ]}
    />
  );
};

export default Component;
