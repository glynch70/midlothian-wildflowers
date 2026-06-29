import { EventbriteSection } from "@/components/sections/eventbrite-section";
import { FacebookCTA } from "@/components/sections/facebook-cta";
import { GallerySection } from "@/components/sections/gallery-section";
import { Hero } from "@/components/sections/hero";
import { Mission } from "@/components/sections/mission";
import { ProjectCards } from "@/components/sections/project-cards";
import { VolunteerCTA } from "@/components/sections/volunteer-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Mission />
      <ProjectCards />
      <GallerySection />
      <EventbriteSection />
      <VolunteerCTA />
      <FacebookCTA />
    </>
  );
}
