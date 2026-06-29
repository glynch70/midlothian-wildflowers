import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { siteImages } from "@/lib/images";

export function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-5rem)] overflow-hidden bg-primary-dark text-white">
      <Image src={siteImages.hero.src} alt={siteImages.hero.alt} fill priority className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/85 via-primary-dark/55 to-primary-dark/20" />
      <div className="container relative flex min-h-[calc(100vh-5rem)] items-center py-16">
        <div className="max-w-3xl">
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.18em] text-white/80">Community conservation in Midlothian</p>
          <h1 className="font-heading text-5xl font-bold leading-[1.02] md:text-7xl">
            Protecting and Restoring Wild Spaces Across Midlothian
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/88 md:text-xl">
            Supporting biodiversity, community wellbeing and conservation through volunteer-led environmental projects.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/get-involved">Volunteer With Us</Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
