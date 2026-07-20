import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Doctors } from "@/components/site/Doctors";
import { WhyChoose } from "@/components/site/WhyChoose";
import { Appointment } from "@/components/site/Appointment";
import { Testimonials } from "@/components/site/Testimonials";
import { FAQ } from "@/components/site/FAQ";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "SAYMED Medical Centre | Comprehensive Healthcare Under One Roof" },
      {
        name: "description",
        content:
          "SAYMED Medical Centre in Gatesville offers comprehensive healthcare services including General Practice, Dentistry, Physiotherapy, Speech Therapy, Dietetics, Occupational Therapy and Phytotherapy.",
      },
      { property: "og:title", content: "SAYMED Medical Centre | Comprehensive Healthcare Under One Roof" },
      {
        property: "og:description",
        content:
          "Comprehensive Healthcare Under One Roof in Gatesville, Cape Town — GP, Dentist, Physio, Speech, Dietician, OT and Phytotherapy.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalClinic",
          name: "SAYMED Medical Centre",
          description: "Comprehensive Healthcare Under One Roof",
          telephone: "+27211105364",
          address: {
            "@type": "PostalAddress",
            streetAddress: "47 Cissy Gool Avenue",
            addressLocality: "Gatesville",
            addressRegion: "Western Cape",
            addressCountry: "ZA",
          },
          openingHours: "Mo-Fr 08:30-17:30",
          medicalSpecialty: [
            "GeneralPractice",
            "Dentistry",
            "Physiotherapy",
            "SpeechPathology",
            "DietNutrition",
            "OccupationalTherapy",
          ],
        }),
      },
    ],
  }),
});

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Doctors />
        <WhyChoose />
        <Appointment />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
