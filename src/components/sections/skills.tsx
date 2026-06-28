"use client";

import { Network, Server, ShieldCheck, Wrench } from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";

const skillsTimeline = [
  {
    id: 1,
    title: "Réseaux",
    date: "Cœur de métier",
    content:
      "Modélisation & configuration sous Cisco Packet Tracer, adressage IP & sous-réseaux, routage inter-VLAN, segmentation par VLAN.",
    category: "Réseau",
    icon: Network,
    relatedIds: [2, 3],
    status: "completed" as const,
    energy: 90,
  },
  {
    id: 2,
    title: "Systèmes",
    date: "Administration",
    content:
      "Systèmes Windows, machines virtuelles (VM), VMware, mise en place des services réseau DHCP & DNS.",
    category: "Système",
    icon: Server,
    relatedIds: [1, 3],
    status: "in-progress" as const,
    energy: 70,
  },
  {
    id: 3,
    title: "Sécurité & Télécom",
    date: "Sécurisation",
    content:
      "Sécurisation des accès réseau, vidéosurveillance IP (caméras IP/PTZ, NVR), sensibilisation cyber, conformité CNIL & RGPD.",
    category: "Sécurité",
    icon: ShieldCheck,
    relatedIds: [1, 2, 4],
    status: "in-progress" as const,
    energy: 65,
  },
  {
    id: 4,
    title: "Terrain & Outils",
    date: "Déploiement",
    content:
      "Câblage RJ45 & baie de brassage, configuration switch/routeur, bornes Wi-Fi, interventions terrain.",
    category: "Terrain",
    icon: Wrench,
    relatedIds: [3],
    status: "completed" as const,
    energy: 80,
  },
];

export function Skills() {
  return (
    <section id="competences" className="scroll-mt-20">
      <RadialOrbitalTimeline
        eyebrow="Compétences"
        title="Un socle technique réseaux & systèmes"
        description="Des compétences acquises en formation, en stage et sur le terrain."
        timelineData={skillsTimeline}
      />
    </section>
  );
}
