import type { Metadata } from "next";

import { Gallery } from "@/components/sections/gallery";
import { SectionHeading } from "@/components/sections/section-heading";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Gallery",
  description: "Browse Midlothian Wildflowers project, wildlife, event, volunteer and habitat images.",
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <section className="section-padding bg-cream">
      <div className="container">
        <SectionHeading
          eyebrow="Gallery"
          title="Creative grassroots projects across Midlothian"
          text="Browse real photographs from Midlothian Wildflowers projects, wildlife observations and community activity."
          level="h1"
        />
        <div className="mt-12">
          <Gallery />
        </div>
      </div>
    </section>
  );
}
