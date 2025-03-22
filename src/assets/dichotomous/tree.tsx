import AreaChart from "../../components/figures/AreaChart";
import BarChart from "../../components/figures/BarChart.tsx";
import BoxWhiskerPlot from "../../components/figures/BoxWhiskerPlot";
import DotPlot from "../../components/figures/DotPlot.tsx";
import ROCCurve from "../../components/figures/ROCCurve";
import MapFigure from "../../components/figures/MapFigure";
import GroupedBarChart from "../../components/figures/GroupedBarChart";
import HeatMap from "../../components/figures/HeatMap.tsx";
import Histogram from "../../components/figures/Histogram";
import LineGraph from "../../components/figures/LineGraph";
import GroupedBoxPlots from "../../components/figures/BoxWhiskerPlot";
import ScatterPlot from "../../components/figures/ScatterPlot";
import KaplanMeier from "../../components/figures/KaplanMeier";
import StackedBarGraph from "../../components/figures/StackedBarGraph";
import ViolinPlot from "../../components/figures/ViolinPlot";
import * as ids from "./ids";
import { TreeNode } from "../types.ts";
import { DICHOTOMOUS, ROOT } from "../ids.ts";

// Define the refactored tree with option_description for each choice,
// and with Moderate and Large merged into one option.
const tree: Record<string, TreeNode> = {
  [DICHOTOMOUS]: {
    type: "question",
    title: "What is the purpose of the visualization?",
    inputs: [ROOT],
    component: () => "",
    choices: [
      {
        answer: "Highlight individual values",
        next: ids.DATASET_SIZE_HIGHLIGHT,
        option_description:
          "Emphasize specific data points to draw attention to individual values.",
      },
      {
        answer: "Show Trends Over Time",
        next: ids.CHOOSE_TRENDS,
        option_description: "Visualize how data changes over time.",
      },
      {
        answer: "Compare Distribution Within a Group",
        next: ids.CHOOSE_COMPARE_DISTRIBUTION_WITHIN,
        option_description: "Examine the spread of data within a single group.",
      },
      {
        answer: "Show Relationship Between Variables",
        next: ids.CHOOSE_RELATIONSHIP,
        option_description:
          "Display the relationship or correlation between variables.",
      },
      {
        answer: "Compare Distribution Across Two Groups",
        next: ids.CHOOSE_COMPARE_TWO_GROUPS,
        option_description:
          "Compare data distributions side-by-side for two groups.",
      },
      {
        answer: "Compare Distribution Across More Than Two Groups",
        next: ids.CHOOSE_COMPARE_MORE_THAN_TWO,
        option_description:
          "Analyze and compare multiple groups simultaneously.",
      },
      {
        answer: "Identify Patterns and Outliers",
        next: ids.CHOOSE_IDENTIFY_OUTLIERS,
        option_description: "Detect trends and anomalies in your data.",
      },
      {
        answer: "Demonstrate Change in Data Over Space",
        next: ids.CHOOSE_CHANGE_OVER_SPACE,
        option_description: "Show spatial variations and trends using maps.",
      },
    ],
  },
  [ids.DATASET_SIZE_HIGHLIGHT]: {
    type: "question",
    title: "What is the size of the dataset?",
    inputs: [DICHOTOMOUS],
    component: () => "",
    choices: [
      {
        answer: "Small",
        next: ids.CHOOSE_HIGHLIGHT_SMALL,
        option_description: "Few data points (small dataset).",
      },
      {
        answer: "Moderate or Large",
        next: ids.CHOOSE_HIGHLIGHT_MODERATE_LARGE,
        option_description: "Moderate or large dataset with many data points.",
      },
    ],
  },
  [ids.CHOOSE_HIGHLIGHT_SMALL]: {
    type: "question",
    title: "These approaches are suitable:",
    inputs: [ids.DATASET_SIZE_HIGHLIGHT],
    component: () => "",
    choices: [
      {
        answer: "Bar Chart",
        next: ids.BAR_CHART,
        option_description: "A bar chart to compare individual values.",
      },
      {
        answer: "Dot Plot",
        next: ids.DOT_PLOT,
        option_description: "A dot plot to visualize each data point.",
      },
    ],
  },
  [ids.CHOOSE_HIGHLIGHT_MODERATE_LARGE]: {
    type: "question",
    title: "These approaches are suitable:",
    inputs: [ids.DATASET_SIZE_HIGHLIGHT],
    component: () => "",
    choices: [
      {
        answer: "Bar Chart with Error Bars",
        next: ids.BAR_CHART_WITH_ERROR_BARS,
        option_description:
          "Bar chart that includes error bars to show variability.",
      },
      {
        answer: "Box Plot",
        next: ids.BOX_PLOT,
        option_description:
          "Box plot to summarize distribution and identify outliers.",
      },
    ],
  },
  [ids.CHOOSE_COMPARE_DISTRIBUTION_WITHIN]: {
    type: "question",
    title: "These approaches are suitable:",
    inputs: [DICHOTOMOUS],
    component: () => "",
    choices: [
      {
        answer: "Histogram",
        next: ids.HISTOGRAM,
        option_description: "Histogram to show frequency distribution of data.",
      },
      {
        answer: "Violin Plot",
        next: ids.VIOLIN_PLOT,
        option_description: "Violin plot to show density and distribution.",
      },
    ],
  },
  [ids.CHOOSE_RELATIONSHIP]: {
    type: "question",
    title: "These approaches are suitable:",
    inputs: [DICHOTOMOUS],
    component: () => "",
    choices: [
      {
        answer: "Scatter Plot",
        next: ids.SCATTER_PLOT,
        option_description:
          "Scatter plots display the correlation between variables.",
      },
      {
        answer: "Line Graph",
        next: ids.LINE_GRAPH,
        option_description: "Line graphs illustrate trends in relationships.",
      },
    ],
  },
  [ids.CHOOSE_COMPARE_TWO_GROUPS]: {
    type: "question",
    title: "These approaches are suitable:",
    inputs: [DICHOTOMOUS],
    component: () => "",
    choices: [
      {
        answer: "Side-by-Side Box Plot",
        next: ids.SIDE_BY_SIDE_BOX_PLOT,
        option_description: "Box plots displayed side by side for two groups.",
      },
      {
        answer: "Grouped Bar Chart",
        next: ids.GROUPED_BAR_CHART,
        option_description:
          "Bar chart with grouped bars for two distinct groups.",
      },
    ],
  },
  [ids.CHOOSE_COMPARE_MORE_THAN_TWO]: {
    type: "question",
    title: "These approaches are suitable:",
    inputs: [DICHOTOMOUS],
    component: () => "",
    choices: [
      {
        answer: "Multiple Box Plots",
        next: ids.MULTIPLE_BOX_PLOTS,
        option_description: "Box plots for comparing multiple groups.",
      },
      {
        answer: "Stacked Bar Chart",
        next: ids.STACKED_BAR_CHART,
        option_description:
          "Stacked bar chart to show cumulative totals across groups.",
      },
    ],
  },
  [ids.CHOOSE_CHANGE_OVER_SPACE]: {
    type: "question",
    title: "These approaches are suitable:",
    inputs: [DICHOTOMOUS],
    component: () => "",
    choices: [
      {
        answer: "Heat Map",
        next: ids.HEAT_MAP,
        option_description:
          "Heat maps illustrate data intensity across regions.",
      },
      {
        answer: "Geographic Map",
        next: ids.GEOGRAPHIC_MAP,
        option_description: "Map-based visualization for spatial data.",
      },
    ],
  },
  [ids.CHOOSE_IDENTIFY_OUTLIERS]: {
    type: "question",
    title: "What is the type of independent variable?",
    inputs: [DICHOTOMOUS],
    component: () => "",
    choices: [
      {
        answer: "Categorical or Dichotomous",
        next: ids.INDEPENDENT_CAT,
        option_description:
          "The independent variable is categorical or dichotomous.",
      },
      {
        answer: "Continuous",
        next: ids.SCATTER_PLOT_WITH_TREND_LINES_2,
        option_description: "The independent variable is continuous.",
      },
    ],
  },
  [ids.INDEPENDENT_CAT]: {
    type: "question",
    title: "What is the size of the dataset?",
    inputs: [ids.CHOOSE_IDENTIFY_OUTLIERS],
    component: () => "",
    choices: [
      {
        answer: "Small",
        next: ids.SCATTER_PLOT_WITH_TREND_LINES,
        option_description: "Few data points (small dataset).",
      },
      {
        answer: "Moderate or Large",
        next: ids.ROC_CURVE,
        option_description: "Moderate or large dataset with many data points.",
      },
    ],
  },
  [ids.CHOOSE_TRENDS]: {
    type: "question",
    title: "What is the type of independent variable?",
    inputs: [DICHOTOMOUS],
    component: () => "",
    choices: [
      {
        answer: "Categorical or Dichotomous",
        next: ids.INDEPENDENT_CAT_TRENDS,
        option_description:
          "The independent variable is categorical or dichotomous.",
      },
      {
        answer: "Continuous",
        next: ids.LINE_GRAPH,
        option_description: "The independent variable is continuous.",
      },
    ],
  },
  [ids.INDEPENDENT_CAT_TRENDS]: {
    type: "question",
    title: "What is the size of the dataset?",
    inputs: [ids.CHOOSE_TRENDS],
    component: () => "",
    choices: [
      {
        answer: "Small",
        next: ids.LINE_GRAPH,
        option_description: "Few data points (small dataset).",
      },
      {
        answer: "Moderate or Large",
        next: ids.KAPLAN_MEIER,
        option_description: "Moderate or large dataset with many data points.",
      },
    ],
  },
  [ids.BAR_CHART]: {
    type: "statement",
    title: "Bar Chart",
    flowChartTitle: "Bar Chart",
    component: BarChart,
    inputs: [ids.CHOOSE_HIGHLIGHT_SMALL],
  },
  [ids.ROC_CURVE]: {
    type: "statement",
    title: "ROC Curve",
    flowChartTitle: "ROC Curve",
    component: ROCCurve,
    inputs: [ids.INDEPENDENT_CAT],
  },
  [ids.DOT_PLOT]: {
    type: "statement",
    title: "Dot Plot",
    flowChartTitle: "Dot Plot",
    component: DotPlot,
    inputs: [ids.CHOOSE_HIGHLIGHT_SMALL],
  },
  [ids.BAR_CHART_WITH_ERROR_BARS]: {
    type: "statement",
    title: "Bar Chart with Error Bars",
    flowChartTitle: "Bar Chart with Error Bars",
    component: BoxWhiskerPlot,
    inputs: [ids.CHOOSE_HIGHLIGHT_MODERATE_LARGE],
  },
  [ids.BOX_PLOT]: {
    type: "statement",
    title: "Box Plot",
    flowChartTitle: "Box Plot",
    component: BoxWhiskerPlot,
    inputs: [ids.CHOOSE_HIGHLIGHT_MODERATE_LARGE],
  },
  [ids.LINE_GRAPH]: {
    type: "statement",
    title: "Line Graph",
    flowChartTitle: "Line Graph",
    component: LineGraph,
    inputs: [
      ids.CHOOSE_TRENDS,
      ids.CHOOSE_RELATIONSHIP,
      ids.INDEPENDENT_CAT_TRENDS,
    ],
  },
  [ids.KAPLAN_MEIER]: {
    type: "statement",
    title: "Kaplan-Meier Curve",
    flowChartTitle: "Kaplan-Meier Curve",
    component: KaplanMeier,
    inputs: [ids.INDEPENDENT_CAT_TRENDS],
  },
  [ids.AREA_CHART]: {
    type: "statement",
    title: "Area Chart",
    flowChartTitle: "Area Chart",
    component: AreaChart,
    inputs: [ids.CHOOSE_TRENDS],
  },
  [ids.HISTOGRAM]: {
    type: "statement",
    title: "Histogram",
    flowChartTitle: "Histogram",
    component: Histogram,
    inputs: [ids.CHOOSE_COMPARE_DISTRIBUTION_WITHIN],
  },
  [ids.VIOLIN_PLOT]: {
    type: "statement",
    title: "Violin Plot",
    flowChartTitle: "Violin Plot",
    component: ViolinPlot,
    inputs: [ids.CHOOSE_COMPARE_DISTRIBUTION_WITHIN],
  },
  [ids.SCATTER_PLOT]: {
    type: "statement",
    title: "Scatter Plot",
    flowChartTitle: "Scatter Plot",
    component: ScatterPlot,
    inputs: [ids.CHOOSE_RELATIONSHIP],
  },
  [ids.SIDE_BY_SIDE_BOX_PLOT]: {
    type: "statement",
    title: "Side-by-Side Box Plot",
    flowChartTitle: "Side-by-Side Box Plot",
    component: BoxWhiskerPlot,
    inputs: [ids.CHOOSE_COMPARE_TWO_GROUPS],
  },
  [ids.GROUPED_BAR_CHART]: {
    type: "statement",
    title: "Grouped Bar Chart",
    flowChartTitle: "Grouped Bar Chart",
    component: GroupedBarChart,
    inputs: [ids.CHOOSE_COMPARE_TWO_GROUPS],
  },
  [ids.MULTIPLE_BOX_PLOTS]: {
    type: "statement",
    title: "Multiple Box Plots",
    flowChartTitle: "Multiple Box Plots",
    component: GroupedBoxPlots,
    inputs: [ids.CHOOSE_COMPARE_MORE_THAN_TWO],
  },
  [ids.STACKED_BAR_CHART]: {
    type: "statement",
    title: "Stacked Bar Graph",
    flowChartTitle: "Stacked Bar Graph",
    component: StackedBarGraph,
    inputs: [ids.CHOOSE_COMPARE_MORE_THAN_TWO],
  },
  [ids.SCATTER_PLOT_WITH_TREND_LINES]: {
    type: "statement",
    title: "Scatter Plot with Trend Lines",
    flowChartTitle: "Scatter Plot with Trend Lines",
    component: ScatterPlot,
    inputs: [ids.INDEPENDENT_CAT],
  },
  [ids.SCATTER_PLOT_WITH_TREND_LINES_2]: {
    type: "statement",
    title: "Scatter Plot with Trend Lines",
    flowChartTitle: "Scatter Plot with Trend Lines",
    component: ScatterPlot,
    inputs: [ids.CHOOSE_IDENTIFY_OUTLIERS],
  },
  [ids.HEAT_MAP]: {
    type: "statement",
    title: "Heat Map",
    flowChartTitle: "Heat Map",
    component: HeatMap,
    inputs: [ids.CHOOSE_CHANGE_OVER_SPACE],
  },
  [ids.GEOGRAPHIC_MAP]: {
    type: "statement",
    title: "Geographic Map",
    flowChartTitle: "Geographic Map",
    component: MapFigure,
    inputs: [ids.CHOOSE_CHANGE_OVER_SPACE],
  },
};

export default tree;
