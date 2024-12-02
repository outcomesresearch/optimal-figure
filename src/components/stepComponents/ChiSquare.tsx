import { Text } from "@mantine/core";

const Component = () => {
  return (
    <>
      <Text>
        <Text fw="600" span>
          Chi-Square tests
        </Text>{" "}
        are used to assess relationships between categorical variables. The two
        main types are the{" "}
        <Text fw="600" span>
          Chi-Square test of goodness-of-fit
        </Text>{" "}
        and the{" "}
        <Text fw="600" span>
          Chi-Square test of independence
        </Text>
        .
      </Text>

      <Text>
        The{" "}
        <Text fw="600" span>
          Chi-Square test of goodness-of-fit
        </Text>{" "}
        checks if the distribution of a single categorical variable matches an
        expected distribution. For example, a study might check if a treatment
        is equally effective across three age groups. The test compares observed
        success rates with expected ones to see if the treatment distribution
        differs from the expected one.
      </Text>

      <Text>
        The{" "}
        <Text fw="600" span>
          Chi-Square test of independence
        </Text>{" "}
        examines if two categorical variables are associated. For instance, a
        study might investigate whether smoking status is related to lung
        disease. The test compares the observed frequencies of smokers and
        non-smokers with and without lung disease to see if there’s an
        association.
      </Text>

      <Text>
        When comparing two groups, such as smokers vs. non-smokers, the
        Chi-Square test checks if the incidence of lung disease is significantly
        different between the two groups. With three or more groups, such as
        comparing the effectiveness of different drugs across multiple age
        groups, the test shows if any significant differences exist across the
        groups, but further tests are needed to determine which specific groups
        differ.
      </Text>

      <Text>
        In both cases, the test assumes the sample size is large enough for
        valid results. If the sample size is small, alternative tests, such as{" "}
        <Text fw="600" span>
          Fisher’s Exact Test
        </Text>
        , may be used.
      </Text>
    </>
  );
};

export default Component;
