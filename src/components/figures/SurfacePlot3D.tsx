import { Stack, Text } from "@mantine/core";
import TabLayout from "../layout/TabLayout";

const Component = () => {
  return (
    <TabLayout
      description="A 3D surface plot visualizes relationships between three continuous variables, providing a detailed three-dimensional representation of data."
      imageLink="https://blog.stata.com/wp-content/uploads/2020/09/Margins3d_3.png"
      tabsConfiguration={[
        {
          key: "characteristics",
          label: "Characteristics",
          content: (
            <Text>
              Visualizes relationships between three continuous variables in a
              three-dimensional space.
            </Text>
          ),
        },
        {
          key: "purpose",
          label: "Purpose",
          content: <Text>Show relationships between variables.</Text>,
        },
        {
          key: "whenToUse",
          label: "When to Use",
          content: (
            <Text>
              3D surface plots are used to present how a continuous outcome
              changes in response to two continuous predictors.
            </Text>
          ),
        },
        {
          key: "variables",
          label: "Independent Variable",
          content: (
            <Text>
              Two continuous independent variables (e.g., age and BMI) plotted
              on the x and y axes.
            </Text>
          ),
        },
        {
          key: "datasetSize",
          label: "Dataset Size",
          content: (
            <Text>
              Best suited for moderate to large datasets to ensure a smooth and
              interpretable surface.
            </Text>
          ),
        },
        {
          key: "strengths",
          label: "Strengths",
          content: (
            <Stack>
              <Text>
                <strong>Detailed Visualization:</strong> Provides a detailed 3D
                view of how variables interact.
              </Text>
              <Text>
                <strong>Complex Relationship Analysis:</strong> Great for
                exploring nonlinear and multivariable relationships.
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
                <strong>Interpretation Difficulty:</strong> Can be hard to
                interpret without rotation or interaction.
              </Text>
              <Text>
                <strong>Obscured Details:</strong> Overlapping or occluded areas
                may hide important features.
              </Text>
            </Stack>
          ),
        },
      ]}
    />
  );
};

export default Component;
