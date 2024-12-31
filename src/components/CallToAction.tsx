import { Button } from "@/components/ui/button";

export const CallToAction = () => {
  return (
    <section className="py-16 px-4 gradient-bg text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Join the SYNERGY Movement</h2>
        <p className="text-lg mb-8 opacity-90">
          Be part of the solution in creating a more harmonious and progressive society.
        </p>
        <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
          Get Involved Now
        </Button>
      </div>
    </section>
  );
};