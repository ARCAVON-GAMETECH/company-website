// app/api/feedback/route.ts
import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Feedback from "@/models/Feedback";
import nodemailer from "nodemailer";

async function sendFeedbackEmail({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const toEmail = process.env.FEEDBACK_TO_EMAIL as string;
  const fromEmail = process.env.FROM_EMAIL as string;

  await transporter.sendMail({
    from: fromEmail,
    to: toEmail,
    subject: `New feedback from ${name}`,
    text: `From: ${name} <${email}>\n\n${message}`,
  });
}

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ message: "All fields required" }, { status: 400 });
    }

    await connectDB();

    await Feedback.create({ name, email, message });

    if (process.env.SMTP_HOST) {
      await sendFeedbackEmail({ name, email, message });
    }

    return NextResponse.json({ message: "Feedback submitted" });
  } catch (error) {
    console.error("Feedback error", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
