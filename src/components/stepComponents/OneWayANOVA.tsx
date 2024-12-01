import { Text } from "@mantine/core";

const Component = () => {
  return (
    <>
      <Text>
        One-way ANOVA (Analysis of Variance) is a statistical test used to
        compare the means of{" "}
        <Text span fw="600">
          three or more independent groups
        </Text>{" "}
        to determine if there are any statistically significant differences
        between them. It is typically applied when the dependent variable is
        continuous, and the data meets key assumptions:{" "}
        <Text span fw="600">
          normality
        </Text>{" "}
        (data within each group is normally distributed),{" "}
        <Text span fw="600">
          independence
        </Text>
        (observations are independent), and{" "}
        <Text span fw="600">
          homogeneity
        </Text>{" "}
        of variance (the variances across groups are equal).
      </Text>
      <Text>
        For example, in a study comparing the weight loss effects of three diets
        (Diet A, B, and C), one-way ANOVA tests if the mean weight loss differs
        between the three groups. A significant result means that at least one
        diet leads to a different mean weight loss.
      </Text>
      <Text>
        If significant, post-hoc tests (like Tukey’s HSD) identify which groups
        differ.
      </Text>
    </>
  );
};

export default Component;
