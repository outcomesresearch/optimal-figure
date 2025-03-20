import { Text, Stack } from "@mantine/core";
import TabLayout from "../layout/TabLayout";

export default function HeatmapTabs() {
  return (
    <TabLayout
      description="A heatmap is a graphical representation of data where individual values contained in a matrix are represented as colors. The intensity of the color often represents the magnitude of the value in the data set, with different colors or shades used to signify various ranges of values. Heatmaps are versatile and powerful tools for visual representation of complex datasets where pattern recognition and comparison are key."
      imageLink={`${import.meta.env.BASE_URL}images/heatMap.png`}
      tabsConfiguration={[
        {
          key: "characteristics",
          label: "Characteristics",
          content: <Text>Uses color to represent data values.</Text>,
        },
        {
          key: "purpose",
          label: "Purpose",
          content: (
            <Text>Identify patterns and outliers in large datasets.</Text>
          ),
        },
        {
          key: "whenToUse",
          label: "When to Use",
          content: (
            <Stack>
              <Text>
                <strong>Pattern & Outlier Identification:</strong> Identify
                patterns and outliers.
              </Text>
            </Stack>
          ),
        },
        {
          key: "variables",
          label: "Independent Variables",
          content: (
            <Stack>
              <Text>
                <strong>Independent Variable:</strong> Categorical (More than
                Two-level), Nominal (More than Two-level).
              </Text>
            </Stack>
          ),
        },
        {
          key: "datasetSize",
          label: "Dataset Size",
          content: <Text>Best for Large datasets.</Text>,
        },
        {
          key: "strengths",
          label: "Strengths",
          content: (
            <Stack>
              <Text>
                <strong>Intuitive Visual Representation:</strong> Colors provide
                an immediate and intuitive way to understand large sets of data
                at a glance, making patterns, correlations, and trends easily
                recognizable.
              </Text>
              <Text>
                <strong>Detailed Data Visualization:</strong> Capable of
                displaying large volumes of data in a compact format, useful for
                identifying hotspots or clusters within the data.
              </Text>
              <Text>
                <strong>Comparative Analysis:</strong> Facilitates comparative
                analysis by allowing viewers to easily compare different data
                points and ascertain their relationships based on color
                intensity.
              </Text>
              <Text>
                <strong>Customizable:</strong> Highly customizable in terms of
                color gradients, scales, and annotations, enabling better
                alignment with the specific needs and aesthetic preferences of
                the analysis.
              </Text>
              <Text>
                <strong>Integration with Statistical Methods:</strong> Often
                used in conjunction with statistical analyses or machine
                learning outputs, such as correlation matrices or feature
                importance in model training.
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
                <strong>Color Perception Issues:</strong> Can be problematic for
                individuals with color vision deficiencies. Choosing the right
                color palette is crucial to ensure accessibility.
              </Text>
              <Text>
                <strong>Quantitative Precision:</strong> Less effective for
                precise quantitative comparisons, as the intensity of color may
                not convey exact values without a corresponding color scale or
                legend.
              </Text>
              <Text>
                <strong>Overcrowding with Large Datasets:</strong> Can become
                overcrowded and hard to interpret if the dataset is too large or
                complex, leading to an overwhelming visual display.
              </Text>
              <Text>
                <strong>Interpretation Complexity:</strong> May require some
                training or experience to interpret correctly, as color
                gradients can sometimes be misleading without proper context.
              </Text>
              <Text>
                <strong>Misleading Due to Scale:</strong> The choice of color
                scale can dramatically affect interpretation, and poor scaling
                choices can obscure important details or exaggerate less
                significant differences.
              </Text>
            </Stack>
          ),
        },
      ]}
    />
  );
}
