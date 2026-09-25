import nodemailer from "nodemailer";
import type { EnquiryInput } from "./validation";

function getTransporter() {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD, SMTP_SECURE } = process.env;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASSWORD) {
    throw new Error("SMTP is not configured. Set SMTP_HOST, SMTP_PORT, SMTP_USER and SMTP_PASSWORD.");
  }

  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: SMTP_SECURE === "true" || Number(SMTP_PORT) === 465,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASSWORD,
    },
  });
}

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function sendEnquiryNotification(data: EnquiryInput) {
  const { EMAIL_FROM, EMAIL_TO } = process.env;

  if (!EMAIL_FROM || !EMAIL_TO) {
    throw new Error("Email is not configured. Set EMAIL_FROM and EMAIL_TO.");
  }

  const transporter = getTransporter();
  const submittedAt = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

  const textBody = [
    "New Customer Enquiry",
    "",
    `Name: ${data.name}`,
    `Phone: ${data.phone}`,
    `Company: ${data.company}`,
    `Email: ${data.email}`,
    "",
    `Interested Product: ${data.product || "Not specified"}`,
    "",
    `Message: ${data.message || "-"}`,
    "",
    `Submitted At: ${submittedAt}`,
  ].join("\n");

  const htmlBody = `
    <div style="font-family: -apple-system, Segoe UI, Arial, sans-serif; background:#F6F4EF; padding:32px;">
      <div style="max-width:560px; margin:0 auto; background:#ffffff; border-radius:4px; overflow:hidden; border:1px solid #DCE2E7;">
        <div style="background:#0A1826; padding:20px 28px;">
          <p style="margin:0; color:#E0A343; font-size:12px; letter-spacing:0.2em; text-transform:uppercase;">Aditya Petrochem</p>
          <h1 style="margin:6px 0 0; color:#ffffff; font-size:20px;">New Product Enquiry</h1>
        </div>
        <div style="padding:28px;">
          <table style="width:100%; border-collapse:collapse; font-size:14px; color:#173A56;">
            <tr><td style="padding:8px 0; color:#6C7A87; width:140px;">Name</td><td style="padding:8px 0; font-weight:600;">${escapeHtml(data.name)}</td></tr>
            <tr><td style="padding:8px 0; color:#6C7A87;">Phone</td><td style="padding:8px 0; font-weight:600;">${escapeHtml(data.phone)}</td></tr>
            <tr><td style="padding:8px 0; color:#6C7A87;">Company</td><td style="padding:8px 0; font-weight:600;">${escapeHtml(data.company)}</td></tr>
            <tr><td style="padding:8px 0; color:#6C7A87;">Email</td><td style="padding:8px 0; font-weight:600;">${escapeHtml(data.email)}</td></tr>
            <tr><td style="padding:8px 0; color:#6C7A87;">Interested Product</td><td style="padding:8px 0; font-weight:600;">${escapeHtml(data.product || "Not specified")}</td></tr>
          </table>
          <div style="margin-top:20px;">
            <p style="margin:0 0 6px; color:#6C7A87; font-size:14px;">Message / Requirement</p>
            <p style="margin:0; padding:14px; background:#F6F4EF; border-radius:4px; font-size:14px; line-height:1.6; white-space:pre-wrap;">${escapeHtml(data.message || "-")}</p>
          </div>
          <p style="margin-top:24px; color:#94A2AE; font-size:12px;">Submitted At: ${escapeHtml(submittedAt)}</p>
        </div>
      </div>
    </div>
  `;

  await transporter.sendMail({
    from: EMAIL_FROM,
    to: EMAIL_TO,
    replyTo: data.email,
    subject: `New Product Enquiry — ${data.product || "General"} — ${data.company}`,
    text: textBody,
    html: htmlBody,
  });
}
