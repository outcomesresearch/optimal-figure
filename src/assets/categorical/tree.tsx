import RandomAllocationDescription from "../../components/stepComponents/RandomAllocationDescription";

import correlationContinuousMeasureTree from "./correlationContinuousMeasure/tree";
import comparisonOfTwoGroupsTree from "./comparisonOf2OrMoreGroups/tree";
import multiVariableAnalysisTree from "./multiVariableAnalysis/tree";

import { CATEGORICAL } from "../ids";
import * as ids from "./ids";

const tree = {
  [CATEGORICAL]: {
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
        answer: "Comparison of 2 or more groups",
        next: ids.COMPARISON_OF_2_GROUPS,
        option_description: "Comparison of 2 or more groups",
      },
      {
        answer: "Multivariable analysis",
        next: ids.MULTIVARIABLE_ANALYSIS,
        option_description: "Multivariable analysis",
      },
    ],
    inputs: [ids],
  },
  ...correlationContinuousMeasureTree,
  ...comparisonOfTwoGroupsTree,
  ...multiVariableAnalysisTree,
};

export default tree;
