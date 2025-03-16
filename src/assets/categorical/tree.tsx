import IconArray from "../../components/figures/IconArray";
import VerticalBarGraph from "../../components/figures/VerticalBarGraph";
import StackedBarGraph from "../../components/figures/StackedBarGraph";
import HorizontalBarGraph from "../../components/figures/HorizontalBarGraph";
import MosaicPlot from "../../components/figures/MosaicPlot";
import * as ids from "./ids";
import { TreeNode } from "../types.ts";
import { CATEGORICAL, ROOT } from "../ids.ts";

const tree: Record<string, TreeNode> = {
  [CATEGORICAL]: {
    type: "question",
    title: "What is the Independent Variable Type?",
    inputs: [ROOT],
    component: () => "",
    choices: [
      {
        answer: "Categorical, Dichotomous, or Nominal",
        next: ids.INDEPENDENT_CAT,
        option_description:
          "The independent variable is categorical, dichotomous, or nominal.",
      },
      {
        answer: "Continuous",
        next: ids.INDEPENDENT_CONT,
        option_description: "The independent variable is continuous.",
      },
    ],
  },
  [ids.INDEPENDENT_CAT]: {
    type: "question",
    title: "What is the dataset size?",
    inputs: [CATEGORICAL],
    component: () => "",
    choices: [
      {
        answer: "≤ 30",
        next: ids.CHOOSE_SMALL_CAT,
        option_description: "Few data points (small dataset).",
      },
      {
        answer: "> 30 and ≤ 100",
        next: ids.CHOOSE_MEDIUM_CAT,
        option_description: "Moderate number of data points.",
      },
      {
        answer: "> 100",
        next: ids.CHOOSE_LARGE_CAT,
        option_description: "Large dataset with many data points.",
      },
    ],
  },

  [ids.CHOOSE_SMALL_CAT]: {
    type: "question",
    title: "Choose between the following visualizations:",
    inputs: [ids.INDEPENDENT_CAT],
    component: () => "",
    choices: [
      {
        answer: "Icon Array",
        next: ids.FIG_ICON_ARRAY,
        option_description: "An icon-based visualization for small datasets.",
      },
      {
        answer: "Mosaic Plot",
        next: ids.FIG_MOSAIC_PLOT,
        option_description:
          "A visualization showing relationships between categories.",
      },
    ],
  },
  [ids.CHOOSE_MEDIUM_CAT]: {
    type: "question",
    title: "Choose between the following visualizations:",
    inputs: [ids.INDEPENDENT_CAT],
    component: () => "",
    choices: [
      {
        answer: "Vertical Bar Graph",
        next: ids.FIG_VERTICAL_BAR,
        option_description: "A bar chart comparing different categories.",
      },
      {
        answer: "Mosaic Plot",
        next: ids.FIG_MOSAIC_PLOT,
        option_description:
          "A visualization showing relationships between categories.",
      },
    ],
  },
  [ids.CHOOSE_LARGE_CAT]: {
    type: "question",
    title: "Choose between the following visualizations:",
    inputs: [ids.INDEPENDENT_CAT],
    component: () => "",
    choices: [
      {
        answer: "Stacked Bar Graph",
        next: ids.FIG_STACKED_BAR,
        option_description: "A stacked bar graph showing category composition.",
      },
      {
        answer: "Mosaic Plot",
        next: ids.FIG_MOSAIC_PLOT,
        option_description:
          "A visualization showing relationships between categories.",
      },
    ],
  },

  [ids.INDEPENDENT_CONT]: {
    type: "question",
    title: "What is the dataset size?",
    inputs: [CATEGORICAL],
    component: () => "",
    choices: [
      {
        answer: "≤ 30",
        next: ids.FIG_HORIZONTAL_BAR,
        option_description: "Few data points (small dataset).",
      },
      {
        answer: "> 30 and ≤ 100",
        next: ids.FIG_STACKED_BAR,
        option_description: "Moderate number of data points.",
      },
    ],
  },

  [ids.FIG_ICON_ARRAY]: {
    type: "statement",
    title: "Icon Array",
    flowChartTitle: "Icon Array",
    component: IconArray,
    inputs: [ids.CHOOSE_SMALL_CAT],
  },
  [ids.FIG_VERTICAL_BAR]: {
    type: "statement",
    title: "Vertical Bar Graph",
    flowChartTitle: "Vertical Bar Graph",
    component: VerticalBarGraph,
    inputs: [ids.CHOOSE_MEDIUM_CAT],
  },
  [ids.FIG_STACKED_BAR]: {
    type: "statement",
    title: "Stacked Bar Graph",
    flowChartTitle: "Stacked Bar Graph",
    component: StackedBarGraph,
    inputs: [ids.CHOOSE_LARGE_CAT, ids.INDEPENDENT_CONT],
  },
  [ids.FIG_HORIZONTAL_BAR]: {
    type: "statement",
    title: "Horizontal Bar Graph",
    flowChartTitle: "Horizontal Bar Graph",
    component: HorizontalBarGraph,
    inputs: [ids.INDEPENDENT_CONT],
  },
  [ids.FIG_MOSAIC_PLOT]: {
    type: "statement",
    title: "Mosaic Plot",
    flowChartTitle: "Mosaic Plot",
    component: MosaicPlot,
    inputs: [ids.CHOOSE_SMALL_CAT, ids.CHOOSE_MEDIUM_CAT, ids.CHOOSE_LARGE_CAT],
  },
};

export default tree;
