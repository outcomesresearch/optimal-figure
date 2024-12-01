import { Text } from "@mantine/core";

const Component = () => {
  return (
    <>
      <Text span>
        Competing Risk Analysis is used to analyze time-to-event outcomes when
        there are multiple mutually exclusive and independent competing events.
      </Text>
      <Text>
        The primary objective of Competing Risk Analysis is to examine the
        effects of multiple independent variables on the occurrence and timing
        of different events, while accounting for the presence of competing
        risks. By considering all possible outcomes, this analysis technique
        provides a more comprehensive understanding of the factors influencing
        each event. When conducting Competing Risk Analysis, it is crucial to
        account for the fact that individuals can experience one event while
        being at risk of experiencing a different event.
      </Text>
      <Text>
        This statistical approach allows researchers to assess the effects of
        various independent variables on each event independently, capturing the
        unique characteristics and outcomes associated with each.
      </Text>
      <Text>
        Considering the complexity of Competing Risk Analysis, it is highly
        recommended to seek assistance from a qualified statistician.
      </Text>
    </>
  );
};

export default Component;
