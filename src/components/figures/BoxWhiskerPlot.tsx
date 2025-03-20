import { Stack, Text } from "@mantine/core";
import TabLayout from "../layout/TabLayout";

const Component = () => {
  return (
    <TabLayout
      description="A box plot, also known as a box-and-whiskers plot, visualizes data distribution using a five-number summary, helping to compare distributions across groups."
      imageLink="https://archive.cdc.gov/www_cdc_gov/csels/dsepd/ss1978/lesson4/section4_html_files/Figure4.30.jpg"
      tabsConfiguration={[
        {
          key: "characteristics",
          label: "Characteristics",
          content: (
            <Text>
              Box and whiskers plot showing the distribution of data based on a
              five-number summary.
            </Text>
          ),
        },
        {
          key: "purpose",
          label: "Purpose",
          content: (
            <Stack>
              <Text>Compare distribution across two groups.</Text>
              <Text>Compare distribution across more than two groups.</Text>
            </Stack>
          ),
        },
        {
          key: "whenToUse",
          label: "When to Use",
          content: (
            <Stack>
              <Text>
                <strong>Independent Variable:</strong> Categorical
                (Single-level, Two-level, More than Two-level).
              </Text>
              <Text>
                <strong>Dataset Size:</strong> Suitable for Small, Moderate, and
                Large datasets.
              </Text>
            </Stack>
          ),
        },
        {
          key: "strengths",
          label: "Strengths",
          content: (
            <Stack>
              <Text>
                <strong>Visual Summary:</strong> Provides a visual summary of
                data distribution.
              </Text>
              <Text>
                <strong>Key Statistics:</strong> Highlights median, quartiles,
                and outliers effectively.
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
                <strong>Small Dataset Limitation:</strong> Less effective for
                small datasets.
              </Text>
              <Text>
                <strong>Limited Distribution Detail:</strong> Does not show the
                full shape of the distribution for each group.
              </Text>
            </Stack>
          ),
        },
      ]}
    />
  );
};

export default Component;
