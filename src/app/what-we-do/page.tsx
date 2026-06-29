import type { Metadata } from "next";

import { FeatureCards } from "@/components/sections/feature-cards";
import { SectionHeading } from "@/components/sections/section-heading";
import { VolunteerCTA } from "@/components/sections/volunteer-cta";
import { workAreas } from "@/lib/content";

export const metadata: Metadata = {
  title: "What We Do",
  description: "Explore Midlothian Wildflowers conservation, education, community and volunteer projects.",
};

export default function WhatWeDoPage() {
  return (
    <>
      <section className="section-padding bg-cream">
        <div className="container">
          <SectionHeading
            eyebrow="What we do"
            title="Conservation Work That People Can Join"
            text="Every project is designed to support local wildlife while giving volunteers a clear, satisfying way to help their community."
            level="h1"
          />
          <div className="mt-12">
            <FeatureCards items={workAreas} />
          </div>
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="container grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="font-heading text-4xl font-bold text-primary-dark">Project Approach</h2>
            <p className="mt-4 leading-8 text-foreground/75">
              Midlothian Wildflowers works with communities to identify suitable spaces, choose appropriate native
              planting and care for sites beyond the first flush of colour.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-4xl font-bold text-primary-dark">Volunteer Projects</h2>
            <p className="mt-4 leading-8 text-foreground/75">
              Sessions may include preparing ground, sowing seed, planting plugs, recording wildlife and sharing
              progress so more residents can see what nature recovery looks like locally.
            </p>
          </div>
        </div>
      </section>
      <VolunteerCTA />
    </>
  );
}
