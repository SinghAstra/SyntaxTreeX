import { Card } from "@/components/ui/card";
import { Code, GitBranch, Share2, Zap } from "lucide-react";

const features = [
  {
    title: "Real-Time Execution",
    description:
      "Write and run code instantly in your browser with immediate feedback and results.",
    icon: Zap,
  },
  {
    title: "Multiple Languages",
    description:
      "Support for JavaScript, Python, and more programming languages coming soon.",
    icon: Code,
  },
  {
    title: "Version Control",
    description:
      "Built-in Git-like version control to track your code changes and experiments.",
    icon: GitBranch,
  },
  {
    title: "Easy Sharing",
    description: "Share your code snippets and projects with a simple URL.",
    icon: Share2,
  },
];

export function Features() {
  return (
    <div className="container mx-auto px-4 md:px-6">
      <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text  leading-tight tracking-tighter  text-transparent bg-gradient-to-r from-white to-gray-500">
        Powerful Features
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature) => (
          <Card
            key={feature.title}
            className="p-6 bg-card/50 backdrop-blur-sm border-gray-800"
          >
            <feature.icon className="h-12 w-12 mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-400">{feature.description}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
