import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Reveal } from "./Reveal";

const reviews = [
  { name: "Fatima A.", text: "Professional staff and excellent service. The whole family is treated with care." },
  { name: "Ridwaan M.", text: "The doctors were friendly and caring. I felt truly listened to." },
  { name: "Zainab K.", text: "Highly recommend SAYMED. Having so many specialists in one place is a game-changer." },
  { name: "Yusuf O.", text: "Clean, modern, and efficient. Booking and consultation were seamless." },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const next = () => setI((v) => (v + 1) % reviews.length);
  const prev = () => setI((v) => (v - 1 + reviews.length) % reviews.length);

  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-soft px-4 py-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-medical-red" />
            <span className="text-xs font-semibold tracking-widest uppercase text-brand-deep">Testimonials</span>
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl leading-tight">
            What Our <span className="gradient-text">Patients Say</span>
          </h2>
        </Reveal>

        <Reveal>
          <div className="relative bg-white rounded-3xl shadow-elegant p-8 sm:p-14 border border-border/50">
            <Quote className="absolute top-8 left-8 w-16 h-16 text-brand-soft" />
            <div className="relative text-center">
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="w-6 h-6 fill-medical-red text-medical-red" />
                ))}
              </div>
              <p className="text-xl sm:text-2xl font-display text-ink leading-relaxed mb-6 min-h-[100px]">
                "{reviews[i].text}"
              </p>
              <div className="text-sm font-semibold text-brand">— {reviews[i].name}</div>
            </div>
            <div className="flex items-center justify-center gap-4 mt-8">
              <button onClick={prev} aria-label="Previous" className="w-11 h-11 rounded-full border border-border flex items-center justify-center hover:bg-brand hover:text-white hover:border-brand transition">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex gap-2">
                {reviews.map((_, k) => (
                  <button
                    key={k}
                    aria-label={`Slide ${k + 1}`}
                    onClick={() => setI(k)}
                    className={`h-2 rounded-full transition-all ${k === i ? "w-8 bg-brand" : "w-2 bg-border"}`}
                  />
                ))}
              </div>
              <button onClick={next} aria-label="Next" className="w-11 h-11 rounded-full border border-border flex items-center justify-center hover:bg-brand hover:text-white hover:border-brand transition">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
