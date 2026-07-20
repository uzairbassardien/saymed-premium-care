import { useEffect, useRef, type ReactNode } from "react";
import { gsap } from "gsap";

export function Reveal({ children, delay = 0, y = 30, className }: { children: ReactNode; delay?: number; y?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            gsap.to(el, { y: 0, opacity: 1, duration: 0.9, delay, ease: "power3.out" });
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.15 },
    );
    gsap.set(el, { y, opacity: 0 });
    io.observe(el);
    return () => io.disconnect();
  }, [delay, y]);
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
