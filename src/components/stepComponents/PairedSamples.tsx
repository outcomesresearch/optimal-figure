import { Text } from "@mantine/core";

const Component = () => {
  return (
    <>
      <Text>
        The{" "}
        <Text fw="600" span>
          Paired samples t-test
        </Text>{" "}
        is used to compare means within the same group for paired or matched
        continuous variables, assuming parametric testing assumptions are met.
        This test is typically used in a within-subjects design, such as when
        measurements are taken from the same individuals at two different time
        points. For example, it could be used to compare blood pressure readings
        before and after a treatment within the same group of patients.
      </Text>

      <Text>
        The paired samples t-test evaluates whether the mean difference between
        paired observations is significantly different from zero, and assumes
        that the differences between paired observations are normally
        distributed. This test is appropriate when there is a logical pairing
        between the two observations, such as measuring a patient’s weight
        before and after a diet program, and it helps assess the effect of the
        treatment while controlling for individual differences.
      </Text>
    </>
  );
};

export default Component;
