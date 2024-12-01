import ExperimentalStudyDescription from "../../../components/stepComponents/ExperimentalStudyDescription";
import RandomizedControlledTrialDescription from "../../../components/stepComponents/RandomizedControlledTrialDescription";

import { COMPARISON_OF_GROUPS_CATEGORICAL } from "../ids";
import * as ids from "./ids";

let tree = {
  [COMPARISON_OF_GROUPS_CATEGORICAL]: {
    type: "question",
    title: "ANy of these will work",
    component: ExperimentalStudyDescription,
    choices: [
      {
        answer: "Kaplan-Meier Analysis +Log Rank test",
        next: ids.KAPLAN_MEIER,
      },
      {
        answer: "Life table analysis +Wilcoxon-Gihan test",
        next: ids.LIFE_WHITNEY,
      },
      {
        answer: "Cox regression",
        next: ids.COX_REGRESSION,
      },
    ],
    color: "blue-lighten-2",
    inputs: [ids],
  },

  [ids.KAPLAN_MEIER]: {
    type: "statement",
    title: "Kaplan-Meier Analysis +Log Rank test",
    flowChartTitle: "Randomized\nClinical Trial",
    component: RandomizedControlledTrialDescription,
    color: "blue-darken-2",
    inputs: [ids],
  },

  [ids.LIFE_WHITNEY]: {
    type: "statement",
    title: "Life table analysis +Wilcoxon-Gihan test",
    flowChartTitle: "Randomized\nClinical Trial",
    component: RandomizedControlledTrialDescription,
    color: "blue-darken-2",
    inputs: [ids],
  },

  [ids.COX_REGRESSION]: {
    type: "statement",
    title: "Cox regression",
    flowChartTitle: "Randomized\nClinical Trial",
    component: RandomizedControlledTrialDescription,
    color: "blue-darken-2",
    inputs: [ids],
  },
};

export default tree;
