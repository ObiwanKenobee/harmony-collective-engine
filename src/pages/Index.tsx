import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Implementation } from "@/components/Implementation";
import { Concerns } from "@/components/Concerns";
import { CallToAction } from "@/components/CallToAction";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <Implementation />
      <Concerns />
      <CallToAction />
    </div>
  );
};

export default Index;