import type { Metadata } from "next";

import { Gallery } from "@/components/sections/gallery";
import { SectionHeading } from "@/components/sections/section-heading";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Browse Midlothian Wildflowers project, wildlife, event, volunteer and habitat images.",
};

export default function GalleryPage() {
  return (
    <section className="section-padding bg-cream">
      <div className="container">
        <SectionHeading
          eyebrow="Gallery"
          title="Projects, Wildlife, Events, Volunteers and Habitats"
          text="These placeholder images show the intended structure for the client photography library."
          level="h1"
        />
        <div className="mt-12">
          <Gallery showCategories />
        </div>
      </div>
    </section>
  );
}
