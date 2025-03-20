import { Text } from "@mantine/core";
import TabLayout from "../layout/TabLayout";

export default function ScatterPlotTabs() {
  return (
    <TabLayout
      description="Scatter plots display the relationships between two continuous variables
        by plotting data points on a Cartesian coordinate system, where one
        variable is represented on the x-axis and the other on the y-axis.
        Scatter plots help assess correlations or associations between
        variables, such as examining the relationship between blood pressure and
        body weight."
      imageLink="https://wwwnc.cdc.gov/eid/images/14-1394-F2.jpg"
      tabsConfiguration={[
        {
          key: "characteristics",
          label: "Characteristics",
          content: (
            <Text>
              Displays pairs of values as points in a Cartesian plane.
            </Text>
          ),
        },
        {
          key: "purpose",
          label: "Purpose",
          content: (
            <Text>
              Show relationships between two continuous variables and identify
              patterns/outliers.
            </Text>
          ),
        },
        {
          key: "whenToUse",
          label: "When to Use",
          content: (
            <>
              <Text>
                <strong>Correlation Assessment:</strong> When examining the
                relationship between two continuous variables or assessing
                correlations in clinical data.
              </Text>
              <Text>
                <strong>Trend Analysis:</strong> Useful for identifying trends
                and patterns in research studies or experiments.
              </Text>
            </>
          ),
        },
        {
          key: "variables",
          label: "Independent Variable",
          content: (
            <Text>
              <strong>Independent Variable:</strong> Continuous (Single-level,
              Two-level), Categorical (Single-level).
            </Text>
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
            <>
              <Text>
                <strong>Visualizing Relationships:</strong> Ideal for
                visualizing the relationship between two continuous variables.
              </Text>
              <Text>
                <strong>Distribution Insight:</strong> They can show the
                distribution of data points and identify potential correlations.
              </Text>
              <Text>
                <strong>Trend Identification:</strong> Useful for spotting
                trends, clusters, and outliers in the data.
              </Text>
            </>
          ),
        },
        {
          key: "weaknesses",
          label: "Weaknesses",
          content: (
            <>
              <Text>
                <strong>Clutter:</strong> May become cluttered with many data
                points, making interpretation difficult.
              </Text>
              <Text>
                <strong>Overlapping Points:</strong> Data points may overlap,
                obscuring individual values and making it hard to distinguish
                them.
              </Text>
            </>
          ),
        },
      ]}
    />
  );
}
