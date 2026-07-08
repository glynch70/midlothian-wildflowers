import { trustItems } from "@/lib/content";

export function TrustSection() {
  return (
    <section className="bg-cream py-12">
      <div className="container">
        <div className="grid gap-4 md:grid-cols-4">
          {trustItems.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.title} className="flex items-center gap-3 rounded-[18px] bg-white p-5 shadow-[0_12px_30px_rgba(46,60,28,0.1)]">
                <Icon className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                <p className="font-semibold text-primary-dark">{item.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
