import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Reveal } from "./Reveal";

const faqs = [
  { q: "Do you accept walk-ins?", a: "Yes — walk-ins are welcome during operating hours. We recommend booking an appointment to reduce waiting time." },
  { q: "What are your operating hours?", a: "SAYMED Medical Centre is open Monday to Friday from 08:30 to 17:30." },
  { q: "How do I make an appointment?", a: "You can book online through the appointment form on this site, call us on 021 110 5364, or WhatsApp our team." },
  { q: "Do you treat children?", a: "Absolutely. Our team includes paediatric occupational and speech therapists, and our GP welcomes patients of all ages." },
  { q: "What services are available?", a: "General Practice, Dentistry, Physiotherapy, Speech Therapy, Dietetics, Occupational Therapy (Paeds & Adults) and Phytotherapy — all under one roof." },
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 sm:py-32 bg-mist">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-white shadow-soft px-4 py-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-medical-red" />
            <span className="text-xs font-semibold tracking-widest uppercase text-brand-deep">FAQ</span>
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl leading-tight mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
        </Reveal>

        <Reveal>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-white rounded-2xl border border-border/50 shadow-soft px-6 data-[state=open]:shadow-elegant transition-shadow"
              >
                <AccordionTrigger className="text-left font-display font-semibold text-lg py-5 hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-5">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
