"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { siteImages } from "@/lib/images";

type GalleryProps = {
  showCategories?: boolean;
};

export function Gallery({ showCategories = false }: GalleryProps) {
  const [active, setActive] = useState<(typeof siteImages.gallery)[number] | null>(null);

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {siteImages.gallery.map((image) => (
          <button
            key={image.src}
            type="button"
            className="group relative aspect-[4/3] overflow-hidden rounded-[8px] bg-soft-grey text-left shadow-soft focus-ring"
            onClick={() => setActive(image)}
          >
            <Image src={image.src} alt={image.alt} fill className="object-cover transition duration-500 group-hover:scale-105" />
            <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary-dark/82 to-transparent p-5 text-white">
              {showCategories ? <span className="block text-xs font-bold uppercase tracking-[0.14em]">{image.category}</span> : null}
              <span className="block font-heading text-2xl font-bold">{image.alt}</span>
            </span>
          </button>
        ))}
      </div>

      {active ? (
        <div
          className="fixed inset-0 z-[80] grid place-items-center bg-primary-dark/90 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={active.alt}
          onClick={() => setActive(null)}
        >
          <div className="relative w-full max-w-5xl" onClick={(event) => event.stopPropagation()}>
            <Button
              variant="secondary"
              size="icon"
              className="absolute right-3 top-3 z-10"
              aria-label="Close image preview"
              onClick={() => setActive(null)}
            >
              <X aria-hidden="true" />
            </Button>
            <div className="relative aspect-[16/10] overflow-hidden rounded-[8px] bg-white">
              <Image src={active.src} alt={active.alt} fill className="object-cover" />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
