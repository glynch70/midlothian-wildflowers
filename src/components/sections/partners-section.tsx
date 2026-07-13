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
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-sky-deep">Partners</p>
            <h2 className="font-heading text-4xl font-bold text-primary-dark md:text-5xl">
              Working Together
            </h2>
            <div className="yellow-divider lg:mx-0" />
            <p className="mt-5 leading-8 text-foreground/75">
              Midlothian Wildflowers works alongside charities, schools, community groups, local businesses and
              environmental organisations to create healthier habitats, stronger communities and more opportunities for
              people to connect with nature.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {partners.map((partner) => {
              const Icon = partner.icon;
              const isExternal = partner.href.startsWith("http");
              const hasLink = partner.href !== "#";
              const content = (
                <>
                  <div className="flex items-start gap-3">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sky-soft text-sky-deep">
                      <Icon size={20} aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block font-heading text-2xl font-bold leading-tight">{partner.name}</span>
                      {partner.subtitle ? (
                        <span className="mt-1 block text-sm font-bold text-sky-deep">{partner.subtitle}</span>
                      ) : null}
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-foreground/72">{partner.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {partner.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-white/80 px-3 py-1 text-xs font-bold text-primary-dark/75">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-sky-deep">
                    {hasLink ? "Visit website" : "Website to follow"}
                    {hasLink ? <ExternalLink size={15} aria-hidden="true" /> : null}
                  </span>
                </>
              );

              return hasLink ? (
                <Link
                  key={partner.name}
                  href={partner.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  aria-label={`Visit ${partner.name}${isExternal ? " website (opens in a new tab)" : ""}`}
                  className="group flex min-h-56 flex-col rounded-[18px] border border-white/90 bg-gradient-to-br from-white to-sky-soft/60 p-5 font-semibold text-primary-dark shadow-[0_12px_30px_rgba(46,60,28,0.1)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_38px_rgba(46,60,28,0.14)] focus-ring"
                >
                  {content}
                </Link>
              ) : (
                <article
                  key={partner.name}
                  className="flex min-h-56 flex-col rounded-[18px] border border-white/90 bg-gradient-to-br from-white to-sky-soft/60 p-5 font-semibold text-primary-dark shadow-[0_12px_30px_rgba(46,60,28,0.1)]"
                >
                  {content}
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
