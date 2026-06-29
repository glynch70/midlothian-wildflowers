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
            title="Helping Nature Thrive in Midlothian"
            text="We bring people together to restore wildflower habitats, support pollinators and create healthier green spaces close to home."
          />
        </FadeIn>
        <FadeIn className="mt-12">
          <FeatureCards items={missionCards} />
        </FadeIn>
      </div>
    </section>
  );
}
