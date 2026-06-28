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
  linkedin: "https://www.linkedin.com/in/harone-ait-ouakli-3478a83a1",
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
  detailHref?: string;
  featured?: boolean;
  gallery?: { src: string; caption: string }[];
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
    detailHref: "/gsb",
    featured: true,
    gallery: [
      { src: "/images/gsb/topologie.jpg", caption: "Topologie réseau du Labo GSB (Cisco Packet Tracer)" },
      { src: "/images/gsb/plan-adressage.jpg", caption: "Plan d'adressage IP, VLAN & ACL de filtrage inter-VLAN" },
    ],
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
    detailHref: "/stage",
    featured: true,
    gallery: [
      { src: "/images/stage/baie-brassage.jpg", caption: "Baie de brassage — patch panel, switch & câblage RJ45" },
      { src: "/images/stage/baie-brassage-config.jpg", caption: "Configuration sur site devant la baie de brassage" },
      { src: "/images/stage/camera-dome.jpg", caption: "Installation d'une caméra IP dôme (intérieur)" },
      { src: "/images/stage/camera-ptz.jpg", caption: "Caméra PTZ orientable" },
      { src: "/images/stage/camera-exterieur.jpg", caption: "Caméra de vidéosurveillance (extérieur)" },
      { src: "/images/stage/videosurveillance.jpg", caption: "Supervision des flux de vidéosurveillance (NVR)" },
      { src: "/images/stage/supervision.jpg", caption: "Poste de supervision multi-écrans" },
      { src: "/images/stage/equipements-reseau.jpg", caption: "Équipements réseau & alarme (Ajax, points d'accès)" },
    ],
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
  { href: "#synthese", label: "Synthèse" },
  { href: "#projets", label: "Projets" },
  { href: "#certifications", label: "Certifs" },
  { href: "#veille", label: "Veille" },
  { href: "#parcours", label: "Parcours" },
  { href: "#contact", label: "Contact" },
];

/** Tableau de synthèse officiel (Annexe 8-1 — Épreuve E5), reproduit fidèlement. */
export const syntheseMeta = {
  diplome: "BTS Services Informatiques aux Organisations",
  session: "Session 2026",
  titre: "Tableau de synthèse des réalisations professionnelles",
  nom: "Ait Ouakli Harone",
  centre: "IPSSI Val d'Europe",
  option: "SISR",
};

export type SyntheseColumn = { key: string; title: string; bullets: string[] };
export type SyntheseRow = {
  group: string;
  items: { label: string; marks: string[] }[];
};

export const syntheseColumns: SyntheseColumn[] = [
  {
    key: "C",
    title: "Gérer le patrimoine informatique",
    bullets: [
      "Recenser et identifier les ressources numériques",
      "Exploiter des référentiels, normes et standards",
      "Mettre en place et vérifier les niveaux d'habilitation",
      "Vérifier la continuité d'un service informatique",
      "Gérer des sauvegardes",
      "Vérifier le respect des règles d'utilisation",
    ],
  },
  {
    key: "D",
    title: "Répondre aux incidents et aux demandes d'assistance et d'évolution",
    bullets: [
      "Collecter, suivre et orienter des demandes",
      "Traiter des demandes (réseau, système, applicatifs)",
      "Traiter des demandes concernant les applications",
    ],
  },
  {
    key: "E",
    title: "Développer la présence en ligne de l'organisation",
    bullets: [
      "Valoriser l'image de l'organisation sur les médias numériques",
      "Référencer les services en ligne et mesurer leur visibilité",
      "Participer à l'évolution d'un site Web",
    ],
  },
  {
    key: "F",
    title: "Travailler en mode projet",
    bullets: [
      "Analyser les objectifs et l'organisation d'un projet",
      "Planifier les activités",
      "Évaluer les indicateurs de suivi et analyser les écarts",
    ],
  },
  {
    key: "G",
    title: "Mettre à disposition des utilisateurs un service informatique",
    bullets: [
      "Réaliser les tests d'intégration et d'acceptation",
      "Déployer un service",
      "Accompagner les utilisateurs dans la mise en place d'un service",
    ],
  },
  {
    key: "H",
    title: "Organiser son développement professionnel",
    bullets: [
      "Mettre en place son environnement d'apprentissage",
      "Mettre en œuvre une veille informationnelle",
      "Gérer son identité professionnelle",
      "Développer son projet professionnel",
    ],
  },
];

export const syntheseRows: SyntheseRow[] = [
  {
    group: "Réalisation en cours de formation",
    items: [
      {
        label:
          "Analyse des besoins et recueil des exigences réseau du site parisien du laboratoire pharmaceutique GSB en vue d'une refonte de l'infrastructure",
        marks: ["C", "F"],
      },
      {
        label:
          "Conception d'une architecture réseau segmentée par VLAN adaptée aux contraintes de sécurité et d'organisation du laboratoire GSB",
        marks: ["C", "F"],
      },
      {
        label:
          "Réalisation d'une maquette réseau fonctionnelle sous Cisco Packet Tracer modélisant l'architecture VLAN et le routage inter-VLAN",
        marks: ["C", "F", "G"],
      },
      {
        label:
          "Configuration du routage inter-VLAN et mise en place des règles de communication entre les différents segments du réseau GSB",
        marks: ["C", "F", "G"],
      },
      {
        label:
          "Déploiement et configuration des services réseau DHCP et DNS pour l'attribution automatique des adresses IP et la résolution de noms",
        marks: ["C", "F", "G"],
      },
      {
        label:
          "Sécurisation des accès réseau par filtrage et contrôle des flux entre VLAN afin de protéger les données sensibles du laboratoire GSB",
        marks: ["C", "D", "F", "G"],
      },
    ],
  },
  {
    group: "Réalisations en milieu professionnel — 1ʳᵉ année",
    items: [
      {
        label:
          "Conseil, analyse des besoins et vente de solutions informatiques et de sécurité adaptées aux clients de l'entreprise",
        marks: ["E", "H"],
      },
      {
        label:
          "Installation et configuration d'infrastructures de vidéosurveillance IP : pose de caméras, paramétrage des NVR et intégration au réseau client",
        marks: ["C", "G"],
      },
      {
        label:
          "Conception, développement et mise en ligne du site web de l'entreprise incluant la modélisation de la base de données et l'hébergement en production",
        marks: ["E", "F", "G", "H"],
      },
      {
        label:
          "Interventions terrain : câblage RJ45, installation et configuration de switchs, de bornes Wi-Fi et de caméras IP sur sites clients",
        marks: ["C", "G"],
      },
      {
        label:
          "Sensibilisation des utilisateurs à la cybersécurité à travers les fonctionnalités intégrées au site web de l'entreprise (bonnes pratiques, alertes, contenus pédagogiques)",
        marks: ["D", "E"],
      },
    ],
  },
];

/** Veille technologique (attendu E5) — adossée au projet Claude Mastery. */
export const veille = {
  subject: "L'IA générative & l'écosystème Claude",
  intro:
    "Ma veille porte sur l'intelligence artificielle générative, et plus particulièrement l'écosystème Claude (Anthropic) : un domaine qui évolue très rapidement (nouveaux modèles, agents, « skills », MCP, outils). Suivre cette actualité est indispensable pour maintenir et enrichir mon site Claude Mastery.",
  points: [
    "Nouveaux modèles & capacités (raisonnement, agents, fenêtres de contexte)",
    "Agents & automatisation (MCP, outils, orchestration)",
    "Bonnes pratiques de prompting et de sécurité des IA",
    "Cas d'usage concrets pour l'IT, les réseaux et la cybersécurité",
  ],
  sources: [
    "Documentation & blog d'Anthropic",
    "Changelogs & notes de version",
    "Communautés (Reddit r/ClaudeAI, X, GitHub)",
    "Hacker News & newsletters spécialisées IA",
  ],
  contribution:
    "Je centralise et vulgarise ces connaissances (méthodes, skills, workflows) sur Claude Mastery, un site que je tiens à jour pour la communauté.",
};
