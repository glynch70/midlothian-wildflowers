import { partners } from "@/lib/content";

export function PartnersSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1fr] lg:items-start">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-primary">Partners</p>
            <h2 className="font-heading text-4xl font-bold text-primary-dark md:text-5xl">
              Working Across Midlothian
            </h2>
            <p className="mt-5 leading-8 text-foreground/75">
              Midlothian Wildflowers works with local partners, landowners and community groups to make practical
              environmental action easier to join.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {partners.map((partner) => (
              <div key={partner} className="rounded-[8px] border border-border bg-cream px-5 py-4 font-semibold text-primary-dark">
                {partner}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
