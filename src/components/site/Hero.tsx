import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Calendar, Phone, Heart, Stethoscope, Activity, Pill, Cross, Syringe } from "lucide-react";
import heroImg from "@/assets/hero-medical.jpg";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-headline", { y: 40, opacity: 0, duration: 1, ease: "power3.out" });
      gsap.from(".hero-sub", { y: 30, opacity: 0, duration: 1, delay: 0.2, ease: "power3.out" });
      gsap.from(".hero-cta", { y: 20, opacity: 0, duration: 0.8, delay: 0.4, stagger: 0.1, ease: "power3.out" });
      gsap.from(".hero-badge", { scale: 0.8, opacity: 0, duration: 0.8, delay: 0.6, ease: "back.out(1.7)" });
      gsap.from(".float-icon", { scale: 0, opacity: 0, duration: 0.8, delay: 0.8, stagger: 0.1, ease: "back.out(2)" });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="home" ref={ref} className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background image with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <img src={heroImg} alt="SAYMED healthcare team" className="w-full h-full object-cover" width={1600} height={1200} />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 bg-gradient-to-br from-brand/40 via-brand-deep/50 to-transparent" />
      </div>

      {/* Floating gradient orbs */}
      <div className="absolute top-32 -left-20 w-72 h-72 rounded-full bg-medical-red/30 blur-3xl animate-float-slow" />
      <div className="absolute bottom-20 -right-20 w-96 h-96 rounded-full bg-brand/40 blur-3xl animate-float" />

      {/* Floating medical icons */}
      {[
        { Icon: Stethoscope, className: "top-32 right-[8%]", delay: "0s" },
        { Icon: Heart, className: "top-1/2 right-[15%]", delay: "1s" },
        { Icon: Activity, className: "bottom-32 right-[6%]", delay: "2s" },
        { Icon: Pill, className: "top-40 left-[6%]", delay: "1.5s" },
        { Icon: Cross, className: "bottom-40 left-[10%]", delay: "0.5s" },
        { Icon: Syringe, className: "top-2/3 left-[4%]", delay: "2.5s" },
      ].map(({ Icon, className, delay }, i) => (
        <div
          key={i}
          className={`float-icon hidden md:flex absolute ${className} w-14 h-14 items-center justify-center rounded-2xl glass animate-float`}
          style={{ animationDelay: delay }}
        >
          <Icon className="w-6 h-6 text-white" />
        </div>
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="max-w-3xl text-white">
          <div className="hero-badge inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-medical-red opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-medical-red" />
            </span>
            <span className="text-xs font-semibold tracking-wide uppercase">Now Accepting New Patients • Walk-ins Welcome</span>
          </div>

          <h1 className="hero-headline font-display font-bold text-5xl sm:text-6xl lg:text-7xl leading-[1.05] mb-6">
            Healthcare You <br />
            <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">Can Trust</span>
          </h1>

          <p className="hero-sub text-lg sm:text-xl text-white/90 max-w-2xl mb-10 leading-relaxed">
            Providing comprehensive healthcare services for individuals and families under one roof in Gatesville, Cape Town.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#appointments"
              className="hero-cta group inline-flex items-center gap-2 rounded-full bg-white text-brand px-8 py-4 text-base font-semibold shadow-elegant hover:shadow-glow hover:-translate-y-1 transition-all"
            >
              <Calendar className="w-5 h-5" />
              Book Appointment
              <span className="w-0 group-hover:w-4 overflow-hidden transition-all">→</span>
            </a>
            <a
              href="tel:0211105364"
              className="hero-cta inline-flex items-center gap-2 rounded-full glass text-white px-8 py-4 text-base font-semibold hover:bg-white/20 transition-all"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </div>

          {/* Quick stats */}
          <div className="hero-cta mt-16 grid grid-cols-3 gap-4 max-w-xl">
            {[
              { n: "8+", l: "Specialists" },
              { n: "1", l: "Convenient Location" },
              { n: "100%", l: "Patient Focused" },
            ].map((s) => (
              <div key={s.l} className="glass rounded-2xl px-4 py-4 text-center">
                <div className="font-display font-bold text-2xl sm:text-3xl">{s.n}</div>
                <div className="text-xs text-white/80 mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
