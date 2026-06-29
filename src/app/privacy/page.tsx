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
            This placeholder privacy page is ready for the organisation&apos;s final policy. The website is designed to keep
            data collection minimal and transparent.
          </p>
          <p>
            Contact form submissions should only be used to respond to enquiries about volunteering, events and community
            conservation projects.
          </p>
        </div>
      </div>
    </section>
  );
}
