import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Harone",
  lastName: "Ait Ouakli",
  name: `Harone Ait Ouakli`,
  role: "Technicien Systèmes & Réseaux",
  avatar: "/images/avatar.png",
  email: "h.ait-ouakli@ecole-ipssi.net",
  location: "Europe/Paris", // IANA time zone identifier
  languages: ["Français", "Anglais", "Allemand"],
  locale: "fr",
};

const newsletter: Newsletter = {
  display: false,
  title: <>Newsletter</>,
  description: <></>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/haroneait-dev",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/harone-ait-ouakli-3478a83a1",
    essential: true,
  },
  {
    name: "Claude Mastery",
    icon: "globe",
    link: "https://claude-code-harone1.vercel.app",
    essential: true,
  },
  {
    name: "CV",
    icon: "document",
    link: "/cv/Harone-Ait-Ouakli-CV.pdf",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Accueil",
  title: `Portfolio — ${person.name}`,
  description: `Portfolio de ${person.name}, ${person.role}, en recherche d'alternance en réseaux & administration systèmes.`,
  headline: <>Concevoir, déployer et sécuriser des infrastructures réseau</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong>Labo GSB</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Projet réseau phare
        </Text>
      </Row>
    ),
    href: "/work/labo-gsb",
  },
  subline: (
    <>
      Je suis Harone, étudiant en BTS SIO option SISR, à la recherche d&apos;une{" "}
      <Text as="span" weight="strong">
        alternance
      </Text>{" "}
      en réseaux et administration systèmes.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "À propos",
  title: `À propos – ${person.name}`,
  description: `${person.name}, ${person.role} basé à Paris`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "",
  },
  intro: {
    display: true,
    title: "Présentation",
    description: (
      <>
        Passionné par les réseaux et l&apos;administration systèmes, je me forme en BTS SIO option
        SISR à l&apos;IPSSI. De la conception d&apos;architectures segmentées par VLAN à
        l&apos;installation de vidéosurveillance IP sur le terrain, j&apos;aime concevoir, déployer
        et sécuriser des infrastructures fiables. Je recherche une alternance (rythme 1 semaine en
        formation / 1 semaine en entreprise) dans les réseaux et l&apos;administration systèmes.
      </>
    ),
  },
  work: {
    display: true,
    title: "Expérience",
    experiences: [
      {
        company: "Sam Network Solutions",
        timeframe: "Avril 2026 – Juin 2026",
        role: "Stage — Technicien Informatique & Réseaux",
        achievements: [
          <>
            Installation et configuration d&apos;infrastructures de vidéosurveillance IP (caméras
            IP/PTZ, NVR) et intégration au réseau client.
          </>,
          <>
            Interventions terrain : câblage RJ45, baie de brassage, configuration de switchs et
            bornes Wi-Fi.
          </>,
          <>
            Développement du site web de l&apos;entreprise (conception, base de données, mise en
            ligne) et maintenance matérielle.
          </>,
        ],
        images: [
          { src: "/images/stage/baie-brassage.jpg", alt: "Baie de brassage", width: 9, height: 16 },
          { src: "/images/stage/camera-dome.jpg", alt: "Caméra IP dôme", width: 9, height: 16 },
        ],
      },
    ],
  },
  studies: {
    display: true,
    title: "Formation",
    institutions: [
      {
        name: "BTS SIO — option SISR · École IPSSI",
        description: (
          <>Solutions d&apos;Infrastructure, Systèmes et Réseaux. Depuis octobre 2025.</>
        ),
      },
      {
        name: "Baccalauréat général · Lycée Eugène Delacroix",
        description: <>Spécialités Mathématiques et Physique-Chimie (2022 – 2025).</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Compétences techniques",
    skills: [
      {
        title: "Réseaux",
        description: (
          <>
            Conception & configuration sous Cisco Packet Tracer : VLAN, routage inter-VLAN (802.1Q),
            adressage IP / VLSM, services DHCP & DNS, ACL de filtrage.
          </>
        ),
        tags: [],
        images: [
          { src: "/images/gsb/topologie.jpg", alt: "Topologie réseau GSB", width: 16, height: 9 },
          { src: "/images/gsb/plan-adressage.jpg", alt: "Plan d'adressage IP", width: 16, height: 9 },
        ],
      },
      {
        title: "Systèmes & Virtualisation",
        description: (
          <>Systèmes Windows, machines virtuelles, VMware, services réseau (DHCP / DNS).</>
        ),
        tags: [],
        images: [],
      },
      {
        title: "Sécurité & Vidéoprotection",
        description: (
          <>
            Sécurisation des accès réseau, vidéosurveillance IP/PTZ & systèmes d&apos;alarme,
            sensibilisation à la cybersécurité, conformité CNIL.
          </>
        ),
        tags: [],
        images: [
          {
            src: "/images/stage/equipements-reseau.jpg",
            alt: "Équipements réseau & alarme",
            width: 9,
            height: 16,
          },
        ],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Veille",
  title: "Veille technologique",
  description: `Ma veille technologique — IA générative & écosystème Claude`,
};

const work: Work = {
  path: "/work",
  label: "Projets",
  title: `Projets – ${person.name}`,
  description: `Projets réseaux, systèmes & web réalisés par ${person.name}`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Galerie",
  title: `Galerie photos – ${person.name}`,
  description: `Photos de stage : baie de brassage, vidéosurveillance IP, supervision et terrain`,
  images: [
    { src: "/images/stage/baie-brassage.jpg", alt: "Baie de brassage", orientation: "vertical" },
    { src: "/images/stage/baie-brassage-config.jpg", alt: "Configuration devant la baie", orientation: "horizontal" },
    { src: "/images/stage/baie-cablage.jpg", alt: "Câblage réseau", orientation: "vertical" },
    { src: "/images/stage/camera-dome.jpg", alt: "Caméra IP dôme", orientation: "vertical" },
    { src: "/images/stage/camera-ptz.jpg", alt: "Caméra PTZ", orientation: "vertical" },
    { src: "/images/stage/camera-exterieur.jpg", alt: "Caméra extérieure", orientation: "vertical" },
    { src: "/images/stage/videosurveillance.jpg", alt: "Supervision vidéosurveillance", orientation: "horizontal" },
    { src: "/images/stage/supervision.jpg", alt: "Poste de supervision", orientation: "vertical" },
    { src: "/images/stage/mur-ecrans.jpg", alt: "Mur d'écrans de supervision", orientation: "vertical" },
    { src: "/images/stage/equipements-reseau.jpg", alt: "Équipements réseau & alarme", orientation: "vertical" },
    { src: "/images/stage/interphone-alarme.jpg", alt: "Interphone & centrale d'alarme", orientation: "vertical" },
    { src: "/images/stage/maintenance-pc.jpg", alt: "Maintenance matérielle", orientation: "vertical" },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
