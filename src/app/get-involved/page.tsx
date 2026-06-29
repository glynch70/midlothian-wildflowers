import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { FacebookCTA } from "@/components/sections/facebook-cta";
import { VolunteerCTA } from "@/components/sections/volunteer-cta";
import { volunteerRoles } from "@/lib/content";
import { EXTERNAL_LINKS } from "@/lib/links";

export const metadata: Metadata = {
  title: "Get Involved",
  description: "Volunteer with Midlothian Wildflowers and help restore habitats across Midlothian.",
};

export default function GetInvolvedPage() {
  return (
    <>
      <section className="section-padding bg-primary-dark text-white">
        <div className="container max-w-4xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-white/70">Volunteer with us</p>
          <h1 className="font-heading text-5xl font-bold leading-tight md:text-6xl">Make Space for Wildflowers</h1>
          <p className="mt-6 text-lg leading-8 text-white/82">
            Join welcoming volunteer sessions that help native plants, pollinators and people flourish across Midlothian.
          </p>
          <Button asChild size="lg" variant="secondary" className="mt-8">
            <Link href={EXTERNAL_LINKS.eventbrite}>Find Upcoming Events</Link>
          </Button>
        </div>
      </section>
      <VolunteerCTA />
      <section className="section-padding bg-white">
        <div className="container">
          <h2 className="font-heading text-4xl font-bold text-primary-dark">Volunteer Opportunities</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {volunteerRoles.map((role) => (
              <div key={role} className="rounded-[8px] border border-border bg-cream p-6">
                <h3 className="font-heading text-2xl font-bold text-primary-dark">{role}</h3>
                <p className="mt-3 leading-7 text-foreground/72">
                  A practical way to support local habitats, learn with others and contribute at a pace that suits you.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <FacebookCTA />
    </>
  );
}
