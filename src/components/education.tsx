import { EDUCATION } from "@/data/resume";
import { SectionHeading } from "./section-heading";

export function Education() {
  return (
    <section className="border-t border-border py-20">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading id="education" label="Education" title="Background" />

        <div className="grid gap-4 sm:grid-cols-3">
          {EDUCATION.map((edu) => (
            <div
              key={edu.degree}
              className="rounded-xl border border-border bg-card p-5"
            >
              <span className="font-mono text-xs text-accent">{edu.date}</span>
              <h3 className="mt-2 text-sm font-semibold">{edu.degree}</h3>
              <p className="mt-1 text-xs text-muted">{edu.school}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
