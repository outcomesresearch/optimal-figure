import ExperimentalStudyDescription from "../../../components/stepComponents/ExperimentalStudyDescription";
import RandomAllocationDescription from "../../../components/stepComponents/RandomAllocationDescription";
import BinaryLogistic from "../../../components/stepComponents/BinaryLogistic";
import PoissonRegression from "../../../components/stepComponents/PoissonRegression";
import NegativeBinomial from "../../../components/stepComponents/NegativeBinomial";
import Multinomial from "../../../components/stepComponents/MultinomialRegression";
import OrdinalCategorical from "../../../components/stepComponents/OrdinalCategorical";

import { MULTIVARIABLE_ANALYSIS } from "../ids";
import * as ids from "./ids";

let tree = {
  [MULTIVARIABLE_ANALYSIS]: {
    type: "question",
    title: "Which option best describes the dependent variable?",
    component: RandomAllocationDescription,
    choices: [
      {
        answer: "Dichotomous",
        next: ids.DICHOTOMOUS,
        option_description: "Dependent variable is dichotomous",
      },
      {
        answer: "Nominal",
        next: ids.MULTINOMINAL,
        option_description: "Dependent variable is nominal with >2 categories",
      },
      {
        answer: "Ordinal",
        next: ids.ORDINAL,
        option_description: "Dependent variable is ordinal with >2 categories",
      },
    ],
    inputs: [ids],
  },

  [ids.ORDINAL]: {
    type: "statement",
    title: "Ordinal Regression",
    flowChartTitle: "Randomized\nClinical Trial",
    component: OrdinalCategorical,
    color: "blue-darken-2",
    inputs: [ids],
  },
  [ids.MULTINOMINAL]: {
    type: "statement",
    title: "Multinomial Regression",
    flowChartTitle: "Randomized\nClinical Trial",
    component: Multinomial,
    color: "blue-darken-2",
    inputs: [ids],
  },

  [ids.DICHOTOMOUS]: {
    type: "question",
    title: "ANy of these will work",
    component: ExperimentalStudyDescription,
    choices: [
      {
        answer: "Binary Logistic Regression",
        next: ids.BINARY_LOGISTIC,
        // option_description: "Parametric assumptions are met",
      },
      {
        answer: "Negative Binomial",
        next: ids.NEGATIVE_BINOMIAL,
        // option_description: "Non parametric",
      },
      {
        answer: "Poisson regression",
        next: ids.POISSON_REGRESSION,
        // option_description: "Non parametric",
      },
    ],
    color: "blue-lighten-2",
    inputs: [ids],
  },

  [ids.BINARY_LOGISTIC]: {
    type: "statement",
    title: "Binary Logistic Regression",
    flowChartTitle: "Randomized\nClinical Trial",
    component: BinaryLogistic,
    color: "blue-darken-2",
    inputs: [ids],
  },

  [ids.NEGATIVE_BINOMIAL]: {
    type: "statement",
    title: "Negative Binomial",
    flowChartTitle: "Randomized\nClinical Trial",
    component: NegativeBinomial,
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
};

export default tree;
