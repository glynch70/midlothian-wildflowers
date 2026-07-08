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

const detailedActivities = [
  "MWF Grows",
  "Plant sales",
  "Seed saving",
  "Orchard care",
  "Bracken removal",
  "Meadow management",
  "Introducing yellow rattle",
  "Community scything demos and beginner workshops",
];

export default function WhatWeDoPage() {
  return (
    <>
      <section className="section-padding bg-cream">
        <div className="container">
          <SectionHeading
            eyebrow="What we do"
            title="Practical projects with local roots"
            text="Every project supports local wildlife while giving people a clear, friendly way to learn, volunteer and care for Midlothian's greenspaces."
            level="h1"
          />
          <div className="mt-12">
            <FeatureCards items={workAreas} />
          </div>
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="container grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="font-heading text-4xl font-bold text-primary-dark">Creative grassroots projects</h2>
            <p className="mt-4 leading-8 text-foreground/75">
              Midlothian Wildflowers works with communities and partners to identify suitable spaces, care for sites
              over time and create opportunities that support local biodiversity.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-4xl font-bold text-primary-dark">Practical days outdoors</h2>
            <p className="mt-4 leading-8 text-foreground/75">
              Sessions may include woodland care, meadow management, organic growing, seed saving, scything, plant sales
              and welcoming people at workshops and events.
            </p>
          </div>
          <div className="rounded-[24px] bg-cream p-6 shadow-[0_16px_42px_rgba(46,60,28,0.1)] md:p-8">
            <h2 className="font-heading text-4xl font-bold text-primary-dark">Seasonal things to learn</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {detailedActivities.map((activity) => (
                <p key={activity} className="rounded-[16px] border border-border bg-white px-4 py-3 font-semibold text-primary-dark">
                  {activity}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>
      <CurrentActivities />
      <PartnersSection />
      <VolunteerCTA />
    </>
  );
}
