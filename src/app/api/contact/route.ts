import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { Resend } from "resend";

const RECIPIENT = process.env.GMAIL_ADDRESS ?? "nokvathboy@gmail.com";

function escapeHtml(text: string) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildHtml(name: string, email: string, message: string) {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message);

  return `
    <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 24px; border: 1px solid #e8e6e0; border-radius: 12px;">
      <h2 style="color: #111; margin-bottom: 4px;">New Contact Message</h2>
      <p style="color: #888; font-size: 13px; margin-top: 0;">From your portfolio contact form</p>
      <hr style="border: none; border-top: 1px solid #e8e6e0; margin: 16px 0;" />
      <p><strong>Name:</strong> ${safeName}</p>
      <p><strong>Email:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
      <p><strong>Message:</strong></p>
      <div style="background: #f8f7f4; border-radius: 8px; padding: 16px; color: #333; white-space: pre-wrap;">${safeMessage}</div>
      <hr style="border: none; border-top: 1px solid #e8e6e0; margin: 16px 0;" />
      <p style="font-size: 12px; color: #aaa;">Reply to this email to respond directly to ${safeName}.</p>
    </div>
  `;
}

async function sendViaGmail(name: string, email: string, message: string) {
  const gmailUser = process.env.GMAIL_ADDRESS;
  const gmailPass = process.env.GMAIL_PASS;

  if (!gmailUser || !gmailPass) return false;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: gmailUser, pass: gmailPass },
  });

  await transporter.sendMail({
    from: gmailUser,
    to: RECIPIENT,
    replyTo: email,
    subject: `Portfolio contact: ${name}`,
    html: buildHtml(name, email, message),
  });

  return true;
}

async function sendViaResend(name: string, email: string, message: string) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return false;

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: RECIPIENT,
    replyTo: email,
    subject: `Portfolio contact: ${name}`,
    html: buildHtml(name, email, message),
  });

  if (error) throw error;
  return true;
}

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "All fields are required." },
      { status: 400 }
    );
  }

  try {
    const sent =
      (await sendViaGmail(name, email, message)) ||
      (await sendViaResend(name, email, message));

    if (!sent) {
      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
