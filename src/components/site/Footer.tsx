import { Facebook, Instagram, Phone, MapPin, Mail } from "lucide-react";
import logo from "@/assets/saymed-logo.jpg";

export function Footer() {
  return (
    <footer className="bg-[oklch(0.18_0.04_260)] text-white/80 pt-20 pb-8 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-brand/20 blur-3xl -translate-y-1/2" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <img src={logo} alt="SAYMED" className="h-11 w-11 rounded-xl" />
              <div>
                <div className="font-display font-bold text-white text-lg">SAYMED</div>
                <div className="text-[10px] uppercase tracking-widest text-white/60">Medical Centre</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed">
              Comprehensive Healthcare Under One Roof — for individuals and families in Gatesville.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {["About", "Services", "Doctors", "Appointments", "FAQ"].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} className="hover:text-white transition">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              {["General Practice", "Dentistry", "Physiotherapy", "Speech Therapy", "Dietetics", "Occupational Therapy"].map((l) => (
                <li key={l}><a href="#services" className="hover:text-white transition">{l}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3"><MapPin className="w-4 h-4 mt-0.5 text-medical-red" /> 47 Cissy Gool Avenue, Gatesville</li>
              <li className="flex items-center gap-3"><Phone className="w-4 h-4 text-medical-red" /> <a href="tel:0211105364" className="hover:text-white">021 110 5364</a></li>
              <li className="flex items-center gap-3"><Mail className="w-4 h-4 text-medical-red" /> info@saymed.co.za</li>
            </ul>
            <div className="flex gap-3 mt-5">
              <a href="https://instagram.com/saymedmedicalcentre" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full glass-dark flex items-center justify-center hover:bg-white/20 transition">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass-dark flex items-center justify-center hover:bg-white/20 transition">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/60">
          <div>© {new Date().getFullYear()} SAYMED Medical Centre. All rights reserved.</div>
          <div>Comprehensive Healthcare Under One Roof</div>
        </div>
      </div>
    </footer>
  );
}
