import KruskalWallis from "../../../components/stepComponents/KruskalWallis";
import FriedmansTest from "../../../components/stepComponents/FriedmansTest";
import OneWayANOVA from "../../../components/stepComponents/OneWayANOVA";
import RepeatedMeasuresAnova from "../../../components/stepComponents/RepeatedMeasuresAnova";

import { COMPARISON_OF_3_OR_MORE_GROUPS } from "../ids";
import { CONTINUOUS } from "../../ids";
import * as ids from "./ids";
import { TreeNode } from "../../types";

const tree: Record<string, TreeNode> = {
  [COMPARISON_OF_3_OR_MORE_GROUPS]: {
    type: "question",
    title:
      "Are the groups independent, or instead are the observations related?",
    component: () =>
      "The relationship between groups determines whether statistical methods assume independence or account for related observations, such as in repeated measures.",
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
    inputs: [CONTINUOUS],
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
    inputs: [COMPARISON_OF_3_OR_MORE_GROUPS],
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
    inputs: [COMPARISON_OF_3_OR_MORE_GROUPS],
  },

  [ids.ANOVA]: {
    type: "statement",
    title: "One-way ANOVA",
    flowChartTitle: "One-way ANOVA",
    component: OneWayANOVA,
    color: "blue-darken-2",
    inputs: [ids.INDEPENDENT],
  },

  [ids.KRUSKAL_WALLIS]: {
    type: "statement",
    title: "Kruskal-Wallis test (non-parametric)",
    flowChartTitle: "Kruskal-Wallis test (non-parametric)",
    component: KruskalWallis,
    color: "blue-darken-2",
    inputs: [ids.INDEPENDENT],
  },

  [ids.REPEATED_MEASURES_ANOVA]: {
    type: "statement",
    title: "Repeated Measures ANOVA",
    flowChartTitle: "Repeated Measures ANOVA",
    component: RepeatedMeasuresAnova,
    color: "blue-darken-2",
    inputs: [ids.RELATED],
  },

  [ids.FRIEDMANS_TEST]: {
    type: "statement",
    title: "Friedman’s test",
    flowChartTitle: "Friedman’s test",
    component: FriedmansTest,
    color: "blue-darken-2",
    inputs: [ids.RELATED],
  },
};

export default tree;
