import { Text } from "@mantine/core";

const Component = () => {
  return (
    <>
      <Text>
        Cochran&apos;s Q test compares the differences in the distribution of a
        categorical dependent variable between&nbsp;
        <Text fs="italic" fw="600" span>
          more than two
        </Text>
        &nbsp;related or matched groups or conditions. It examines whether there
        are significant differences in proportions or frequencies across related
        groups, indicating if there is an overall pattern of group differences
        in the outcome measure.
      </Text>
      <Text>
        Cochran&apos;s Q test may be seen as an extension of McNemar&apos;s test
        when working with categorical data that is not dichotomous.
      </Text>
    </>
  );
};

export default Component;
