import { Award, Users, MapPin, HeartHandshake } from "lucide-react";
import { Reveal } from "./Reveal";

const items = [
  { icon: Award, title: "Experienced Professionals", desc: "A qualified, multidisciplinary team you can rely on." },
  { icon: Users, title: "Comprehensive Care", desc: "Every specialty you need — under one roof." },
  { icon: MapPin, title: "Convenient Location", desc: "Easy access in the heart of Gatesville, Cape Town." },
  { icon: HeartHandshake, title: "Patient Focused", desc: "Compassionate, personalised healthcare, always." },
];

export function WhyChoose() {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-primary)" }} />
      <div className="absolute inset-0 -z-10 opacity-30" style={{ background: "radial-gradient(circle at 80% 20%, oklch(0.58 0.22 25) 0%, transparent 50%)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-3xl mx-auto mb-16 text-white">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-medical-red" />
            <span className="text-xs font-semibold tracking-widest uppercase">Why SAYMED</span>
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl leading-tight mb-4">
            Care That Puts You First
          </h2>
          <p className="text-lg text-white/85">
            Four reasons families across Gatesville trust SAYMED.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.08}>
              <div className="glass rounded-3xl p-8 text-white h-full hover:-translate-y-2 transition-all duration-500 hover:bg-white/15">
                <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-5">
                  <it.icon className="w-7 h-7" />
                </div>
                <h3 className="font-display font-bold text-xl mb-2">{it.title}</h3>
                <p className="text-sm text-white/80 leading-relaxed">{it.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
