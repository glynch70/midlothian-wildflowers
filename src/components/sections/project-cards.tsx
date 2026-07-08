import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { projectCards } from "@/lib/content";
import { Card } from "@/components/ui/card";
import { FadeIn } from "@/components/sections/fade-in";
import { SectionHeading } from "@/components/sections/section-heading";

export function ProjectCards() {
  return (
    <section className="section-padding bg-[#FDF8EB]">
      <div className="container">
        <FadeIn className="text-center">
          <SectionHeading
            eyebrow="What we do"
            title="Practical projects with local roots"
            text="Friendly, hands-on work that helps people learn outdoors while caring for Midlothian's green spaces."
          />
          <div className="yellow-divider" />
        </FadeIn>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projectCards.map((project, index) => {
            const Icon = project.icon;
            const accentColours = [
              "bg-sunshine text-primary-dark",
              "bg-sky-soft text-sky-deep",
              "bg-soft-green text-primary-dark",
            ];
            const objectPosition =
              project.title === "Organic Growing"
                ? "object-[50%_24%]"
                : project.title === "Conservation Volunteering"
                  ? "object-[50%_35%]"
                  : "object-center";

            return (
              <FadeIn key={project.title}>
                <Card className="group flex h-full flex-col overflow-hidden rounded-[22px] border-white/90 bg-white shadow-[0_12px_32px_rgba(46,60,28,0.1)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_38px_rgba(46,60,28,0.14)]">
                  <div className="relative aspect-[4/3] bg-soft-grey">
                    <Image
                      src={project.image.src}
                      alt={project.image.alt}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                      className={`object-cover ${objectPosition} transition duration-500 group-hover:scale-[1.04]`}
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5 md:p-6">
                    <span
                      className={`mb-4 flex h-11 w-11 items-center justify-center rounded-full ${accentColours[index % accentColours.length]}`}
                    >
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="font-heading text-xl font-bold leading-tight text-primary-dark md:text-2xl">
                      {project.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-6 text-foreground/72 md:leading-7">{project.text}</p>
                    <Link
                      href="/what-we-do"
                      className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-sky-deep hover:text-primary-dark focus-ring"
                    >
                      Learn more
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-sunshine text-primary-dark">
                        <ArrowRight size={15} aria-hidden="true" />
                      </span>
                    </Link>
                  </div>
                </Card>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
