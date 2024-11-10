import RandomAllocationDescription from "../../components/stepComponents/RandomAllocationDescription";

import correlationContinousMeasureTree from "./correlationContinuousMeasure/tree";
import comparisonOfTwoGroupsTree from "./comparisonOf2Groups/tree";
import comparisonOf3MoreGroupsTree from "./comparison3MoreGroups/tree";
import multiVariableAnalysisTree from "./multiVariableAnalysis/tree";

import { CONTINUOUS } from "../ids";
import * as ids from "./ids";

const tree = {
  [CONTINUOUS]: {
    type: "question",
    title: "What is the focus of analysis?",
    component: RandomAllocationDescription,
    choices: [
      {
        answer: "Correlation with continuous measure",
        next: ids.CORRELATION_WITH_CONTINUOUS_VARIABLE,
        option_description: "Correlation with continuous measure",
      },
      {
        answer: "Comparison of 2 groups",
        next: ids.COMPARISON_OF_2_GROUPS,
        option_description: "Comparison of 2 groups",
      },
      {
        answer: "Comparison of 3 or more groups",
        next: ids.COMPARISON_OF_3_OR_MORE_GROUPS,
        option_description: "Comparison of 3 or more groups",
      },
      {
        answer: "Multivariable analysis",
        next: ids.MULTIVARIABLE_ANALYSIS,
        option_description: "Multivariable analysis",
      },
    ],
    inputs: [ids],
  },
  ...correlationContinousMeasureTree,
  ...comparisonOfTwoGroupsTree,
  ...comparisonOf3MoreGroupsTree,
  ...multiVariableAnalysisTree,
};

export default tree;
