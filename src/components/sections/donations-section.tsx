import Link from "next/link";
import { HandHeart } from "lucide-react";

import { Button } from "@/components/ui/button";
import { EXTERNAL_LINKS } from "@/lib/links";

export function DonationsSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="grid items-center gap-8 rounded-[8px] bg-soft-green p-8 shadow-soft md:grid-cols-[1fr_auto] md:p-12">
          <div>
            <HandHeart className="mb-5 text-primary" aria-hidden="true" />
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-primary">Donations</p>
            <h2 className="font-heading text-4xl font-bold text-primary-dark md:text-5xl">
              Support Local Projects
            </h2>
            <p className="mt-4 max-w-2xl leading-8 text-foreground/75">
              Donations help Midlothian Wildflowers run local projects such as community meals, plant sales,
              workshops and learning opportunities.
            </p>
          </div>
          <Button asChild size="lg">
            <Link href={EXTERNAL_LINKS.justGiving}>Donate to Midlothian Wildflowers</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
