"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { navItems } from "@/lib/content";
import { siteImages } from "@/lib/images";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-primary/10 bg-white/95 shadow-[0_8px_30px_rgba(46,60,28,0.08)] backdrop-blur">
      <div className="container flex h-20 items-center justify-between gap-4 sm:h-24 lg:h-28">
        <Link href="/" className="focus-ring flex items-center gap-3 rounded-full" onClick={() => setOpen(false)}>
          <Image
            src={siteImages.logo.src}
            alt=""
            width={72}
            height={72}
            className="h-14 w-14 rounded-full object-cover sm:h-16 sm:w-16 lg:h-20 lg:w-20"
            priority
          />
          <span className="font-heading text-xl font-bold leading-none text-primary-dark sm:text-3xl lg:text-4xl">
            Midlothian <span className="block">Wildflowers</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-5 xl:gap-7 lg:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative rounded-full px-1 py-2 text-sm font-semibold text-primary-dark/80 transition hover:text-primary-dark focus-ring after:absolute after:inset-x-1 after:-bottom-1 after:h-0.5 after:rounded-full after:bg-transparent after:transition",
                pathname === item.href && "text-primary-dark after:bg-sunshine",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button asChild>
            <Link href="/get-involved">Volunteer With Us</Link>
          </Button>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="h-12 w-12 text-primary-dark lg:hidden"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </Button>
      </div>

      {open ? (
        <div className="border-t border-primary/10 bg-white lg:hidden">
          <nav className="container grid gap-2 py-4" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-3 text-sm font-semibold text-primary-dark hover:bg-soft-green focus-ring"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="mt-2 bg-sunshine text-primary-dark hover:bg-[#f8d85e]">
              <Link href="/get-involved" onClick={() => setOpen(false)}>
                Volunteer With Us
              </Link>
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
