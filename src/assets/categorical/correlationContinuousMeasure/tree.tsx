import { CORRELATION_WITH_CONTINUOUS_VARIABLE } from "../ids";
import { CATEGORICAL } from "../../ids";
import PointBiserial from "../../../components/stepComponents/PointBiserial";

let tree = {
  [CORRELATION_WITH_CONTINUOUS_VARIABLE]: {
    type: "statement",
    title: "Point Bi-serial Correlation",
    flowChartTitle: "Randomized\nClinical Trial",
    component: PointBiserial,
    color: "blue-darken-2",
    inputs: [CATEGORICAL],
  },
};

export default tree;
