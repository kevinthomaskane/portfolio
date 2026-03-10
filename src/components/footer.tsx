import { PERSONAL } from "@/data/resume";

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <span className="font-mono text-sm text-muted">
            kevin<span className="text-accent">.</span>kane
          </span>

          <div className="flex items-center gap-6 text-sm text-muted">
            <a href={`mailto:${PERSONAL.email}`} className="transition-colors hover:text-foreground">
              Email
            </a>
            <a href={PERSONAL.website} target="_blank" rel="noreferrer" className="transition-colors hover:text-foreground">
              10xDev.io
            </a>
            <a href={`tel:${PERSONAL.phone.replace(/\./g, "")}`} className="transition-colors hover:text-foreground">
              {PERSONAL.phone}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
