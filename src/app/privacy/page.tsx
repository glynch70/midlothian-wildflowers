import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacy information for Midlothian Wildflowers website visitors.",
};

export default function PrivacyPage() {
  return (
    <section className="section-padding bg-cream">
      <div className="container max-w-3xl">
        <h1 className="font-heading text-5xl font-bold text-primary-dark">Privacy</h1>
        <div className="mt-8 space-y-5 leading-8 text-foreground/75">
          <p>
            Midlothian Wildflowers keeps website data collection minimal. The contact form opens an email on your
            device, so your message is sent directly by email rather than stored by the website.
          </p>
          <p>
            Enquiries are used to respond to questions about volunteering, events, donations, partnerships and community
            conservation projects.
          </p>
          <p>
            A fuller data and privacy statement is available from Midlothian Wildflowers on request.
          </p>
        </div>
      </div>
    </section>
  );
}
