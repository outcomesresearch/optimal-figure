import { Text } from "@mantine/core";

const Component = () => {
  return (
    <>
      <Text>
        <Text fw="600" span>
          Fisher’s Exact Test
        </Text>{" "}
        is used to analyze categorical data in contingency tables, particularly
        when the data is sparse. It is especially useful when more than 25% of
        the cells in the table have expected frequencies less than 5, which
        violates the assumptions of the Chi-Square test of independence. In
        these situations, Fisher’s Exact Test provides a more accurate
        alternative to the Chi-Square test.
      </Text>
      <Text>
        Unlike Chi-Square, which relies on large-sample approximations, Fisher’s
        Exact Test calculates exact probabilities for the test outcome. This
        makes it particularly useful in small sample sizes or when the data
        distribution is not ideal for the Chi-Square test.
      </Text>
      <Text>
        The test assesses the null hypothesis that the proportions of the
        categories are independent. If the p-value is small (typically less than
        0.05), the null hypothesis is rejected, suggesting a statistically
        significant relationship between the variables.
      </Text>
    </>
  );
};

export default Component;
