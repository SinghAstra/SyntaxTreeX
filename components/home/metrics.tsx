"use client";

import { Card } from "@/components/ui/card";
import { Code2, GitFork, Star, Users } from "lucide-react";
import React, { useEffect, useState } from "react";

const colorMap = {
  "stats-blue": "bg-stats-blue/20 text-stats-blue",
  "stats-purple": "bg-stats-purple/20 text-stats-purple",
  "stats-pink": "bg-stats-pink/20 text-stats-pink",
  "stats-orange": "bg-stats-orange/20 text-stats-orange",
};

const metrics = [
  {
    label: "Active Users",
    startValue: 9800,
    endValue: 10000,
    increment: 1,
    suffix: "+",
    icon: Users,
    colorClass: "stats-blue",
  },
  {
    label: "Code Snippets",
    startValue: 49800,
    endValue: 50000,
    increment: 2,
    suffix: "+",
    icon: Code2,
    colorClass: "stats-purple",
  },
  {
    label: "Projects Forked",
    startValue: 24900,
    endValue: 25000,
    increment: 1,
    suffix: "+",
    icon: GitFork,
    colorClass: "stats-pink",
  },
  {
    label: "GitHub Stars",
    startValue: 4950,
    endValue: 5000,
    increment: 1,
    suffix: "+",
    icon: Star,
    colorClass: "stats-orange",
  },
];

function AnimatedCounter({ startValue, endValue, increment, suffix }) {
  const [count, setCount] = useState(startValue);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((currentCount) => {
        if (currentCount >= endValue) {
          clearInterval(interval);
          return endValue;
        }
        return currentCount + increment;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [endValue, increment]);

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

function MetricCard({ metric, isVisible }) {
  const colorClasses = colorMap[metric.colorClass] || colorMap["stats-blue"];
  const [bgClass, textClass] = colorClasses.split(" ");

  return (
    <Card
      className={`group relative p-6 bg-card/50 backdrop-blur-sm border-gray-800 transform transition-all duration-500 hover:bg-card/70 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      }`}
    >
      <div className="relative z-10">
        <div className="flex items-center space-x-4">
          <div
            className={`p-3 rounded-xl ${bgClass} transition-colors duration-300`}
          >
            <metric.icon
              className={`h-8 w-8 ${textClass} group-hover:scale-110 transition-transform duration-300`}
            />
          </div>
          <div>
            <h4
              className={`text-2xl font-bold tracking-tight ${textClass} transition-colors duration-300`}
            >
              <AnimatedCounter
                startValue={metric.startValue}
                endValue={metric.endValue}
                increment={metric.increment}
                suffix={metric.suffix}
              />
            </h4>
            <p className="text-gray-400 text-sm font-medium">{metric.label}</p>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-gray-800">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-500">Last 24h</span>
            <span className={textClass}>↑ 2.5%</span>
          </div>
        </div>
      </div>
      <div
        className={`absolute inset-0 ${bgClass} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg`}
      />
    </Card>
  );
}

export function Metrics() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/80" />
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric) => (
            <MetricCard
              key={metric.label}
              metric={metric}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Metrics;
