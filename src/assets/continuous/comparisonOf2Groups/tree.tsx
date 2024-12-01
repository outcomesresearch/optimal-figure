import ExperimentalStudyDescription from "../../../components/stepComponents/ExperimentalStudyDescription";
import RandomAllocationDescription from "../../../components/stepComponents/RandomAllocationDescription";
import RandomizedControlledTrialDescription from "../../../components/stepComponents/RandomizedControlledTrialDescription";
import MannWhitneyUTest from "../../../components/stepComponents/MannWhitneyUTest";
import WilcoxonTest from "../../../components/stepComponents/WilcoxonTest";

import { COMPARISON_OF_2_GROUPS } from "../ids";
import * as ids from "./ids";

let tree = {
  [COMPARISON_OF_2_GROUPS]: {
    type: "question",
    title:
      "Are the groups independent, or instead are the observations paired?",
    component: RandomAllocationDescription,
    choices: [
      {
        answer: "Independent",
        next: ids.INDEPENDENT,
        option_description: "Groups are independent",
      },
      {
        answer: "Paired",
        next: ids.PAIRED,
        option_description: "Observations are paired",
      },
    ],
    inputs: [ids],
  },

  [ids.INDEPENDENT]: {
    type: "question",
    title: "Are parametric assumptions met?",
    component: RandomAllocationDescription,
    choices: [
      {
        answer: "Yes",
        next: ids.INDEPENDENT_SAMPLES_T_TEST,
        option_description: "Parametric assumptions are met",
      },
      {
        answer: "No",
        next: ids.MANN_WHITNEY_U_TEST,
        option_description: "Non parametric",
      },
    ],
    inputs: [ids],
  },

  [ids.PAIRED]: {
    type: "question",
    title: "Either of these work, click for more details",
    component: ExperimentalStudyDescription,
    choices: [
      {
        answer: "Paired Samples t-test",
        next: ids.PAIRED_SAMPLES_TTEST,
        // option_description:
        //   "Asssociations are linear and parametric test assumptions are met",
      },
      {
        answer: "Wilcoxon Signed Rank test",
        next: ids.WILCOXON_SIGNED_RANK_TEST,
        // option_description:
        //   "Associations not linear, or parametric assumptions are not met",
      },
    ],
    color: "blue-lighten-2",
    inputs: [ids],
  },

  [ids.INDEPENDENT_SAMPLES_T_TEST]: {
    type: "statement",
    title: "Independent Samples t-test",
    flowChartTitle: "Randomized\nClinical Trial",
    component: RandomizedControlledTrialDescription,
    color: "blue-darken-2",
    inputs: [ids],
  },

  [ids.MANN_WHITNEY_U_TEST]: {
    type: "statement",
    title: "Mann-Whitney U test (non-parametric)",
    flowChartTitle: "Randomized\nClinical Trial",
    component: MannWhitneyUTest,
    color: "blue-darken-2",
    inputs: [ids],
  },

  [ids.PAIRED_SAMPLES_TTEST]: {
    type: "statement",
    title: "Paired Samples t-test",
    flowChartTitle: "Randomized\nClinical Trial",
    component: RandomizedControlledTrialDescription,
    color: "blue-darken-2",
    inputs: [ids],
  },

  [ids.WILCOXON_SIGNED_RANK_TEST]: {
    type: "statement",
    title: "Wilcoxon Signed Rank test",
    flowChartTitle: "Randomized\nClinical Trial",
    component: WilcoxonTest,
    color: "blue-darken-2",
    inputs: [ids],
  },
};

export default tree;
