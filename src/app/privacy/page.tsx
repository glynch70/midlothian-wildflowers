import type { Metadata } from "next";

import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Privacy",
  description: "Privacy information for Midlothian Wildflowers website visitors.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <section className="section-padding bg-cream">
      <div className="container max-w-3xl">
        <h1 className="font-heading text-5xl font-bold text-primary-dark">Privacy</h1>
        <div className="mt-8 space-y-5 leading-8 text-foreground/75">
          <p>
            Midlothian Wildflowers keeps website data collection minimal. When you use the contact form, the details you
            provide are sent by email to the group so they can respond to your enquiry.
          </p>
          <p>
            Enquiries are used to respond to questions about volunteering, events, donations, partnerships and community
            conservation projects.
          </p>
          <p>
            The contact form is handled securely through the website and the email delivery provider configured for the
            site. Messages are not published on the website.
          </p>
          <p>
            A fuller data and privacy statement is available from Midlothian Wildflowers on request.
          </p>
        </div>
      </div>
    </section>
  );
}
