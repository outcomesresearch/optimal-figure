import { Stack, Text } from "@mantine/core";
import TabLayout from "../layout/TabLayout";

const Component = () => {
  return (
    <TabLayout
      description="A map provides a geographical representation of data, making it effective for visualizing spatial relationships and trends."
      imageLink="https://www.esri.com/about/newsroom/wp-content/uploads/2020/03/WHO_Ebola_19-august-2015-map2-768x768.jpg"
      tabsConfiguration={[
        {
          key: "characteristics",
          label: "Characteristics",
          content: <Text>Geographical representation of data.</Text>,
        },
        {
          key: "purpose",
          label: "Purpose",
          content: <Text>Demonstrate change in data over space.</Text>,
        },
        {
          key: "whenToUse",
          label: "When to Use",
          content: (
            <Text>
              Use when you're analyzing or presenting data tied to geographic
              locations or spatial patterns.
            </Text>
          ),
        },
        {
          key: "variables",
          label: "Independent Variable",
          content: (
            <Text>
              Categorical or nominal — often representing geographic areas like
              regions, countries, or cities.
            </Text>
          ),
        },
        {
          key: "datasetSize",
          label: "Dataset Size",
          content: (
            <Text>
              Can be used with small or large datasets, though detail and
              resolution depend on spatial granularity.
            </Text>
          ),
        },
        {
          key: "strengths",
          label: "Strengths",
          content: (
            <Stack>
              <Text>
                <strong>Visual Appeal:</strong> Provides an engaging
                representation of geographical data.
              </Text>
              <Text>
                <strong>Spatial Insights:</strong> Effective for showing spatial
                relationships and trends.
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
                <strong>Interpretation Challenges:</strong> Can be difficult to
                interpret without clear legends and scales.
              </Text>
              <Text>
                <strong>Resolution Limitations:</strong> Effectiveness depends
                on the granularity of spatial data.
              </Text>
            </Stack>
          ),
        },
      ]}
    />
  );
};

export default Component;
