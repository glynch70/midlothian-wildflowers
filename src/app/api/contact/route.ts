import { NextResponse } from "next/server";

const RESEND_API_URL = "https://api.resend.com/emails";
const FROM_EMAIL = "Midlothian Wildflowers <website@midlothianwildflowers-co.uk>";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  subject?: unknown;
  message?: unknown;
};

function getString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  const resendApiKey = process.env.RESEND_API_KEY;
  const contactEmail = process.env.CONTACT_EMAIL;

  if (!resendApiKey || !contactEmail) {
    return NextResponse.json({ error: "Contact form is not configured." }, { status: 500 });
  }

  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = getString(payload.name);
  const email = getString(payload.email);
  const phone = getString(payload.phone);
  const subject = getString(payload.subject);
  const message = getString(payload.message);

  if (!name || !email || !subject || !message) {
    return NextResponse.json({ error: "Name, email, subject and message are required." }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const emailSubject = `Website enquiry: ${subject}`;
  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    phone ? `Phone: ${phone}` : "Phone: Not provided",
    `Subject: ${subject}`,
    "",
    "Message:",
    message,
  ].join("\n");

  const html = `
    <h2>New website enquiry</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(phone || "Not provided")}</p>
    <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
    <hr />
    <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
  `;

  const response = await fetch(RESEND_API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: FROM_EMAIL,
      to: [contactEmail],
      reply_to: email,
      subject: emailSubject,
      text,
      html,
    }),
  });

  if (!response.ok) {
    return NextResponse.json({ error: "Message could not be sent." }, { status: 502 });
  }

  return NextResponse.json({ ok: true }, { status: 200 });
}
