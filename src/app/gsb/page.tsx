import type { Metadata } from "next";
import Link from "next/link";
import { Home, ArrowRight, ArrowLeft, Network, CircleDot, Server } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ConfigViewer } from "@/components/config-viewer";
import { gsbAddressing, gsbConfigs } from "@/lib/gsb-data";

export const metadata: Metadata = {
  title: "Labo GSB — Infrastructure réseau · Harone Ait Ouakli",
  description:
    "Projet Labo GSB (BTS SIO SISR) : conception d'une infrastructure réseau segmentée par VLAN, routage inter-VLAN, DHCP/DNS et sécurisation par ACL — plan d'adressage et configurations Cisco.",
};

const objectifs = [
  "Analyse des besoins du site parisien du laboratoire pharmaceutique GSB",
  "Architecture segmentée en 12 VLAN (un par service)",
  "Plan d'adressage IP optimisé par VLSM",
  "Routage inter-VLAN (router-on-a-stick, 802.1Q)",
  "Services réseau : DHCP (relais ip helper-address) & DNS",
  "Sécurisation des flux inter-VLAN par ACL",
  "Maquette fonctionnelle sous Cisco Packet Tracer",
];

export default function GsbPage() {
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
              <Network className="h-3.5 w-3.5" />
              Projet pédagogique — BTS SIO SISR
            </span>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
              Labo GSB — Infrastructure réseau
            </h1>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Conception et mise en place d&apos;une infrastructure réseau segmentée par VLAN pour le
              site parisien du laboratoire pharmaceutique GSB, modélisée sous Cisco Packet Tracer.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {["Cisco Packet Tracer", "VLAN", "Routage inter-VLAN", "802.1Q", "DHCP", "DNS", "ACL", "RIP"].map(
                (t) => (
                  <span
                    key={t}
                    className="rounded-md border border-border bg-card px-2.5 py-1 text-xs font-medium text-foreground/80"
                  >
                    {t}
                  </span>
                )
              )}
            </div>
          </div>
        </section>

        {/* Objectifs */}
        <section className="py-14 sm:py-16">
          <div className="mx-auto w-full max-w-5xl px-6">
            <SectionHeading eyebrow="Objectifs" title="Ce que j'ai conçu & déployé" />
            <Reveal className="mt-8 grid gap-3 sm:grid-cols-2">
              {objectifs.map((o) => (
                <div
                  key={o}
                  className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 text-sm text-foreground/90"
                >
                  <CircleDot className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {o}
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        {/* Topologie */}
        <section className="border-t border-border bg-muted/40 py-14 sm:py-16">
          <div className="mx-auto w-full max-w-5xl px-6">
            <SectionHeading
              eyebrow="Topologie"
              title="Architecture du réseau"
              description="Routeur R1 (router-on-a-stick) relié au SW-Central en trunk, distribuant les VLAN vers les switchs d'étage."
            />
            <Reveal className="mt-8 overflow-hidden rounded-2xl border border-border bg-card p-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/gsb/topologie.jpg"
                alt="Topologie réseau du Labo GSB (Cisco Packet Tracer)"
                className="mx-auto w-full max-w-3xl rounded-lg"
                loading="lazy"
              />
            </Reveal>
          </div>
        </section>

        {/* Plan d'adressage */}
        <section className="py-14 sm:py-16">
          <div className="mx-auto w-full max-w-5xl px-6">
            <SectionHeading
              eyebrow="Plan d'adressage"
              title="12 VLAN, un sous-réseau par service"
              description="Découpage en VLSM à partir du réseau 172.16.0.0, dimensionné selon le nombre d'hôtes de chaque service."
            />
            <Reveal className="mt-8 overflow-x-auto rounded-2xl border border-border shadow-sm">
              <table className="w-full min-w-[44rem] border-collapse text-left text-sm">
                <thead>
                  <tr className="bg-primary text-primary-foreground">
                    <th className="px-3 py-2.5 font-semibold">VLAN</th>
                    <th className="px-3 py-2.5 font-semibold">Service</th>
                    <th className="px-3 py-2.5 font-semibold">Hôtes</th>
                    <th className="px-3 py-2.5 font-semibold">Sous-réseau</th>
                    <th className="px-3 py-2.5 font-semibold">Masque</th>
                    <th className="px-3 py-2.5 font-semibold">Plage IP</th>
                  </tr>
                </thead>
                <tbody>
                  {gsbAddressing.map((r, i) => (
                    <tr key={r.vlan} className={i % 2 === 0 ? "bg-card" : "bg-muted/40"}>
                      <td className="border-t border-border px-3 py-2.5">
                        <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-0.5 text-xs font-bold text-primary">
                          {r.vlan}
                        </span>
                      </td>
                      <td className="border-t border-border px-3 py-2.5 font-medium text-foreground">
                        {r.service}
                      </td>
                      <td className="border-t border-border px-3 py-2.5 text-muted-foreground">{r.hosts}</td>
                      <td className="border-t border-border px-3 py-2.5 font-mono text-xs text-foreground/90">
                        {r.subnet}
                      </td>
                      <td className="border-t border-border px-3 py-2.5 font-mono text-xs text-muted-foreground">
                        {r.mask}
                      </td>
                      <td className="border-t border-border px-3 py-2.5 font-mono text-xs text-foreground/90">
                        {r.range}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Reveal>
          </div>
        </section>

        {/* Configurations */}
        <section className="border-t border-border bg-muted/40 py-14 sm:py-16">
          <div className="mx-auto w-full max-w-5xl px-6">
            <SectionHeading
              eyebrow="Configurations Cisco"
              title="Les configs des équipements"
              description="Routeur, switchs et listes de contrôle d'accès (ACL). Clique sur un onglet, et copie la config si besoin."
            />
            <Reveal className="mt-8">
              <ConfigViewer configs={gsbConfigs} />
            </Reveal>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-border py-14">
          <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-4 px-6 text-center">
            <Server className="h-6 w-6 text-primary" />
            <h2 className="text-xl font-bold text-foreground">Découvre mes autres réalisations</h2>
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
                Retour à l&apos;accueil
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
