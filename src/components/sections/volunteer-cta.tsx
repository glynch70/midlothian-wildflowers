import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { volunteerRoles } from "@/lib/content";
import { siteImages } from "@/lib/images";

export function VolunteerCTA() {
  return (
    <section className="section-padding bg-cream">
      <div className="container grid items-center gap-10 lg:grid-cols-2">
        <div className="relative aspect-[5/4] overflow-hidden rounded-[8px] shadow-soft">
          <Image src={siteImages.volunteer.src} alt={siteImages.volunteer.alt} fill className="object-cover" />
        </div>
        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-primary">Get involved</p>
          <h2 className="font-heading text-4xl font-bold leading-tight text-primary-dark md:text-5xl">
            Help Restore Wild Spaces Near You
          </h2>
          <p className="mt-5 leading-8 text-foreground/75">
            Volunteers are at the heart of Midlothian Wildflowers. Whether you can join a single event or help
            regularly, there are practical, friendly ways to contribute.
          </p>
          <ul className="mt-7 grid gap-3">
            {volunteerRoles.map((role) => (
              <li key={role} className="flex gap-3 text-foreground/78">
                <Check className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                <span>{role}</span>
              </li>
            ))}
          </ul>
          <Button asChild size="lg" className="mt-8">
            <Link href="/get-involved">Become A Volunteer</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
