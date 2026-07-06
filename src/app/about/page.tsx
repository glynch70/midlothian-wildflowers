import type { Metadata } from "next";
import Image from "next/image";

import { FeatureCards } from "@/components/sections/feature-cards";
import { PartnersSection } from "@/components/sections/partners-section";
import { SectionHeading } from "@/components/sections/section-heading";
import { TrustSection } from "@/components/sections/trust-section";
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
              A Grassroots Group Caring for Midlothian Greenspaces
            </h1>
            <p className="mt-6 leading-8 text-foreground/75">
              Midlothian Wildflowers is a constituted grassroots community group with a small board of trustees. The
              group works with local partners and communities across Midlothian to care for the local environment and
              create community-based opportunities.
            </p>
          </div>
          <div className="relative aspect-[5/4] overflow-hidden rounded-[8px] shadow-soft">
            <Image
              src={siteImages.about.src}
              alt={siteImages.about.alt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container">
          <SectionHeading
            eyebrow="Mission and impact"
            title="Supporting Nature, Health and Wellbeing"
            text="Midlothian Wildflowers' mission is to care for, create and protect greenspaces in Midlothian whilst supporting the health and wellbeing of the communities we engage with."
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
            [
              "History",
              "The organisation sprung to life in 2022 to grow a shared passion for the local environment and community wellbeing.",
            ],
            [
              "Future",
              "MWF is always keen to work with creative partners and individuals who share its commitment to local nature.",
            ],
          ].map(([title, text]) => (
            <div key={title}>
              <h2 className="font-heading text-3xl font-bold text-primary-dark">{title}</h2>
              <p className="mt-4 leading-8 text-foreground/75">{text}</p>
            </div>
          ))}
        </div>
      </section>
      <PartnersSection />
      <TrustSection />
    </>
  );
}
