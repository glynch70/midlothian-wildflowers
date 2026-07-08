type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "left" | "center";
  level?: "h1" | "h2";
};

export function SectionHeading({ eyebrow, title, text, align = "center", level = "h2" }: SectionHeadingProps) {
  const Heading = level;

  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-sky-deep">{eyebrow}</p>
      ) : null}
      <Heading className="font-heading text-4xl font-bold leading-tight text-primary-dark md:text-5xl">{title}</Heading>
      {text ? <p className="mt-5 text-base leading-8 text-foreground/75 md:text-lg">{text}</p> : null}
    </div>
  );
}
