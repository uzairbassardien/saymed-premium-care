import { useState } from "react";
import { Calendar, CheckCircle2, Send } from "lucide-react";
import { Reveal } from "./Reveal";

const services = ["General Practitioner", "Dentist", "Physiotherapy", "Speech Therapy", "Dietician", "Occupational Therapy (Paeds)", "Occupational Therapy (Adults)", "Phytotherapist"];
const doctors = ["No preference", "Dr Hawa Parker", "Dr Osama Elmowafi", "Thakeerah Khan", "Simone' Basson", "Vashika Chibba", "Aaliyah Osman", "Zaieba Dalvie", "Dr Mujaahid Gani"];

export function Appointment() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  }

  return (
    <section id="appointments" className="py-24 sm:py-32 bg-mist relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-brand-soft blur-3xl -z-10" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-5 gap-10">
        <Reveal className="lg:col-span-2">
          <div className="inline-flex items-center gap-2 rounded-full bg-white shadow-soft px-4 py-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-medical-red" />
            <span className="text-xs font-semibold tracking-widest uppercase text-brand-deep">Book a Visit</span>
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl leading-tight mb-4">
            Request an <span className="gradient-text">Appointment</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Tell us how we can help and we'll get back to you shortly to confirm a time that suits.
          </p>
          <ul className="space-y-3 text-sm">
            {["Response within one business day", "Walk-ins welcome", "Medical aid friendly"].map((t) => (
              <li key={t} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand" /> {t}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="lg:col-span-3" delay={0.1}>
          <div className="bg-white rounded-3xl shadow-elegant p-6 sm:p-10 relative overflow-hidden">
            {submitted ? (
              <div className="text-center py-12 animate-fade-in">
                <div className="w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6 animate-scale-in" style={{ background: "var(--gradient-primary)" }}>
                  <CheckCircle2 className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-display font-bold text-2xl mb-2">Request received</h3>
                <p className="text-muted-foreground max-w-md mx-auto">
                  Thank you — our team will contact you shortly to confirm your appointment at SAYMED Medical Centre.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-sm font-semibold text-brand hover:underline"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="grid sm:grid-cols-2 gap-4">
                <Field label="Name" name="name" required />
                <Field label="Surname" name="surname" required />
                <Field label="Phone" name="phone" type="tel" required />
                <Field label="Email" name="email" type="email" required />
                <SelectField label="Service" name="service" options={services} />
                <SelectField label="Preferred Doctor" name="doctor" options={doctors} />
                <Field label="Preferred Date" name="date" type="date" />
                <Field label="Preferred Time" name="time" type="time" />
                <div className="sm:col-span-2">
                  <label className="text-sm font-semibold text-ink mb-1.5 block">Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    className="w-full rounded-xl border border-input bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition"
                    placeholder="Anything we should know?"
                  />
                </div>
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl text-white px-6 py-4 font-semibold shadow-soft hover:shadow-elegant hover:-translate-y-0.5 transition-all disabled:opacity-70"
                    style={{ background: "var(--gradient-primary)" }}
                  >
                    {loading ? (
                      <>Sending…</>
                    ) : (
                      <>
                        <Calendar className="w-5 h-5" /> Request Appointment <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-sm font-semibold text-ink mb-1.5 block">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-xl border border-input bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition"
      />
    </div>
  );
}
function SelectField({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div>
      <label className="text-sm font-semibold text-ink mb-1.5 block">{label}</label>
      <select
        name={name}
        className="w-full rounded-xl border border-input bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition"
      >
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </div>
  );
}
