import { EXPERIENCE } from "@/data/resume";
import { SectionHeading } from "./section-heading";

export function Experience() {
  return (
    <section className="border-t border-border py-20">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading id="experience" label="Career" title="Where I've worked" />

        <div className="relative space-y-12 pl-8 before:absolute before:left-[7px] before:top-2 before:h-[calc(100%-2rem)] before:w-px before:bg-border">
          {EXPERIENCE.map((job) => (
            <div key={job.company} className="relative">
              {/* timeline dot */}
              <div className="absolute -left-8 top-1.5 h-[15px] w-[15px] rounded-full border-2 border-accent bg-background" />

              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-base font-bold">{job.company}</h3>
                <span className="font-mono text-xs text-muted">{job.location}</span>
              </div>

              {job.roles.map((role) => (
                <div key={role.title + role.dates} className="mt-4">
                  <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between">
                    <span className="text-sm font-medium text-foreground">
                      {role.title}
                    </span>
                    <span className="font-mono text-xs text-muted">{role.dates}</span>
                  </div>
                  <ul className="mt-3 space-y-2">
                    {role.bullets.map((bullet, i) => (
                      <li key={i} className="flex gap-3 text-sm leading-relaxed text-muted">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-border" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
