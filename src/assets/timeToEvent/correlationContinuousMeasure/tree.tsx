import CoxPHRegression from "../../../components/stepComponents/CoxPHRegression";

import { CORRELATION_WITH_CONTINUOUS_VARIABLE } from "../ids";
import { TTE } from "../../ids";
import { TreeNode } from "../../types";

const tree: Record<string, TreeNode> = {
  [CORRELATION_WITH_CONTINUOUS_VARIABLE]: {
    type: "statement",
    title: "Cox Proportional Hazards (PH) Regression",
    flowChartTitle: "Cox Proportional Hazards (PH) Regression",
    component: CoxPHRegression,
    color: "blue-darken-2",
    inputs: [TTE],
  },
};

export default tree;
