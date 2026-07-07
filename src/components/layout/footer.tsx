import Link from "next/link";
import { Facebook, Mail } from "lucide-react";

import { EXTERNAL_LINKS } from "@/lib/links";
import { navItems } from "@/lib/content";

export function Footer() {
  return (
    <footer className="overflow-hidden bg-gradient-to-br from-[#27421B] via-primary-dark to-[#14270E] text-white">
      <div className="container grid gap-10 py-14 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <h2 className="font-heading text-4xl font-bold leading-none">Midlothian Wildflowers</h2>
          <p className="mt-4 max-w-sm text-sm leading-6 text-white/80">
            A constituted grassroots community group caring for greenspaces, wildlife and community wellbeing across
            Midlothian.
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-white/70">Explore</h3>
          <div className="mt-4 grid gap-2">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-white/80 hover:text-white">
                {item.label}
              </Link>
            ))}
            <Link href="/privacy" className="text-sm text-white/80 hover:text-white">
              Privacy
            </Link>
          </div>
        </nav>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-white/70">Connect</h3>
          <div className="mt-4 flex gap-3">
            <Link
              href={`mailto:${EXTERNAL_LINKS.email}`}
              aria-label="Email Midlothian Wildflowers"
              className="rounded-full bg-white/10 p-3 text-white shadow-sm hover:bg-white/20 focus-ring"
            >
              <Mail size={18} aria-hidden="true" />
            </Link>
            <Link
              href={EXTERNAL_LINKS.facebook}
              aria-label="Visit Midlothian Wildflowers on Facebook"
              className="rounded-full bg-white/10 p-3 text-white shadow-sm hover:bg-white/20 focus-ring"
            >
              <Facebook size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
      <div className="wildflower-divider opacity-30" aria-hidden="true" />
      <div className="border-t border-white/10">
        <div className="container flex flex-col gap-2 py-5 text-sm text-white/70 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Midlothian Wildflowers. All rights reserved.</p>
          <p>Website by Bear Media</p>
        </div>
      </div>
    </footer>
  );
}
