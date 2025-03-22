import { Stack, Text } from "@mantine/core";
import TabLayout from "../layout/TabLayout";

const RocCurveComponent = () => {
  return (
    <TabLayout
      description="A Receiver Operating Characteristic (ROC) Curve is used to evaluate the performance of a binary classification model by plotting the true positive rate against the false positive rate at various threshold settings."
      imageLink="/optimal-figure/images/rocCurve.png"
      tabsConfiguration={[
        {
          key: "characteristics",
          label: "Characteristics",
          content: (
            <Stack>
              <Text>
                A ROC Curve illustrates the trade-off between sensitivity (true
                positive rate) and specificity (false positive rate) for a
                classification model across different threshold settings. It
                provides a graphical way to evaluate how well a model
                distinguishes between two classes.
              </Text>
              <Text>
                <strong>Binary Classification Model:</strong> A predictive model
                that categorizes data into one of two possible outcomes, such as
                disease vs. no disease or spam vs. not spam.
              </Text>
              <Text>
                These models typically output a probability between 0 and 1,
                which is then compared against a decision threshold to make a
                final classification.
              </Text>
            </Stack>
          ),
        },
        {
          key: "purpose",
          label: "Purpose",
          content: (
            <Text>
              ROC Curves are used to identify patterns and outliers in
              classification performance and to evaluate how well a binary model
              distinguishes between two possible outcomes. They are especially
              useful for visualizing the trade-off between sensitivity and
              specificity.
            </Text>
          ),
        },
        {
          key: "whenToUse",
          label: "When to Use",
          content: (
            <Text>
              Use ROC Curves to evaluate the diagnostic or classification
              accuracy of a model that produces binary outcomes. It is
              particularly helpful when exploring model performance across a
              range of thresholds, rather than relying on a single cutoff.
            </Text>
          ),
        },
        {
          key: "variables",
          label: "Independent Variable",
          content: (
            <Text>
              The independent variable is typically categorical or dichotomous —
              such as treatment vs. control, or positive vs. negative test
              result — and is used to define group membership in the model.
            </Text>
          ),
        },
        {
          key: "datasetSize",
          label: "Dataset Size",
          content: (
            <Text>
              ROC Curves are most effective with moderate to large datasets.
              Smaller datasets may produce unreliable estimates of sensitivity
              and specificity, especially when outcome classes are imbalanced.
            </Text>
          ),
        },
        {
          key: "strengths",
          label: "Strengths",
          content: (
            <Stack>
              <Text>
                <strong>Model Comparison:</strong> Allows side-by-side
                evaluation of multiple classifiers to see which performs best
                across thresholds.
              </Text>
              <Text>
                <strong>Threshold Flexibility:</strong> Helps assess model
                performance without committing to a specific probability
                threshold.
              </Text>
              <Text>
                <strong>Visual Insight:</strong> Offers an intuitive view of
                trade-offs between sensitivity and specificity.
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
                <strong>Binary Limitation:</strong> ROC Curves are designed for
                binary outcomes and require modification to be used with
                multiclass problems.
              </Text>
              <Text>
                <strong>Class Imbalance Sensitivity:</strong> Performance can be
                misleading if one outcome class heavily outweighs the other.
              </Text>
              <Text>
                <strong>Unreliable with Small Samples:</strong> Small datasets
                may not provide stable estimates, especially at extreme
                thresholds.
              </Text>
            </Stack>
          ),
        },
      ]}
    />
  );
};

export default RocCurveComponent;
