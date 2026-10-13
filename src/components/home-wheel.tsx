"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { WorksWheel, type WorksWheelItem } from "@/components/ui/works-wheel";
import { profile } from "@/lib/portfolio-data";

// Chaque carte de la roue ouvre une section (ou une page) du portfolio.
const SECTIONS: WorksWheelItem[] = [
  { title: "À propos", image: "/images/stage/maintenance-pc.jpg", href: "/portfolio#a-propos" },
  { title: "Compétences", image: "/images/stage/equipements-reseau.jpg", href: "/portfolio#competences" },
  { title: "Synthèse E5", image: "/images/gsb/plan-adressage.jpg", href: "/portfolio#synthese" },
  { title: "Projets", image: "/images/gsb/topologie.jpg", href: "/portfolio#projets" },
  { title: "Labo GSB", image: "/images/gsb/switchs-vlan.jpg", href: "/gsb" },
  { title: "Stage", image: "/images/stage/baie-installee.jpg", href: "/stage" },
  { title: "Certifications", image: "/images/stage/supervision.jpg", href: "/portfolio#certifications" },
  {
    title: "Veille · Bibli IA",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop",
    href: "/portfolio#veille",
  },
  { title: "Parcours", image: "/images/stage/baie-brassage.jpg", href: "/portfolio#parcours" },
  { title: "Contact", image: "/images/stage/mur-ecrans.jpg", href: "/portfolio#contact" },
];

export function HomeWheel() {
  return (
    <main className="dark relative h-svh w-full bg-background text-foreground">
      <WorksWheel items={SECTIONS} label={profile.fullName} action="Ouvrir" />

      <header className="pointer-events-none absolute left-5 top-5 z-10 sm:left-8 sm:top-7">
        <p className="text-sm font-semibold">{profile.fullName}</p>
        <p className="text-xs text-muted-foreground">
          {profile.title} · En alternance chez PARROT
        </p>
        <p className="mt-2 max-w-[14rem] text-[11px] text-muted-foreground/70 sm:max-w-none">
          Fais défiler ou glisse pour tourner la roue, puis clique sur une carte.
        </p>
      </header>

      <div className="pointer-events-none absolute inset-x-0 bottom-5 z-10 flex justify-center px-4 sm:bottom-7">
        <Link
          href="/portfolio"
          className="pointer-events-auto inline-flex items-center gap-1.5 rounded-full bg-foreground px-5 py-2 text-sm font-semibold text-background transition-opacity hover:opacity-90"
        >
          Portfolio complet
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </main>
  );
}
