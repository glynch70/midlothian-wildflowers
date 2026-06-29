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
            title="Practical Projects for Plants, Pollinators and People"
            text="From meadow creation to habitat restoration, our work is designed to be useful, welcoming and rooted in the local landscape."
          />
        </FadeIn>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {projectCards.map((project) => {
            const Icon = project.icon;
            return (
              <FadeIn key={project.title}>
                <Card className="h-full p-6">
                  <Icon className="mb-5 text-primary" aria-hidden="true" />
                  <h3 className="font-heading text-2xl font-bold text-primary-dark">{project.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-foreground/72">{project.text}</p>
                </Card>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
