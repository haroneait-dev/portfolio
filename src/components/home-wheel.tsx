"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { WorksWheel, type WorksWheelItem } from "@/components/ui/works-wheel";
import { profile, socials } from "@/lib/portfolio-data";

// Les réalisations présentées par la roue, dans un ordre logique.
const SECTIONS: WorksWheelItem[] = [
  { title: "Stage SNS", image: "/images/wheel/stage.svg", href: "/stage" },
  { title: "Site SNS", image: "/images/wheel/dev-sns.svg", href: socials.company },
  { title: "Labo GSB", image: "/images/wheel/reseau.svg", href: "/gsb" },
  { title: "Eureka BTP", image: "/images/wheel/dev-eureka.svg", href: "https://eurekabtp-site.vercel.app" },
  { title: "Bibli IA", image: "/images/wheel/saas.svg", href: socials.bibliIa },
  { title: "Synthèse E5", image: "/images/wheel/synthese.svg", href: "/portfolio#synthese" },
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
