import { Stack, Text } from "@mantine/core";
import TabLayout from "../layout/TabLayout";

const KaplanMeierComponent = () => {
  return (
    <TabLayout
      description="A Kaplan-Meier Curve is used to estimate the survival function from lifetime data. It shows the probability of an event (like death or failure) over time and is particularly useful in medical research for comparing survival between two or more groups."
      imageLink={`${import.meta.env.BASE_URL}images/kaplanMeier.png`}
      tabsConfiguration={[
        {
          key: "characteristics",
          label: "Characteristics",
          content: (
            <Text>
              Plots the probability of survival over time, with steps indicating
              events such as death or failure. Allows comparison between groups.
            </Text>
          ),
        },
        {
          key: "purpose",
          label: "Purpose",
          content: (
            <Text>
              Show trends over time or compare survival distributions between
              two or more groups.
            </Text>
          ),
        },
        {
          key: "whenToUse",
          label: "When to Use",
          content: (
            <Text>
              Use when studying time-to-event outcomes such as survival time,
              relapse, or treatment failure—particularly when follow-up time
              varies between subjects.
            </Text>
          ),
        },
        {
          key: "variables",
          label: "Independent Variable",
          content: (
            <Text>
              Typically categorical or dichotomous — representing groups like
              treatment vs. control, exposed vs. unexposed, etc.
            </Text>
          ),
        },
        {
          key: "datasetSize",
          label: "Dataset Size",
          content: (
            <Text>
              Most effective with moderate to large datasets. Small samples may
              produce unstable or hard-to-interpret curves.
            </Text>
          ),
        },
        {
          key: "strengths",
          label: "Strengths",
          content: (
            <Stack>
              <Text>
                <strong>Visual Clarity:</strong> Clearly shows differences in
                survival over time between groups.
              </Text>
              <Text>
                <strong>Handles Censoring:</strong> Accommodates right-censored
                data where follow-up ends before the event occurs.
              </Text>
              <Text>
                <strong>Non-parametric:</strong> Makes minimal assumptions about
                the survival distribution.
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
                <strong>Limited to Two or Few Groups:</strong> Becomes difficult
                to interpret when comparing many groups.
              </Text>
              <Text>
                <strong>Small Sample Limitations:</strong> Less effective with
                small datasets due to unreliable step estimates.
              </Text>
              <Text>
                <strong>No Covariate Adjustment:</strong> Does not account for
                confounding variables unless combined with additional models.
              </Text>
            </Stack>
          ),
        },
      ]}
    />
  );
};

export default KaplanMeierComponent;
