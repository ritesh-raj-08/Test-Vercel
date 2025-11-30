import nodemailer from "nodemailer";
import { google } from "googleapis";

const { OAuth2 } = google.auth;

const oauth2Client = new OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  "https://developers.google.com/oauthplayground"
);

oauth2Client.setCredentials({
  refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
});

export interface SendMailOptions {
  to: string;
  subject: string;
  html: string;
}

export async function sendEmailSMTP({ to, subject, html }: SendMailOptions) {
  try {
    const accessTokenResponse = await oauth2Client.getAccessToken();
    const accessToken = (accessTokenResponse as any)?.token || accessTokenResponse;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: process.env.SMTP_FROM_EMAIL,
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
        accessToken,
      },
    });

    const mailOptions = {
      from: process.env.SMTP_FROM_EMAIL,
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
