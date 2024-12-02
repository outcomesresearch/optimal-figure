import FocusOfAnalysis from "../../components/stepComponents/FocusOfAnalysis.tsx";

import correlationContinuousMeasureTree from "./correlationContinuousMeasure/tree";
import comparisonOfTwoGroupsTree from "./comparisonOf2OrMoreGroups/tree";
import multiVariableAnalysisTree from "./multiVariableAnalysis/tree";

import { CATEGORICAL } from "../ids";
import * as ids from "./ids";

const tree = {
  [CATEGORICAL]: {
    type: "question",
    title: "What is the focus of analysis?",
    component: FocusOfAnalysis,
    choices: [
      {
        answer: "Correlation with continuous measure",
        next: ids.CORRELATION_WITH_CONTINUOUS_VARIABLE,
        option_description:
          "Studying the relationship between continuous variables",
      },
      {
        answer: "Comparison of > 2 groups",
        next: ids.COMPARISON_OF_2_GROUPS,
        option_description: "Studying differences across two or more groups",
      },
      {
        answer: "Multivariable analysis",
        next: ids.MULTIVARIABLE_ANALYSIS,
        option_description:
          "Analyzing the effect of multiple variables on an outcome",
      },
    ],
    inputs: [ids],
  },
  ...correlationContinuousMeasureTree,
  ...comparisonOfTwoGroupsTree,
  ...multiVariableAnalysisTree,
};

export default tree;
