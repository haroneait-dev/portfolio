"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import {
  Briefcase,
  Mail,
  Library,
  ArrowRight,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";
import { profile, socials } from "@/lib/portfolio-data";

type Card = {
  label: string;
  description: string;
  href: string;
  cta: string;
  external?: boolean;
  badge?: string;
  Icon: LucideIcon;
  accent: string;
};

const cards: Card[] = [
  {
    label: "Bibli IA",
    description:
      "Mon projet SaaS : fiches pratiques et packs de contexte pour mieux se faire comprendre par Claude et ChatGPT, avec abonnements et serveur MCP.",
    href: socials.bibliIa,
    cta: "Voir l'aperçu",
    external: true,
    badge: "Bientôt",
    Icon: Library,
    accent: "from-emerald-400 to-teal-500",
  },
  {
    label: "Mon stage",
    description:
      "Sam Network Solutions : vidéosurveillance IP, baie de brassage, configuration switch/routeur et site web de l'entreprise.",
    href: "/stage",
    cta: "Voir la page du stage",
    Icon: Briefcase,
    accent: "from-amber-400 to-orange-500",
  },
  {
    label: "Contact",
    description:
      "En alternance chez PARROT. Email, téléphone, LinkedIn et CV à télécharger.",
    href: "/portfolio#contact",
    cta: "Me contacter",
    Icon: Mail,
    accent: "from-sky-400 to-blue-600",
  },
];

const ease = [0.21, 0.47, 0.32, 0.98] as const;

export function Landing() {
  const glowRef = useRef<HTMLDivElement>(null);

  // Halo qui suit la souris (via variables CSS, sans re-render)
  useEffect(() => {
    const el = glowRef.current;
    if (!el) return;
    const onMove = (e: PointerEvent) => {
      el.style.setProperty("--x", `${e.clientX}px`);
      el.style.setProperty("--y", `${e.clientY}px`);
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <div className="relative flex min-h-svh w-full flex-col items-center justify-center overflow-hidden bg-slate-950 px-4 py-16 text-white">
      {/* Grille */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
      />
      {/* Halos de couleur animés */}
      <motion.div
        aria-hidden
        className="absolute -left-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-blue-600/25 blur-3xl"
        animate={{ x: [0, 80, 0], y: [0, 60, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute -bottom-40 -right-40 h-[28rem] w-[28rem] rounded-full bg-emerald-500/20 blur-3xl"
        animate={{ x: [0, -70, 0], y: [0, -50, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Halo souris */}
      <div
        ref={glowRef}
        aria-hidden
        className="pointer-events-none absolute inset-0 [background:radial-gradient(500px_circle_at_var(--x,50%)_var(--y,50%),rgba(56,189,248,0.10),transparent_60%)]"
      />

      <div className="relative z-10 flex w-full max-w-5xl flex-col items-center gap-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1.5 text-sm font-medium text-emerald-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            En alternance chez PARROT
          </span>
          <h1 className="mt-6 text-5xl font-bold tracking-tight sm:text-7xl">
            {profile.firstName}{" "}
            <span className="bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">
              {profile.lastName}
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/70 sm:text-lg">
            {profile.title} · BTS SIO option SISR
          </p>
        </motion.div>

        <div className="grid w-full gap-4 sm:grid-cols-3">
          {cards.map((card, i) => {
            const inner = (
              <>
                <div className="flex items-center justify-between">
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${card.accent} shadow-lg`}
                  >
                    <card.Icon className="h-5 w-5 text-white" />
                  </div>
                  {card.badge && (
                    <span className="rounded-full border border-white/15 px-2.5 py-0.5 text-xs text-white/70">
                      {card.badge}
                    </span>
                  )}
                </div>
                <h2 className="mt-4 text-lg font-semibold">{card.label}</h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-white/60">
                  {card.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-sky-300 transition-colors group-hover:text-sky-200">
                  {card.cta}
                  {card.external ? (
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  ) : (
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  )}
                </span>
              </>
            );
            const cls =
              "group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.06]";
            return (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 + i * 0.1, ease }}
              >
                {card.external ? (
                  <a href={card.href} target="_blank" rel="noopener noreferrer" className={cls}>
                    {inner}
                  </a>
                ) : (
                  <Link href={card.href} className={cls}>
                    {inner}
                  </Link>
                )}
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease }}
        >
          <Link
            href="/portfolio"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-slate-900 shadow-[0_0_40px_rgba(56,189,248,0.25)] transition-all hover:shadow-[0_0_60px_rgba(56,189,248,0.4)] sm:text-lg"
          >
            Découvrir mon portfolio
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
