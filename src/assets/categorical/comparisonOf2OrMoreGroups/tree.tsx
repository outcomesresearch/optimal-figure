import ExperimentalStudyDescription from "../../../components/stepComponents/ExperimentalStudyDescription";
import RandomAllocationDescription from "../../../components/stepComponents/RandomAllocationDescription";
import ChiSquare from "../../../components/stepComponents/ChiSquare";
import McNemarTest from "../../../components/stepComponents/McNemarTest";
import CochransQ from "../../../components/stepComponents/CochransQ";
import FishersExact from "../../../components/stepComponents/FishersExact";

import { COMPARISON_OF_2_GROUPS } from "../ids";
import * as ids from "./ids";

let tree = {
  [COMPARISON_OF_2_GROUPS]: {
    type: "question",
    title: "Are the groups independent, or instead are they related?",
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
        option_description: "Groups are related",
      },
    ],
    inputs: [ids],
  },

  [ids.INDEPENDENT]: {
    type: "question",
    title: "Are the assumptions for a Chi-square test met?",
    component: RandomAllocationDescription,
    choices: [
      {
        answer: "Yes",
        next: ids.CHI_SQUARE_TEST,
        option_description: "Assumptions are met",
      },
      {
        answer: "No",
        next: ids.FISHERS_EXACT_TEST,
        option_description: "Assumptions are not met",
      },
    ],
    inputs: [ids],
  },

  [ids.RELATED]: {
    type: "question",
    title: "How many groups does the study compare?",
    component: ExperimentalStudyDescription,
    choices: [
      {
        answer: "Two",
        next: ids.MCNEMAR_TEST,
        // option_description:
        //   "Asssociations are linear and parametric test assumptions are met",
      },
      {
        answer: "More than two",
        next: ids.COCHRANS_Q_TEST,
        // option_description:
        //   "Associations not linear, or parametric assumptions are not met",
      },
    ],
    color: "blue-lighten-2",
    inputs: [ids],
  },

  [ids.CHI_SQUARE_TEST]: {
    type: "statement",
    title: "Chi Square Test",
    flowChartTitle: "Randomized\nClinical Trial",
    component: ChiSquare,
    color: "blue-darken-2",
    inputs: [ids],
  },

  [ids.FISHERS_EXACT_TEST]: {
    type: "statement",
    title: "Fisher's Exact test",
    flowChartTitle: "Randomized\nClinical Trial",
    component: FishersExact,
    color: "blue-darken-2",
    inputs: [ids],
  },

  [ids.MCNEMAR_TEST]: {
    type: "statement",
    title: "McNemar test",
    flowChartTitle: "Randomized\nClinical Trial",
    component: McNemarTest,
    color: "blue-darken-2",
    inputs: [ids],
  },

  [ids.COCHRANS_Q_TEST]: {
    type: "statement",
    title: "Cochran’s Q Test",
    flowChartTitle: "Randomized\nClinical Trial",
    component: CochransQ,
    color: "blue-darken-2",
    inputs: [ids],
  },
};

export default tree;
