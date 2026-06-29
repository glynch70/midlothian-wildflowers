import { FadeIn } from "@/components/sections/fade-in";
import { Gallery } from "@/components/sections/gallery";
import { SectionHeading } from "@/components/sections/section-heading";

export function GallerySection() {
  return (
    <section className="section-padding bg-cream">
      <div className="container">
        <FadeIn>
          <SectionHeading
            eyebrow="Gallery"
            title="A Growing Patchwork of Local Action"
            text="A simple placeholder gallery for now, ready to be replaced with client photography from project days, wildlife sightings and community events."
          />
        </FadeIn>
        <FadeIn className="mt-12">
          <Gallery />
        </FadeIn>
      </div>
    </section>
  );
}
