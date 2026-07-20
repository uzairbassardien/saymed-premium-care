import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/saymed-logo.jpg";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#doctors", label: "Doctors" },
  { href: "#appointments", label: "Appointments" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#home" className="flex items-center gap-3">
            <img src={logo} alt="SAYMED Medical Centre" className="h-11 w-11 rounded-xl object-cover shadow-soft" />
            <div className="hidden sm:block leading-tight">
              <div className="font-display font-bold text-brand text-lg">SAYMED</div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Medical Centre</div>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-4 py-2 text-sm font-medium text-ink hover:text-brand transition-colors rounded-full hover:bg-brand-soft/60"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="tel:0211105364"
              className="hidden md:inline-flex items-center gap-2 rounded-full bg-brand text-white px-5 py-2.5 text-sm font-semibold shadow-soft hover:shadow-elegant hover:-translate-y-0.5 transition-all"
            >
              <Phone className="w-4 h-4" /> 021 110 5364
            </a>
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-brand-soft"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden pb-4 animate-fade-in">
            <div className="glass rounded-2xl p-3 flex flex-col">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 text-sm font-medium hover:bg-brand-soft rounded-xl"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="tel:0211105364"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-brand text-white px-5 py-3 text-sm font-semibold"
              >
                <Phone className="w-4 h-4" /> Call 021 110 5364
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
