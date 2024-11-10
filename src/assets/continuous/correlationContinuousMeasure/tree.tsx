import ExperimentalStudyDescription from "../../../components/stepComponents/ExperimentalStudyDescription";
import RandomAllocationDescription from "../../../components/stepComponents/RandomAllocationDescription";
import RandomizedControlledTrialDescription from "../../../components/stepComponents/RandomizedControlledTrialDescription";

import { CORRELATION_WITH_CONTINUOUS_VARIABLE } from "../ids";
import * as ids from "./ids";

let tree = {
  [CORRELATION_WITH_CONTINUOUS_VARIABLE]: {
    type: "question",
    title:
      "Is the association linear, and are parametric test assumptions met?",
    component: RandomAllocationDescription,
    choices: [
      {
        answer: "Yes",
        next: ids.PEARSONS_CORRELATION_COEFFICIENT,
        option_description:
          "Asssociations are linear and parametric test assumptions are met",
      },
      {
        answer: "No",
        next: ids.ASSOCIATIONS_LINEAR_NO,
        option_description:
          "Associations not linear, or parametric assumptions are not met",
      },
    ],
    inputs: [CORRELATION_WITH_CONTINUOUS_VARIABLE],
  },

  [ids.ASSOCIATIONS_LINEAR_NO]: {
    type: "question",
    title: "Either of these work, click for more details",
    component: ExperimentalStudyDescription,
    choices: [
      {
        answer: "Spearman’s rho (non-parametric)",
        next: ids.SPEARMANS_RHO,
        // option_description:
        //   "Asssociations are linear and parametric test assumptions are met",
      },
      {
        answer: "Kendall’s Tau (non-parametric)",
        next: ids.KENDALLS_TAO,
        // option_description:
        //   "Associations not linear, or parametric assumptions are not met",
      },
    ],
    color: "blue-lighten-2",
    inputs: [ids.ROOT],
  },

  [ids.PEARSONS_CORRELATION_COEFFICIENT]: {
    type: "statement",
    title: "Pearson Correlation Coefficient r",
    component: ExperimentalStudyDescription,
    color: "blue-lighten-2",
    inputs: [ids.ROOT],
  },

  [ids.SPEARMANS_RHO]: {
    type: "statement",
    title: "Spearman’s rho (non-parametric)",
    flowChartTitle: "Randomized\nClinical Trial",
    component: RandomizedControlledTrialDescription,
    color: "blue-darken-2",
    inputs: [ids.ASSOCIATIONS_LINEAR_YES],
  },

  [ids.KENDALLS_TAO]: {
    type: "statement",
    title: "Kendall’s Tau (non-parametric)",
    flowChartTitle: "Randomized\nClinical Trial",
    component: RandomizedControlledTrialDescription,
    color: "blue-darken-2",
    inputs: [ids.ASSOCIATIONS_LINEAR_YES],
  },
};

export default tree;
