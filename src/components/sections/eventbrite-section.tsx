import Link from "next/link";
import { CalendarDays } from "lucide-react";

import { Button } from "@/components/ui/button";
import { EXTERNAL_LINKS } from "@/lib/links";

export function EventbriteSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="grid items-center gap-8 rounded-[26px] bg-gradient-to-br from-sky-soft via-white to-[#FFF4C8] p-7 text-primary-dark shadow-[0_18px_45px_rgba(46,60,28,0.12)] md:grid-cols-[1fr_auto] md:p-12">
          <div>
            <CalendarDays className="mb-5 text-sky-deep" aria-hidden="true" />
            <h2 className="font-heading text-4xl font-bold md:text-5xl">Learning, growing and caring together</h2>
            <p className="mt-4 max-w-2xl leading-8 text-primary-dark/78">
              Join us for nature walks, conservation activities, workshops and community events.
            </p>
          </div>
          <Button asChild size="lg" className="bg-sunshine text-primary-dark hover:bg-[#f8d85e]">
            <Link href={EXTERNAL_LINKS.eventbrite}>View Events on Eventbrite</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
