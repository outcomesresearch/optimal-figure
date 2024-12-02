import { Text } from "@mantine/core";

const Component = () => {
  return (
    <>
      <Text>
        <Text fw="600" span>
          Cox regression
        </Text>{" "}
        is a method used in survival analysis to examine the relationship
        between predictor variables and the time to an event. It estimates
        regression coefficients that quantify the effect of each covariate on
        the risk or hazard of the event occurring. The coefficients indicate
        whether a predictor increases or decreases the likelihood of the event,
        while adjusting for other variables in the model.
      </Text>

      <Text>
        This model allows researchers to assess the impact of multiple factors
        simultaneously, providing a clearer understanding of how various
        predictors influence the outcome. For example, Cox regression can help
        determine how age, treatment type, or other factors affect patient
        survival while controlling for other covariates that may also influence
        the result.
      </Text>
    </>
  );
};

export default Component;
