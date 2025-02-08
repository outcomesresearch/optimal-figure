import FocusOfAnalysis from "../../components/stepComponents/FocusOfAnalysis";

import correlationContinuousMeasureTree from "./correlationContinuousMeasure/tree";
import comparisonOfTwoGroupsTree from "./comparisonGroups/tree";
import multiVariableAnalysisTree from "./multiVariableAnalysis/tree";

import { ROOT, TTE } from "../ids";
import * as ids from "./ids";
import { TreeNode } from "../types";

const tree: Record<string, TreeNode> = {
  [TTE]: {
    type: "question",
    title: "What is the focus of analysis?",
    component: FocusOfAnalysis,
    choices: [
      {
        answer: "Correlation with continuous variable",
        next: ids.CORRELATION_WITH_CONTINUOUS_VARIABLE,
        option_description:
          "Studying the relationship between continuous variables",
      },
      {
        answer: "Comparison of groups of a categorical level variable",
        next: ids.COMPARISON_OF_GROUPS,
        option_description: "",
      },
      {
        answer: "Multivariable analysis",
        next: ids.MULTIVARIABLE_ANALYSIS,
        option_description:
          "Analyzing the effect of multiple variables on an outcome",
      },
    ],
    inputs: [ROOT],
  },
  ...correlationContinuousMeasureTree,
  ...comparisonOfTwoGroupsTree,
  ...multiVariableAnalysisTree,
};

export default tree;
