import { Text } from "@mantine/core";

const Component = () => {
  return (
    <>
      <Text span>
        The Wilcoxon signed-rank test is a non-parametric test used to compare
        paired or matched samples of ordinal or continuous variables. It is
        based on assigning numerical ranks to observations instead of using
        their original values. This rank-based comparison allows for the
        examination of variables based on their relative positions rather than
        specific numerical values.
      </Text>
      <Text>
        It is an appropriate choice for non-parametric tests that do not rely on
        assumptions about the underlying distribution of the data.
      </Text>
    </>
  );
};

export default Component;
