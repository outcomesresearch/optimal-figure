import { Text } from "@mantine/core";

const Component = () => {
  return (
    <>
      <Text span>
        The Friedman's test is a non-parametric alternative to a repeated
        measures Analysis of Variance test (ANOVA). It compares the distribution
        of an ordinal or continuous variable{" "}
        <Text span fw="600">
          among three or more
        </Text>{" "}
        repeated observations or related groups. This test utilizes ranks, where
        numerical ranks are assigned to observations instead of using their
        original values, allowing for comparisons based on relative position
        rather than specific numerical values.
      </Text>
      <Text>
        This rank-based approach is suitable for non-parametric tests that do
        not rely on assumptions about the underlying data distribution.
      </Text>
    </>
  );
};

export default Component;
