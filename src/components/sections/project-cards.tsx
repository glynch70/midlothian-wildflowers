import Image from "next/image";

import { projectCards } from "@/lib/content";
import { Card } from "@/components/ui/card";
import { FadeIn } from "@/components/sections/fade-in";
import { SectionHeading } from "@/components/sections/section-heading";

export function ProjectCards() {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <FadeIn>
          <SectionHeading
            eyebrow="What we do"
            title="Practical Projects for Greenspaces, Wildlife and People"
            text="Our work includes stewardship, partnerships, permaculture, meadows, education, conservation volunteering, community scything and organic growing."
          />
        </FadeIn>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projectCards.map((project) => {
            const Icon = project.icon;
            return (
              <FadeIn key={project.title}>
                <Card className="h-full overflow-hidden">
                  <div className="relative aspect-[4/3] bg-soft-grey">
                    <Image
                      src={project.image.src}
                      alt={project.image.alt}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <Icon className="mb-5 text-primary" aria-hidden="true" />
                    <h3 className="font-heading text-2xl font-bold text-primary-dark">{project.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-foreground/72">{project.text}</p>
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
