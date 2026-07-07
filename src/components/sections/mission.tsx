import { FadeIn } from "@/components/sections/fade-in";

export function Mission() {
  return (
    <section className="relative overflow-hidden bg-cream pt-14 md:pt-20">
      <div className="container pb-8">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-primary">Our mission</p>
          <h2 className="font-heading text-4xl font-bold leading-tight text-[#7D4A91] md:text-6xl">
            Care for, Create and Protect Greenspaces
          </h2>
          <div className="yellow-divider" />
          <p className="mt-6 text-base leading-8 text-foreground/78 md:text-lg">
            Midlothian Wildflowers’ mission is to care for, create and protect greenspaces in Midlothian whilst
            supporting the health and wellbeing of the communities we engage with.
          </p>
        </FadeIn>
      </div>
      <div className="wildflower-divider" aria-hidden="true" />
    </section>
  );
}
