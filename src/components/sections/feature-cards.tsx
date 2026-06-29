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
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <Card key={item.title} className="p-7">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-soft-green text-primary">
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
