import ExperimentalStudyDescription from "../../../components/stepComponents/ExperimentalStudyDescription";
import RandomAllocationDescription from "../../../components/stepComponents/RandomAllocationDescription";
import RandomizedControlledTrialDescription from "../../../components/stepComponents/RandomizedControlledTrialDescription";
import KruskalWallis from "../../../components/stepComponents/KruskalWallis";
import FriedmansTest from "../../../components/stepComponents/FriedmansTest";

import { COMPARISON_OF_3_OR_MORE_GROUPS } from "../ids";
import * as ids from "./ids";

let tree = {
  [COMPARISON_OF_3_OR_MORE_GROUPS]: {
    type: "question",
    title:
      "Are the groups independent, or instead are the observations related?",
    component: RandomAllocationDescription,
    choices: [
      {
        answer: "Independent",
        next: ids.INDEPENDENT,
        option_description: "Groups are independent",
      },
      {
        answer: "Related",
        next: ids.RELATED,
        option_description: "Observations are related",
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
        next: ids.ANOVA,
        option_description: "Parametric assumptions are met",
      },
      {
        answer: "No",
        next: ids.KRUSKAL_WALLIS,
        option_description: "Non parametric",
      },
    ],
    inputs: [ids],
  },

  [ids.RELATED]: {
    type: "question",
    title: "Are parametric assumptions met?",
    component: ExperimentalStudyDescription,
    choices: [
      {
        answer: "Yes",
        next: ids.REPEATED_MEASURES_ANOVA,
        option_description: "Parametric assumptions are met",
      },
      {
        answer: "No",
        next: ids.FRIEDMANS_TEST,
        option_description: "Non parametric",
      },
    ],
    color: "blue-lighten-2",
    inputs: [ids],
  },

  [ids.ANOVA]: {
    type: "statement",
    title: "ANOVA",
    flowChartTitle: "Randomized\nClinical Trial",
    component: RandomizedControlledTrialDescription,
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
    component: RandomizedControlledTrialDescription,
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
