/*
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(to: string, subject: string, html: string) {
  try {
    const email = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: to || "riteshed2043@gmail.com",
      subject,
      html,
    });
    console.log("Email sent successfully:", email);
    return email;
    } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
}
*/

// Using Nodemailer + Google OAuth2 SMTP instead of Resend
import { sendEmailSMTP } from "@/lib/smtp";

export async function sendEmail(to: string, subject: string, html: string) {
  try {
    const from = process.env.SMTP_FROM_EMAIL || "no-reply@example.com";
    const result = await sendEmailSMTP({ to: to || from, subject, html });
    console.log("SMTP email sent successfully:", result);
    return result;
  } catch (error) {
    console.error("Error sending SMTP email:", error);
    throw error;
  }
}