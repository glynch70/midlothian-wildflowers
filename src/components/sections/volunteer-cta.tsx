import Image from "next/image";
import Link from "next/link";
import { Check, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { volunteerRoles } from "@/lib/content";
import { siteImages } from "@/lib/images";
import { EXTERNAL_LINKS } from "@/lib/links";

export function VolunteerCTA() {
  return (
    <section className="section-padding bg-cream">
      <div className="container grid items-center gap-10 lg:grid-cols-2">
        <div className="relative aspect-[5/4] overflow-hidden rounded-[8px] shadow-soft">
          <Image
            src={siteImages.volunteer.src}
            alt={siteImages.volunteer.alt}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-primary">Get involved</p>
          <h2 className="font-heading text-4xl font-bold leading-tight text-primary-dark md:text-5xl">
            Volunteer with Midlothian Wildflowers
          </h2>
          <p className="mt-5 leading-8 text-foreground/75">
            Volunteers are at the heart of Midlothian Wildflowers. Whether you can join a monthly session, help at the
            Polton growing project or support a scything workshop, you will be welcomed and supported.
          </p>
          <ul className="mt-7 grid gap-3">
            {volunteerRoles.map((role) => (
              <li key={role} className="flex gap-3 text-foreground/78">
                <Check className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                <span>{role}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href={EXTERNAL_LINKS.volunteerScotland}>Become A Volunteer</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href={`mailto:${EXTERNAL_LINKS.email}`}>
                <Mail size={18} aria-hidden="true" />
                Email Us
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
