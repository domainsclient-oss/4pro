"use server";

import { Resend } from "resend";
import { services, site } from "@/lib/site";

const FROM = `4pro Website <mail@updates.4proconsulting.com>`;
const TO = site.email; // info@4proconsulting.com

export type ContactState = { status: "idle" | "success" | "error"; message?: string };

const MAX = { name: 120, email: 200, phone: 40, company: 160, message: 5000 };

function field(d: FormData, key: keyof typeof MAX) {
  return String(d.get(key) ?? "")
    .trim()
    .slice(0, MAX[key]);
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function sendContact(_prev: ContactState, d: FormData): Promise<ContactState> {
  // Honeypot: real visitors never fill this hidden field.
  if (String(d.get("website") ?? "") !== "") return { status: "success" };

  const name = field(d, "name");
  const email = field(d, "email");
  const phone = field(d, "phone");
  const company = field(d, "company");
  const message = field(d, "message");
  const serviceRaw = String(d.get("service") ?? "");
  const service = (services as readonly string[]).includes(serviceRaw) ? serviceRaw : "";

  if (!name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { status: "error", message: "Please fill in your name, a valid email and a message." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[contact] RESEND_API_KEY is not set");
    return { status: "error", message: "Email service is not configured." };
  }

  const rows: [string, string][] = [
    ["Name", name],
    ["Email", email],
    ["Phone", phone || "-"],
    ["Organization", company || "-"],
    ["Interested in", service || "-"],
  ];

  const text = [...rows.map(([k, v]) => `${k}: ${v}`), "", message].join("\n");
  const html = `
<div style="font-family:Arial,Helvetica,sans-serif;color:#16110c;max-width:600px">
  <h2 style="margin:0 0 16px;color:#996734">New enquiry from the website</h2>
  <table cellpadding="6" style="border-collapse:collapse;font-size:14px">
    ${rows
      .map(
        ([k, v]) =>
          `<tr><td style="color:#6b6158;white-space:nowrap;vertical-align:top"><strong>${k}</strong></td><td>${escapeHtml(v)}</td></tr>`,
      )
      .join("")}
  </table>
  <h3 style="margin:20px 0 8px;font-size:15px">Message</h3>
  <p style="white-space:pre-wrap;font-size:14px;line-height:1.6;margin:0">${escapeHtml(message)}</p>
</div>`;

  const { error } = await new Resend(apiKey).emails.send({
    from: FROM,
    to: TO,
    replyTo: email,
    subject: `New enquiry from ${name}${service ? ` — ${service}` : ""}`,
    text,
    html,
  });

  if (error) {
    console.error("[contact] Resend error:", error);
    return { status: "error", message: "We couldn't send your message right now." };
  }
  return { status: "success" };
}
