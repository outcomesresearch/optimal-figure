import CoxPHRegression from "../../../components/stepComponents/CoxPHRegression";
import CoxRegressionTimedependent from "../../../components/stepComponents/CoxRegressionTimedependent";
import CountProcessAnalysis from "../../../components/stepComponents/CountProcessAnalysis";
import CompetingRiskAnalysis from "../../../components/stepComponents/CompetingRiskAnalysis";

import { MULTIVARIABLE_ANALYSIS } from "../ids";
import * as ids from "./ids";

let tree = {
  [MULTIVARIABLE_ANALYSIS]: {
    type: "question",
    title: "Choose a suitable regression or analysis method",
    component: () =>
      "Choose the method that aligns with the focus on time-to-event or event count data analysis.",
    choices: [
      {
        answer: "Cox PH Regression",
        next: ids.COX_PH_REGRESSION,
        option_description:
          "Models time-to-event data with proportional hazards assumption",
      },
      {
        answer: "Cox Regression with time-dependent covariate",
        next: ids.COX_REGRESSION_TIMEDEPENDENT,
        option_description:
          "Incorporates covariates that change over time into survival analysis",
      },
      {
        answer: "Count Process Analysis",
        next: ids.COUNT_PROCESS_ANALYSIS,
        option_description:
          "Analyzes event data where the focus is on counting occurrences over time",
      },
      {
        answer: "Competing Risk Analysis",
        next: ids.COMPETING_RISK,
        option_description:
          "Evaluates the impact of multiple competing events on time-to-event outcomes",
      },
    ],
    color: "blue-lighten-2",
    inputs: [ids],
  },

  [ids.COX_PH_REGRESSION]: {
    type: "statement",
    title: "Cox Proportional Hazards (PH) Regression",
    flowChartTitle: "Randomized\nClinical Trial",
    component: CoxPHRegression,
    color: "blue-darken-2",
    inputs: [MULTIVARIABLE_ANALYSIS],
  },

  [ids.COX_REGRESSION_TIMEDEPENDENT]: {
    type: "statement",
    title: "Cox Regression with time-dependent covariate",
    flowChartTitle: "Randomized\nClinical Trial",
    component: CoxRegressionTimedependent,
    color: "blue-darken-2",
    inputs: [MULTIVARIABLE_ANALYSIS],
  },

  [ids.COUNT_PROCESS_ANALYSIS]: {
    type: "statement",
    title: "Count Process Analysis",
    flowChartTitle: "Randomized\nClinical Trial",
    component: CountProcessAnalysis,
    color: "blue-darken-2",
    inputs: [MULTIVARIABLE_ANALYSIS],
  },

  [ids.COMPETING_RISK]: {
    type: "statement",
    title: "Competing Risk Analysis",
    flowChartTitle: "Randomized\nClinical Trial",
    component: CompetingRiskAnalysis,
    color: "blue-darken-2",
    inputs: [MULTIVARIABLE_ANALYSIS],
  },
};

export default tree;
