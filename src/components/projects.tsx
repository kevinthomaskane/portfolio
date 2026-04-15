import { PROJECTS } from '@/data/resume';
import { SectionHeading } from './section-heading';

export function Projects() {
  return (
    <section className="border-t border-border py-20">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          id="projects"
          label="Featured Work"
          title="Recent projects I've shipped"
        />

        <div className="space-y-6">
          {PROJECTS.map((project) => (
            <div
              key={project.slug}
              className="group rounded-xl border border-border bg-card p-6 transition-colors hover:bg-card-hover sm:p-8"
            >
              {/* header row */}
              <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                  <h3 className="text-lg font-bold">{project.name}</h3>
                  <p className="mt-0.5 font-mono text-xs text-accent">
                    {project.tagline}
                  </p>
                </div>
                <div className="flex shrink-0 flex-col gap-1 sm:items-end">
                  {project.date && (
                    <span className="font-mono text-xs text-muted">
                      {project.date}
                    </span>
                  )}
                  {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex shrink-0 items-center gap-1.5 font-mono text-xs text-muted transition-colors hover:text-foreground"
                  >
                    {project.url.replace('https://', '')}
                    <svg
                      width="12"
                      height="12"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                  )}
                </div>
              </div>

              {/* description */}
              <p className="mt-4 text-sm leading-relaxed text-muted">
                {project.description}
              </p>

              {/* highlights */}
              <ul className="mt-4 space-y-2">
                {project.highlights.map((h, i) => (
                  <li key={i} className="flex gap-3 text-sm text-muted">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {h}
                  </li>
                ))}
              </ul>

              {/* tech tags */}
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-border bg-background px-2.5 py-1 font-mono text-[11px] text-muted"
                  >
                    {t}
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
