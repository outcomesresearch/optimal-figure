import KruskalWallis from "../../../components/stepComponents/KruskalWallis";
import FriedmansTest from "../../../components/stepComponents/FriedmansTest";
import OneWayANOVA from "../../../components/stepComponents/OneWayANOVA";
import RepeatedMeasuresAnova from "../../../components/stepComponents/RepeatedMeasuresAnova";

import { COMPARISON_OF_3_OR_MORE_GROUPS } from "../ids";
import * as ids from "./ids";

let tree = {
  [COMPARISON_OF_3_OR_MORE_GROUPS]: {
    type: "question",
    title:
      "Are the groups independent, or instead are the observations related?",
    component: () => "",
    choices: [
      {
        answer: "Independent",
        next: ids.INDEPENDENT,
        option_description: "Groups are independent",
      },
      {
        answer: "Related",
        next: ids.RELATED,
        option_description: "Observations are related (repeated measures)",
      },
    ],
    inputs: [ids],
  },

  [ids.INDEPENDENT]: {
    type: "question",
    title: "Are parametric assumptions met?",
    component: () =>
      "Parametric tests rely on specific assumptions (like normality and homogeneity of variance) to provide accurate results. If these assumptions are not met, the test may give misleading conclusions, and non-parametric alternatives may be more appropriate.",
    choices: [
      {
        answer: "Yes",
        next: ids.ANOVA,
        option_description: "Parametric assumptions are met",
      },
      {
        answer: "No",
        next: ids.KRUSKAL_WALLIS,
        option_description: "Assumptions are not met",
      },
    ],
    inputs: [ids],
  },

  [ids.RELATED]: {
    type: "question",
    title: "Are parametric assumptions met?",
    component: () =>
      "Parametric tests rely on specific assumptions (like normality and homogeneity of variance) to provide accurate results. If these assumptions are not met, the test may give misleading conclusions, and non-parametric alternatives may be more appropriate.",
    choices: [
      {
        answer: "Yes",
        next: ids.REPEATED_MEASURES_ANOVA,
        option_description: "Parametric assumptions are met",
      },
      {
        answer: "No",
        next: ids.FRIEDMANS_TEST,
        option_description: "Assumptions not met",
      },
    ],
    color: "blue-lighten-2",
    inputs: [ids],
  },

  [ids.ANOVA]: {
    type: "statement",
    title: "One-way ANOVA",
    flowChartTitle: "Randomized\nClinical Trial",
    component: OneWayANOVA,
    color: "blue-darken-2",
    inputs: [ids],
  },

  [ids.KRUSKAL_WALLIS]: {
    type: "statement",
    title: "Kruskal-Wallis test (non-parametric)",
    flowChartTitle: "Randomized\nClinical Trial",
    component: KruskalWallis,
    color: "blue-darken-2",
    inputs: [ids],
  },

  [ids.REPEATED_MEASURES_ANOVA]: {
    type: "statement",
    title: "Repeated Measures ANOVA",
    flowChartTitle: "Randomized\nClinical Trial",
    component: RepeatedMeasuresAnova,
    color: "blue-darken-2",
    inputs: [ids],
  },

  [ids.FRIEDMANS_TEST]: {
    type: "statement",
    title: "Friedman’s test",
    flowChartTitle: "Randomized\nClinical Trial",
    component: FriedmansTest,
    color: "blue-darken-2",
    inputs: [ids],
  },
};

export default tree;
