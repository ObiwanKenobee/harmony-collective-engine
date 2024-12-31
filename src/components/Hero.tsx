import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 py-16">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent gradient-bg">
        Project SYNERGY
      </h1>
      <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-8">
        Integrating technology and community-driven solutions to create a dynamic, adaptive society where peace and progress coexist.
      </p>
      <div className="flex gap-4">
        <Button size="lg" className="gradient-bg">
          Get Started
        </Button>
        <Button size="lg" variant="outline">
          Learn More
        </Button>
      </div>
    </div>
  );
};