import LinearRegression from "../../../components/stepComponents/LinearRegression";
import MixedLinearModel from "../../../components/stepComponents/MixedLinearModel";
import PoissonRegression from "../../../components/stepComponents/PoissonRegression";
import OrdinalContinuous from "../../../components/stepComponents/OrdinalContinuous";

import { MULTIVARIABLE_ANALYSIS } from "../ids";
import * as ids from "./ids";

let tree = {
  [MULTIVARIABLE_ANALYSIS]: {
    type: "question",
    title: "Are the linear assumptions met?",
    component: () =>
      "Linear assumptions require a linear relationship between variables, normally distributed residuals, constant variance of errors, and no multicollinearity. These ensure the validity of linear regression results.",
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
    component: () =>
      "Independence of observations implies that each data point is separate and not influenced by others.",
    choices: [
      {
        answer: "Yes",
        next: ids.INDEPENDENT_OBSERVATIONS,
        option_description: "Observations are independent",
      },
      {
        answer: "No",
        next: ids.MIXED_LINEAR_MODEL,
        option_description: "Observations may influence one another",
      },
    ],
    inputs: [ids],
  },

  [ids.INDEPENDENT_OBSERVATIONS]: {
    type: "question",
    title: "Choose a regression method",
    component: () =>
      "These regression approaches are commonly used in multivariable analysis of a continuous outcome measure to model relationships between data.",
    choices: [
      {
        answer: "Poisson Regression",
        next: ids.POISSON_REGRESSION,
        option_description: "Models count data with a constant event rate",
      },
      {
        answer: "Ordinal Regression",
        next: ids.ORDINAL_REGRESSION,
        option_description: "Analyzing ordered categorical outcomes",
      },
    ],
    color: "blue-lighten-2",
    inputs: [ids],
  },

  [ids.LINEAR_REGRESSION]: {
    type: "statement",
    title: "Linear Regression",
    flowChartTitle: "Randomized\nClinical Trial",
    component: LinearRegression,
    color: "blue-darken-2",
    inputs: [ids],
  },

  [ids.MIXED_LINEAR_MODEL]: {
    type: "statement",
    title: "Mixed Linear Model",
    flowChartTitle: "Randomized\nClinical Trial",
    component: MixedLinearModel,
    color: "blue-darken-2",
    inputs: [ids],
  },

  [ids.POISSON_REGRESSION]: {
    type: "statement",
    title: "Poisson Regression",
    flowChartTitle: "Randomized\nClinical Trial",
    component: PoissonRegression,
    color: "blue-darken-2",
    inputs: [ids],
  },

  [ids.ORDINAL_REGRESSION]: {
    type: "statement",
    title: "Ordinal Regression",
    flowChartTitle: "Randomized\nClinical Trial",
    component: OrdinalContinuous,
    color: "blue-darken-2",
    inputs: [ids],
  },
};

export default tree;
