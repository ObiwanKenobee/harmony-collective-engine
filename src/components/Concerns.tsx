import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const concerns = [
  {
    question: "How do you prevent societal stagnation?",
    answer: "Progress Hubs ensure ongoing innovation and adaptation through continuous engagement and challenge-based initiatives.",
  },
  {
    question: "What about potential oppression?",
    answer: "Our decentralized design and ethical safeguards ensure that no single entity can enforce peace oppressively.",
  },
  {
    question: "How do you balance conflict and growth?",
    answer: "We encourage healthy, constructive disagreements while minimizing destructive tensions through AI-mediated dialogue.",
  },
];

export const Concerns = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Addressing Concerns</h2>
        <Accordion type="single" collapsible className="w-full">
          {concerns.map((concern, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{concern.question}</AccordionTrigger>
              <AccordionContent>{concern.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};