import { Text } from "@mantine/core";

const Component = () => {
  return (
    <>
      <Text span>
        Mixed Linear Model (also known as a Mixed-Effects model or Hierarchical
        linear Model) is used to investigate the effects of various factors
        (predictor variables) on a continuous outcome, such as blood pressure or
        cholesterol levels. The predictor variables represent the factors that
        may influence the outcome, such as age, diet, and exercise, when
        studying blood pressure, while the continuous outcome measure is the
        variable we aim to predict or understand, like the actual blood pressure
        reading.
      </Text>
      <Text>
        In this model, we consider both fixed effects and random effects. Fixed
        effects refer to consistent and systematic factors that apply to
        everyone in the study. For instance, the general effect of diet on blood
        pressure is examined, assuming that all participants respond similarly
        to diet changes. Random effects, on the other hand, account for
        individual differences that are not the same for everyone. For example,
        the model can capture the unique effect of diet on blood pressure for
        each person, as individual responses may vary slightly.
      </Text>
      <Text>
        This model enables the investigator to explore how predictor variables
        impact each individual (individual-level effects) and also how they
        affect groups of individuals (group-level effects). It is advisable to
        seek assistance from a qualified statistician to ensure the correct
        application of this model.
      </Text>
    </>
  );
};

export default Component;
