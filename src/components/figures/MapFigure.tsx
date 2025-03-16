import { Text } from "@mantine/core";

const Component = () => {
  return (
    <>
      <Text>
        <Text fw="600" span>
          Binary logistic regression
        </Text>{" "}
        is used when the outcome variable has only two categories or levels. It
        models the probability or likelihood of an event occurring based on the
        predictor variables.
      </Text>

      <Text>
        For example, it can be used to predict the likelihood of a patient
        having a disease (presence/absence) based on their age, gender, and
        other relevant factors. The outcome variable is encoded as 0 or 1,
        representing the absence or presence of the event, respectively.
      </Text>
    </>
  );
};

export default Component;
