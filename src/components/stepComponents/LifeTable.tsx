import { Text } from "@mantine/core";

const Component = () => {
  return (
    <>
      <Text>
        <Text span fw="600">
          Life Table Analysis
        </Text>{" "}
        is a statistical method used to estimate the probability of survival at
        predetermined and equal intervals over time. This analysis allows for
        the visual comparison of the survival experience of different groups. It
        provides valuable information about the likelihood of an event (such as
        death or any other defined endpoint) occurring at specific time points.
      </Text>
      <Text>
        <Text span fw="600">
          {" "}
          The Wilcoxon-Gehan test
        </Text>
        , also known as the{" "}
        <Text span fw="600">
          log-rank test with ties
        </Text>
        , is a non-parametric statistical test commonly used in survival
        analysis to determine if there is a statistically significant difference
        in the survival experiences of different groups based on their
        time-to-event data. This test is based on the ranked event times and
        assesses if there are significant differences in the survival
        distributions among the groups being compared.
      </Text>
    </>
  );
};

export default Component;
