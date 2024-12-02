import ChiSquare from "../../../components/stepComponents/ChiSquare";
import McNemarTest from "../../../components/stepComponents/McNemarTest";
import CochransQ from "../../../components/stepComponents/CochransQ";
import FishersExact from "../../../components/stepComponents/FishersExact";

import { COMPARISON_OF_2_GROUPS } from "../ids";
import * as ids from "./ids";

let tree = {
  [COMPARISON_OF_2_GROUPS]: {
    type: "question",
    title: "Are the groups independent, or are they related?",
    component: () => "",
    choices: [
      {
        answer: "Independent",
        next: ids.INDEPENDENT,
        option_description:
          "Groups are separate and do not influence each other",
      },
      {
        answer: "Related",
        next: ids.RELATED,
        option_description:
          "Groups are linked or paired in some way, influencing one another",
      },
    ],
    inputs: [ids],
  },

  [ids.INDEPENDENT]: {
    type: "question",
    title: "Are the assumptions for a Chi-square test met?",
    component: () =>
      "The Chi-square test assumes independent categorical data, with expected frequencies of at least 5 per category and a sufficiently large sample size to ensure reliable results.",
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
    component: () => "",
    choices: [
      {
        answer: "Two",
        next: ids.MCNEMAR_TEST,
      },
      {
        answer: "More than two",
        next: ids.COCHRANS_Q_TEST,
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
