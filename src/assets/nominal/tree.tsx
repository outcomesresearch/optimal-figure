import BarChart from "../../components/figures/BarChart";
import Graph from "../../components/figures/StackedBarGraph";
import LineChart from "../../components/figures/LineGraph";
import MosaicPlot from "../../components/figures/MosaicPlot";
import GroupedBarChart from "../../components/figures/GroupedBarChart";
import FacetedBarChart from "../../components/figures/FacetedBarChart";
import MapFigure from "../../components/figures/MapFigure";
import Diagram from "../../components/figures/Diagram";
import PieChart from "../../components/figures/PieChart";
import ScatterPlot3D from "../../components/figures/Scatter3D";
import ContourPlot from "../../components/figures/ContourPlot";
import Heatmap from "../../components/figures/HeatMap";
import * as ids from "./ids";
import { TreeNode } from "../types.ts";
import { ROOT, NOMINAL } from "../ids.ts";

const tree: Record<string, TreeNode> = {
  [NOMINAL]: {
    type: "question",
    title: "What is the type of independent variable?",
    inputs: [ROOT],
    component: () => "",
    choices: [
      {
        answer: "Continuous",
        next: ids.INDEPENDENT_CONT,
        option_description:
          "A numerical variable that can take on infinite values.",
      },
      {
        answer: "Categorical, Nominal, or Dichotomous",
        next: ids.INDEPENDENT_NOMINAL,
        option_description:
          "A type of independent variable with distinct labels but no inherent order.",
      },
    ],
  },

  // Nominal Independent Variable
  [ids.INDEPENDENT_NOMINAL]: {
    type: "question",
    title: "What is the purpose of the visualization?",
    inputs: [NOMINAL],
    component: () => "",
    choices: [
      {
        answer: "Highlight Individual Values",
        next: ids.FIG_BAR_CHART,
        option_description: "Compare individual categories against each other.",
      },
      {
        answer: "Compare Distribution Within a Group",
        next: ids.NOMINAL_DISTRIBUTION,
        option_description:
          "Show how values are distributed within a single category.",
      },
      {
        answer: "Compare Distribution Across Two Groups",
        next: ids.FIG_GROUPED_BAR_CHART,
        option_description: "Compare distributions between two groups.",
      },
      {
        answer: "Compare Distribution Across More Than Two Groups",
        next: ids.FIG_FACETED_BAR_CHART,
        option_description:
          "Compare multiple group distributions side-by-side.",
      },
      {
        answer: "Identify Patterns and Outliers",
        next: ids.NOMINAL_PATTERNS,
        option_description:
          "Detect unusual patterns or outliers in nominal data.",
      },
      {
        answer: "Demonstrate Change in Data Over Space",
        next: ids.FIG_MAP,
        option_description: "Show geographic distribution or movement of data.",
      },
      {
        answer: "Illustrate a Concept or Theory",
        next: ids.FIG_DIAGRAM,
        option_description: "Explain abstract concepts using diagrams.",
      },
    ],
  },
  [ids.NOMINAL_DISTRIBUTION]: {
    type: "question",
    title: "What is the dataset size?",
    inputs: [ids.INDEPENDENT_NOMINAL],
    component: () => "",
    choices: [
      {
        answer: "≤ 30",
        next: ids.FIG_PIE_CHART,
        option_description: "Few data points (small dataset).",
      },
      {
        answer: "> 30",
        next: ids.FIG_STACKED_BAR_GRAPH,
        option_description: "Moderate or large number of data points.",
      },
    ],
  },
  [ids.NOMINAL_PATTERNS]: {
    type: "question",
    title: "What is the dataset size?",
    inputs: [ids.INDEPENDENT_NOMINAL],
    component: () => "",
    choices: [
      {
        answer: "≤ 100",
        next: ids.FIG_MOSAIC_PLOT,
        option_description: "Small or moderate number of data points.",
      },
      {
        answer: "> 100",
        next: ids.FIG_HEATMAP,
        option_description: "Large number of data points.",
      },
    ],
  },

  // Continuous Independent Variable
  [ids.INDEPENDENT_CONT]: {
    type: "question",
    title: "What is the purpose of the visualization?",
    inputs: [NOMINAL],
    component: () => "",
    choices: [
      {
        answer: "Show Trends Over Time",
        next: ids.FIG_LINE_CHART,
        option_description:
          "Visualize changes to data over time to identify patterns and trends.",
      },
      {
        answer: "Show Relationship Between Variables",
        next: ids.CONTINUOUS_DATASET_SIZE,
        option_description:
          "Show how values are distributed within a single category.",
      },
    ],
  },
  [ids.CONTINUOUS_DATASET_SIZE]: {
    type: "question",
    title: "What is the dataset size?",
    inputs: [ids.INDEPENDENT_CONT],
    component: () => "",
    choices: [
      {
        answer: "≤ 30",
        next: ids.FIG_CONTOUR_PLOT,
        option_description: "Few data points (small dataset).",
      },
      {
        answer: "> 30",
        next: ids.FIG_3D_SCATTER_PLOT,
        option_description: "Moderate or large number of data points.",
      },
    ],
  },
  // === Terminal Nodes (Leaves) ===
  [ids.FIG_BAR_CHART]: {
    type: "statement",
    title: "Bar Chart",
    flowChartTitle: "Bar Chart",
    component: BarChart,
    inputs: [ids.INDEPENDENT_NOMINAL],
  },
  [ids.FIG_STACKED_BAR_GRAPH]: {
    type: "statement",
    title: "Stacked Bar Graph",
    flowChartTitle: "Stacked Bar Graph",
    component: Graph,
    inputs: [ids.NOMINAL_DISTRIBUTION],
  },
  [ids.FIG_LINE_CHART]: {
    type: "statement",
    title: "Line Chart",
    flowChartTitle: "Line Chart",
    component: LineChart,
    inputs: [ids.INDEPENDENT_CONT],
  },
  [ids.FIG_GROUPED_BAR_CHART]: {
    type: "statement",
    title: "Grouped Bar Chart",
    flowChartTitle: "Grouped Bar Chart",
    component: GroupedBarChart,
    inputs: [ids.INDEPENDENT_NOMINAL],
  },
  [ids.FIG_FACETED_BAR_CHART]: {
    type: "statement",
    title: "Faceted Bar Chart",
    flowChartTitle: "Faceted Bar Chart",
    component: FacetedBarChart,
    inputs: [ids.INDEPENDENT_NOMINAL],
  },
  [ids.FIG_MAP]: {
    type: "statement",
    title: "Map",
    flowChartTitle: "Map",
    component: MapFigure,
    inputs: [ids.INDEPENDENT_NOMINAL],
  },
  [ids.FIG_DIAGRAM]: {
    type: "statement",
    title: "Diagram",
    flowChartTitle: "Diagram",
    component: Diagram,
    inputs: [ids.INDEPENDENT_NOMINAL],
  },
  [ids.FIG_PIE_CHART]: {
    type: "statement",
    title: "Pie Chart",
    flowChartTitle: "Pie Chart",
    component: PieChart,
    inputs: [ids.NOMINAL_DISTRIBUTION],
  },
  [ids.FIG_MOSAIC_PLOT]: {
    type: "statement",
    title: "Mosaic Plot",
    flowChartTitle: "Mosaic Plot",
    component: MosaicPlot,
    inputs: [ids.NOMINAL_PATTERNS],
  },
  [ids.FIG_HEATMAP]: {
    type: "statement",
    title: "Heatmap",
    flowChartTitle: "Heatmap",
    component: Heatmap,
    inputs: [ids.NOMINAL_PATTERNS],
  },
  [ids.FIG_3D_SCATTER_PLOT]: {
    type: "statement",
    title: "3D Scatter Plot",
    flowChartTitle: "3D Scatter Plot",
    component: ScatterPlot3D,
    inputs: [ids.CONTINUOUS_DATASET_SIZE],
  },
  [ids.FIG_CONTOUR_PLOT]: {
    type: "statement",
    title: "Contour Plot",
    flowChartTitle: "Contour Plot",
    component: ContourPlot,
    inputs: [ids.CONTINUOUS_DATASET_SIZE],
  },
};

export default tree;
