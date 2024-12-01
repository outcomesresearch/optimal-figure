import RandomAllocationDescription from "../../components/stepComponents/RandomAllocationDescription";

import correlationContinousMeasureTree from "./correlationContinuousMeasure/tree";
import comparisonOfTwoGroupsTree from "./comparisonGroups/tree";
import multiVariableAnalysisTree from "./multiVariableAnalysis/tree";

import { TTE } from "../ids";
import * as ids from "./ids";

const tree = {
  [TTE]: {
    type: "question",
    title: "What is the focus of analysis?",
    component: RandomAllocationDescription,
    choices: [
      {
        answer: "Correlation with continuous variable",
        next: ids.CORRELATION_WITH_CONTINUOUS_VARIABLE,
      },
      {
        answer: "Comparison of groups of a categorical level variable",
        next: ids.COMPARISON_OF_GROUPS_CATEGORICAL,
      },
      {
        answer: "Multivariable analysis",
        next: ids.MULTIVARIABLE_ANALYSIS,
      },
    ],
    inputs: [ids],
  },
  ...correlationContinousMeasureTree,
  ...comparisonOfTwoGroupsTree,
  ...multiVariableAnalysisTree,
};

export default tree;
