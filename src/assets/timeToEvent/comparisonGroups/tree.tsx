import ExperimentalStudyDescription from "../../../components/stepComponents/ExperimentalStudyDescription";
import RandomizedControlledTrialDescription from "../../../components/stepComponents/RandomizedControlledTrialDescription";
import LifeTable from "../../../components/stepComponents/LifeTable";
import KaplanMeier from "../../../components/stepComponents/KaplanMeier";

import { COMPARISON_OF_GROUPS_CATEGORICAL } from "../ids";
import * as ids from "./ids";

let tree = {
  [COMPARISON_OF_GROUPS_CATEGORICAL]: {
    type: "question",
    title: "ANy of these will work",
    component: ExperimentalStudyDescription,
    choices: [
      {
        answer: "Kaplan-Meier Analysis with Log Rank test",
        next: ids.KAPLAN_MEIER,
      },
      {
        answer: "Life Table Analysis with Wilcoxon-Gehan test",
        next: ids.LIFE_WILCOXON,
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
    title: "Kaplan-Meier Analysis with Log Rank test",
    flowChartTitle: "Randomized\nClinical Trial",
    component: KaplanMeier,
    color: "blue-darken-2",
    inputs: [ids],
  },

  [ids.LIFE_WILCOXON]: {
    type: "statement",
    title: "Life Table Analysis with Wilcoxon-Gehan test",
    flowChartTitle: "Randomized\nClinical Trial",
    component: LifeTable,
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
