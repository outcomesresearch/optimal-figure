import { Stack, Text } from "@mantine/core";
import TabLayout from "../layout/TabLayout";

const Component = () => {
  return (
    <TabLayout
      description="A mosaic plot uses tiles to represent the relative sizes of categories and their relationships. It is useful for visualizing the relationship between two or more categorical variables."
      imageLink="../../../images/mosaic.png"
      tabsConfiguration={[
        {
          key: "characteristics",
          label: "Characteristics",
          content: (
            <Text>
              Uses tiles to represent the relative sizes of categories and their
              relationships.
            </Text>
          ),
        },
        {
          key: "purpose",
          label: "Purpose",
          content: (
            <Text>
              To show the relationship between two or more categorical
              variables.
            </Text>
          ),
        },
        {
          key: "whenToUse",
          label: "When to Use",
          content: (
            <Text>
              Best for analyzing relationships between multiple categorical
              variables in a visual format.
            </Text>
          ),
        },
        {
          key: "variables",
          label: "Variables",
          content: (
            <Text>
              <strong>Independent Variable:</strong> Categorical (Single-level,
              Two-level, More than Two-level), Nominal (Single-level, Two-level,
              More than Two-level), Dichotomous. <br />
              <strong>Dependent Variable:</strong> Nominal.
            </Text>
          ),
        },
        {
          key: "datasetSize",
          label: "Study Size",
          content: <Text>Any size.</Text>,
        },
        {
          key: "strengths",
          label: "Strengths",
          content: (
            <Stack>
              <Text>
                <strong>Multivariable Relationships:</strong> Shows
                relationships between multiple categorical variables.
              </Text>
              <Text>
                <strong>Visual Appeal:</strong> Engaging and visually appealing
                for exploring categorical data.
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
                <strong>Interpretation Difficulty:</strong> Can be difficult to
                interpret with many categories.
              </Text>
              <Text>
                <strong>Less Effective for Small Data:</strong> Not as useful
                for small datasets.
              </Text>
            </Stack>
          ),
        },
      ]}
    />
  );
};

export default Component;
