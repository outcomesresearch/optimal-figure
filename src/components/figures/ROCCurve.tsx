import { Stack, Text } from "@mantine/core";
import TabLayout from "../layout/TabLayout";

const RocCurveComponent = () => {
  return (
    <TabLayout
      description="A Receiver Operating Characteristic (ROC) Curve is used to evaluate the performance of a binary classification model by plotting the true positive rate against the false positive rate at various threshold settings."
      imageLink={`${import.meta.env.BASE_URL}images/rocCurve.png`}
      tabsConfiguration={[
        {
          key: "characteristics",
          label: "Characteristics",
          content: (
            <Text>
              Plots the trade-off between sensitivity and specificity for a
              binary classifier across different thresholds.
            </Text>
          ),
        },
        {
          key: "purpose",
          label: "Purpose",
          content: (
            <Text>
              Identify patterns and outliers in classification performance and
              evaluate how well a model distinguishes between two classes.
            </Text>
          ),
        },
        {
          key: "whenToUse",
          label: "When to Use",
          content: (
            <Stack>
              <Text>
                <strong>Independent Variable:</strong> Categorical or
                dichotomous (two levels).
              </Text>
              <Text>
                <strong>Dependent Variable:</strong> Binary classification
                outcome.
              </Text>
              <Text>
                <strong>Dataset Size:</strong> Suitable for moderate to large
                datasets.
              </Text>
              <Text>
                <strong>Example:</strong> Evaluating the diagnostic performance
                of a medical test that predicts disease presence or absence.
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
                <strong>Model Comparison:</strong> Useful for comparing multiple
                classifiers.
              </Text>
              <Text>
                <strong>Threshold Independence:</strong> Evaluates performance
                across all thresholds.
              </Text>
              <Text>
                <strong>Diagnostic Insight:</strong> Helps understand
                sensitivity vs. specificity trade-offs.
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
                <strong>Limited to Binary Outcomes:</strong> Not suitable for
                multiclass problems without adaptation.
              </Text>
              <Text>
                <strong>Imbalanced Data:</strong> Can be misleading if the
                dataset is highly imbalanced.
              </Text>
              <Text>
                <strong>Less Interpretable for Small Samples:</strong> Results
                may be unstable with small datasets.
              </Text>
            </Stack>
          ),
        },
      ]}
    />
  );
};

export default RocCurveComponent;
