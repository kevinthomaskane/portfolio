import { REFERRALS } from '@/data/resume';
import { SectionHeading } from './section-heading';

export function Referrals() {
  return (
    <section className="border-t border-border py-20">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading id="referrals" label="Referrals" title="What others say" />

        <div className="space-y-10">
          {REFERRALS.map((ref) => (
            <div key={ref.name} className="rounded-xl border border-border bg-card p-6 sm:p-8">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mb-4 text-accent opacity-40"
              >
                <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5 3.871 3.871 0 0 1-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5 3.871 3.871 0 0 1-2.748-1.179z" />
              </svg>

              <blockquote className="text-sm leading-relaxed text-muted">
                {ref.text}
              </blockquote>

              <div className="mt-6 flex flex-col gap-1 border-t border-border pt-4">
                <span className="text-sm font-bold text-foreground">{ref.name}</span>
                {ref.title && (
                  <span className="text-xs text-muted">{ref.title}</span>
                )}
                {ref.email && (
                  <a href={`mailto:${ref.email}`} className="text-xs text-muted transition-colors hover:text-foreground">
                    {ref.email}
                  </a>
                )}
                {ref.phone && (
                  <a href={`tel:${ref.phone.replace(/[^+\d]/g, '')}`} className="text-xs text-muted transition-colors hover:text-foreground">
                    {ref.phone}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-xl border border-border bg-card p-6 text-center sm:p-8">
          <p className="text-sm text-muted">
            See more reviews from real clients on the{' '}
            <a
              href="https://www.google.com/maps/place/10xDev/@33.786671,-118.2990476,8z/data=!4m8!3m7!1s0x80c2b54762e4c039:0xaed68a864016d2dd!8m2!3d33.786671!4d-118.2990476!9m1!1b1!16s%2Fg%2F11xnm0sl7z?entry=ttu"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 font-medium text-accent transition-colors hover:text-foreground"
            >
              10xDev.io Google Business Profile
              <svg
                width="14"
                height="14"
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
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
