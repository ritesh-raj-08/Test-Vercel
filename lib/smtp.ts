import nodemailer from "nodemailer";

export interface SendMailOptions {
  to: string;
  subject: string;
  html: string;
}

/**
 * Simple SMTP sender using username/password (or app password).
 * Environment variables:
 * - SMTP_HOST (default: smtp.gmail.com)
 * - SMTP_PORT (default: 587)
 * - SMTP_SECURE ("true" or "false", default: false)
 * - SMTP_USER
 * - SMTP_PASS
 * - SMTP_FROM_EMAIL
 */
export async function sendEmailSMTP({ to, subject, html }: SendMailOptions) {
  try {
    const host = process.env.SMTP_HOST || "smtp.gmail.com";
    const port = Number(process.env.SMTP_PORT) || 587;
    const secure = process.env.SMTP_SECURE === "true"; // true for 465, false for 587

    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;

    if (!user || !pass) {
      throw new Error("SMTP credentials are not configured (SMTP_USER / SMTP_PASS)");
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: {
        user,
        pass,
      },
    });

    const mailOptions = {
      from: process.env.SMTP_FROM_EMAIL || user,
      to,
      subject,
      html,
    };

    const result = await transporter.sendMail(mailOptions);
    return result;
  } catch (error) {
    console.error("sendEmailSMTP error:", error);
    throw error;
  }
}
