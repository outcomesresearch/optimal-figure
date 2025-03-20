import { Text, Stack } from "@mantine/core";
import TabLayout from "../layout/TabLayout";

export default function InteractionPlotTabs() {
  return (
    <TabLayout
      description="Interaction plots are graphical representations used to visualize the interaction effects between two or more independent variables on a dependent variable. They typically plot mean values of the dependent variable for different combinations of the independent variables, using lines to connect these means."
      imageLink="../../../images/interactionPlot.png"
      tabsConfiguration={[
        {
          key: "characteristics",
          label: "Characteristics",
          content: (
            <Text>
              Shows the effect of one categorical variable on the relationship
              between a continuous dependent variable and another categorical
              variable.
            </Text>
          ),
        },
        {
          key: "purpose",
          label: "Purpose",
          content: (
            <Text>Illustrate interactions between independent variables.</Text>
          ),
        },
        {
          key: "whenToUse",
          label: "When to Use",
          content: (
            <Stack>
              <Text>
                <strong>Investigating Interactions:</strong> Ideal for
                investigating and illustrating interaction effects in ANOVA or
                regression models, where understanding how the effect of one
                factor varies across levels of another is crucial.
              </Text>
              <Text>
                <strong>Experimental Designs:</strong> Particularly useful in
                designed experiments, such as factorial designs, where multiple
                factors are systematically varied.
              </Text>
              <Text>
                <strong>Model Diagnostics:</strong> Use in model diagnostics to
                visualize and interpret significant interaction terms from
                statistical models.
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
                <strong>Independent Variable:</strong> Categorical (Two-level,
                More than Two-level), Nominal (Two-level, More than Two-level).
              </Text>
              <Text>
                <strong>Dependent Variable:</strong> Continuous.
              </Text>
            </Stack>
          ),
        },
        {
          key: "datasetSize",
          label: "Dataset Size",
          content: (
            <Text>
              Small (up to 30 subjects), Moderate (31 to 100 subjects).
            </Text>
          ),
        },
        {
          key: "strengths",
          label: "Strengths",
          content: (
            <Stack>
              <Text>
                <strong>Interaction Visualization:</strong> Clearly displays
                interaction effects between independent variables, which can be
                critical for understanding complex relationships in the data.
              </Text>
              <Text>
                <strong>Trend Identification:</strong> Helps in identifying
                trends and patterns, showing how changes in one variable affect
                the dependent variable differently at different levels of
                another variable.
              </Text>
              <Text>
                <strong>Factorial Analysis:</strong> Useful in the analysis of
                factorial experiments, where the impact of multiple factors and
                their interactions need to be assessed.
              </Text>
              <Text>
                <strong>Simple Interpretation:</strong> Often easier to
                interpret than numerical tables of interaction effects,
                providing a visual summary.
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
                <strong>Overcrowding:</strong> Can become cluttered and hard to
                interpret when there are too many levels or variables,
                especially if the lines overlap.
              </Text>
              <Text>
                <strong>Nonlinear Interactions:</strong> May not effectively
                capture nonlinear interactions without additional
                transformations or multiple plots.
              </Text>
              <Text>
                <strong>Mean Representation:</strong> Focuses on mean values and
                may obscure underlying variability within each group.
              </Text>
              <Text>
                <strong>Requires Balanced Data:</strong> Most effective with
                balanced data; unbalanced data can lead to misleading
                visualizations and interpretations.
              </Text>
            </Stack>
          ),
        },
      ]}
    />
  );
}
