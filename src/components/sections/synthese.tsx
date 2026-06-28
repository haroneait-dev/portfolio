import { Table2 } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { competencesSynthese } from "@/lib/portfolio-data";

export function Synthese() {
  return (
    <section id="synthese" className="scroll-mt-20 border-t border-border py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-6">
        <SectionHeading
          eyebrow="Tableau de synthèse"
          title="Mes compétences majeures (option SISR)"
          description="Synthèse des compétences clés développées en formation, en auto-formation et en stage, en lien avec le référentiel SISR."
        />

        <Reveal className="mt-10 overflow-hidden rounded-2xl border border-border shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="border-r border-primary-foreground/20 px-4 py-3 font-semibold">
                    Compétence
                  </th>
                  <th className="border-r border-primary-foreground/20 px-4 py-3 font-semibold">
                    Description & mise en œuvre
                  </th>
                  <th className="px-4 py-3 font-semibold">Contexte</th>
                </tr>
              </thead>
              <tbody>
                {competencesSynthese.map((row, i) => (
                  <tr
                    key={row.competence}
                    className={i % 2 === 0 ? "bg-card" : "bg-muted/50"}
                  >
                    <td className="border-t border-r border-border px-4 py-3 align-top font-semibold text-foreground">
                      <span className="flex items-start gap-2">
                        <Table2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        {row.competence}
                      </span>
                    </td>
                    <td className="border-t border-r border-border px-4 py-3 align-top text-muted-foreground">
                      {row.description}
                    </td>
                    <td className="border-t border-border px-4 py-3 align-top">
                      <span className="inline-block rounded-md bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
                        {row.contexte}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
