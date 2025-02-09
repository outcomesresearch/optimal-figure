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
      { answer: "Highlight individual values", next: ids.HIGHLIGHT_VALUES },
      { answer: "Show Trends Over Time", next: ids.SHOW_TRENDS },
      {
        answer: "Compare Distribution Within a Group",
        next: ids.COMPARE_WITHIN_GROUP,
      },
      {
        answer: "Show Relationship Between Variables",
        next: ids.SHOW_RELATIONSHIPS,
      },
      {
        answer: "Compare Distribution Across Two Groups",
        next: ids.COMPARE_TWO_GROUPS,
      },
      {
        answer: "Compare Distribution Across More Than Two Groups",
        next: ids.COMPARE_MORE_THAN_TWO_GROUPS,
      },
      { answer: "Identify Patterns and Outliers", next: ids.IDENTIFY_PATTERNS },
      {
        answer: "Demonstrate Change in Data Over Space",
        next: ids.CHANGE_OVER_SPACE,
      },
      {
        answer: "Illustrate a Concept or Theory",
        next: ids.ILLUSTRATE_CONCEPT,
      },
      {
        answer: "Show Interactions Between Factors",
        next: ids.SHOW_INTERACTIONS,
      },
      {
        answer: "Show Individual Trajectories Over Time",
        next: ids.INDIVIDUAL_TRAJECTORIES,
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
