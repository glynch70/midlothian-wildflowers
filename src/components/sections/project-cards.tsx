import Image from "next/image";
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
            title="Practical Projects for Greenspaces, Wildlife and People"
            text="Our work includes stewardship, partnerships, permaculture, meadows, education, conservation volunteering, community scything and organic growing."
          />
          <div className="yellow-divider" />
        </FadeIn>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projectCards.map((project, index) => {
            const Icon = project.icon;
            const arrowColours = ["bg-[#F6C62F] text-primary-dark", "bg-primary text-white", "bg-[#7D4A91] text-white"];
            const objectPosition =
              project.title === "Organic Growing"
                ? "object-[50%_24%]"
                : project.title === "Conservation Volunteering"
                  ? "object-[50%_35%]"
                  : "object-center";

            return (
              <FadeIn key={project.title}>
                <Card className="group grid h-full grid-cols-[42%_1fr] overflow-hidden rounded-[14px] border-white/80 bg-white shadow-[0_12px_34px_rgba(46,60,28,0.12)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_44px_rgba(46,60,28,0.16)] md:block">
                  <div className="relative min-h-36 bg-soft-grey md:aspect-[4/3]">
                    <Image
                      src={project.image.src}
                      alt={project.image.alt}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                      className={`object-cover ${objectPosition} transition duration-500 group-hover:scale-[1.04]`}
                    />
                  </div>
                  <div className="relative p-5 md:p-6">
                    <Icon className="mb-3 h-5 w-5 text-primary md:mb-5 md:h-6 md:w-6" aria-hidden="true" />
                    <h3 className="font-heading text-xl font-bold leading-tight text-primary-dark md:text-2xl">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-foreground/72 md:leading-7">{project.text}</p>
                    <span
                      className={`absolute bottom-4 right-4 flex h-9 w-9 items-center justify-center rounded-full shadow-md ${arrowColours[index % arrowColours.length]}`}
                      aria-hidden="true"
                    >
                      <ArrowRight size={17} />
                    </span>
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
