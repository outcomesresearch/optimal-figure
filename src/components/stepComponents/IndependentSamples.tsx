import { Text } from "@mantine/core";

const Component = () => {
  return (
    <>
      <Text>
        <Text fw="600" span>
          Independent samples t-test
        </Text>{" "}
        is used to compare means between two independent groups for continuous
        variables when parametric testing assumptions are met. This test helps
        determine whether there is a statistically significant difference in the
        means of the two groups. For instance, it may be used to compare blood
        pressure levels between two different age groups or to assess the
        effectiveness of two different treatments in a clinical trial.
      </Text>

      <Text>
        The test assumes that the two groups are independent, meaning that the
        observations in one group do not influence the other group.
        Additionally, it assumes normality of the data within each group and
        homogeneity of variance, meaning the variance within each group is
        similar. When these assumptions are met, the independent samples t-test
        can provide evidence as to whether the difference between group means is
        likely due to a real effect or is simply due to random variation.
      </Text>
    </>
  );
};

export default Component;
