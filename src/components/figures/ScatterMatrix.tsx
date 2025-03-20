import { Text, Stack } from "@mantine/core";
import TabLayout from "../layout/TabLayout";

export default function ScatterPlotMatrixTabs() {
  return (
    <TabLayout
      description="A scatter plot matrix (SPLOM) is an array or grid of scatter plots that shows the pairwise relationships between several continuous variables. Each cell in the matrix represents a scatter plot for a pair of variables, while the diagonal often shows the distribution of each variable (e.g., histograms)."
      imageLink="/images/scatterMatrix.png"
      tabsConfiguration={[
        {
          key: "characteristics",
          label: "Characteristics",
          content: (
            <Text>
              Multiple scatter plots arranged in a matrix to show pairwise
              relationships.
            </Text>
          ),
        },
        {
          key: "purpose",
          label: "Purpose",
          content: (
            <Text>
              Show relationships among three or more continuous variables.
            </Text>
          ),
        },
        {
          key: "whenToUse",
          label: "When to Use",
          content: (
            <Stack>
              <Text>
                <strong>Exploring Relationships:</strong> When exploring
                relationships and interactions between multiple continuous
                variables.
              </Text>
              <Text>
                <strong>Identifying Correlations:</strong> Useful for
                identifying potential correlations or patterns among several
                variables.
              </Text>
            </Stack>
          ),
        },
        {
          key: "variables",
          label: "Independent & Dependent Variables",
          content: (
            <Stack>
              <Text>
                <strong>Independent Variable:</strong> Continuous (More than
                Two-level).
              </Text>
            </Stack>
          ),
        },
        {
          key: "datasetSize",
          label: "Dataset Size",
          content: <Text>Any size.</Text>,
        },
        {
          key: "strengths",
          label: "Strengths",
          content: (
            <Stack>
              <Text>
                <strong>Comprehensive Visualization:</strong> Allows
                simultaneous visualization of multiple pairwise relationships in
                a single matrix format.
              </Text>
              <Text>
                <strong>Correlation Observation:</strong> Helpful in identifying
                correlations and interactions between many continuous variables
                at once.
              </Text>
              <Text>
                <strong>Diagonal Distribution Insight:</strong> The diagonal
                elements often show the distribution of each variable, providing
                individual variable insights.
              </Text>
              <Text>
                <strong>Pattern Recognition:</strong> Easily detect patterns,
                clusters, outliers, and linear/non-linear relationships among
                variables.
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
                <strong>Overwhelming with Many Variables:</strong> Can become
                quite overwhelming and hard to interpret when there are too many
                variables, causing clutter.
              </Text>
              <Text>
                <strong>Space-Intensive:</strong> Occupies a significant amount
                of space, especially with many variables.
              </Text>
              <Text>
                <strong>Complex Interpretations:</strong> Reading and
                interpreting each scatter plot requires careful consideration,
                which can be time-consuming.
              </Text>
              <Text>
                <strong>Limited Detail:</strong> Individual scatter plots can be
                small, reducing the visibility of finer details.
              </Text>
            </Stack>
          ),
        },
      ]}
    />
  );
}
