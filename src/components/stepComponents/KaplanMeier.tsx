import { Text } from "@mantine/core";

const Component = () => {
  return (
    <>
      <Text>
        <Text fw="600" span>
          Kaplan-Meier (KM) Analysis
        </Text>{" "}
        is a non-parametric method used to estimate and visualize the survival
        function (i.e., the probability of surviving past certain time points)
        over time. The Kaplan-Meier method is considered a non-parametric
        approach and uses only the actual observed failure times, and does not
        require the data to be divided into specific pre-defined intervals. It
        is particularly useful for censored data (data where the event has not
        occurred for some subjects by the end of the study).
      </Text>
      <Text>
        <Text fw="600" span>
          {" "}
          Log-Rank Test
        </Text>{" "}
        is a statistical test used to compare the survival distributions between
        two or more groups (e.g., comparing survival rates between treatment and
        control groups). It tests the null hypothesis that the survival curves
        of the groups being compared are identical over time.
      </Text>
      <Text>
        Kaplan-Meier generates survival curves for each group, showing how
        survival probability changes over time. Log-Rank Test then compares
        these survival curves to determine if the differences between them are
        statistically significant. These methods share the same assumptions of
        censoring and independent survival times, but focus on different
        aspects: KM estimates survival curves, and the Log-Rank test compares
        those curves.
      </Text>
    </>
  );
};

export default Component;
