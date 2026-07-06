import Link from "next/link";
import { Check, ExternalLink } from "lucide-react";

import { Card } from "@/components/ui/card";
import { FadeIn } from "@/components/sections/fade-in";
import { SectionHeading } from "@/components/sections/section-heading";
import { currentActivities } from "@/lib/content";

export function CurrentActivities() {
  return (
    <section className="section-padding bg-cream">
      <div className="container">
        <FadeIn>
          <SectionHeading
            eyebrow="Current activities"
            title="Regular Ways to Learn, Grow and Volunteer"
            text="From monthly conservation sessions to organic growing and community scything, there are practical ways to get involved throughout the year."
          />
        </FadeIn>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {currentActivities.map((activity) => {
            const Icon = activity.icon;

            return (
              <FadeIn key={activity.title}>
                <Card className="flex h-full flex-col p-7">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-soft-green text-primary">
                    <Icon aria-hidden="true" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-primary-dark">{activity.title}</h3>
                  <p className="mt-4 leading-7 text-foreground/72">{activity.text}</p>
                  <ul className="mt-6 grid gap-3">
                    {activity.points.map((point) => (
                      <li key={point} className="flex gap-3 text-sm leading-6 text-foreground/75">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  {activity.href ? (
                    <Link
                      href={activity.href}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary-dark hover:text-primary"
                    >
                      {activity.linkLabel}
                      <ExternalLink size={16} aria-hidden="true" />
                    </Link>
                  ) : null}
                </Card>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
