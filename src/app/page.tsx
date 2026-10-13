import type { Metadata } from "next";
import { HomeWheel } from "@/components/home-wheel";

export const metadata: Metadata = {
  title: "Bienvenue — Harone Ait Ouakli",
  description:
    "Page d'accueil de Harone Ait Ouakli, Technicien Helpdesk & Systèmes (BTS SIO SISR). Accès rapide aux projets, certifications et au portfolio.",
};

export default function Home() {
  return <HomeWheel />;
}
