import type { Metadata } from "next";

import { CurrentActivities } from "@/components/sections/current-activities";
import { FeatureCards } from "@/components/sections/feature-cards";
import { PartnersSection } from "@/components/sections/partners-section";
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
            title="Community-Led Environmental Action"
            text="Every project supports local wildlife while giving people a clear, friendly way to learn, volunteer and care for Midlothian's greenspaces."
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
              Midlothian Wildflowers works with communities and partners to identify suitable spaces, care for sites
              over time and create opportunities that support local biodiversity.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-4xl font-bold text-primary-dark">Volunteer Projects</h2>
            <p className="mt-4 leading-8 text-foreground/75">
              Sessions may include woodland care, meadow management, organic growing, seed saving, scything, plant sales
              and welcoming people at workshops and events.
            </p>
          </div>
        </div>
      </section>
      <CurrentActivities />
      <PartnersSection />
      <VolunteerCTA />
    </>
  );
}
