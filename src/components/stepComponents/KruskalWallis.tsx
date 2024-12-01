import { Text } from "@mantine/core";

const Component = () => {
  return (
    <>
      <Text>
        The Kruskal-Wallis test is a non-parametric alternative to a one-way
        Analysis of Variance test (ANOVA). A Kruskal-Wallis test is used to
        compare the distributions of ordinal or continuous variables among three
        or more independent groups. This test involves assigning numerical ranks
        to observations instead of using their original values. By using ranks,
        variables can be examined based on their relative positions rather than
        specific numerical values.
      </Text>
      <Text>
        This rank-based comparison makes the Kruskal-Wallis test suitable for
        non-parametric tests that do not depend on assumptions about the
        underlying data distribution.
      </Text>
    </>
  );
};

export default Component;
