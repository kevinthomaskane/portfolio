import { PERSONAL } from '@/data/resume';

export function Hero() {
  return (
    <section className="pb-16 pt-20 md:pt-28">
      <div className="mx-auto max-w-5xl px-6">
        {/* greeting tag */}
        <div className="mb-6 inline-block rounded-full border border-border bg-card px-4 py-1.5">
          <span className="font-mono text-xs text-muted">
            <span className="text-accent">&gt;</span> available for
            opportunities
          </span>
        </div>

        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          {PERSONAL.name}
        </h1>

        <p className="mt-3 text-lg text-muted sm:text-xl">{PERSONAL.title}</p>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted">
          {PERSONAL.summary}
        </p>

        {/* Contact row */}
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={`mailto:${PERSONAL.email}`}
            className="inline-flex items-center gap-2 rounded-lg bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            <svg
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            Get in touch
          </a>
          <a
            href={PERSONAL.website}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-card-hover"
          >
            <svg
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
            10xDev.io
          </a>
        </div>

        {/* Quick stats */}
        <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {[
            { value: '8+', label: 'Years Experience' },
            { value: '50+', label: 'Websites Built' },
            { value: 'Full-Stack', label: 'End-to-End' },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="font-mono text-2xl font-bold text-foreground">
                {stat.value}
              </div>
              <div className="mt-1 text-xs text-muted">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
