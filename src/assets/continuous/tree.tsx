import * as ids from "./ids";
import DotPlot from "../../components/figures/DotPlot";
import ScatterPlot from "../../components/figures/ScatterPlot";
import LineGraph from "../../components/figures/LineGraph";
import StemLeafPlot from "../../components/figures/StemLeafPlot";
import BoxPlot from "../../components/figures/BoxPlot";
import ScatterMatrix from "../../components/figures/ScatterMatrix";
import Scatter3D from "../../components/figures/Scatter3D";
import GroupedBoxPlot from "../../components/figures/GroupedBoxPlot";
import ViolinPlot from "../../components/figures/ViolinPlot";
import ContourPlot from "../../components/figures/ContourPlot";
import HeatMap from "../../components/figures/HeatMap";
import InteractionPlot from "../../components/figures/InteractionPlot";
import SpaghettiPlot from "../../components/figures/SpaghettiPlot";
import BoxWhiskerPlot from "../../components/figures/BoxWhiskerPlot";
import { TreeNode } from "../types";
import { CONTINUOUS, ROOT } from "../ids";

const tree: Record<string, TreeNode> = {
  [CONTINUOUS]: {
    type: "question",
    title: "What is the purpose of the visualization?",
    component: () => "",
    choices: [
      {
        answer: "Highlight individual values",
        next: ids.HIGHLIGHT_VALUES,
        option_description:
          "Emphasize specific data points to draw attention to particular values or anomalies.",
      },
      {
        answer: "Show Trends Over Time",
        next: ids.SHOW_TRENDS,
        option_description:
          "Visualize how data changes across different time periods to identify patterns or fluctuations.",
      },
      {
        answer: "Compare Distribution Within a Group",
        next: ids.COMPARE_WITHIN_GROUP,
        option_description:
          "Compare the spread of data within a single group or category to understand its variation.",
      },
      {
        answer: "Show Relationship Between Variables",
        next: ids.SHOW_RELATIONSHIPS,
        option_description:
          "Display how two or more variables are related or influence each other.",
      },
      {
        answer: "Compare Distribution Across Two Groups",
        next: ids.COMPARE_TWO_GROUPS,
        option_description:
          "Contrast the data distributions between two different groups to identify differences or similarities.",
      },
      {
        answer: "Compare Distribution Across More Than Two Groups",
        next: ids.COMPARE_MORE_THAN_TWO_GROUPS,
        option_description:
          "Analyze and compare the spread of data across multiple groups to highlight key trends and variations.",
      },
      {
        answer: "Identify Patterns and Outliers",
        next: ids.IDENTIFY_PATTERNS,
        option_description:
          "Detect recurring trends or unusual data points that deviate significantly from the rest.",
      },
      {
        answer: "Demonstrate Change in Data Over Space",
        next: ids.CHANGE_OVER_SPACE,
        option_description:
          "Show how data varies across different spatial locations, highlighting geographic or structural patterns.",
      },
      {
        answer: "Illustrate a Concept or Theory",
        next: ids.ILLUSTRATE_CONCEPT,
        option_description:
          "Visualize abstract concepts or theoretical models to make them more tangible and understandable.",
      },
      {
        answer: "Show Interactions Between Factors",
        next: ids.SHOW_INTERACTIONS,
        option_description:
          "Depict how multiple factors influence each other and interact within a system.",
      },
      {
        answer: "Show Individual Trajectories Over Time",
        next: ids.INDIVIDUAL_TRAJECTORIES,
        option_description:
          "Track and display the progress or path of individual data points or subjects over time.",
      },
    ],
    inputs: [ROOT],
  },

  [ids.HIGHLIGHT_VALUES]: {
    type: "question",
    title: "What is the dataset size?",
    component: () => "",
    inputs: [CONTINUOUS],
    choices: [
      { answer: "Small", next: ids.DOT_PLOT },
      { answer: "Moderate or Large", next: ids.SCATTER_PLOT },
    ],
  },

  [ids.DOT_PLOT]: {
    type: "statement",
    title: "Dot Plot",
    flowChartTitle: "Dot Plot",
    component: DotPlot,
    color: "blue-darken-2",
    inputs: [ids.HIGHLIGHT_VALUES],
  },

  [ids.SCATTER_PLOT]: {
    type: "statement",
    title: "Scatter Plot",
    flowChartTitle: "Scatter Plot",
    component: ScatterPlot,
    color: "blue-darken-2",
    inputs: [ids.HIGHLIGHT_VALUES],
  },

  [ids.SHOW_TRENDS]: {
    type: "statement",
    title: "Line Graph",
    flowChartTitle: "Line Graph",
    component: LineGraph,
    color: "blue-darken-2",
    inputs: [CONTINUOUS],
  },

  [ids.COMPARE_WITHIN_GROUP]: {
    type: "question",
    title: "What is the dataset size?",
    component: () => "",
    inputs: [CONTINUOUS],
    choices: [
      { answer: "Small or Moderate", next: ids.STEM_LEAF },
      { answer: "Large", next: ids.BOX_PLOT },
    ],
  },

  [ids.STEM_LEAF]: {
    type: "statement",
    title: "Stem-and-Leaf Plot",
    flowChartTitle: "Stem-and-Leaf Plot",
    component: StemLeafPlot,
    color: "blue-darken-2",
    inputs: [ids.COMPARE_WITHIN_GROUP],
  },

  [ids.BOX_PLOT]: {
    type: "statement",
    title: "Box-and-Whisker Plot",
    flowChartTitle: "Box-and-Whisker Plot",
    component: BoxPlot,
    color: "blue-darken-2",
    inputs: [ids.COMPARE_WITHIN_GROUP],
  },

  [ids.SHOW_RELATIONSHIPS]: {
    type: "question",
    title: "What is the type of independent variable?",
    component: () => "",
    inputs: [CONTINUOUS],
    choices: [
      { answer: "Continuous", next: ids.SCATTER_OR_MATRIX },
      { answer: "Categorical", next: ids.SCATTER_3D },
    ],
  },

  [ids.SCATTER_OR_MATRIX]: {
    type: "question",
    title: "What is the dataset size?",
    component: () => "",
    inputs: [CONTINUOUS],
    choices: [
      { answer: "Small or Moderate", next: ids.SCATTER_PLOT },
      { answer: "Large", next: ids.SCATTER_MATRIX },
    ],
  },

  [ids.SCATTER_MATRIX]: {
    type: "statement",
    title: "Scatter Plot Matrix",
    flowChartTitle: "Scatter Plot Matrix",
    component: ScatterMatrix,
    color: "blue-darken-2",
    inputs: [ids.SCATTER_OR_MATRIX],
  },

  [ids.SCATTER_3D]: {
    type: "statement",
    title: "3D Scatter Plot",
    flowChartTitle: "3D Scatter Plot",
    component: Scatter3D,
    color: "blue-darken-2",
    inputs: [ids.SHOW_RELATIONSHIPS],
  },

  [ids.COMPARE_TWO_GROUPS]: {
    type: "statement",
    title: "Grouped Box Plot",
    flowChartTitle: "Grouped Box Plot",
    component: GroupedBoxPlot,
    color: "blue-darken-2",
    inputs: [CONTINUOUS],
  },

  [ids.COMPARE_MORE_THAN_TWO_GROUPS]: {
    type: "statement",
    title: "Violin Plot",
    flowChartTitle: "Violin Plot",
    component: ViolinPlot,
    color: "blue-darken-2",
    inputs: [CONTINUOUS],
  },

  [ids.CHANGE_OVER_SPACE]: {
    type: "statement",
    title: "Contour Plot",
    flowChartTitle: "Contour Plot",
    component: ContourPlot,
    color: "blue-darken-2",
    inputs: [CONTINUOUS],
  },

  [ids.ILLUSTRATE_CONCEPT]: {
    type: "statement",
    title: "Heat Map",
    flowChartTitle: "Heat Map",
    component: HeatMap,
    color: "blue-darken-2",
    inputs: [CONTINUOUS],
  },

  [ids.SHOW_INTERACTIONS]: {
    type: "statement",
    title: "Interaction Plots",
    flowChartTitle: "Interaction Plots",
    component: InteractionPlot,
    color: "blue-darken-2",
    inputs: [CONTINUOUS],
  },

  [ids.INDIVIDUAL_TRAJECTORIES]: {
    type: "statement",
    title: "Spaghetti Plot",
    flowChartTitle: "Spaghetti Plot",
    component: SpaghettiPlot,
    color: "blue-darken-2",
    inputs: [CONTINUOUS],
  },

  [ids.IDENTIFY_PATTERNS]: {
    type: "statement",
    title: "Box and Whisker Plot",
    flowChartTitle: "Box and Whisker Plot",
    component: BoxWhiskerPlot,
    color: "blue-darken-2",
    inputs: [CONTINUOUS],
  },
};

export default tree;
