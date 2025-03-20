import { Text, Stack } from "@mantine/core";
import TabLayout from "../layout/TabLayout";

export default function ScatterPlotMatrixTabs() {
  return (
    <TabLayout
      description="A 3D scatter plot extends the traditional scatter plot into a three-dimensional space, enabling the visualization of relationships between three continuous variables."
      imageLink="../../../images/3dScatter.png"
      tabsConfiguration={[
        {
          key: "characteristics",
          label: "Characteristics",
          content: (
            <Text>
              Extends scatter plot into 3D, allowing for visualization of three
              variables.
            </Text>
          ),
        },
        {
          key: "purpose",
          label: "Purpose",
          content: (
            <Text>Show relationships among three continuous variables.</Text>
          ),
        },
        {
          key: "whenToUse",
          label: "When to Use",
          content: (
            <Stack>
              <Text>
                <strong>Visualizing Relationships:</strong> When needing to
                visualize the relationship between two continuous independent
                variables and a continuous outcome.
              </Text>
              <Text>
                <strong>Trend & Outlier Detection:</strong> Helpful for
                identifying trends, clusters, and potential outliers in
                three-dimensional data.
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
                <strong>Independent Variable:</strong> Continuous (Single-level,
                Two-level).
              </Text>
            </Stack>
          ),
        },
        {
          key: "datasetSize",
          label: "Dataset Size",
          content: (
            <Stack>
              <Text>
                Moderate (31 to 100 subjects), Large (more than 100 subjects).
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
                <strong>Multidimensional Insight:</strong> Effectively
                visualizes the relationship between three continuous variables
                in a three-dimensional space.
              </Text>
              <Text>
                <strong>Depth Perception:</strong> Provides an intuitive sense
                of depth, aiding in identifying clusters and trends within the
                data.
              </Text>
              <Text>
                <strong>Interactive Exploration:</strong> When made interactive,
                allows users to rotate and zoom in/out to explore the data from
                different angles.
              </Text>
              <Text>
                <strong>Enhanced Pattern Detection:</strong> Makes it easier to
                see patterns and interactions that may not be apparent in 2D
                plots.
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
                <strong>Interpretation Complexity:</strong> Can be difficult to
                interpret, especially when dealing with dense data points or
                overlapping points.
              </Text>
              <Text>
                <strong>Static Limitations:</strong> Static 3D scatter plots can
                be misleading due to perspective distortion or occlusion of
                points.
              </Text>
              <Text>
                <strong>Requires Visualization Tools:</strong> Often requires
                specialized software or tools for creating and interacting with
                3D visualizations.
              </Text>
              <Text>
                <strong>Depth Misinterpretation:</strong> Perception of depth
                can sometimes be misleading, causing misinterpretation of the
                data.
              </Text>
            </Stack>
          ),
        },
      ]}
    />
  );
}
