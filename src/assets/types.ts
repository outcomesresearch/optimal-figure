// Define the types
type NodeType = "question" | "statement";

interface BaseNode {
  type: NodeType;
  title: string;
  color?: string;
  inputs: string[];
}

interface QuestionNode extends BaseNode {
  type: "question";
  component: () => string | JSX.Element;
  choices: {
    answer: string;
    next: string;
    option_description?: string;
  }[];
}

interface StatementNode extends BaseNode {
  type: "statement";
  flowChartTitle: string;
  component: React.ComponentType;
}

export type TreeNode = QuestionNode | StatementNode;
