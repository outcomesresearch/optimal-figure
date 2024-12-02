import { Text } from "@mantine/core";

const Component = () => {
  return (
    <>
      <Text>
        <Text fw="600" span>
          Kendall's tau
        </Text>{" "}
        is a non-parametric statistic used to measure the correlation between
        two ordinal variables. It is based on the concordance (agreement) or
        discordance (disagreement) in the ranks of paired observations,
        assessing the extent to which the ranks of the variables move together.
      </Text>

      <Text>
        The coefficient ranges from -1 to 1: A value of{" "}
        <Text fw="600" span>
          1
        </Text>{" "}
        indicates perfect agreement,{" "}
        <Text fw="600" span>
          -1
        </Text>{" "}
        indicates perfect disagreement, and{" "}
        <Text fw="600" span>
          0
        </Text>{" "}
        suggests no correlation.
      </Text>

      <Text>
        Kendall's tau is often used when dealing with ordinal data or when
        Pearson’s assumptions are not met.
      </Text>
    </>
  );
};

export default Component;
