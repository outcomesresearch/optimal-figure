import { Stack, Text } from "@mantine/core";
import TabLayout from "../layout/TabLayout";

export default function GroupedBoxPlotsTabs() {
  return (
    <TabLayout
      description="Grouped box plots, also known as side-by-side box plots, are graphical representations that display the distribution of a continuous variable across different levels of one or more categorical variables. Each group or category has its own box plot, placed side by side for easy comparison."
      tabsConfiguration={[
        {
          key: "characteristics",
          label: "Characteristics",
          content: <Text>Multiple box plots grouped by categories.</Text>,
        },
        {
          key: "purpose",
          label: "Purpose",
          content: <Text>Compare distribution across two or more groups.</Text>,
        },
        {
          key: "whenToUse",
          label: "When to Use",
          content: (
            <Stack>
              <Text>
                <strong>Comparing Groups:</strong> Ideal for comparing the
                distribution of a continuous variable across different groups or
                categories (e.g., comparing test scores across different schools
                or gender groups).
              </Text>
              <Text>
                <strong>Detecting Outliers:</strong> Useful for detecting
                outliers and understanding variability within each group.
              </Text>
              <Text>
                <strong>Exploring Data Distributions:</strong> Valuable for
                exploring the symmetry, skewness, and overall distribution shape
                within each group.
              </Text>
            </Stack>
          ),
        },
        {
          key: "variables",
          label: "Independent Variable",
          content: (
            <Text>
              <strong>Independent Variable:</strong> Categorical (Two-level,
              More than Two-level), Nominal (Two-level, More than Two-level),
              Dichotomous.
            </Text>
          ),
        },
        {
          key: "datasetSize",
          label: "Dataset Size",
          content: (
            <Text>
              Moderate (31 to 100 subjects), Large (more than 100 subjects).
            </Text>
          ),
        },
        {
          key: "strengths",
          label: "Strengths",
          content: (
            <Stack>
              <Text>
                <strong>Comparative Visualization:</strong> Facilitates the
                direct comparison of distributions across multiple groups or
                categories.
              </Text>
              <Text>
                <strong>Summary Statistics:</strong> Provides a visual summary
                of key statistics such as the median, quartiles, and potential
                outliers for each group.
              </Text>
              <Text>
                <strong>Outlier Detection:</strong> Easily identifies outliers
                within each group, offering insights into variability and
                anomalies.
              </Text>
              <Text>
                <strong>Symmetry and Skewness:</strong> Reflects the symmetry or
                skewness of the data distribution within each group.
              </Text>
              <Text>
                <strong>Handling Multiple Groups:</strong> Effective for
                visualizing data with multiple categorical groups, aiding in
                identifying differences and similarities.
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
                <strong>Interpretation Complexity:</strong> Can become cluttered
                and difficult to interpret when there are too many groups or
                categories.
              </Text>
              <Text>
                <strong>Limited Detail:</strong> Provides a summary of the data
                but lacks detailed information about individual data points.
              </Text>
              <Text>
                <strong>Overlapping Categories:</strong> Overlapping box plots
                can make it challenging to distinguish between categories,
                especially in dense data sets.
              </Text>
              <Text>
                <strong>Scale Sensitivity:</strong> Interpretation can be
                sensitive to the chosen scale, which might obscure small but
                significant differences.
              </Text>
            </Stack>
          ),
        },
      ]}
    />
  );
}
