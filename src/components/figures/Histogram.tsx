import { Stack, Text } from "@mantine/core";
import TabLayout from "../layout/TabLayout";

const Component = () => {
  return (
    <TabLayout
      description="A histogram visualizes the distribution of data by grouping values into bins and displaying their frequency, making it effective for understanding the spread of data within a group."
      imageLink="https://www.cec.health.nsw.gov.au/__data/assets/image/0007/337453/histogram.png"
      tabsConfiguration={[
        {
          key: "characteristics",
          label: "Characteristics",
          content: (
            <Text>
              Represents data distribution using bars to show frequency within
              intervals (bins).
            </Text>
          ),
        },
        {
          key: "purpose",
          label: "Purpose",
          content: (
            <Text>Examine the spread of data within a single group.</Text>
          ),
        },
        {
          key: "whenToUse",
          label: "When to Use",
          content: (
            <Stack>
              <Text>
                <strong>Independent Variable:</strong> Continuous (Single-level,
                Two-level, More than Two-level).
              </Text>
              <Text>
                <strong>Dependent Variable:</strong> Dichotomous.
              </Text>
              <Text>
                <strong>Dataset Size:</strong> Suitable for Moderate to Large
                datasets.
              </Text>
              <Text>
                <strong>Example:</strong> Analyzing the distribution of drug
                dispensing turn around times within a hospital department.
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
                <strong>Distribution Insight:</strong> Clearly shows the spread
                and frequency of data within a group.
              </Text>
              <Text>
                <strong>Outlier Detection:</strong> Helps identify unusual
                values or patterns in the data.
              </Text>
              <Text>
                <strong>Summarization:</strong> Provides an easy-to-understand
                summary of large datasets.
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
                <strong>Bin Sensitivity:</strong> The appearance of the
                histogram depends on bin selection, which can impact
                interpretation.
              </Text>
              <Text>
                <strong>Loss of Detail:</strong> Can obscure individual data
                points by grouping them into bins.
              </Text>
              <Text>
                <strong>Limited for Small Datasets:</strong> May not be
                effective when the dataset is too small to form a meaningful
                distribution.
              </Text>
            </Stack>
          ),
        },
      ]}
    />
  );
};

export default Component;
