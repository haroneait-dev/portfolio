import type { Metadata } from "next";
import Link from "next/link";
import {
  Home,
  ArrowRight,
  ArrowLeft,
  Building2,
  MapPin,
  Calendar,
  ClipboardList,
  Network,
  ShieldCheck,
  LifeBuoy,
  Code2,
  CheckCircle2,
  CircleDot,
} from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ProjectGallery } from "@/components/project-gallery";

export const metadata: Metadata = {
  title: "Stage — Sam Network Solutions · Harone Ait Ouakli",
  description:
    "Présentation de mon stage de Technicien Informatique & Réseaux chez Sam Network Solutions : vidéosurveillance IP, câblage & baie de brassage, maintenance, et galerie photos.",
};

const galleryImages = [
  { src: "/images/stage/baie-brassage.jpg", caption: "Baie de brassage — patch panel, switch ProCurve & câblage" },
  { src: "/images/stage/baie-cablage.jpg", caption: "Câblage réseau dans la baie de brassage" },
  { src: "/images/stage/baie-installee.jpg", caption: "Baie de brassage installée" },
  { src: "/images/stage/baie-brassage-config.jpg", caption: "Configuration sur site devant la baie" },
  { src: "/images/stage/camera-dome.jpg", caption: "Caméra IP dôme (intérieur)" },
  { src: "/images/stage/camera-ptz.jpg", caption: "Caméra PTZ orientable" },
  { src: "/images/stage/camera-exterieur.jpg", caption: "Caméra de vidéosurveillance (extérieur)" },
  { src: "/images/stage/videosurveillance.jpg", caption: "Supervision des flux de vidéosurveillance (NVR)" },
  { src: "/images/stage/supervision.jpg", caption: "Poste de supervision multi-écrans" },
  { src: "/images/stage/mur-ecrans.jpg", caption: "Mur d'écrans de supervision" },
  { src: "/images/stage/equipements-reseau.jpg", caption: "Équipements réseau & alarme (Ajax, points d'accès)" },
  { src: "/images/stage/interphone-alarme.jpg", caption: "Interphone & centrale d'alarme" },
  { src: "/images/stage/maintenance-pc.jpg", caption: "Maintenance matérielle (PC portable)" },
  { src: "/images/stage/diagnostic-composants.jpg", caption: "Diagnostic & remplacement de composants" },
];

const missions = [
  "Installation et configuration d'infrastructures de vidéosurveillance (caméras IP/PTZ, NVR)",
  "Interventions terrain : câblage RJ45, baie de brassage, switch et bornes Wi-Fi",
  "Conseil et vente de solutions informatiques et de sécurité auprès des clients",
  "Développement du site web de l'entreprise (conception, base de données, mise en ligne)",
  "Sensibilisation à la cybersécurité via les fonctionnalités développées sur le site",
  "Maintenance matérielle : diagnostic et remplacement de composants",
];

const competences = [
  {
    icon: Network,
    title: "Architectures réseaux",
    text: "Câblage RJ45, organisation de baie de brassage, configuration de switch et de bornes Wi-Fi.",
  },
  {
    icon: ShieldCheck,
    title: "Sécurité & vidéoprotection",
    text: "Déploiement de vidéosurveillance IP/PTZ, NVR et systèmes d'alarme ; sécurisation des accès.",
  },
  {
    icon: LifeBuoy,
    title: "Support & maintenance",
    text: "Diagnostic et résolution d'incidents, maintenance matérielle, conseil et accompagnement clients.",
  },
  {
    icon: Code2,
    title: "Développement web",
    text: "Conception du site de l'entreprise (base de données, mise en ligne) et sensibilisation cyber.",
  },
];

const technologies = [
  "Caméras IP / PTZ",
  "NVR",
  "Câblage RJ45",
  "Baie de brassage",
  "Switch",
  "Bornes Wi-Fi",
  "Alarme Ajax",
  "Développement web",
];

const resultats = [
  "Infrastructures de vidéosurveillance opérationnelles chez les clients",
  "Réseaux câblés et organisés (baie de brassage propre et documentée)",
  "Site web de l'entreprise conçu et mis en ligne",
  "Autonomie sur le terrain et sens du diagnostic renforcés",
];

export default function StagePage() {
  return (
    <div className="flex min-h-svh flex-col bg-background">
      {/* Top bar */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <nav className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <Home className="h-4 w-4" />
            Accueil
          </Link>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Voir tout mon portfolio
            <ArrowRight className="h-4 w-4" />
          </Link>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border bg-muted/40 py-16 sm:py-20">
          <div
            className="pointer-events-none absolute -top-24 right-0 -z-10 h-80 w-80 rounded-full bg-primary/10 blur-3xl"
            aria-hidden
          />
          <div className="mx-auto w-full max-w-5xl px-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              <ClipboardList className="h-3.5 w-3.5" />
              Stage de 2ᵉ année — BTS SIO SISR
            </span>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
              Technicien Informatique &amp; Réseaux
            </h1>
            <p className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-1 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5 font-semibold text-foreground">
                <Building2 className="h-4 w-4 text-primary" />
                Sam Network Solutions
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="h-4 w-4 text-primary" />
                Avril – Juin 2026
              </span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-primary" />
                Île-de-France
              </span>
            </p>
          </div>
        </section>

        {/* Entreprise */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto w-full max-w-5xl px-6">
            <SectionHeading
              eyebrow="L'entreprise"
              title="Sam Network Solutions"
              description="Présentation de la structure d'accueil de mon stage."
            />
            <Reveal className="mt-8 grid gap-6 sm:grid-cols-3">
              <div className="rounded-2xl border border-border bg-card p-6 sm:col-span-2">
                <p className="text-sm leading-relaxed text-foreground/90">
                  <strong className="text-foreground">Sam Network Solutions</strong> est une
                  entreprise spécialisée dans les solutions{" "}
                  <strong className="text-foreground">informatiques et de sécurité électronique</strong> :
                  réseaux, vidéosurveillance (caméras IP), contrôle d&apos;accès et systèmes
                  d&apos;alarme. Elle conseille, installe et maintient ces solutions chez ses
                  clients professionnels et particuliers.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-1">
                <div className="rounded-xl border border-border bg-card p-4">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">Domaine</p>
                  <p className="mt-1 text-sm font-semibold text-foreground">
                    Réseaux & sécurité électronique
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-card p-4">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">Portée</p>
                  <p className="mt-1 text-sm font-semibold text-foreground">Locale (Île-de-France)</p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Missions */}
        <section className="border-t border-border bg-muted/40 py-16 sm:py-20">
          <div className="mx-auto w-full max-w-5xl px-6">
            <SectionHeading eyebrow="Mes missions" title="Ce que j'ai réalisé" />
            <Reveal className="mt-8 grid gap-3 sm:grid-cols-2">
              {missions.map((m) => (
                <div
                  key={m}
                  className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 text-sm text-foreground/90"
                >
                  <CircleDot className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {m}
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        {/* Compétences */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto w-full max-w-5xl px-6">
            <SectionHeading
              eyebrow="Compétences développées"
              title="En lien avec le référentiel SISR"
            />
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {competences.map((c, i) => {
                const Icon = c.icon;
                return (
                  <Reveal
                    key={c.title}
                    delayIndex={i}
                    className="rounded-2xl border border-border bg-card p-6"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="font-semibold text-foreground">{c.title}</h3>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
                  </Reveal>
                );
              })}
            </div>

            {/* Technologies */}
            <Reveal className="mt-8">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Technologies & outils
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {technologies.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-border bg-secondary/50 px-3 py-1 text-sm font-medium text-secondary-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* Résultats */}
        <section className="border-t border-border bg-muted/40 py-16 sm:py-20">
          <div className="mx-auto w-full max-w-5xl px-6">
            <SectionHeading eyebrow="Résultats" title="Apports du stage" />
            <Reveal className="mt-8 grid gap-3 sm:grid-cols-2">
              {resultats.map((r) => (
                <div
                  key={r}
                  className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 text-sm text-foreground/90"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                  {r}
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        {/* Galerie */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto w-full max-w-5xl px-6">
            <SectionHeading
              eyebrow="Galerie"
              title="Photos du stage"
              description="Interventions terrain : baie de brassage, vidéosurveillance, supervision et maintenance."
            />
            <Reveal className="mt-8">
              <ProjectGallery images={galleryImages} title="Stage — Sam Network Solutions" />
            </Reveal>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-border py-14">
          <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-4 px-6 text-center">
            <h2 className="text-xl font-bold text-foreground">
              Envie de voir l&apos;ensemble de mon travail ?
            </h2>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/portfolio"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Voir tout mon portfolio
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-border bg-card px-6 text-sm font-medium text-foreground transition-colors hover:bg-accent"
              >
                <ArrowLeft className="h-4 w-4" />
                Retour à l'accueil
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
