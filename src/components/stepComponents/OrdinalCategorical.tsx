import { Text } from "@mantine/core";

const Component = () => {
  return (
    <>
      <Text>
        Ordinal regression is a statistical method which models and explores the
        relationship between independent variables and an ordinal outcome
        variable with multiple categories. In this type of regression, the
        dependent variable is considered ordinal, meaning that the categories
        have an inherent order or ranking.
      </Text>
      <Text>
        Examples of ordinal dependent variables include Likert scale responses
        (e.g., strongly agree, agree, neutral, disagree, strongly disagree) or
        levels of satisfaction (e.g., very satisfied, satisfied, neutral,
        dissatisfied, very dissatisfied). The goal is to understand and predict
        the factors or independent variables that influence the likelihood of
        the outcome variable falling into higher or lower categories.
      </Text>
      <Text>
        Ordinal logistic regression estimates the cumulative odds or
        probabilities of belonging to each category relative to a reference
        category, considering the ordered nature of the dependent variable. The
        analysis produces estimates of coefficients for each independent
        variable, indicating the strength and direction of their association
        with the outcome categories. Ordinal regression with a categorical
        dependent measure can be a complex statistical test - seeking assistance
        from a statistician is highly recommended for accurate implementation
        and interpretation of the results.
      </Text>
    </>
  );
};

export default Component;
