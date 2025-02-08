import CoxRegression from "../../../components/stepComponents/CoxRegression";
import LifeTable from "../../../components/stepComponents/LifeTable";
import KaplanMeier from "../../../components/stepComponents/KaplanMeier";

import { COMPARISON_OF_GROUPS } from "../ids";
import { TTE } from "../../ids";
import * as ids from "./ids";
import { TreeNode } from "../../types";

const tree: Record<string, TreeNode> = {
  [COMPARISON_OF_GROUPS]: {
    type: "question",
    title: "Select the desired survival analysis method",
    component: () =>
      "Choose the method that best matches the type of survival data analysis required.",
    choices: [
      {
        answer: "Kaplan-Meier Analysis with Log Rank test",
        next: ids.KAPLAN_MEIER,
        option_description:
          "Estimates survival probabilities and compares survival curves across groups",
      },
      {
        answer: "Life Table Analysis with Wilcoxon-Gehan test",
        next: ids.LIFE_WILCOXON,
        option_description:
          "Summarizes survival data in intervals and tests for differences in survival",
      },
      {
        answer: "Cox regression",
        next: ids.COX_REGRESSION,
        option_description:
          "Models the relationship between survival time and predictor variables",
      },
    ],
    color: "blue-lighten-2",
    inputs: [TTE],
  },

  [ids.KAPLAN_MEIER]: {
    type: "statement",
    title: "Kaplan-Meier Analysis with Log Rank test",
    flowChartTitle: "Kaplan-Meier Analysis with Log Rank test",
    component: KaplanMeier,
    color: "blue-darken-2",
    inputs: [COMPARISON_OF_GROUPS],
  },

  [ids.LIFE_WILCOXON]: {
    type: "statement",
    title: "Life Table Analysis with Wilcoxon-Gehan test",
    flowChartTitle: "Life Table Analysis with Wilcoxon-Gehan test",
    component: LifeTable,
    color: "blue-darken-2",
    inputs: [COMPARISON_OF_GROUPS],
  },

  [ids.COX_REGRESSION]: {
    type: "statement",
    title: "Cox regression",
    flowChartTitle: "Cox regression",
    component: CoxRegression,
    color: "blue-darken-2",
    inputs: [COMPARISON_OF_GROUPS],
  },
};

export default tree;
