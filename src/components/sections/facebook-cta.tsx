import Link from "next/link";
import { Facebook } from "lucide-react";

import { Button } from "@/components/ui/button";
import { EXTERNAL_LINKS } from "@/lib/links";

export function FacebookCTA() {
  return (
    <section className="bg-soft-green py-14">
      <div className="container flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div>
          <Facebook className="mb-4 text-primary" aria-hidden="true" />
          <h2 className="font-heading text-4xl font-bold text-primary-dark">Join the Facebook Community</h2>
          <p className="mt-3 max-w-2xl leading-7 text-foreground/75">
            Follow us on Facebook for latest events, volunteering dates and updates.
          </p>
        </div>
        <Button asChild size="lg">
          <Link href={EXTERNAL_LINKS.facebook}>Visit Facebook</Link>
        </Button>
      </div>
    </section>
  );
}
