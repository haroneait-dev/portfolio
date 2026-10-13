import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Synthese } from "@/components/sections/synthese";
import { Projects } from "@/components/sections/projects";
import { Certifications } from "@/components/sections/certifications";
import { Veille } from "@/components/sections/veille";
import { Timeline } from "@/components/sections/timeline";
import { Contact } from "@/components/sections/contact";

export const metadata: Metadata = {
  title: "Portfolio — Harone Ait Ouakli · Technicien Helpdesk & Systèmes",
  description:
    "Portfolio de Harone Ait Ouakli, étudiant en BTS SIO option SISR. Projets réseau (Labo GSB, VLAN), stage en vidéosurveillance IP, certification CNIL. En alternance chez PARROT.",
};

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Synthese />
        <Projects />
        <Certifications />
        <Veille />
        <Timeline />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
