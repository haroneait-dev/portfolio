import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Certifications } from "@/components/sections/certifications";
import { Timeline } from "@/components/sections/timeline";
import { Contact } from "@/components/sections/contact";

export const metadata: Metadata = {
  title: "Portfolio — Harone Ait Ouakli · Technicien Systèmes & Réseaux",
  description:
    "Portfolio de Harone Ait Ouakli, étudiant en BTS SIO option SISR. Projets réseau (Labo GSB, VLAN), stage en vidéosurveillance IP, certifications CNIL & ANSSI. En recherche d'alternance.",
};

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Timeline />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
