import Link from "next/link";
import { Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contactDetails } from "@/lib/content";

export function ContactForm() {
  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr]">
      <form className="grid gap-5 rounded-[8px] bg-white p-6 shadow-soft md:p-8">
        <div className="grid gap-2">
          <label htmlFor="name" className="text-sm font-semibold text-primary-dark">
            Name
          </label>
          <Input id="name" name="name" autoComplete="name" placeholder="Your name" />
        </div>
        <div className="grid gap-2">
          <label htmlFor="email" className="text-sm font-semibold text-primary-dark">
            Email
          </label>
          <Input id="email" name="email" type="email" autoComplete="email" placeholder="you@example.com" />
        </div>
        <div className="grid gap-2">
          <label htmlFor="message" className="text-sm font-semibold text-primary-dark">
            Message
          </label>
          <Textarea id="message" name="message" placeholder="Tell us how you would like to get involved" />
        </div>
        <Button type="submit" size="lg" className="justify-self-start">
          <Send size={18} aria-hidden="true" />
          Send Message
        </Button>
      </form>

      <aside className="rounded-[8px] bg-primary-dark p-8 text-white shadow-soft">
        <h2 className="font-heading text-4xl font-bold">Contact</h2>
        <p className="mt-4 leading-8 text-white/80">
          Have a question about volunteering, events or a possible wildflower project? Send a message or connect through
          the community channels.
        </p>
        <div className="mt-8 grid gap-5">
          {contactDetails.map((detail) => (
            <div key={detail.label}>
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-white/60">{detail.label}</p>
              {detail.href ? (
                <Link href={detail.href} className="mt-1 block text-white hover:underline">
                  {detail.value}
                </Link>
              ) : (
                <p className="mt-1 text-white">{detail.value}</p>
              )}
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
}
