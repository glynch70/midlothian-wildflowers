import type { Metadata } from "next";
import Link from "next/link";
import { CalendarDays, Facebook, HandHeart, Mail, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CurrentActivities } from "@/components/sections/current-activities";
import { DonationsSection } from "@/components/sections/donations-section";
import { FacebookCTA } from "@/components/sections/facebook-cta";
import { PartnersSection } from "@/components/sections/partners-section";
import { TeamSection } from "@/components/sections/team-section";
import { TrustSection } from "@/components/sections/trust-section";
import { VolunteerCTA } from "@/components/sections/volunteer-cta";
import { volunteerRoles } from "@/lib/content";
import { EXTERNAL_LINKS } from "@/lib/links";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Get Involved",
  description:
    "Volunteer with Midlothian Wildflowers, support partnerships and get involved in community conservation across Midlothian.",
  path: "/get-involved",
});

const getInvolvedActions = [
  {
    label: "Volunteer with us",
    href: "/contact",
    icon: Users,
  },
  {
    label: "Become a volunteer",
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
      <section className="section-padding bg-gradient-to-br from-sky-soft via-cream to-[#FFF4C8] text-primary-dark">
        <div className="container max-w-4xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-sky-deep">Get involved</p>
          <h1 className="font-heading text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            Get involved in local action
          </h1>
          <p className="mt-6 text-lg leading-8 text-primary-dark/78">
            Whether you have an hour to spare, would like to join a local event or want to become a regular volunteer,
            we would love to hear from you.
          </p>
          <p className="mt-4 text-base leading-8 text-primary-dark/72">
            You can get involved in community planting days, habitat restoration, wildflower projects, nature
            activities, practical conservation and local events across Midlothian. No specialist experience is needed.
            Bring your enthusiasm, suitable outdoor clothing and a willingness to help.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/contact">Become a volunteer</Link>
            </Button>
            <Button asChild size="lg" className="bg-sunshine text-primary-dark hover:bg-[#f8d85e]">
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
              const isExternal = action.href.startsWith("http");

              return (
                <Button
                  key={action.label}
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-full justify-start rounded-[18px] text-left whitespace-normal"
                >
                  <Link
                    href={action.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                  >
                    <Icon size={18} aria-hidden="true" />
                    {action.label}
                  </Link>
                </Button>
              );
            })}
          </div>
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-sky-deep">Volunteer with us</p>
            <h2 className="font-heading text-4xl font-bold text-primary-dark md:text-5xl">
              Friendly ways to help outdoors
            </h2>
            <p className="mt-5 leading-8 text-foreground/75">
              Join friendly conservation sessions, community planting days, habitat restoration projects and local
              events across Midlothian.
            </p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {volunteerRoles.map((role) => (
              <div
                key={role}
                className="rounded-[20px] border border-border bg-cream p-6 shadow-[0_12px_30px_rgba(46,60,28,0.08)]"
              >
                <h3 className="font-heading text-2xl font-bold text-primary-dark">{role}</h3>
                <p className="mt-3 leading-7 text-foreground/72">
                  A practical way to support local habitats, learn with others and contribute at a pace that suits you.
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button asChild size="lg" className="w-full bg-sunshine text-primary-dark hover:bg-[#f8d85e] sm:w-auto">
              <Link href="/contact">Become a volunteer</Link>
            </Button>
          </div>
        </div>
      </section>
      <PartnersSection />
      <TeamSection />
      <VolunteerCTA />
      <CurrentActivities />
      <DonationsSection />
      <TrustSection />
      <FacebookCTA />
    </>
  );
}
