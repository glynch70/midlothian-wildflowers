import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { siteImages } from "@/lib/images";

export function Hero() {
  return (
    <section className="relative min-h-[560px] overflow-hidden bg-primary-dark text-white md:min-h-[calc(100vh-5rem)]">
      <Image
        src={siteImages.hero.src}
        alt={siteImages.hero.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-primary-dark/30 to-transparent md:bg-gradient-to-r md:from-primary-dark/80 md:via-primary-dark/40 md:to-transparent" />
      <div className="container relative flex min-h-[560px] items-end pb-12 pt-24 md:min-h-[calc(100vh-5rem)] md:items-center md:py-16">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-white/80">Community conservation</p>
          <h1 className="font-heading text-5xl font-bold leading-[0.98] drop-shadow md:text-7xl">
            Restoring nature together in{" "}
            <span className="block font-sans text-6xl font-black italic leading-none text-[#F6C62F] md:text-8xl">
              Midlothian
            </span>
          </h1>
          <p className="mt-5 max-w-xl text-base font-medium leading-8 text-white/90 md:text-xl">
            Connecting people, places and wildlife through practical action, learning and local care.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/about">Our Mission</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
