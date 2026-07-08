import { Flower2, Leaf, Users } from "lucide-react";

import { FadeIn } from "@/components/sections/fade-in";

const missionPoints = [
  { label: "Protecting local green spaces", icon: Leaf },
  { label: "Creating wildflower meadows", icon: Flower2 },
  { label: "Bringing people together outdoors", icon: Users },
];

export function Mission() {
  return (
    <section className="relative overflow-hidden bg-cream pt-14 md:pt-20">
      <div className="container pb-8">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-sky-deep">Grassroots by nature</p>
          <h2 className="font-heading text-4xl font-bold leading-tight text-primary-dark md:text-6xl">
            Growing community through nature
          </h2>
          <div className="yellow-divider" />
          <p className="mt-6 text-base leading-8 text-foreground/78 md:text-lg">
            Midlothian Wildflowers brings people together through practical conservation, outdoor learning and creative
            grassroots projects. We care for local green spaces while creating opportunities for people to connect,
            learn and feel part of something hopeful.
          </p>
        </FadeIn>
        <div className="mx-auto mt-8 grid max-w-4xl gap-3 sm:grid-cols-3">
          {missionPoints.map((point) => {
            const Icon = point.icon;

            return (
              <FadeIn key={point.label}>
                <div className="flex h-full items-center gap-3 rounded-[18px] bg-white/85 p-4 shadow-[0_14px_34px_rgba(46,60,28,0.1)]">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sky-soft text-sky-deep">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <p className="font-semibold leading-snug text-primary-dark">{point.label}</p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
      <div className="wildflower-divider" aria-hidden="true" />
    </section>
  );
}
