import { Sprout } from "lucide-react";

import { teamMembers } from "@/lib/content";

export function TeamSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-sky-deep">Partnerships</p>
          <h2 className="font-heading text-4xl font-bold leading-tight text-primary-dark md:text-5xl">
            People helping connections grow
          </h2>
          <p className="mt-5 leading-8 text-foreground/75">
            Friendly points of contact for partnership conversations and the practical running of Midlothian
            Wildflowers.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-4xl gap-4 md:grid-cols-2">
          {teamMembers.map((member) => (
            <article
              key={member.name}
              className="rounded-[22px] border border-white/90 bg-gradient-to-br from-cream to-sky-soft/60 p-6 shadow-[0_12px_32px_rgba(46,60,28,0.1)]"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white text-lg font-bold text-primary-dark shadow-sm">
                  {member.initials}
                </div>
                <div>
                  <h3 className="font-heading text-3xl font-bold text-primary-dark">{member.name}</h3>
                  <p className="mt-1 font-bold text-sky-deep">{member.role}</p>
                  <p className="mt-3 flex gap-2 leading-7 text-foreground/75">
                    <Sprout className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                    <span>{member.note}</span>
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
