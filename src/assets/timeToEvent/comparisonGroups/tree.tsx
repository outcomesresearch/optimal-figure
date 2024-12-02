import CoxRegression from "../../../components/stepComponents/CoxRegression";
import LifeTable from "../../../components/stepComponents/LifeTable";
import KaplanMeier from "../../../components/stepComponents/KaplanMeier";

import { COMPARISON_OF_GROUPS_CATEGORICAL } from "../ids";
import * as ids from "./ids";

let tree = {
  [COMPARISON_OF_GROUPS_CATEGORICAL]: {
    type: "question",
    title: "Select the desired survival analysis method",
    component: () =>
      "Choose the method that best matches the type of survival data analysis required.",
    choices: [
      {
        answer: "Kaplan-Meier Analysis with Log Rank test",
        next: ids.KAPLAN_MEIER,
        option_description:
          "Estimates survival probabilities and compares survival curves across groups",
      },
      {
        answer: "Life Table Analysis with Wilcoxon-Gehan test",
        next: ids.LIFE_WILCOXON,
        option_description:
          "Summarizes survival data in intervals and tests for differences in survival",
      },
      {
        answer: "Cox regression",
        next: ids.COX_REGRESSION,
        option_description:
          "Models the relationship between survival time and predictor variables",
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
    component: CoxRegression,
    color: "blue-darken-2",
    inputs: [ids],
  },
};

export default tree;
