import { Text } from "@mantine/core";

const Component = () => {
  return (
    <>
      <Text>
        <Text fw="600" span>
          Point Bi-Serial correlation
        </Text>{" "}
        is used to measure the correlation between a continuous predictor
        variable and a dichotomous variable. It quantifies the strength of the
        association, indicating how strongly the continuous variable relates to
        the likelihood of belonging to a particular category of the dichotomous
        variable.
      </Text>

      <Text>
        The coefficient ranges from -1 to 1, where values closer to 1 or -1
        indicate a stronger relationship, and values near 0 suggest little to no
        correlation.
      </Text>
    </>
  );
};

export default Component;
