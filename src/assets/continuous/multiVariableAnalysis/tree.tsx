import ExperimentalStudyDescription from "../../../components/stepComponents/ExperimentalStudyDescription";
import RandomAllocationDescription from "../../../components/stepComponents/RandomAllocationDescription";
import RandomizedControlledTrialDescription from "../../../components/stepComponents/RandomizedControlledTrialDescription";

import { MULTIVARIABLE_ANALYSIS } from "../ids";
import * as ids from "./ids";

let tree = {
  [MULTIVARIABLE_ANALYSIS]: {
    type: "question",
    title: "Are the linear assumptions met?",
    component: RandomAllocationDescription,
    choices: [
      {
        answer: "Yes",
        next: ids.LINEAR_REGRESSION,
        option_description: "Linear assumptions are met",
      },
      {
        answer: "No",
        next: ids.NON_INDEPENDENT_OBSERVATIONS,
        option_description: "Linear assumptions are not met",
      },
    ],
    inputs: [ids],
  },

  [ids.NON_INDEPENDENT_OBSERVATIONS]: {
    type: "question",
    title: "Are observations independent?",
    component: RandomAllocationDescription,
    choices: [
      {
        answer: "Yes",
        next: ids.INDEPENDENT_OBSERVATIONS,
        option_description: "Independent observations",
      },
      {
        answer: "No",
        next: ids.MIXED_LINEAR_MODEL,
        option_description: "Non-independent observations",
      },
    ],
    inputs: [ids],
  },

  [ids.INDEPENDENT_OBSERVATIONS]: {
    type: "question",
    title: "ANy of these will work",
    component: ExperimentalStudyDescription,
    choices: [
      {
        answer: "Poisson Regresion",
        next: ids.POISSON_REGRESSION,
        // option_description: "Parametric assumptions are met",
      },
      {
        answer: "Ordinal Regression",
        next: ids.ORDINAL_REGRESSION,
        // option_description: "Non parametric",
      },
    ],
    color: "blue-lighten-2",
    inputs: [ids],
  },

  [ids.LINEAR_REGRESSION]: {
    type: "statement",
    title: "Linear Regression",
    flowChartTitle: "Randomized\nClinical Trial",
    component: RandomizedControlledTrialDescription,
    color: "blue-darken-2",
    inputs: [ids],
  },

  [ids.MIXED_LINEAR_MODEL]: {
    type: "statement",
    title: "Mixed Linear Model",
    flowChartTitle: "Randomized\nClinical Trial",
    component: RandomizedControlledTrialDescription,
    color: "blue-darken-2",
    inputs: [ids],
  },

  [ids.POISSON_REGRESSION]: {
    type: "statement",
    title: "Poisson Regression",
    flowChartTitle: "Randomized\nClinical Trial",
    component: RandomizedControlledTrialDescription,
    color: "blue-darken-2",
    inputs: [ids],
  },

  [ids.ORDINAL_REGRESSION]: {
    type: "statement",
    title: "Ordinal Regression",
    flowChartTitle: "Randomized\nClinical Trial",
    component: RandomizedControlledTrialDescription,
    color: "blue-darken-2",
    inputs: [ids],
  },
};

export default tree;
