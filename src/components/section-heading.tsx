type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--coral)]">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[color:var(--navy)] md:text-5xl">{title}</h2>
      <p className="mt-5 text-lg leading-8 text-[color:var(--slate)]">{description}</p>
    </div>
  );
}
