import Image from "next/image";
import Link from "next/link";
import { Heart, Mail, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { volunteerRoles } from "@/lib/content";
import { siteImages } from "@/lib/images";
import { EXTERNAL_LINKS } from "@/lib/links";

export function VolunteerCTA() {
  return (
    <section className="bg-cream py-12 md:py-20">
      <div className="container">
        <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-sunshine via-[#F9DC78] to-sky-soft p-6 text-primary-dark shadow-[0_22px_60px_rgba(46,60,28,0.16)] md:p-10 lg:grid lg:grid-cols-2 lg:items-center lg:gap-10">
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-40 opacity-35 wildflower-silhouette"
            aria-hidden="true"
          />
          <div className="relative aspect-[5/4] overflow-hidden rounded-[20px] shadow-[0_18px_40px_rgba(0,0,0,0.22)] lg:order-2">
            <Image
              src={siteImages.volunteer.src}
              alt={siteImages.volunteer.alt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="relative mt-8 lg:mt-0">
            <Heart className="mb-4 text-primary" aria-hidden="true" />
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-sky-deep">Volunteering</p>
            <h2 className="font-heading text-4xl font-bold leading-tight md:text-5xl">
              Get involved in local action
            </h2>
            <div className="mt-3 h-0.5 w-12 rounded-full bg-primary" />
            <p className="mt-5 leading-8 text-primary-dark/82">
              Whether you have experience or are completely new to conservation, there are friendly ways to help, learn
              and meet people outdoors.
            </p>
            <ul className="mt-7 grid gap-3">
              {volunteerRoles.map((role) => (
                <li key={role} className="flex gap-3 text-primary-dark/90">
                  <Sparkles className="mt-1 h-5 w-5 shrink-0 text-sky-deep" aria-hidden="true" />
                  <span>{role}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/get-involved">Volunteer With Us</Link>
              </Button>
              <Button asChild size="lg" className="bg-white/85 text-primary-dark hover:bg-white">
                <Link href={`mailto:${EXTERNAL_LINKS.email}`}>
                  <Mail size={18} aria-hidden="true" />
                  Email Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
