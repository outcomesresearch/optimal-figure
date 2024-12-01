import { Text } from "@mantine/core";

const Component = () => {
  return (
    <>
      <Text>
        Pearson correlation measures the strength and direction of the linear
        relationship between two continuous variables. It assumes that the
        relationship follows a linear pattern, meaning the data points can be
        described by a straight line when plotted on a graph. The Pearson
        correlation coefficient, denoted as{" "}
        <Text fw="600" span>
          r
        </Text>
        , ranges from -1 to 1, with values indicating the degree of the
        relationship.
      </Text>

      <Text>
        A value of{" "}
        <Text fw="600" span>
          r = 1
        </Text>{" "}
        indicates a perfect positive linear relationship, where both variables
        increase together in a perfectly straight line. Conversely, an{" "}
        <Text fw="600" span>
          r = -1
        </Text>{" "}
        indicates a perfect negative linear relationship, where one variable
        increases as the other decreases in a perfectly straight line. An{" "}
        <Text fw="600" span>
          r = 0
        </Text>{" "}
        suggests no linear relationship between the variables.
      </Text>

      <Text>
        Pearson correlation assumes that both variables are normally distributed
        and that the relationship between them is consistent across the range of
        the data (a condition known as homoscedasticity). The coefficient is
        also sensitive to outliers, which can distort the correlation.
      </Text>

      <Text>
        This method is widely used in statistics to examine the relationship
        between variables, such as{" "}
        <Text fw="600" span>
          height and weight
        </Text>{" "}
        or{" "}
        <Text fw="600" span>
          age and income
        </Text>
        . However, it is important to note that Pearson's correlation only
        measures linear relationships and does not account for nonlinear
        associations between variables.
      </Text>
    </>
  );
};

export default Component;
