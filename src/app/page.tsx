import type { Metadata } from "next";

import { AwardsCallout } from "@/components/sections/awards-callout";
import { AwardsSection } from "@/components/sections/awards-section";
import { CurrentActivities } from "@/components/sections/current-activities";
import { DonationsSection } from "@/components/sections/donations-section";
import { EventbriteSection } from "@/components/sections/eventbrite-section";
import { FacebookCTA } from "@/components/sections/facebook-cta";
import { GallerySection } from "@/components/sections/gallery-section";
import { Hero } from "@/components/sections/hero";
import { Mission } from "@/components/sections/mission";
import { PartnersSection } from "@/components/sections/partners-section";
import { ProjectCards } from "@/components/sections/project-cards";
import { TrustSection } from "@/components/sections/trust-section";
import { VolunteerCTA } from "@/components/sections/volunteer-cta";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Home",
  description:
    "Midlothian Wildflowers brings communities together through wildflower planting, conservation and outdoor learning. BBC Make a Difference Awards 2026 Environment finalist.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <Hero />
      <AwardsSection />
      <Mission />
      <ProjectCards />
      <CurrentActivities />
      <GallerySection />
      <AwardsCallout />
      <EventbriteSection />
      <VolunteerCTA />
      <DonationsSection />
      <PartnersSection />
      <TrustSection />
      <FacebookCTA />
    </>
  );
}
