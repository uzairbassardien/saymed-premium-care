import { CheckCircle2 } from "lucide-react";
import { Reveal } from "./Reveal";

export function About() {
  const points = [
    "Multidisciplinary team of qualified healthcare professionals",
    "Accessible, compassionate and affordable healthcare",
    "Comprehensive care in one convenient location",
  ];
  return (
    <section id="about" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute top-40 -right-40 w-96 h-96 rounded-full bg-brand-soft blur-3xl -z-10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
        <Reveal>
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-elegant">
              <img
                src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80"
                alt="Healthcare professionals"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 glass rounded-3xl p-6 shadow-elegant max-w-xs">
              <div className="font-display font-bold text-4xl gradient-text">8+</div>
              <div className="text-sm text-muted-foreground mt-1">Healthcare disciplines under one roof</div>
            </div>
            <div className="absolute -top-6 -left-6 glass rounded-2xl p-4 shadow-soft">
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Established</div>
              <div className="font-display font-bold text-xl text-brand">Gatesville</div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-soft px-4 py-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-medical-red" />
            <span className="text-xs font-semibold tracking-widest uppercase text-brand-deep">About Us</span>
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl leading-tight mb-6">
            About <span className="gradient-text">SAYMED Medical Centre</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
            SAYMED Medical Centre provides quality healthcare services through a multidisciplinary team of healthcare professionals.
          </p>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Our goal is to deliver accessible, compassionate and affordable healthcare for individuals and families in our community — with experienced practitioners across multiple disciplines, all in one convenient location.
          </p>
          <ul className="space-y-4">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-brand flex-shrink-0 mt-0.5" />
                <span className="text-ink">{p}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
