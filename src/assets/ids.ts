export const ROOT = "assignExposures";
export const CONTINUOUS = "continuous";
export const CATEGORICAL = "categorical";
export const TTE = "timeToEvent";

export const EXPERIMENTAL_STUDY_ID = "experimentalStudy";

export const RANDOMIZED_CONTROLLED_TRIAL = "randomizedControlledTrial";
export const NONRANDOMIZED_CONTROLLED_TRIAL = "nonRandomizedControlledTrial";
export const RANDOM_ASSIGNMENT = "randomAssignment";
export const NEW_TREATMENT_BETTER = "newTreatmentBetter";
export const SUPERIORITY_TRIAL = "superiorityTrial";
export const EQUIVALENCE_TRIAL = "equivalenceTrial";
export const OBSERVATIONAL_STUDY_ID = "observationalStudy";
export const ANALYTICAL_STUDY = "analyticalStudy";
export const CASE_CONTROL = "caseControlStudy";
export const CROSS_SECTIONAL_STUDY = "crossSectionalStudy";
export const COMPARISON_GROUP = "comparisonGroup";
export const DIRECTION = "researchDirection";
export const HOW_MANY_SUBJECTS = "subjectCount";
export const DESCRIPTIVE_STUDY = "descriptiveStudy";
export const CASE_REPORT = "caseReport";
export const CASE_SERIES = "caseSeries";
export const PERSPECTIVE = "cohortPerspective";
export const PROSPECTIVE_COHORT_STUDY = "prospectiveCohort";
export const RETROSPECTIVE_COHORT_STUDY = "retrospectiveCohort";
export const EQUIVALENCE_OR_NONINFERIORITY = "equalOrNonInferior";
export const NONINFERIORITY_TRIAL = "nonInferiorityTrial";

export const CORRELATION_WITH_CONTINUOUS_VARIABLE_CONTINUOUS =
  "Correlation with continuous variable continuous";
export const CORRELATION_WITH_CONTINUOUS_VARIABLE_CATEGORICAL =
  "Correlation with continuous variable categorical";
export const CORRELATION_WITH_CONTINUOUS_VARIABLE_TTE =
  "Correlation with continuous variable tte";

export const COMPARISON_OF_2_GROUPS_CONTINOUS =
  "Comparison of 2 groups continuous";
export const COMPARISON_OF_2_GROUPS_CATEGORICAL =
  "Comparison of 2 groups categorical";

export const COMPARISON_OF_3_OR_MORE_GROUPS_CONTINUOUS =
  "Comparison of 3 or more groups continuous";
export const COMPARISON_OF_3_OR_MORE_GROUPS_CATEGORICAL =
  "Comparison of 3 or more groups categorical";

export const MULTIVARIABLE_ANALYSIS_CONTINUOUS =
  "Multivariable Analysis continuous";
export const MULTIVARIABLE_ANALYSIS_CATEGORICAL =
  "Multivariable Analysis categorical";
export const MULTIVARIABLE_ANALYSIS_TTE = "Multivariable Analysis tte";


export const COMPARISON_OF_GROUPS_OF_A_CATEGORICAL_LEVEL_VARIABLE =
  "Comparison of Groups of a categorical level variable";
export const COX_PH_REGRESSION = "Cox PH regression";
export const KAPLAN_MEIER_ANALYSIS_LOG_RANK_TEST =
  "Kaplan-Meier Analysis + Log Rank test";
export const LIFE_TABLE_ANALYSIS_WILCOXON_GIHAN_TEST =
  "Life table analysis + Wilcoxon-Gihan test";
export const COX_REGRESSION = "Cox Regression";
export const COX_REGRESSION_WITH_TIME_DEPENDENT_COVARIATE =
  "Cox regression with time-dependent covariate";
export const COUNT_PROCESS_ANALYSIS = "Count process analysis";
export const COMPETING_RISK_ANALYSIS = "Competing Risk Analysis";

// Constants for Categorical Analysis

export const POINT_BI_SERIAL_CORRELATION = "Point Bi-serial correlation";

export const CHI_SQUARE_TEST_INDEPENDENT =
  "Chi Square test (If assumptions are met)";
export const FISHERS_EXACT_TEST =
  "Fisher’s Exact test (if assumptions of Chi Square test are not met)";
export const MCNEMAR_TEST = "McNemar test (if both variables are dichotomous)";
export const CHI_SQUARE_TEST_MORE_THAN_2_CATEGORIES =
  "Chi Square test (If assumptions are met)";
export const COCHRANS_Q_TEST = "Cochran’s Q test (if more than 2 categories)";
export const BINARY_LOGISTIC_REGRESSION = "Binary Logistic Regression";
export const NEGATIVE_BINOMIAL = "Negative Binomial";
export const POISSON_REGRESSION = "Poisson regression";
export const MULTINOMIAL_REGRESSION =
  "Multinomial regression (if the dependent variable is nominal with > 2 categories)";
export const ORDINAL_REGRESSION =
  "Ordinal regression (if the dependent variable is ordinal with > 2 categories)";
