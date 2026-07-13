import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { siteImages } from "@/lib/images";

export function Hero() {
  return (
    <section className="relative min-h-[76vh] overflow-hidden bg-primary-dark text-white md:min-h-[82vh]">
      <Image
        src={siteImages.hero.src}
        alt={siteImages.hero.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-[62%_center] md:object-[76%_center] lg:object-right"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#172410]/92 via-[#355322]/48 to-[#F6C62F]/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#172410]/32 via-transparent to-transparent" />
      <div className="container relative flex min-h-[76vh] items-center py-14 md:min-h-[82vh]">
        <div className="max-w-[680px]">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-sunshine md:text-sm">
            COMMUNITY • NATURE • LEARNING
          </p>
          <h1 className="font-heading text-4xl font-bold leading-[0.98] drop-shadow sm:text-5xl md:text-6xl lg:text-7xl">
            Bringing people together across Midlothian to protect green spaces and each other
          </h1>
          <p className="mt-5 max-w-xl text-base font-medium leading-8 text-white/90 md:text-xl">
            Creative grassroots projects, practical conservation and outdoor learning for people, places and wildlife.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button asChild size="lg" className="bg-sunshine text-primary-dark hover:bg-[#f8d85e]">
              <Link href="/what-we-do">
                Explore Our Projects
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild size="lg" className="bg-white/90 text-primary-dark hover:bg-sky-soft">
              <Link href="/get-involved">Volunteer With Us</Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 text-cream" aria-hidden="true">
        <svg className="h-full w-full" viewBox="0 0 1440 120" preserveAspectRatio="none" focusable="false">
          <path
            fill="currentColor"
            d="M0,88 C170,126 324,120 496,82 C674,42 814,30 1002,64 C1168,94 1302,98 1440,68 L1440,120 L0,120 Z"
          />
        </svg>
      </div>
    </section>
  );
}
