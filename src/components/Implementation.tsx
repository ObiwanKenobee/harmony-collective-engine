import { Card, CardContent } from "@/components/ui/card";

export const Implementation = () => {
  return (
    <section className="py-16 px-4 bg-muted">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Implementation</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">Global Platform</h3>
              <ul className="space-y-2">
                <li>• Secure, blockchain-enabled infrastructure</li>
                <li>• Open-source customizable modules</li>
                <li>• Real-time conflict mediation</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">Local Integration</h3>
              <ul className="space-y-2">
                <li>• Community-driven development</li>
                <li>• Cultural adaptation support</li>
                <li>• Continuous feedback loop</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};