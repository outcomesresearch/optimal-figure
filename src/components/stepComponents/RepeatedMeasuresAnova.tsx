import { Text } from "@mantine/core";

const Component = () => {
  return (
    <>
      <Text>
        <Text span fw="600">
          Two-way and multi-way ANOVA
        </Text>{" "}
        are statistical tests used to examine the effects of two or more
        independent variables on a continuous dependent variable. These tests
        not only assess the individual effects of each independent variable, but
        also explore how these variables interact with one another. Like one-way
        ANOVA, two-way and multi-way ANOVA require that the data meet
        assumptions of normality, independence, and homogeneity of variance.
      </Text>
      <Text>
        For example, in a study investigating the effects of both{" "}
        <Text span fw="600">
          exercise type
        </Text>{" "}
        (e.g., Cardio, Strength, None) and{" "}
        <Text span fw="600">
          diet type
        </Text>{" "}
        (e.g., High-Protein, Low-Carb, Balanced) on weight loss, a two-way ANOVA
        would test the main effects of exercise and diet on weight loss, as well
        as any interaction between the two. The interaction effect examines
        whether the impact of exercise on weight loss depends on the type of
        diet followed. If the p-value from the ANOVA is less than the
        significance level (e.g., 0.05), it indicates a significant effect or
        interaction.
      </Text>
      <Text>
        Post-hoc tests can then be used to identify which specific groups differ
        from each other.
      </Text>
    </>
  );
};

export default Component;
