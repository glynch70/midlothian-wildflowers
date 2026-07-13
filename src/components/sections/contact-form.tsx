"use client";

import Link from "next/link";
import type { FormEvent } from "react";
import { useState } from "react";
import { AlertCircle, CheckCircle2, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contactDetails } from "@/lib/content";

type FormStatus = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [statusMessage, setStatusMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    setStatus("loading");
    setStatusMessage("");

    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const subject = String(formData.get("subject") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    if (!name || !email || !subject || !message) {
      setStatus("error");
      setStatusMessage("Please complete your name, email, subject and message.");
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, subject, message }),
      });
      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(result.error || "Message could not be sent.");
      }

      form.reset();
      setStatus("success");
      setStatusMessage("Thanks, your message has been sent.");
    } catch (error) {
      setStatus("error");
      setStatusMessage(error instanceof Error ? error.message : "Message could not be sent.");
    }
  }

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr]">
      <form className="grid gap-5 rounded-[22px] bg-white p-6 shadow-[0_16px_42px_rgba(46,60,28,0.1)] md:p-8" onSubmit={handleSubmit}>
        <div className="grid gap-2">
          <label htmlFor="name" className="text-sm font-semibold text-primary-dark">
            Name
          </label>
          <Input id="name" name="name" autoComplete="name" placeholder="Your name" required />
        </div>
        <div className="grid gap-2">
          <label htmlFor="email" className="text-sm font-semibold text-primary-dark">
            Email
          </label>
          <Input id="email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
        </div>
        <div className="grid gap-2">
          <label htmlFor="phone" className="text-sm font-semibold text-primary-dark">
            Phone <span className="font-normal text-foreground/60">(optional)</span>
          </label>
          <Input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="Your phone number" />
        </div>
        <div className="grid gap-2">
          <label htmlFor="subject" className="text-sm font-semibold text-primary-dark">
            Subject
          </label>
          <Input id="subject" name="subject" placeholder="What is your enquiry about?" required />
        </div>
        <div className="grid gap-2">
          <label htmlFor="message" className="text-sm font-semibold text-primary-dark">
            Message
          </label>
          <Textarea id="message" name="message" placeholder="Tell us how you would like to get involved" required />
        </div>
        {statusMessage ? (
          <p
            className={`flex items-center gap-2 rounded-2xl px-4 py-3 text-sm font-semibold ${
              status === "success" ? "bg-soft-green text-primary-dark" : "bg-[#FFF4C8] text-primary-dark"
            }`}
            role={status === "error" ? "alert" : "status"}
          >
            {status === "success" ? (
              <CheckCircle2 size={18} aria-hidden="true" />
            ) : (
              <AlertCircle size={18} aria-hidden="true" />
            )}
            {statusMessage}
          </p>
        ) : null}
        <Button type="submit" size="lg" className="justify-self-start" disabled={status === "loading"}>
          <Send size={18} aria-hidden="true" />
          {status === "loading" ? "Sending..." : "Email Midlothian Wildflowers"}
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
