import { Text } from "@mantine/core";

const Component = () => {
  return (
    <>
      <Text>
        Negative Binomial regression is a statistical method used to model a
        count dependent variable, such as number of hospital admissions within a
        specific time period or number of postoperative complications in a
        surgical study, that is often characterized by being over-dispersed.
      </Text>
      <Text>
        Over-dispersion refers to a situation where the observed variance of the
        count variable is greater than the mean, indicating that the data
        exhibit more variability than expected under a Poisson distribution
        assumption. In negative binomial regression, one or more independent
        variables are used to model the count variable while accounting for this
        over-dispersion. This type of regression allows for the estimation of
        the relationship between the count outcome and the predictors,
        considering the excessive variability present in the data.
      </Text>
      <Text>
        Due to the complexity of dealing with over-dispersed count data, it is
        recommended to seek assistance from a statistician. Their expertise can
        ensure proper implementation and interpretation of the negative binomial
        regression model.
      </Text>
    </>
  );
};

export default Component;
