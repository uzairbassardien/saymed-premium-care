import { Reveal } from "./Reveal";

const doctors = [
  { name: "Dr Hawa Parker", role: "General Practitioner", bio: "Comprehensive primary care with a focus on family medicine." },
  { name: "Dr Osama Elmowafi", role: "Dentist", bio: "General and preventative dentistry with a gentle approach." },
  { name: "Thakeerah Khan", role: "Physiotherapist", bio: "Sports, orthopaedic and post-operative rehabilitation." },
  { name: "Simone' Basson", role: "Speech Therapist", bio: "Speech, language and swallowing therapy for all ages." },
  { name: "Vashika Chibba", role: "Dietician", bio: "Personalised nutrition and lifestyle coaching." },
  { name: "Aaliyah Osman", role: "Occupational Therapist (Paeds)", bio: "Paediatric sensory, motor and developmental therapy." },
  { name: "Zaieba Dalvie", role: "Occupational Therapist (Adults)", bio: "Adult rehabilitation and daily-living support." },
  { name: "Dr Mujaahid Gani", role: "Phytotherapist", bio: "Herbal medicine and holistic natural healthcare." },
];

function initials(name: string) {
  return name.split(" ").filter((p) => !p.match(/^(Dr|Mr|Mrs|Ms)$/)).map((p) => p[0]).slice(0, 2).join("");
}

export function Doctors() {
  return (
    <section id="doctors" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-soft px-4 py-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-medical-red" />
            <span className="text-xs font-semibold tracking-widest uppercase text-brand-deep">Our Team</span>
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl leading-tight mb-4">
            Meet Our <span className="gradient-text">Healthcare Professionals</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A dedicated multidisciplinary team committed to your wellbeing.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {doctors.map((d, i) => (
            <Reveal key={d.name} delay={i * 0.05}>
              <div className="group relative bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 border border-border/50">
                <div className="aspect-square relative overflow-hidden" style={{ background: "var(--gradient-soft)" }}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full flex items-center justify-center font-display font-bold text-5xl text-white shadow-elegant group-hover:scale-110 transition-transform duration-500" style={{ background: "var(--gradient-primary)" }}>
                      {initials(d.name)}
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 glass rounded-full px-3 py-1 text-xs font-semibold text-brand">
                    SAYMED
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display font-bold text-lg text-ink">{d.name}</h3>
                  <div className="text-sm font-semibold text-brand mb-2">{d.role}</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{d.bio}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
