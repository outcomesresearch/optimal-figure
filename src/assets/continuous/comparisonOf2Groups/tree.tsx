import PairedSamples from "../../../components/stepComponents/PairedSamples";
import MannWhitneyUTest from "../../../components/stepComponents/MannWhitneyUTest";
import WilcoxonTest from "../../../components/stepComponents/WilcoxonTest";
import IndependentSamples from "../../../components/stepComponents/IndependentSamples";

import { COMPARISON_OF_2_GROUPS } from "../ids";
import * as ids from "./ids";

let tree = {
  [COMPARISON_OF_2_GROUPS]: {
    type: "question",
    title:
      "Are the groups independent, or instead are the observations paired?",
    component: () => "",
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
    component: () =>
      "Parametric tests rely on specific assumptions to provide accurate results. If these assumptions are not met, the test may give misleading conclusions, and non-parametric alternatives may be more appropriate.",
    choices: [
      {
        answer: "Yes",
        next: ids.INDEPENDENT_SAMPLES_T_TEST,
        option_description: "Parametric assumptions are met",
      },
      {
        answer: "No",
        next: ids.MANN_WHITNEY_U_TEST,
        option_description: "Assumptions are not met",
      },
    ],
    inputs: [ids],
  },

  [ids.PAIRED]: {
    type: "question",
    title: "Choose the appropriate test for paired data",
    component: () =>
      "Select the method based on whether parametric assumptions are met for paired samples.",
    choices: [
      {
        answer: "Paired Samples t-test",
        next: ids.PAIRED_SAMPLES_TTEST,
        option_description: "Compares means of two related groups (parametric)",
      },
      {
        answer: "Wilcoxon Signed Rank test",
        next: ids.WILCOXON_SIGNED_RANK_TEST,
        option_description: "Non-parametric test for two related groups",
      },
    ],
    color: "blue-lighten-2",
    inputs: [ids],
  },

  [ids.INDEPENDENT_SAMPLES_T_TEST]: {
    type: "statement",
    title: "Independent Samples t-test",
    flowChartTitle: "Randomized\nClinical Trial",
    component: IndependentSamples,
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
    component: PairedSamples,
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
