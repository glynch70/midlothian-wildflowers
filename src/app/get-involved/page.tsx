import type { Metadata } from "next";
import Link from "next/link";
import { CalendarDays, Facebook, HandHeart, Mail, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CurrentActivities } from "@/components/sections/current-activities";
import { DonationsSection } from "@/components/sections/donations-section";
import { FacebookCTA } from "@/components/sections/facebook-cta";
import { TrustSection } from "@/components/sections/trust-section";
import { VolunteerCTA } from "@/components/sections/volunteer-cta";
import { volunteerRoles } from "@/lib/content";
import { EXTERNAL_LINKS } from "@/lib/links";

export const metadata: Metadata = {
  title: "Get Involved",
  description: "Volunteer with Midlothian Wildflowers and help restore habitats across Midlothian.",
};

const getInvolvedActions = [
  {
    label: "Volunteer with MWF",
    href: `mailto:${EXTERNAL_LINKS.email}`,
    icon: Users,
  },
  {
    label: "View Volunteer Scotland opportunities",
    href: EXTERNAL_LINKS.volunteerScotland,
    icon: Users,
  },
  {
    label: "View events on Eventbrite",
    href: EXTERNAL_LINKS.eventbrite,
    icon: CalendarDays,
  },
  {
    label: "Follow on Facebook",
    href: EXTERNAL_LINKS.facebook,
    icon: Facebook,
  },
  {
    label: "Donate to support local projects",
    href: EXTERNAL_LINKS.justGiving,
    icon: HandHeart,
  },
  {
    label: "Email midlothianwildflowers@gmail.com",
    href: `mailto:${EXTERNAL_LINKS.email}`,
    icon: Mail,
  },
];

export default function GetInvolvedPage() {
  return (
    <>
      <section className="section-padding bg-primary-dark text-white">
        <div className="container max-w-4xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-white/70">Volunteer with us</p>
          <h1 className="font-heading text-5xl font-bold leading-tight md:text-6xl">Make Space for Wildflowers</h1>
          <p className="mt-6 text-lg leading-8 text-white/82">
            Volunteer, attend events, donate or follow along on Facebook to support community-led conservation across
            Midlothian.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" variant="secondary">
              <Link href={EXTERNAL_LINKS.volunteerScotland}>Volunteer Scotland Opportunities</Link>
            </Button>
            <Button asChild size="lg" className="bg-white/10 text-white hover:bg-white/20">
              <Link href={EXTERNAL_LINKS.eventbrite}>Find Upcoming Events</Link>
            </Button>
          </div>
        </div>
      </section>
      <section className="bg-white py-12">
        <div className="container">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {getInvolvedActions.map((action) => {
              const Icon = action.icon;

              return (
                <Button
                  key={action.label}
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-full justify-start rounded-[8px] text-left whitespace-normal"
                >
                  <Link href={action.href}>
                    <Icon size={18} aria-hidden="true" />
                    {action.label}
                  </Link>
                </Button>
              );
            })}
          </div>
        </div>
      </section>
      <VolunteerCTA />
      <CurrentActivities />
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
      <DonationsSection />
      <TrustSection />
      <FacebookCTA />
    </>
  );
}
