import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { company } from "@/data/company";

export async function POST(request: Request) {
  try {
    const { name, phone, email, projectType, message } = await request.json();

    // Configure the transporter
    // Note: You need to set up an email service (Gmail, Outlook, SendGrid, etc.)
    // For Gmail, you'll need an App Password if 2FA is enabled
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER || "your-email@gmail.com", // Your email
        pass: process.env.SMTP_PASS || "your-app-password", // Your email password/app password
      },
    });

    // Email content
    const mailOptions = {
      from: email,
      to: company.email,
      subject: `New Contact Inquiry from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #1e40af;">New Contact Inquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Project Type:</strong> ${projectType}</p>
          <h3 style="color: #1e40af; margin-top: 20px;">Message:</h3>
          <p style="white-space: pre-line;">${message}</p>
        </div>
      `,
      text: `
New Contact Inquiry

Name: ${name}
Phone: ${phone}
Email: ${email}
Project Type: ${projectType}

Message:
${message}
      `.trim(),
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send email. Please try again." },
      { status: 500 }
    );
  }
}