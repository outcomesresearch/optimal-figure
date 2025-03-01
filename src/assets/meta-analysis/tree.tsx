import ForestPlot from "../../components/figures/ForestPlot";
import FunnelPlot from "../../components/figures/FunnelPlot";
import LabbePlot from "../../components/figures/LabbePlot";
import GalbraithPlot from "../../components/figures/GalbraithPlot";
import TrimAndFillPlot from "../../components/figures/TrimAndFillPlot";
import CumulativeMetaAnalysisPlot from "../../components/figures/CumulativeMetaAnalysisPlot";
import * as ids from "./ids";
import { TreeNode } from "../types.ts";
import { META_ANALYSIS, ROOT } from "../ids.ts";

/*
Meta-analysis Decision Tree Logic (Simplified):

1. The tree starts by asking for the purpose of the meta-analysis visualization.
2. Depending on the purpose, and assuming a sufficient number of studies (≥ 10), the recommended figure is provided:
   - Visual Summary → Forest Plot
   - Publication Bias → Funnel Plot
   - Event Rates → L'Abbe Plot
   - Heterogeneity → Galbraith Plot
   - Asymmetry Correction → Trim-and-Fill Plot
   - Robustness → Cumulative Meta-analysis Plot
*/

const tree: Record<string, TreeNode> = {
  [META_ANALYSIS]: {
    type: "question",
    title: "What is the purpose of the meta-analysis visualization?",
    inputs: [ROOT],
    component: () => "",
    choices: [
      {
        answer: "Visual Summary",
        next: ids.FIG_FOREST,
        option_description:
          "Aggregates study outcomes into an overall effect to summarize the evidence.",
      },
      {
        answer: "Publication Bias",
        next: ids.FIG_FUNNEL,
        option_description:
          "Assesses the distribution of study results for signs of selective reporting.",
      },
      {
        answer: "Event Rates",
        next: ids.FIG_LABBE,
        option_description:
          "Compares event frequencies between groups without revealing the plotting method.",
      },
      {
        answer: "Heterogeneity",
        next: ids.FIG_GALBRAITH,
        option_description:
          "Identifies variability and outlier studies to assess consistency across results.",
      },
      {
        answer: "Asymmetry Correction",
        next: ids.FIG_TRIM_FILL,
        option_description:
          "Examines the distribution for imbalance indicative of bias.",
      },
      {
        answer: "Robustness",
        next: ids.FIG_CUMULATIVE,
        option_description:
          "Analyzes the stability of the overall effect as studies accumulate.",
      },
    ],
  },
  [ids.FIG_FOREST]: {
    type: "statement",
    title: "Forest Plot",
    flowChartTitle: "Forest Plot",
    component: ForestPlot,
    inputs: [META_ANALYSIS],
  },
  [ids.FIG_FUNNEL]: {
    type: "statement",
    title: "Funnel Plot",
    flowChartTitle: "Funnel Plot",
    component: FunnelPlot,
    inputs: [META_ANALYSIS],
  },
  [ids.FIG_LABBE]: {
    type: "statement",
    title: "L'Abbe Plot",
    flowChartTitle: "L'Abbe Plot",
    component: LabbePlot,
    inputs: [META_ANALYSIS],
  },
  [ids.FIG_GALBRAITH]: {
    type: "statement",
    title: "Galbraith Plot",
    flowChartTitle: "Galbraith Plot",
    component: GalbraithPlot,
    inputs: [META_ANALYSIS],
  },
  [ids.FIG_TRIM_FILL]: {
    type: "statement",
    title: "Trim-and-Fill Plot",
    flowChartTitle: "Trim-and-Fill Plot",
    component: TrimAndFillPlot,
    inputs: [META_ANALYSIS],
  },
  [ids.FIG_CUMULATIVE]: {
    type: "statement",
    title: "Cumulative Meta-analysis Plot",
    flowChartTitle: "Cumulative Meta-analysis Plot",
    component: CumulativeMetaAnalysisPlot,
    inputs: [META_ANALYSIS],
  },
};

export default tree;
