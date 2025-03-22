import { Stack, Text } from "@mantine/core";
import TabLayout from "../layout/TabLayout";

const Component = () => {
  return (
    <TabLayout
      description="A faceted bar chart displays multiple bar charts for different subsets of data, making it effective for comparing distributions across more than two groups."
      imageLink="https://domo-support.domo.com/servlet/rtaImage?eid=ka05w00000123la&feoid=00N5w00000Ri7BU&refid=0EM5w000005vP2T"
      tabsConfiguration={[
        {
          key: "characteristics",
          label: "Characteristics",
          content: (
            <Text>
              A faceted bar chart organizes data into separate bar charts
              (facets), each representing a subgroup of the data, enabling clear
              visual comparisons across dimensions.
            </Text>
          ),
        },
        {
          key: "purpose",
          label: "Purpose",
          content: (
            <Text>
              Compare distributions across more than two groups or categories,
              especially when relationships vary across subgroups.
            </Text>
          ),
        },
        {
          key: "whenToUse",
          label: "When to Use",
          content: (
            <Text>
              Use a faceted bar chart when you're working with multiple
              categorical groupings and want to break down comparisons across
              each dimension.
            </Text>
          ),
        },
        {
          key: "variables",
          label: "Independent Variable",
          content: (
            <Text>
              Categorical or nominal variables with more than two levels —
              commonly used to define subgroups (facets) like department,
              gender, or region.
            </Text>
          ),
        },
        {
          key: "datasetSize",
          label: "Dataset Size",
          content: (
            <Text>
              Suitable for small to large datasets. While faceting can clarify
              complex data, charts can become overwhelming if there are too many
              facets or too little data in each subgroup.
            </Text>
          ),
        },
        {
          key: "strengths",
          label: "Strengths",
          content: (
            <Stack>
              <Text>
                <strong>Detailed Comparisons:</strong> Makes it easy to compare
                trends or distributions within subgroups of data.
              </Text>
              <Text>
                <strong>Interpretability:</strong> Each facet isolates part of
                the dataset, improving clarity and focus.
              </Text>
              <Text>
                <strong>Scalability:</strong> Scales well when the number of
                observations is large but spread across categories.
              </Text>
            </Stack>
          ),
        },
        {
          key: "weaknesses",
          label: "Weaknesses",
          content: (
            <Stack>
              <Text>
                <strong>Visual Complexity:</strong> Too many facets can result
                in a crowded layout and reduced readability.
              </Text>
              <Text>
                <strong>Design Overhead:</strong> Requires thoughtful layout and
                ordering to maintain interpretability across facets.
              </Text>
            </Stack>
          ),
        },
      ]}
    />
  );
};

export default Component;
