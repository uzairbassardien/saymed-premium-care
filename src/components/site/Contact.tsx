import { MapPin, Phone, Clock, Navigation, MessageCircle } from "lucide-react";
import { Reveal } from "./Reveal";

export function Contact() {
  const mapsUrl = "https://www.google.com/maps/search/?api=1&query=47+Cissy+Gool+Avenue+Gatesville+Cape+Town";
  const embedUrl = "https://www.google.com/maps?q=47+Cissy+Gool+Avenue+Gatesville+Cape+Town&output=embed";

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-soft px-4 py-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-medical-red" />
            <span className="text-xs font-semibold tracking-widest uppercase text-brand-deep">Contact</span>
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl leading-tight mb-4">
            Visit <span className="gradient-text">SAYMED</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive healthcare in the heart of Gatesville.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          <Reveal>
            <div className="bg-white rounded-3xl p-8 shadow-soft border border-border/50 h-full">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4" style={{ background: "var(--gradient-primary)" }}>
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Address</div>
              <div className="font-display font-semibold text-lg text-ink leading-snug">
                47 Cissy Gool Avenue<br />Gatesville, Cape Town
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="bg-white rounded-3xl p-8 shadow-soft border border-border/50 h-full">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4" style={{ background: "var(--gradient-primary)" }}>
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Phone</div>
              <a href="tel:0211105364" className="font-display font-semibold text-lg text-ink hover:text-brand transition">
                021 110 5364
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="bg-white rounded-3xl p-8 shadow-soft border border-border/50 h-full">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4" style={{ background: "var(--gradient-primary)" }}>
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Hours</div>
              <div className="font-display font-semibold text-lg text-ink leading-snug">
                Monday – Friday<br />08:30 – 17:30
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="rounded-3xl overflow-hidden shadow-elegant border border-border/50 aspect-[16/8]">
            <iframe
              src={embedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SAYMED Medical Centre location"
            />
          </div>
        </Reveal>

        <Reveal>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <a
              href={mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-brand text-white px-7 py-3.5 text-sm font-semibold shadow-soft hover:shadow-elegant hover:-translate-y-0.5 transition-all"
            >
              <Navigation className="w-4 h-4" /> Get Directions
            </a>
            <a
              href="tel:0211105364"
              className="inline-flex items-center gap-2 rounded-full bg-white text-brand border border-brand/20 px-7 py-3.5 text-sm font-semibold shadow-soft hover:bg-brand-soft transition-all"
            >
              <Phone className="w-4 h-4" /> Call Now
            </a>
            <a
              href="https://wa.me/27211105364"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-medical-red text-white px-7 py-3.5 text-sm font-semibold shadow-soft hover:shadow-elegant hover:-translate-y-0.5 transition-all"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
