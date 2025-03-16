import { Stack, Text } from "@mantine/core";
import TabLayout from "../layout/TabLayout";

const Component = () => {
  return (
    <TabLayout
      description="An Area Chart is used to represent trends over time or comparisons between categories by filling the space below a line graph, emphasizing volume or magnitude."
      tabsConfiguration={[
        {
          key: "characteristics",
          label: "Characteristics",
          content: (
            <Text>
              Displays trends over time or comparisons using filled areas under
              a line.
            </Text>
          ),
        },
        {
          key: "purpose",
          label: "Purpose",
          content: (
            <Text>
              Show changes over time or compare cumulative values across
              categories.
            </Text>
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
                <strong>Example:</strong> Tracking the proportion of patients
                recovering over time after receiving different treatments.
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
                <strong>Trend Analysis:</strong> Excellent for visualizing
                changes over time.
              </Text>
              <Text>
                <strong>Comparison:</strong> Useful for comparing cumulative
                proportions across groups.
              </Text>
              <Text>
                <strong>Volume Representation:</strong> Emphasizes magnitude
                differences effectively.
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
                <strong>Overlapping Data:</strong> Can be difficult to interpret
                with multiple overlapping areas.
              </Text>
              <Text>
                <strong>Not Ideal for Precise Comparisons:</strong> Less
                effective for showing exact values compared to bar charts.
              </Text>
              <Text>
                <strong>Misleading Perception:</strong> Can sometimes distort
                the perception of trends if not carefully scaled.
              </Text>
            </Stack>
          ),
        },
      ]}
    />
  );
};

export default Component;
