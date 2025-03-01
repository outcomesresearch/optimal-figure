// @ts-nocheck
import * as ids from "./ids";

import continuousStudyTree from "./continuous/tree";
import categoricalStudyTree from "./categorical/tree";
import dichotomousStudyRootTree from "./dichotomous/tree";

const addIds = (tree) => {
  return Object.entries(tree).reduce((acc, [key, value]) => {
    acc[key] = { ...value, id: key };
    return acc;
  }, {});
};

let rootTree = {
  [ids.ROOT]: {
    title: "Outcome Measure",
    flowChartTitle:
      "Select the type of outcome variable being analyzed or compared.",
    component: () =>
      "Select the type of outcome variable being analyzed or compared.",
    inputs: [],
    choices: [
      {
        answer: "Continous",
        next: ids.CONTINUOUS,
        option_description:
          "A continuous outcome measure is a type of outcome measure used in clinical studies to quantify changes in a continuous variable such as blood pressure, weight, or height. It is typically analyzed using statistical methods such a mean, median, or regression analysis.",
      },
      {
        answer: "Categorical",
        next: ids.CATEGORICAL,
        option_description:
          "A categorical variable takes on a limited number of discrete values or categories. Categorical variables are often used to represent qualitative or nominal data such as sex, race, disease severity, and treatment group.",
      },
      {
        answer: "Dichotomous",
        next: ids.DICHOTOMOUS,
        option_description:
          "A dichotomous outcome measure is a type of variable with only two possible categories, such as presence or absence of a condition, success or failure, or yes/no responses. It is commonly used in clinical trials and research to compare proportions between groups.",
      },
    ],
  },
  ...continuousStudyTree,
  ...categoricalStudyTree,
  ...dichotomousStudyRootTree,
};

export default addIds(rootTree);
