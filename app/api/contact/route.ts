import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

// ------------------- BASIC RATE LIMIT -------------------
const rateLimitMap = new Map();

function isRateLimited(ip: string) {
  const now = Date.now();
  const window = 60 * 1000; // 1 minute
  const limit = 3; // Max: 3 submissions per minute per IP

  if (!rateLimitMap.has(ip)) {
    rateLimitMap.set(ip, []);
  }

  const timestamps = rateLimitMap
    .get(ip)
    .filter((t: number) => now - t < window);

  if (timestamps.length >= limit) return true;

  timestamps.push(now);
  rateLimitMap.set(ip, timestamps);

  return false;
}
// ---------------------------------------------------------

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing name, email, or message" },
        { status: 400 }
      );
    }

    // Get user IP for rate limiting
    const ip =
      req.headers.get("x-forwarded-for") ||
      req.headers.get("cf-connecting-ip") ||
      "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please slow down." },
        { status: 429 }
      );
    }

    // Create SMTP transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email design
    const mailOptions = {
      from: `"${name}" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: `New Contact Form Message from ${name}`,
      html: `
<div style="font-family: 'Segoe UI', Arial, sans-serif; 
            max-width: 600px; 
            margin: 0 auto; 
            background: #0d1117; 
            padding: 25px; 
            border-radius: 12px;
            color: #e6edf3;">

  <h2 style="color: #00c2ff; margin-bottom: 10px; font-weight: 600;">
    New Contact Form Submission
  </h2>

  <div style="height: 1px; background: #30363d; margin: 15px 0;"></div>

  <p style="font-size: 15px;"><strong style="color:#58a6ff;">Name:</strong> ${name}</p>
  <p style="font-size: 15px;"><strong style="color:#58a6ff;">Email:</strong> 
    <a href="mailto:${email}" style="color:#00c2ff;">${email}</a>
  </p>

  <p style="margin-top: 20px; font-size: 15px;"><strong style="color:#58a6ff;">Message:</strong></p>
  <div style="background: #161b22; 
              padding: 15px; 
              border-radius: 8px; 
              white-space: pre-wrap; 
              color: #e6edf3;">
    ${message}
  </div>

  <div style="height: 1px; background: #30363d; margin: 25px 0;"></div>

  <p style="color: #8b949e; font-size: 12px; text-align:center;">
    Sent via the Arcavon Website Contact Form.
  </p>
</div>
`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: "Message delivered successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { error: "Unable to send message" },
      { status: 500 }
    );
  }
}
