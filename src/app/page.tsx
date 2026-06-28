import type { Metadata } from "next";
import { Landing } from "@/components/landing";

export const metadata: Metadata = {
  title: "Bienvenue — Harone Ait Ouakli",
  description:
    "Page d'accueil de Harone Ait Ouakli, Technicien Systèmes & Réseaux (BTS SIO SISR). Accès rapide aux projets, certifications et au portfolio.",
};

export default function Home() {
  return <Landing />;
}
