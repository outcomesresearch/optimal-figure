import { Text, Stack } from "@mantine/core";
import TabLayout from "../layout/TabLayout";

export default function ContourPlotTabs() {
  return (
    <TabLayout
      description="A contour plot is a graphical representation where contour lines are used to show the values of a continuous variable across two dimensions. It maps a three-dimensional surface onto a two-dimensional plane, with contours representing levels of the outcome variable."
      imageLink="/images/contourPlot.png"
      tabsConfiguration={[
        {
          key: "characteristics",
          label: "Characteristics",
          content: (
            <Text>Shows a 3D surface on a 2D plane using contour lines.</Text>
          ),
        },
        {
          key: "purpose",
          label: "Purpose",
          content: (
            <Text>
              Show density and relationships between three continuous variables,
              often in spatial data.
            </Text>
          ),
        },
        {
          key: "whenToUse",
          label: "When to Use",
          content: (
            <Stack>
              <Text>
                <strong>Relationship Visualization:</strong> When needing to
                illustrate the relationship between two continuous independent
                variables and how they influence a continuous outcome.
              </Text>
              <Text>
                <strong>Gradient & Zone Identification:</strong> Useful for
                identifying regions of high or low values and understanding the
                gradient and interaction effects.
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
                Single-level).
              </Text>
            </Stack>
          ),
        },
        {
          key: "datasetSize",
          label: "Dataset Size",
          content: <Text>Large (more than 100 subjects).</Text>,
        },
        {
          key: "strengths",
          label: "Strengths",
          content: (
            <Stack>
              <Text>
                <strong>Gradient Visualization:</strong> Effectively shows
                gradients, making it easy to understand the relationship between
                two continuous variables and an outcome.
              </Text>
              <Text>
                <strong>Identification of Zones:</strong> Excellent for
                identifying regions of high and low values, isolines, and
                understanding gradient effects.
              </Text>
              <Text>
                <strong>2D Representation:</strong> Represents complex
                three-dimensional data in a two-dimensional format, which can be
                easier to interpret.
              </Text>
              <Text>
                <strong>Detailed Insight:</strong> Helps in understanding the
                gradient and interaction effects of two variables on an outcome
                in a detailed manner.
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
                <strong>Overlapping Contours:</strong> Complex contour maps with
                many lines can become cluttered and hard to read.
              </Text>
              <Text>
                <strong>Boundary Interpretation:</strong> Interpretation of
                boundaries between different contour levels can be subjective
                and less precise.
              </Text>
              <Text>
                <strong>Non-Intuitive without Experience:</strong> May not be
                intuitive for individuals without experience in reading and
                interpreting contour plots.
              </Text>
              <Text>
                <strong>Requires Smoothing:</strong> Might require smoothing
                techniques that can oversimplify the data, potentially masking
                smaller details and variations.
              </Text>
            </Stack>
          ),
        },
      ]}
    />
  );
}
