export type IndustryPageConfig = {
  slug: string;
  name: string;
  audience: string;
  eyebrow: string;
  headline: string;
  headlineEmphasis: string;
  introduction: string;
  demandContexts: readonly { title: string; description: string }[];
  constraints: readonly { title: string; description: string }[];
  evaluationFocus: readonly string[];
  trustQuestions: readonly string[];
  measurementQuestions: readonly string[];
};
