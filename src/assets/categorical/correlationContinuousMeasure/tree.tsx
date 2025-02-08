import { CORRELATION_WITH_CONTINUOUS_MEASURE } from "../ids";
import { CATEGORICAL } from "../../ids";
import PointBiserial from "../../../components/stepComponents/PointBiserial";
import { TreeNode } from "../../types";

const tree: Record<string, TreeNode> = {
  [CORRELATION_WITH_CONTINUOUS_MEASURE]: {
    type: "statement",
    title: "Point Bi-serial Correlation",
    flowChartTitle: "Point Bi-serial Correlation",
    component: PointBiserial,
    color: "blue-darken-2",
    inputs: [CATEGORICAL],
  },
};

export default tree;
