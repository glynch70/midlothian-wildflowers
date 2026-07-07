import { FadeIn } from "@/components/sections/fade-in";
import { Gallery } from "@/components/sections/gallery";
import { SectionHeading } from "@/components/sections/section-heading";

export function GallerySection() {
  return (
    <section className="section-padding bg-cream">
      <div className="container">
        <FadeIn className="text-center">
          <SectionHeading
            eyebrow="Gallery"
            title="A Growing Patchwork of Local Action"
            text="Real project moments, wildlife sightings and volunteer days from the Midlothian Wildflowers community."
          />
          <div className="yellow-divider" />
        </FadeIn>
        <FadeIn className="mt-10">
          <Gallery />
        </FadeIn>
      </div>
    </section>
  );
}
