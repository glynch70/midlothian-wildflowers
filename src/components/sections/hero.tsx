import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { siteImages } from "@/lib/images";

export function Hero() {
  return (
    <section className="relative min-h-[74vh] overflow-hidden bg-primary-dark text-white md:min-h-[82vh]">
      <Image
        src={siteImages.hero.src}
        alt={siteImages.hero.alt}
        fill
        priority
        sizes="100vw"
        className="-scale-x-100 object-cover object-[28%_50%] md:object-[20%_50%]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#172410]/92 via-[#172410]/58 to-[#172410]/8" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#172410]/38 via-transparent to-transparent" />
      <div className="container relative flex min-h-[74vh] items-center py-16 md:min-h-[82vh]">
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-white/80">Community conservation</p>
          <h1 className="font-heading text-5xl font-bold leading-[0.94] drop-shadow md:text-7xl lg:text-8xl">
            Restoring nature
            <span className="block">together in</span>
            <span className="block font-sans text-6xl font-black italic leading-[0.88] text-[#F6C62F] md:text-8xl lg:text-9xl">
              Midlothian
            </span>
          </h1>
          <p className="mt-5 max-w-xl text-base font-medium leading-8 text-white/90 md:text-xl">
            Connecting people, places and wildlife through practical action, learning and local care.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="bg-[#F6C62F] text-primary-dark hover:bg-[#f8d85e]">
              <Link href="/about">
                Our Mission
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
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
        {/* TODO: Replace this wave-only divider with approved floral divider artwork when available. */}
      </div>
    </section>
  );
}
