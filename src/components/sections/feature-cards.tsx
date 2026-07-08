import type { LucideIcon } from "lucide-react";

import { Card } from "@/components/ui/card";

export type FeatureCard = {
  title: string;
  text: string;
  icon: LucideIcon;
};

type FeatureCardsProps = {
  items: FeatureCard[];
};

export function FeatureCards({ items }: FeatureCardsProps) {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {items.map((item, index) => {
        const Icon = item.icon;
        const iconStyles = [
          "bg-sunshine text-primary-dark",
          "bg-sky-soft text-sky-deep",
          "bg-soft-green text-primary-dark",
        ];

        return (
          <Card
            key={item.title}
            className="rounded-[22px] border-white/90 bg-white/90 p-7 shadow-[0_12px_32px_rgba(46,60,28,0.1)]"
          >
            <div
              className={`mb-6 flex h-12 w-12 items-center justify-center rounded-full ${
                iconStyles[index % iconStyles.length]
              }`}
            >
              <Icon aria-hidden="true" />
            </div>
            <h3 className="font-heading text-2xl font-bold text-primary-dark">{item.title}</h3>
            <p className="mt-3 leading-7 text-foreground/72">{item.text}</p>
          </Card>
        );
      })}
    </div>
  );
}
