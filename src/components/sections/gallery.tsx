"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { siteImages } from "@/lib/images";

const galleryImages = siteImages.gallery;

export function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const lightboxRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const touchStartX = useRef<number | null>(null);
  const activeImage = activeIndex === null ? null : galleryImages[activeIndex];
  const nextImage = activeIndex === null ? null : galleryImages[(activeIndex + 1) % galleryImages.length];

  const closeLightbox = useCallback(() => {
    setActiveIndex(null);
  }, []);

  const showPrevious = useCallback(() => {
    setActiveIndex((current) => (current === null ? current : (current - 1 + galleryImages.length) % galleryImages.length));
  }, []);

  const showNext = useCallback(() => {
    setActiveIndex((current) => (current === null ? current : (current + 1) % galleryImages.length));
  }, []);

  useEffect(() => {
    if (activeIndex === null) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeLightbox();
      }

      if (event.key === "ArrowLeft") {
        showPrevious();
      }

      if (event.key === "ArrowRight") {
        showNext();
      }

      if (event.key === "Tab") {
        const focusable = lightboxRef.current?.querySelectorAll<HTMLElement>(
          'button, [href], input, textarea, select, [tabindex]:not([tabindex="-1"])',
        );

        if (!focusable?.length) {
          return;
        }

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex, closeLightbox, showNext, showPrevious]);

  return (
    <>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {galleryImages.map((image, index) => (
          <button
            key={image.src}
            type="button"
            className="group relative aspect-[4/3] overflow-hidden rounded-[8px] bg-soft-grey shadow-soft focus-ring"
            aria-label={`Open gallery image ${index + 1} of ${galleryImages.length}`}
            onClick={() => setActiveIndex(index)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition duration-500 group-hover:scale-[1.03] group-hover:opacity-95"
            />
          </button>
        ))}
      </div>

      {activeImage ? (
        <div
          ref={lightboxRef}
          className="fixed inset-0 z-[80] grid place-items-center bg-black/88 p-3 md:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="Gallery image viewer"
          onClick={closeLightbox}
          onTouchStart={(event) => {
            touchStartX.current = event.touches[0]?.clientX ?? null;
          }}
          onTouchEnd={(event) => {
            if (touchStartX.current === null) {
              return;
            }

            const touchEndX = event.changedTouches[0]?.clientX ?? touchStartX.current;
            const distance = touchStartX.current - touchEndX;

            if (Math.abs(distance) > 48) {
              if (distance > 0) {
                showNext();
              } else {
                showPrevious();
              }
            }

            touchStartX.current = null;
          }}
        >
          <div className="absolute right-4 top-4 z-20 flex items-center gap-3 md:right-6 md:top-6">
            <p className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white/85">
              Image {activeIndex! + 1} of {galleryImages.length}
            </p>
            <Button
              ref={closeButtonRef}
              variant="secondary"
              size="icon"
              aria-label="Close gallery image"
              onClick={closeLightbox}
            >
              <X size={22} aria-hidden="true" />
            </Button>
          </div>

          <Button
            variant="secondary"
            size="icon"
            className="absolute left-4 top-1/2 z-20 -translate-y-1/2 md:left-6"
            aria-label="View previous image"
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
          >
            <ChevronLeft size={24} aria-hidden="true" />
          </Button>

          <div
            className="relative h-[78vh] w-full max-w-6xl overflow-hidden rounded-[8px]"
            onClick={(event) => event.stopPropagation()}
            onContextMenu={(event) => event.preventDefault()}
          >
            <Image
              src={activeImage.src}
              alt={activeImage.alt}
              fill
              priority
              sizes="100vw"
              className="object-contain"
            />
            {nextImage ? <Image src={nextImage.src} alt="" width={1} height={1} className="sr-only" aria-hidden="true" /> : null}
          </div>

          <Button
            variant="secondary"
            size="icon"
            className="absolute right-4 top-1/2 z-20 -translate-y-1/2 md:right-6"
            aria-label="View next image"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
          >
            <ChevronRight size={24} aria-hidden="true" />
          </Button>
        </div>
      ) : null}
    </>
  );
}
