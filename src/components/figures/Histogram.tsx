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
              Represents the distribution of continuous data using vertical
              bars, where each bar corresponds to the frequency of values within
              a defined range or bin.
            </Text>
          ),
        },
        {
          key: "purpose",
          label: "Purpose",
          content: (
            <Text>
              Examine the shape, center, and spread of data within a group, and
              identify patterns such as skewness, gaps, or peaks.
            </Text>
          ),
        },
        {
          key: "whenToUse",
          label: "When to Use",
          content: (
            <Text>
              Histograms show how data is distributed across a continuous range,
              particularly to observe clustering, spread, or potential outliers
              within a group.
            </Text>
          ),
        },
        {
          key: "variables",
          label: "Independent Variable",
          content: (
            <Text>
              Continuous variables, such as time, age, or measurement values.
              Histograms are designed to group continuous data into intervals
              for display.
            </Text>
          ),
        },
        {
          key: "datasetSize",
          label: "Dataset Size",
          content: (
            <Text>
              Most effective with moderate to large datasets. Too few data
              points can result in an uninformative or misleading distribution.
            </Text>
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
                values or gaps in the dataset.
              </Text>
              <Text>
                <strong>Summarization:</strong> Condenses large datasets into a
                format that is easy to interpret.
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
                <strong>Bin Sensitivity:</strong> Histogram appearance can vary
                depending on the number and width of bins, which may influence
                interpretation.
              </Text>
              <Text>
                <strong>Loss of Precision:</strong> Individual data values are
                not shown, as values are grouped into ranges.
              </Text>
              <Text>
                <strong>Limited Use for Small Samples:</strong> May not be
                meaningful or accurate with very small datasets.
              </Text>
            </Stack>
          ),
        },
      ]}
    />
  );
};

export default Component;
