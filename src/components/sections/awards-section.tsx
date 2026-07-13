import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, ExternalLink, HeartHandshake, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { siteImages } from "@/lib/images";
import { EXTERNAL_LINKS } from "@/lib/links";

export function AwardsSection() {
  return (
    <section id="bbc-awards-finalist" className="scroll-mt-28 bg-white py-12 md:py-20">
      <div className="container">
        <div className="grid gap-8 rounded-[28px] bg-gradient-to-br from-sky-soft via-white to-[#FFF4C8] p-6 shadow-[0_18px_45px_rgba(46,60,28,0.12)] md:p-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-sunshine px-4 py-2 text-sm font-bold text-primary-dark">
              <Award size={18} aria-hidden="true" />
              Environment Category Finalist
            </div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-sky-deep">Exciting news</p>
            <h2 className="font-heading text-4xl font-bold leading-tight text-primary-dark sm:text-5xl md:text-6xl">
              BBC Make a Difference Awards 2026 Finalist
            </h2>
            <p className="mt-4 text-lg font-semibold leading-8 text-primary-dark/82">
              Midlothian Wildflowers has been selected as a finalist in the Environment category.
            </p>
            <div className="mt-6 space-y-4 leading-8 text-foreground/75">
              <p>
                We are incredibly proud to announce that Midlothian Wildflowers has been selected as a finalist in the
                BBC Make a Difference Awards 2026, in the Environment category.
              </p>
              <p>
                This recognition celebrates the work taking place across Midlothian to protect nature, connect
                communities and improve local green spaces.
              </p>
              <p>
                This achievement belongs to everyone involved: our volunteers, partner organisations, supporters and
                local communities who continue to share their time, knowledge, skills and passion.
              </p>
              <p>The group has been invited to the award ceremony in Glasgow.</p>
            </div>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="bg-sunshine text-primary-dark hover:bg-[#f8d85e]">
                <Link href="#bbc-awards-finalist">
                  Read Our Story
                  <ArrowRight size={18} aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild size="lg">
                <Link href="/get-involved">Get Involved</Link>
              </Button>
            </div>
            <p className="mt-4 text-sm font-semibold text-primary-dark/70">
              Nominations are now closed. Thank you to everyone who supported and nominated Midlothian Wildflowers.
            </p>
            <div className="mt-5 rounded-2xl border border-white/80 bg-white/75 p-4 shadow-[0_10px_24px_rgba(46,60,28,0.08)]">
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-sky-deep">Official BBC links</p>
              <div className="mt-3 flex flex-col gap-2 text-sm font-semibold sm:flex-row sm:flex-wrap">
                <Link
                  href={EXTERNAL_LINKS.bbcEnvironmentalAward}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-sky-soft px-4 py-2 text-primary-dark hover:bg-white focus-ring"
                >
                  BBC Environmental Award
                  <ExternalLink size={15} aria-hidden="true" />
                </Link>
                <Link
                  href={EXTERNAL_LINKS.bbcMakeADifference}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-soft-green px-4 py-2 text-primary-dark hover:bg-white focus-ring"
                >
                  BBC Make a Difference
                  <ExternalLink size={15} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>

          <aside className="rounded-[24px] border border-white/80 bg-white/85 p-6 shadow-[0_16px_38px_rgba(46,60,28,0.1)] md:p-8">
            <div className="relative mb-6 aspect-square overflow-hidden rounded-[20px] bg-primary-dark shadow-[0_16px_34px_rgba(46,60,28,0.18)]">
              <Image
                src={siteImages.awards.src}
                alt={siteImages.awards.alt}
                fill
                sizes="(min-width: 1024px) 36vw, 100vw"
                className="object-cover"
              />
            </div>
            <Sparkles className="mb-5 text-sunshine" size={34} aria-hidden="true" />
            <blockquote className="font-heading text-3xl font-bold leading-tight text-primary-dark md:text-4xl">
              “Midlothian Wildflowers is growing from the small acorn we planted into a strong and thriving woodland,
              thanks to the dedication of our volunteers, partners and local communities.”
            </blockquote>
            <div className="mt-7 flex items-center gap-3 rounded-2xl bg-soft-green p-4 text-primary-dark">
              <HeartHandshake className="h-6 w-6 shrink-0 text-primary" aria-hidden="true" />
              <p className="text-sm font-semibold">
                Together, we are making a genuine difference across Midlothian.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
