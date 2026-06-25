/**
 * Source unique de vérité pour tout le contenu du portfolio.
 * Modifie ce fichier pour mettre à jour le site (les sections lisent ces données).
 */

export const profile = {
  firstName: "Harone",
  lastName: "Ait Ouakli",
  fullName: "Harone Ait Ouakli",
  title: "Technicien Systèmes & Réseaux",
  subtitle: "Étudiant BTS SIO — option SISR",
  location: "77340 Pontault-Combault, France",
  email: "h.ait-ouakli@ecole-ipssi.net",
  phone: "07 49 41 10 83",
  phoneHref: "+33749411083",
  cvPath: "/cv/Harone-Ait-Ouakli-CV.pdf",
  availability:
    "Recherche une alternance en réseaux & administration systèmes — rythme 1 semaine en formation / 1 semaine en entreprise, dès que possible.",
  pitch:
    "Passionné par les réseaux et l'administration systèmes, je me forme en BTS SIO option SISR à l'IPSSI. De la conception d'architectures segmentées par VLAN à l'installation de vidéosurveillance IP sur le terrain, j'aime concevoir, déployer et sécuriser des infrastructures fiables.",
  badges: ["Réseaux", "Administration système", "Cybersécurité", "Permis en cours"],
};

export const socials = {
  email: `mailto:${profile.email}`,
  phone: `tel:${profile.phoneHref}`,
  claudeMastery: "https://claude-code-harone1.vercel.app",
  company: "https://samnetworksolutions.fr",
};

export type SkillCategory = {
  title: string;
  icon: "network" | "server" | "shield" | "tools" | "users" | "languages";
  description: string;
  items: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Réseaux",
    icon: "network",
    description: "Conception et configuration d'infrastructures réseau.",
    items: [
      "Modélisation & configuration sous Cisco Packet Tracer",
      "Adressage IP & sous-réseaux",
      "Routage inter-VLAN",
      "Segmentation par VLAN",
      "Bases des réseaux informatiques",
    ],
  },
  {
    title: "Systèmes",
    icon: "server",
    description: "Administration et virtualisation.",
    items: [
      "Systèmes Windows",
      "Machines virtuelles (VM)",
      "VMware",
      "Services DHCP & DNS",
    ],
  },
  {
    title: "Sécurité & Télécom",
    icon: "shield",
    description: "Sécurisation des accès et sensibilisation.",
    items: [
      "Sécurisation des accès réseau",
      "Vidéosurveillance IP (caméras IP/PTZ, NVR)",
      "Sensibilisation à la cybersécurité",
      "Conformité (CNIL / RGPD)",
    ],
  },
  {
    title: "Terrain & Outils",
    icon: "tools",
    description: "Interventions et déploiement matériel.",
    items: [
      "Câblage RJ45 & baie de brassage",
      "Configuration switch & routeur",
      "Bornes Wi-Fi",
      "Cisco Packet Tracer",
    ],
  },
];

export const softSkills: string[] = [
  "Sérieux, ponctuel et motivé",
  "Bon relationnel, à l'écoute",
  "Organisé et méthodique",
  "Autonome et curieux",
  "Esprit logique & sens du diagnostic",
];

export type Project = {
  slug: string;
  title: string;
  context: string;
  period: string;
  summary: string;
  highlights: string[];
  tags: string[];
  category: "Réseau" | "Stage" | "Web";
  link?: { href: string; label: string };
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "labo-gsb",
    title: "Infrastructure réseau — Laboratoire GSB",
    context: "Projet pédagogique · BTS SIO SISR",
    period: "2026",
    summary:
      "Conception et mise en place d'une infrastructure réseau segmentée pour le site parisien du laboratoire pharmaceutique GSB, maquettée sous Cisco Packet Tracer.",
    highlights: [
      "Analyse des besoins du site parisien de GSB",
      "Architecture réseau segmentée par VLAN (plusieurs étages)",
      "Maquette fonctionnelle sous Cisco Packet Tracer",
      "Mise en place du routage inter-VLAN",
      "Configuration des services réseau : DHCP & DNS",
      "Sécurisation des accès réseau",
    ],
    tags: ["Cisco Packet Tracer", "VLAN", "Routage", "DHCP", "DNS", "Sécurité"],
    category: "Réseau",
    featured: true,
  },
  {
    slug: "stage-sam",
    title: "Stage — Sam Network Solutions",
    context: "Technicien Informatique & Réseaux",
    period: "Avril 2026 – Juin 2026",
    summary:
      "Stage technique mêlant interventions terrain, déploiement de vidéosurveillance, configuration d'équipements réseau et développement du site web de l'entreprise.",
    highlights: [
      "Installation & configuration de vidéosurveillance (caméras IP/PTZ, NVR)",
      "Interventions terrain : câblage RJ45, baie de brassage, switch, bornes Wi-Fi",
      "Conseil et vente de solutions informatiques et de sécurité",
      "Développement du site web de l'entreprise (conception, BDD, mise en ligne)",
      "Sensibilisation à la cybersécurité via les fonctionnalités du site",
    ],
    tags: ["Vidéosurveillance IP", "PTZ", "Câblage RJ45", "Switch", "Wi-Fi", "Web"],
    category: "Stage",
    link: { href: "https://samnetworksolutions.fr", label: "samnetworksolutions.fr" },
    featured: true,
  },
  {
    slug: "claude-mastery",
    title: "Claude Mastery — Plateforme d'apprentissage",
    context: "Projet personnel",
    period: "2026",
    summary:
      "Site web personnel pour apprendre à maîtriser Claude : méthodes, skills, bonnes pratiques et ressources, le tout référencé et organisé pour la communauté.",
    highlights: [
      "Conception et mise en ligne d'une plateforme web complète",
      "Référencement de méthodes, skills et workflows",
      "Pensé pour partager les connaissances avec des amis et la communauté",
    ],
    tags: ["Web", "Vercel", "Documentation", "IA"],
    category: "Web",
    link: { href: "https://claude-code-harone1.vercel.app", label: "Voir le site live" },
    featured: true,
  },
];

export type Certification = {
  name: string;
  issuer: string;
  status: "obtenue" | "en cours";
  description: string;
};

export const certifications: Certification[] = [
  {
    name: "CNIL",
    issuer: "Commission Nationale de l'Informatique et des Libertés",
    status: "obtenue",
    description:
      "Sensibilisation à la protection des données personnelles et au RGPD.",
  },
];

export type TimelineEntry = {
  title: string;
  place: string;
  period: string;
  description: string;
  kind: "formation" | "experience";
};

export const timeline: TimelineEntry[] = [
  {
    title: "Stage Technicien Informatique & Réseaux",
    place: "Sam Network Solutions",
    period: "Avril 2026 – Juin 2026",
    description:
      "Vidéosurveillance IP, câblage et baie de brassage, configuration switch/routeur et développement du site web de l'entreprise.",
    kind: "experience",
  },
  {
    title: "BTS SIO — option SISR",
    place: "École IPSSI",
    period: "Depuis 2025",
    description:
      "Solutions d'Infrastructure, Systèmes et Réseaux. Formation orientée vers les métiers des systèmes et réseaux.",
    kind: "formation",
  },
  {
    title: "Baccalauréat général",
    place: "Lycée Eugène Delacroix",
    period: "2022 – 2025",
    description: "Spécialités Mathématiques et Physique-Chimie.",
    kind: "formation",
  },
];

export const languages = [
  { name: "Français", level: "Langue maternelle", value: 100 },
  { name: "Anglais", level: "B1", value: 60 },
  { name: "Allemand", level: "A1", value: 25 },
];

export const interests = ["Football (sénior — C.A.P. Charenton)", "Réseaux & nouvelles technologies"];

export const navLinks = [
  { href: "#a-propos", label: "À propos" },
  { href: "#competences", label: "Compétences" },
  { href: "#projets", label: "Projets" },
  { href: "#certifications", label: "Certifications" },
  { href: "#parcours", label: "Parcours" },
  { href: "#contact", label: "Contact" },
];
