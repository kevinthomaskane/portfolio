interface SectionHeadingProps {
  id: string;
  label: string;
  title: string;
}

export function SectionHeading({ id, label, title }: SectionHeadingProps) {
  return (
    <div id={id} className="mb-10">
      <span className="font-mono text-xs font-medium uppercase tracking-widest text-accent">
        {label}
      </span>
      <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
        {title}
      </h2>
    </div>
  );
}
