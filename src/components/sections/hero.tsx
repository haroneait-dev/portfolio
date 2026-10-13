import Link from "next/link";
import { ArrowRight, Download, MapPin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/lib/portfolio-data";

const stats = [
  { value: "4", label: "Projets présentés" },
  { value: "2", label: "Expériences en entreprise" },
  { value: "1", label: "Certification" },
  { value: "SISR", label: "BTS SIO" },
];

export function Hero() {
  return (
    <section id="accueil" className="border-b border-border pt-32 pb-16 sm:pt-40 sm:pb-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        <p className="text-sm font-medium text-muted-foreground">
          En alternance chez PARROT · BTS SIO option SISR
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
          {profile.fullName}
        </h1>
        <p className="mt-3 text-xl font-medium text-primary sm:text-2xl">{profile.title}</p>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {profile.availability}
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            {profile.location}
          </span>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
          >
            <Mail className="h-4 w-4" />
            {profile.email}
          </a>
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button render={<Link href="#projets" />} size="lg" className="h-11 px-6">
            Voir mes projets
            <ArrowRight />
          </Button>
          <Button
            render={<a href={profile.cvPath} download />}
            variant="outline"
            size="lg"
            className="h-11 px-6"
          >
            <Download />
            Télécharger le CV
          </Button>
        </div>

        <dl className="mt-14 grid grid-cols-2 divide-border overflow-hidden rounded-xl border border-border sm:grid-cols-4 sm:divide-x">
          {stats.map((stat) => (
            <div key={stat.label} className="px-5 py-4">
              <dt className="text-xs text-muted-foreground">{stat.label}</dt>
              <dd className="mt-1 text-2xl font-semibold text-foreground">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
