import RandomizedControlledTrialDescription from "../../../components/stepComponents/RandomizedControlledTrialDescription";

import { CORRELATION_WITH_CONTINUOUS_VARIABLE } from "../ids";
import { TTE } from "../../ids";

let tree = {
  [CORRELATION_WITH_CONTINUOUS_VARIABLE]: {
    type: "statement",
    title: "Cox PH regression",
    flowChartTitle: "Randomized\nClinical Trial",
    component: RandomizedControlledTrialDescription,
    color: "blue-darken-2",
    inputs: [TTE],
  },
};

export default tree;
