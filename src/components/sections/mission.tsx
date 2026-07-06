import { missionCards } from "@/lib/content";
import { FadeIn } from "@/components/sections/fade-in";
import { FeatureCards } from "@/components/sections/feature-cards";
import { SectionHeading } from "@/components/sections/section-heading";

export function Mission() {
  return (
    <section className="section-padding bg-cream">
      <div className="container">
        <FadeIn>
          <SectionHeading
            eyebrow="Our mission"
            title="Care for, Create and Protect Greenspaces"
            text="Midlothian Wildflowers’ mission is to care for, create and protect greenspaces in Midlothian whilst supporting the health and wellbeing of the communities we engage with."
          />
        </FadeIn>
        <FadeIn className="mt-12">
          <FeatureCards items={missionCards} />
        </FadeIn>
      </div>
    </section>
  );
}
