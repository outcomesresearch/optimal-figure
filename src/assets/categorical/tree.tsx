import IconArray from "../../components/figures/IconArray";
import VerticalBarGraph from "../../components/figures/VerticalBarGraph";
import StackedBarGraph from "../../components/figures/StackedBarGraph";
import HorizontalBarGraph from "../../components/figures/HorizontalBarGraph";
import * as ids from "./ids";
import { TreeNode } from "../types.ts";
import { CATEGORICAL, ROOT } from "../ids.ts";

// This tree assumes a categorical dependent variable.
// We ask only for the independent variable type (categorical/dichotomous vs. continuous)
// and for the dataset size, which then determines the recommended figure.
// For independent categorical (or dichotomous) variables:
//    • ≤ 30  → Icon Array
//    • > 30 and ≤ 100 → Vertical Bar Graph
//    • > 100 → Stacked Bar Graph
// For independent continuous variables:
//    • ≤ 30  → Horizontal Bar Graph
//    • > 30 and ≤ 100 → Stacked Bar Graph
// (The >100 option for continuous is not specified.)

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
        next: ids.FIG_ICON_ARRAY,
        option_description: "Few data points (small dataset).",
      },
      {
        answer: "> 30 and ≤ 100",
        next: ids.FIG_VERTICAL_BAR,
        option_description: "Moderate number of data points.",
      },
      {
        answer: "> 100",
        next: ids.FIG_STACKED_BAR,
        option_description: "Large dataset with many data points.",
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
        option_description: "Small dataset – use a horizontal bar graph.",
      },
      {
        answer: "> 30 and ≤ 100",
        next: ids.FIG_STACKED_BAR,
        option_description: "Moderate dataset – use a stacked bar graph.",
      },
      // Additional dataset size ranges for continuous variables could be added if needed.
    ],
  },
  [ids.FIG_ICON_ARRAY]: {
    type: "statement",
    title: "Icon Array",
    flowChartTitle: "Icon Array",
    component: IconArray,
    inputs: [ids.INDEPENDENT_CAT],
  },
  [ids.FIG_VERTICAL_BAR]: {
    type: "statement",
    title: "Vertical Bar Graph",
    flowChartTitle: "Vertical Bar Graph",
    component: VerticalBarGraph,
    inputs: [ids.INDEPENDENT_CAT],
  },
  [ids.FIG_STACKED_BAR]: {
    type: "statement",
    title: "Stacked Bar Graph",
    flowChartTitle: "Stacked Bar Graph",
    component: StackedBarGraph,
    inputs: [ids.INDEPENDENT_CAT, ids.INDEPENDENT_CONT],
  },
  [ids.FIG_HORIZONTAL_BAR]: {
    type: "statement",
    title: "Horizontal Bar Graph",
    flowChartTitle: "Horizontal Bar Graph",
    component: HorizontalBarGraph,
    inputs: [ids.INDEPENDENT_CONT],
  },
};

export default tree;
