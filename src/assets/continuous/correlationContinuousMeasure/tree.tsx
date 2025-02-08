import PearsonCoefficient from "../../../components/stepComponents/PearsonCoefficient";
import SpearmanCorrelation from "../../../components/stepComponents/SpearmanCorrelation";
import KendallsTau from "../../../components/stepComponents/KendallsTau";

import { CORRELATION_WITH_CONTINUOUS_VARIABLE } from "../ids";
import { CONTINUOUS } from "../../ids";
import * as ids from "./ids";
import { TreeNode } from "../../types";

const tree: Record<string, TreeNode> = {
  [CORRELATION_WITH_CONTINUOUS_VARIABLE]: {
    type: "question",
    title:
      "Is the association linear, and are parametric test assumptions met?",
    component: () =>
      `Understanding whether the relationship between variables is linear and whether the assumptions of parametric tests hold helps determine the most suitable statistical method for the analysis.`,
    choices: [
      {
        answer: "Yes",
        next: ids.PEARSONS_CORRELATION_COEFFICIENT,
        option_description:
          "Asssociations are linear and parametric test assumptions are met",
      },
      {
        answer: "No",
        next: ids.ASSOCIATIONS_NONLINEAR,
        option_description:
          "Associations are not linear, or parametric assumptions are not met",
      },
    ],
    inputs: [CONTINUOUS],
  },
  [ids.ASSOCIATIONS_NONLINEAR]: {
    type: "question",
    title: "Choose a method for non-parametric analysis",
    component: () =>
      "Select the appropriate test based on the nature of your data and the relationship between variables.",
    choices: [
      {
        answer: "Spearman’s rho (non-parametric)",
        next: ids.SPEARMANS_RHO,
        option_description:
          "Measures the strength of a monotonic relationship between two variables",
      },
      {
        answer: "Kendall’s Tau (non-parametric)",
        next: ids.KENDALLS_TAU,
        option_description:
          "Assesses the strength of a monotonic relationship, useful for small samples",
      },
    ],
    color: "blue-lighten-2",
    inputs: [CORRELATION_WITH_CONTINUOUS_VARIABLE],
  },
  [ids.PEARSONS_CORRELATION_COEFFICIENT]: {
    type: "statement",
    title: "Pearson Correlation Coefficient r",
    flowChartTitle: "Pearson Correlation Coefficient r",
    component: PearsonCoefficient,
    color: "blue-lighten-2",
    inputs: [CORRELATION_WITH_CONTINUOUS_VARIABLE],
  },

  [ids.SPEARMANS_RHO]: {
    type: "statement",
    title: "Spearman’s rho (non-parametric)",
    flowChartTitle: "Spearman’s rho (non-parametric)",
    component: SpearmanCorrelation,
    color: "blue-darken-2",
    inputs: [ids.ASSOCIATIONS_NONLINEAR],
  },

  [ids.KENDALLS_TAU]: {
    type: "statement",
    title: "Kendall’s Tau (non-parametric)",
    flowChartTitle: "Kendall’s Tau (non-parametric)",
    component: KendallsTau,
    color: "blue-darken-2",
    inputs: [ids.ASSOCIATIONS_NONLINEAR],
  },
};

export default tree;
