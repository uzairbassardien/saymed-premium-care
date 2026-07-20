import { Stethoscope, Smile, Activity, MessageCircle, Apple, Puzzle, HandHeart, Leaf, ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

const services = [
  { icon: Stethoscope, title: "General Practitioner", desc: "Routine checkups, acute illness, chronic disease management, medical certificates and health screenings.", items: ["Routine checkups", "Chronic care", "Health screenings"] },
  { icon: Smile, title: "Dentist", desc: "General dentistry with fillings, extractions, cleanings and preventative care to keep smiles healthy.", items: ["Fillings", "Extractions", "Preventative care"] },
  { icon: Activity, title: "Physiotherapy", desc: "Sports injuries, back and neck pain, joint and post-operative rehabilitation with hands-on care.", items: ["Sports injuries", "Back & neck pain", "Rehabilitation"] },
  { icon: MessageCircle, title: "Speech Therapy", desc: "Speech, language and swallowing therapy for children and adults with tailored programmes.", items: ["Speech delays", "Communication", "Swallowing"] },
  { icon: Apple, title: "Dietician", desc: "Weight management, nutrition planning, diabetes nutrition and lifestyle coaching for healthier living.", items: ["Weight management", "Diabetes nutrition", "Lifestyle coaching"] },
  { icon: Puzzle, title: "Occupational Therapy (Paeds)", desc: "Sensory integration, motor skills, learning support and school readiness for children.", items: ["Sensory integration", "Motor skills", "School readiness"] },
  { icon: HandHeart, title: "Occupational Therapy (Adults)", desc: "Stroke rehabilitation, hand therapy, work rehabilitation and daily living support for adults.", items: ["Stroke rehab", "Hand therapy", "Daily living"] },
  { icon: Leaf, title: "Phytotherapist", desc: "Natural healthcare, herbal medicine and holistic wellness with preventative lifestyle support.", items: ["Herbal medicine", "Holistic wellness", "Preventative care"] },
];

export function Services() {
  return (
    <section id="services" className="py-24 sm:py-32 bg-mist relative overflow-hidden">
      <div className="absolute inset-0 opacity-50 -z-10" style={{ background: "radial-gradient(circle at 20% 0%, oklch(0.94 0.03 250) 0%, transparent 50%)" }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-white shadow-soft px-4 py-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-medical-red" />
            <span className="text-xs font-semibold tracking-widest uppercase text-brand-deep">Our Services</span>
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl leading-tight mb-4">
            Comprehensive Healthcare, <br />
            <span className="gradient-text">Under One Roof</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Eight specialist disciplines working together to care for every member of your family.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <div className="group h-full bg-white rounded-3xl p-6 shadow-soft hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 border border-border/50">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 relative overflow-hidden" style={{ background: "var(--gradient-primary)" }}>
                  <s.icon className="w-7 h-7 text-white relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
                </div>
                <h3 className="font-display font-bold text-lg mb-2 text-ink">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
                <ul className="space-y-1.5 mb-5">
                  {s.items.map((it) => (
                    <li key={it} className="text-xs text-ink/70 flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-brand" /> {it}
                    </li>
                  ))}
                </ul>
                <a href="#appointments" className="inline-flex items-center gap-1 text-sm font-semibold text-brand group-hover:gap-2 transition-all">
                  Read More <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
