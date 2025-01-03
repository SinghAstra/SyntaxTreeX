import { Feature } from "@/interfaces/features";
import { Code, GitBranch, Share2, Zap } from "lucide-react";

export const features: Feature[] = [
  {
    title: "Real-Time Execution",
    description:
      "Write and run code instantly in your browser with immediate feedback and results.",
    icon: Zap,
    colorClass: "stats-blue",
  },
  {
    title: "Multiple Languages",
    description:
      "Support for JavaScript, Python, and more programming languages coming soon.",
    icon: Code,
    colorClass: "stats-purple",
  },
  {
    title: "Version Control",
    description:
      "Built-in Git-like version control to track your code changes and experiments.",
    icon: GitBranch,
    colorClass: "stats-pink",
  },
  {
    title: "Easy Sharing",
    description: "Share your code snippets and projects with a simple URL.",
    icon: Share2,
    colorClass: "stats-orange",
  },
];
