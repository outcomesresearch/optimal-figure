import BinaryLogistic from "../../../components/stepComponents/BinaryLogistic";
import PoissonRegression from "../../../components/stepComponents/PoissonRegression";
import NegativeBinomial from "../../../components/stepComponents/NegativeBinomial";
import Multinomial from "../../../components/stepComponents/MultinomialRegression";
import OrdinalCategorical from "../../../components/stepComponents/OrdinalCategorical";

import { MULTIVARIABLE_ANALYSIS } from "../ids";
import { CATEGORICAL } from "../../ids";
import * as ids from "./ids";

let tree = {
  [MULTIVARIABLE_ANALYSIS]: {
    type: "question",
    title: "Which option best describes the dependent variable?",
    component: () => "",
    choices: [
      {
        answer: "Dichotomous",
        next: ids.DICHOTOMOUS,
        option_description: "Dependent variable has two categories",
      },
      {
        answer: "Nominal",
        next: ids.MULTINOMINAL,
        option_description:
          "Dependent variable has more than two categories with no order",
      },
      {
        answer: "Ordinal",
        next: ids.ORDINAL,
        option_description:
          "Dependent variable has ordered categories with more than two levels",
      },
    ],
    inputs: [CATEGORICAL],
  },

  [ids.ORDINAL]: {
    type: "statement",
    title: "Ordinal Regression",
    flowChartTitle: "Randomized\nClinical Trial",
    component: OrdinalCategorical,
    color: "blue-darken-2",
    inputs: [MULTIVARIABLE_ANALYSIS],
  },
  [ids.MULTINOMINAL]: {
    type: "statement",
    title: "Multinomial Regression",
    flowChartTitle: "Randomized\nClinical Trial",
    component: Multinomial,
    color: "blue-darken-2",
    inputs: [MULTIVARIABLE_ANALYSIS],
  },

  [ids.DICHOTOMOUS]: {
    type: "question",
    title: "Choose a regression method",
    component: () =>
      "These regression methods are used in multivariable analysis to model categorical outcomes. Binary Logistic Regression is used for binary outcomes, while Poisson and Negative Binomial regressions model count data with different distribution assumptions.",
    choices: [
      {
        answer: "Binary Logistic Regression",
        next: ids.BINARY_LOGISTIC,
        option_description:
          "Models probability of a binary outcome with predictor variables",
      },
      {
        answer: "Negative Binomial",
        next: ids.NEGATIVE_BINOMIAL,
        option_description: "Models count data with overdispersion",
      },
      {
        answer: "Poisson regression",
        next: ids.POISSON_REGRESSION,
        option_description: "Models count data with a constant event rate",
      },
    ],
    color: "blue-lighten-2",
    inputs: [MULTIVARIABLE_ANALYSIS],
  },

  [ids.BINARY_LOGISTIC]: {
    type: "statement",
    title: "Binary Logistic Regression",
    flowChartTitle: "Randomized\nClinical Trial",
    component: BinaryLogistic,
    color: "blue-darken-2",
    inputs: [ids.DICHOTOMOUS],
  },

  [ids.NEGATIVE_BINOMIAL]: {
    type: "statement",
    title: "Negative Binomial",
    flowChartTitle: "Randomized\nClinical Trial",
    component: NegativeBinomial,
    color: "blue-darken-2",
    inputs: [ids.DICHOTOMOUS],
  },

  [ids.POISSON_REGRESSION]: {
    type: "statement",
    title: "Poisson Regression",
    flowChartTitle: "Randomized\nClinical Trial",
    component: PoissonRegression,
    color: "blue-darken-2",
    inputs: [ids.DICHOTOMOUS],
  },
};

export default tree;
