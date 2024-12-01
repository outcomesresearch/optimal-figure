import { Text } from "@mantine/core";

const Component = () => {
  return (
    <>
      <Text>
        <Text fw="600" span>Spearman's Rho</Text> is a non-parametric
        alternative to Pearson’s correlation, measuring the strength and
        direction of the relationship between the ranks of two variables. Unlike
        Pearson, it doesn’t assume a linear relationship but instead checks if a
        monotonic function can describe the relationship. This makes it suitable
        for ordinal or continuous variables where a monotonic, but not
        necessarily linear, relationship exists.
      </Text>

      <Text>
        The Spearman correlation coefficient, denoted as{" "}
        <Text fw="600" span>ρ (rho)</Text>, ranges from -1 to 1. A value of{" "}
        <Text fw="600" span>ρ = 1</Text> indicates a perfect positive monotonic
        relationship, <Text fw="600" span>ρ = -1</Text> indicates a perfect negative
        monotonic relationship, and <Text fw="600" span>ρ = 0</Text> suggests no
        monotonic relationship.
      </Text>

      <Text>
        Spearman’s correlation is useful for ordinal data or when data does not
        meet the assumptions of Pearson's correlation, such as linearity or
        normality.
      </Text>
    </>
  );
};

export default Component;
