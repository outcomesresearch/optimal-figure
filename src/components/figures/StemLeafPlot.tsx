import { Text } from "@mantine/core";
import TabLayout from "../layout/TabLayout";

export default function StemLeafPlotTabs() {
  return (
    <TabLayout
      description="A stem-and-leaf plot is a data visualization technique that organizes
      and presents data in a clear and concise manner. Each data point is
      divided into a stem (leading digit(s)) and a leaf (trailing digit(s)).
      Stems are listed vertically in ascending order, and leaves are displayed
      horizontally next to their respective stems."
      imageLink="https://www.softschools.com/math/topics../../../images/stem_leaf_plant_img_11.jpg"
      tabsConfiguration={[
        {
          key: "characteristics",
          label: "Characteristics",
          content: (
            <Text>
              Combines aspects of a histogram and a dot plot; displays data
              while maintaining the actual data values.
            </Text>
          ),
        },
        {
          key: "purpose",
          label: "Purpose",
          content: (
            <Text>
              Show distribution within a group and identify patterns/outliers.
            </Text>
          ),
        },
        {
          key: "whenToUse",
          label: "When to Use",
          content: (
            <Text>
              Useful for visualizing distribution and highlighting key
              characteristics, especially in smaller datasets where individual
              values are of interest.
            </Text>
          ),
        },
        {
          key: "variables",
          label: "Independent Variable",
          content: (
            <Text>
              <strong>Independent Variable:</strong> Generally used for single
              continuous variables.
            </Text>
          ),
        },
        {
          key: "datasetSize",
          label: "Dataset Size",
          content: (
            <Text>
              Small (up to 30 subjects), Moderate (31 to 100 subjects).
            </Text>
          ),
        },
        {
          key: "strengths",
          label: "Strengths",
          content: (
            <Text>
              Provides a concise and organized display of data distribution
              while preserving the original values. Offers insight into the
              shape, central tendency, and variability of the dataset.
            </Text>
          ),
        },
        {
          key: "weaknesses",
          label: "Weaknesses",
          content: (
            <Text>
              Time-consuming to construct for large datasets. Less suitable for
              datasets with many identical or similar values.
            </Text>
          ),
        },
      ]}
    />
  );
}
