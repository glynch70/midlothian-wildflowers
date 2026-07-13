import type { Metadata } from "next";

import { ContactForm } from "@/components/sections/contact-form";
import { DonationsSection } from "@/components/sections/donations-section";
import { EventbriteSection } from "@/components/sections/eventbrite-section";
import { FacebookCTA } from "@/components/sections/facebook-cta";
import { SectionHeading } from "@/components/sections/section-heading";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Contact",
  description: "Contact Midlothian Wildflowers about volunteering, events and community conservation.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <section className="section-padding bg-cream">
        <div className="container">
          <SectionHeading
            eyebrow="Contact"
            title="Talk to Midlothian Wildflowers"
            text="Questions about volunteering, donations, events, community scything, growing projects or potential partner sites are welcome."
            level="h1"
          />
          <div className="mt-12">
            <ContactForm />
          </div>
        </div>
      </section>
      <EventbriteSection />
      <DonationsSection />
      <FacebookCTA />
    </>
  );
}
