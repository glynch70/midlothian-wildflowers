import type { Metadata } from "next";
import Image from "next/image";

import { FeatureCards } from "@/components/sections/feature-cards";
import { SectionHeading } from "@/components/sections/section-heading";
import { missionCards } from "@/lib/content";
import { siteImages } from "@/lib/images";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Midlothian Wildflowers, our mission, community impact and conservation story.",
};

export default function AboutPage() {
  return (
    <>
      <section className="section-padding bg-cream">
        <div className="container grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-primary">About us</p>
            <h1 className="font-heading text-5xl font-bold leading-tight text-primary-dark md:text-6xl">
              A Community Helping Local Nature Recover
            </h1>
            <p className="mt-6 leading-8 text-foreground/75">
              Midlothian Wildflowers is a community-led environmental charity supporting native planting,
              biodiversity and practical conservation across towns, villages and green spaces in Midlothian.
            </p>
          </div>
          <div className="relative aspect-[5/4] overflow-hidden rounded-[8px] shadow-soft">
            <Image src={siteImages.about.src} alt={siteImages.about.alt} fill className="object-cover" />
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container">
          <SectionHeading
            eyebrow="Mission and impact"
            title="Small Local Actions, Wider Ecological Benefits"
            text="The organisation helps people create and care for habitats that improve biodiversity, strengthen community pride and make everyday green spaces more alive."
          />
          <div className="mt-12">
            <FeatureCards items={missionCards} />
          </div>
        </div>
      </section>

      <section className="section-padding bg-soft-green">
        <div className="container grid gap-8 md:grid-cols-3">
          {[
            ["Story", "The charity grew from local residents wanting to see more colour, wildlife and care in public spaces."],
            ["History", "Volunteer projects continue to build practical knowledge about native flowers, seed collection and habitat maintenance."],
            ["Future", "The next chapter is about connecting more sites, welcoming more volunteers and making conservation easy to join."],
          ].map(([title, text]) => (
            <div key={title}>
              <h2 className="font-heading text-3xl font-bold text-primary-dark">{title}</h2>
              <p className="mt-4 leading-8 text-foreground/75">{text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
