"use client";

import Link from "next/link";
import type { FormEvent } from "react";
import { Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contactDetails } from "@/lib/content";
import { EXTERNAL_LINKS } from "@/lib/links";

export function ContactForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const body = [
      name ? `Name: ${name}` : "",
      email ? `Email: ${email}` : "",
      message ? `Message:\n${message}` : "",
    ]
      .filter(Boolean)
      .join("\n\n");
    const params = new URLSearchParams({
      subject: "Midlothian Wildflowers enquiry",
      body,
    });

    window.location.href = `mailto:${EXTERNAL_LINKS.email}?${params.toString()}`;
  }

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr]">
      <form className="grid gap-5 rounded-[22px] bg-white p-6 shadow-[0_16px_42px_rgba(46,60,28,0.1)] md:p-8" onSubmit={handleSubmit}>
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
          Email Midlothian Wildflowers
        </Button>
      </form>

      <aside className="rounded-[22px] bg-gradient-to-br from-primary-dark to-sky-deep p-8 text-white shadow-[0_16px_42px_rgba(46,60,28,0.12)]">
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
