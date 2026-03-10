import { SKILLS } from "@/data/resume";
import { SectionHeading } from "./section-heading";

export function Skills() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading id="skills" label="Technical Skills" title="What I work with" />

        <div className="grid gap-8 sm:grid-cols-2">
          {Object.entries(SKILLS).map(([category, items]) => (
            <div key={category} className="rounded-xl border border-border bg-card p-6">
              <h3 className="mb-4 font-mono text-xs font-semibold uppercase tracking-wider text-muted">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-border bg-background px-3 py-1.5 font-mono text-xs text-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
