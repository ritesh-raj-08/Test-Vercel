import { Resend } from "resend";


const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(to: string, subject: string, html: string) {
  try {
    const email = await resend.emails.send({
      from: "Test Contact Form<test@resend.dev>",
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