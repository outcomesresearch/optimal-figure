import { Text } from "@mantine/core";

const Component = () => {
  return (
    <>
      <Text>
        <Text fw="600" span>
          Linear Regression
        </Text>{" "}
        is a statistical method within the General Linear Model family, used
        when the response variable is continuous and assumes a linear
        relationship between the predictor variables and the response variable.
        The goal of linear regression is to explore how the dependent variable
        (response) varies as a function of the independent variables
        (predictors). By estimating the coefficients for each predictor, the
        model determines the strength and direction of their association with
        the outcome variable, while controlling for the effects of other
        variables in the model.
      </Text>

      <Text>
        However, linear regression relies on several key assumptions, such as
        linearity, normality of errors, and homoscedasticity (constant variance
        of errors). If these assumptions are not met, the results may be biased
        or misleading. Therefore, it’s important to ensure that the data meets
        these assumptions before interpreting the results. Consulting a
        statistician can help ensure the correct application and interpretation
        of the model to achieve reliable findings.
      </Text>
    </>
  );
};

export default Component;
