import { Network, Server, ShieldCheck, Wrench, type LucideIcon } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { skillCategories, type SkillCategory } from "@/lib/portfolio-data";

const icons: Partial<Record<SkillCategory["icon"], LucideIcon>> = {
  network: Network,
  server: Server,
  shield: ShieldCheck,
  tools: Wrench,
};

export function Skills() {
  return (
    <section id="competences" className="scroll-mt-20 py-20 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-6">
        <SectionHeading
          eyebrow="Compétences"
          title="Un socle technique systèmes & réseaux"
          description="Des compétences acquises en formation, en stage et en alternance."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {skillCategories.map((cat) => {
            const Icon = icons[cat.icon] ?? Wrench;
            return (
              <div key={cat.title} className="rounded-xl border border-border p-6">
                <div className="flex items-center gap-3">
                  <Icon className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold text-foreground">{cat.title}</h3>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{cat.description}</p>
                <ul className="mt-4 space-y-1.5 text-sm text-foreground/85">
                  {cat.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted-foreground" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
