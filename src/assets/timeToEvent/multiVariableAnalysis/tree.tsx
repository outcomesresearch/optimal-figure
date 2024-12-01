import ExperimentalStudyDescription from "../../../components/stepComponents/ExperimentalStudyDescription";
import RandomizedControlledTrialDescription from "../../../components/stepComponents/RandomizedControlledTrialDescription";
import CoxRegressionTimedependent from "../../../components/stepComponents/CoxRegressionTimedependent";

import { MULTIVARIABLE_ANALYSIS } from "../ids";
import * as ids from "./ids";

let tree = {
  [MULTIVARIABLE_ANALYSIS]: {
    type: "question",
    title: "ANy of these will work",
    component: ExperimentalStudyDescription,
    choices: [
      {
        answer: "Cox PH Regression",
        next: ids.COX_PH_REGRESSION,
      },
      {
        answer: "Cox Regression with time-dependent covariate",
        next: ids.COX_REGRESSION_TIMEDEPENDENT,
      },
      {
        answer: "Count Process Analysis",
        next: ids.COUNT_PROCESS_ANALYSIS,
      },
      {
        answer: "Competing Risk Analysis",
        next: ids.COMPETING_RISK,
      },
    ],
    color: "blue-lighten-2",
    inputs: [ids],
  },

  [ids.COX_PH_REGRESSION]: {
    type: "statement",
    title: "Cox PH Regression",
    flowChartTitle: "Randomized\nClinical Trial",
    component: RandomizedControlledTrialDescription,
    color: "blue-darken-2",
    inputs: [ids],
  },

  [ids.COX_REGRESSION_TIMEDEPENDENT]: {
    type: "statement",
    title: "Cox regression with time-dependent covariate",
    flowChartTitle: "Randomized\nClinical Trial",
    component: CoxRegressionTimedependent,
    color: "blue-darken-2",
    inputs: [ids],
  },

  [ids.COUNT_PROCESS_ANALYSIS]: {
    type: "statement",
    title: "Count process analysis",
    flowChartTitle: "Randomized\nClinical Trial",
    component: RandomizedControlledTrialDescription,
    color: "blue-darken-2",
    inputs: [ids],
  },
  [ids.COMPETING_RISK]: {
    type: "statement",
    title: "Competing Risk Analysis",
    flowChartTitle: "Randomized\nClinical Trial",
    component: RandomizedControlledTrialDescription,
    color: "blue-darken-2",
    inputs: [ids],
  },
};

export default tree;
