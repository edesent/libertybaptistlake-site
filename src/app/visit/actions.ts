"use server";

import { headers } from "next/headers";
import { Resend } from "resend";

export type VisitFormState = {
  status: "idle" | "success" | "error";
  message: string;
  fieldErrors?: Partial<Record<"name" | "email" | "phone" | "message", string>>;
};

const MIN_FILL_MS = 2000;
const RATE_LIMIT_MAX = 3;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;

type Bucket = { count: number; windowStart: number };
const rateLimitBuckets = new Map<string, Bucket>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const b = rateLimitBuckets.get(ip);
  if (!b || now - b.windowStart > RATE_LIMIT_WINDOW_MS) {
    rateLimitBuckets.set(ip, { count: 1, windowStart: now });
    return true;
  }
  if (b.count >= RATE_LIMIT_MAX) return false;
  b.count += 1;
  return true;
}

async function getClientIp(): Promise<string> {
  const h = await headers();
  const fwd = h.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0].trim();
  return h.get("x-real-ip") ?? "unknown";
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function submitVisitForm(
  _prev: VisitFormState,
  formData: FormData,
): Promise<VisitFormState> {
  const honeypot = (formData.get("website") as string | null) ?? "";
  if (honeypot.trim() !== "") {
    return { status: "success", message: "Thanks — we'll be in touch soon." };
  }

  const loadedAtRaw = (formData.get("loadedAt") as string | null) ?? "";
  const loadedAt = Number(loadedAtRaw);
  if (!Number.isFinite(loadedAt) || Date.now() - loadedAt < MIN_FILL_MS) {
    return { status: "success", message: "Thanks — we'll be in touch soon." };
  }

  const ip = await getClientIp();
  if (!checkRateLimit(ip)) {
    return {
      status: "error",
      message:
        "You've sent several messages recently. Please call the church office at (989) 588-7039 and we'll be glad to help.",
    };
  }

  const name = ((formData.get("name") as string | null) ?? "").trim();
  const email = ((formData.get("email") as string | null) ?? "").trim();
  const phone = ((formData.get("phone") as string | null) ?? "").trim();
  const service = ((formData.get("service") as string | null) ?? "").trim();
  const message = ((formData.get("message") as string | null) ?? "").trim();

  const fieldErrors: VisitFormState["fieldErrors"] = {};
  if (!name) fieldErrors.name = "Please enter your name.";
  if (!email && !phone) {
    fieldErrors.email = "Please give us an email or phone number.";
    fieldErrors.phone = "Please give us an email or phone number.";
  }
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    fieldErrors.email = "That email doesn't look right.";
  }
  if (message.length > 2000) {
    fieldErrors.message = "Please keep your message under 2000 characters.";
  }
  if (Object.keys(fieldErrors).length > 0) {
    return {
      status: "error",
      message: "Please fix the highlighted fields.",
      fieldErrors,
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toAddress = process.env.VISIT_FORM_TO ?? "pastor@lbclakegeorge.com";
  const fromAddress = process.env.VISIT_FORM_FROM ?? "onboarding@resend.dev";

  if (!apiKey) {
    console.error("[visit-form] RESEND_API_KEY is not set");
    return {
      status: "error",
      message:
        "We couldn't send your note right now. Please call (989) 588-7039 and we'll help you directly.",
    };
  }

  const resend = new Resend(apiKey);

  const html = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 560px;">
      <h2 style="font-family: Georgia, serif; color: #1f2e4a;">New Plan-a-Visit form</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      ${email ? `<p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>` : ""}
      ${phone ? `<p><strong>Phone:</strong> <a href="tel:${escapeHtml(phone)}">${escapeHtml(phone)}</a></p>` : ""}
      ${service ? `<p><strong>Planning to visit:</strong> ${escapeHtml(service)}</p>` : ""}
      ${message ? `<p><strong>Message:</strong></p><p style="white-space: pre-wrap;">${escapeHtml(message)}</p>` : ""}
      <hr style="border: none; border-top: 1px solid #e5e5e5; margin: 24px 0;" />
      <p style="color: #888; font-size: 12px;">Sent from the lbclakegeorge.com visit form.</p>
    </div>
  `;

  try {
    const { error } = await resend.emails.send({
      from: `Liberty Baptist Website <${fromAddress}>`,
      to: [toAddress],
      replyTo: email || undefined,
      subject: `Visit inquiry — ${name}`,
      html,
    });
    if (error) {
      console.error("[visit-form] resend error", error);
      return {
        status: "error",
        message:
          "We couldn't send your note right now. Please call (989) 588-7039 and we'll help you directly.",
      };
    }
  } catch (err) {
    console.error("[visit-form] send failed", err);
    return {
      status: "error",
      message:
        "We couldn't send your note right now. Please call (989) 588-7039 and we'll help you directly.",
    };
  }

  return {
    status: "success",
    message:
      "Thank you — your note is on its way to Pastor Ross. He'll follow up personally within a day or two.",
  };
}
