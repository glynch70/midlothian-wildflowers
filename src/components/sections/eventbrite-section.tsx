import Link from "next/link";
import { CalendarDays } from "lucide-react";

import { Button } from "@/components/ui/button";
import { EXTERNAL_LINKS } from "@/lib/links";

export function EventbriteSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="grid items-center gap-8 rounded-[8px] bg-primary-dark p-8 text-white shadow-soft md:grid-cols-[1fr_auto] md:p-12">
          <div>
            <CalendarDays className="mb-5 text-white/80" aria-hidden="true" />
            <h2 className="font-heading text-4xl font-bold md:text-5xl">Upcoming Events</h2>
            <p className="mt-4 max-w-2xl leading-8 text-white/80">
              Join us for nature walks, conservation activities, workshops and community events.
            </p>
          </div>
          <Button asChild size="lg" variant="secondary">
            <Link href={EXTERNAL_LINKS.eventbrite}>View Events on Eventbrite</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
