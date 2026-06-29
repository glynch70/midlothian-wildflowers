import type { Metadata } from "next";

import { ContactForm } from "@/components/sections/contact-form";
import { EventbriteSection } from "@/components/sections/eventbrite-section";
import { SectionHeading } from "@/components/sections/section-heading";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Midlothian Wildflowers about volunteering, events and community conservation.",
};

export default function ContactPage() {
  return (
    <>
      <section className="section-padding bg-cream">
        <div className="container">
          <SectionHeading
            eyebrow="Contact"
            title="Talk to Midlothian Wildflowers"
            text="Questions about volunteering, events, Facebook updates or potential project sites are welcome."
            level="h1"
          />
          <div className="mt-12">
            <ContactForm />
          </div>
        </div>
      </section>
      <EventbriteSection />
    </>
  );
}
