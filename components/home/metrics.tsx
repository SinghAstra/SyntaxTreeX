"use client";

import { Card } from "@/components/ui/card";
import { Code2, GitFork, Star, Users } from "lucide-react";
import { useEffect, useState } from "react";

const metrics = [
  { label: "Active Users", value: "10K+", icon: Users, color: "stats-blue" },
  { label: "Code Snippets", value: "50K+", icon: Code2, color: "stats-purple" },
  {
    label: "Projects Forked",
    value: "25K+",
    icon: GitFork,
    color: "stats-pink",
  },
  { label: "GitHub Stars", value: "5K+", icon: Star, color: "stats-orange" },
];

export function Metrics() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric) => (
            <Card
              key={metric.label}
              className={`p-6 bg-card/50 backdrop-blur-sm border-gray-800 transform transition-all duration-500 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
            >
              <div className="flex items-center space-x-4">
                <metric.icon className={`h-8 w-8 text-${metric.color}`} />
                <div>
                  <h4 className="text-2xl font-bold">{metric.value}</h4>
                  <p className="text-gray-400">{metric.label}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
