'use server';

import { sendEmail } from "@/app/api/email";

export const submitContactForm = async (formdata: FormData): Promise<void> => {
    const rawData = Object.fromEntries(formdata.entries());

    const data = rawData as {
        name: string;
        email: string;
        contact: string;
    };

    console.log("Server received data:", data);

    // Here you can add logic to process the data, e.g., save to a database or send an email.
    const emailHtml = `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Contact:</strong> ${data.contact}</p>
    `;

    try {
        await sendEmail("riteshed2043@gmail.com", "New Contact Form Submission", emailHtml);
        console.log("Email sent successfully");
    } catch (error) {
        console.error("Error sending email:", error);
        // Re-throw so the client can react to the failure
        throw error;
    }
    
    
}