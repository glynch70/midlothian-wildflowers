import Link from "next/link";
import { Award } from "lucide-react";

import { Button } from "@/components/ui/button";

export function AwardsCallout() {
  return (
    <section className="bg-cream py-10">
      <div className="container">
        <div className="flex flex-col gap-5 rounded-[24px] border border-white/80 bg-white p-6 shadow-[0_14px_34px_rgba(46,60,28,0.1)] md:flex-row md:items-center md:justify-between">
          <div className="flex gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sunshine text-primary-dark">
              <Award aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-sky-deep">Exciting News</p>
              <h2 className="mt-1 font-heading text-3xl font-bold leading-tight text-primary-dark">
                BBC Make a Difference Awards 2026 Finalist
              </h2>
              <p className="mt-2 text-sm leading-6 text-foreground/72">
                Environment Category. Thank you to every volunteer, supporter and partner organisation who helped make
                this possible.
              </p>
            </div>
          </div>
          <Button asChild className="w-full bg-sunshine text-primary-dark hover:bg-[#f8d85e] sm:w-auto">
            <Link href="#bbc-awards-finalist">Learn More</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
