import { Text } from "@mantine/core";

const Component = () => {
  return (
    <>
      <Text>
        Cox PH regression is a method used to examine the relationship between
        covariates (independent variables) and the time it takes for an event to
        occur (the time-to-event outcome) in survival data. The model assumes
        that the hazard function —which represents the instantaneous risk of the
        event happening at any given time—can be broken down into two parts: a
        baseline hazard function and an exponential function of the predictor
        variables. This relationship is assumed to remain constant over time .
      </Text>
      <Text>
        Cox regression estimates regression coefficients that show the impact of
        each predictor on the event’s timing, while accounting for the influence
        of other variables in the model.
      </Text>
    </>
  );
};

export default Component;
