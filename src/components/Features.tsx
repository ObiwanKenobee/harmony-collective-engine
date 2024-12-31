import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Brain, Users, LineChart } from "lucide-react";

const features = [
  {
    title: "Conflict Resolution AI",
    description: "Uses machine learning to identify root causes of tensions and offer tailored solutions.",
    icon: Brain,
  },
  {
    title: "Progress Dashboard",
    description: "Tracks societal innovation and growth metrics to ensure peace doesn't lead to stagnation.",
    icon: LineChart,
  },
  {
    title: "Community Integration",
    description: "Physical and digital hubs where diverse groups collaborate on solving challenges.",
    icon: Users,
  },
];

export const Features = () => {
  return (
    <section className="py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Core Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <Card key={index} className="hover-card">
            <CardHeader>
              <feature.icon className="w-12 h-12 mb-4 text-primary" />
              <CardTitle>{feature.title}</CardTitle>
              <CardDescription>{feature.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
};