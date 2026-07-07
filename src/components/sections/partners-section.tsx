import Link from "next/link";
import { ExternalLink, Leaf } from "lucide-react";

import { partners } from "@/lib/content";

export function PartnersSection() {
  return (
    <section className="section-padding bg-[#FFFDF6]">
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-[0.68fr_1fr] lg:items-start">
          <div className="text-center lg:text-left">
            <Leaf className="mx-auto mb-3 text-primary lg:mx-0" aria-hidden="true" />
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-primary">Partners</p>
            <h2 className="font-heading text-4xl font-bold text-primary-dark md:text-5xl">
              Working Across Midlothian
            </h2>
            <div className="yellow-divider lg:mx-0" />
            <p className="mt-5 leading-8 text-foreground/75">
              Midlothian Wildflowers works with local partners, landowners and community groups to make practical
              environmental action easier to join.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {partners.map((partner) => (
              <Link
                key={partner.name}
                href={partner.href}
                className="group flex min-h-28 flex-col justify-between rounded-[14px] border border-white/80 bg-white p-4 font-semibold text-primary-dark shadow-[0_12px_34px_rgba(46,60,28,0.12)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_44px_rgba(46,60,28,0.16)] focus-ring"
              >
                <span className="leading-tight">{partner.name}</span>
                <ExternalLink
                  size={16}
                  className="self-end text-primary opacity-70 transition group-hover:opacity-100"
                  aria-hidden="true"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
