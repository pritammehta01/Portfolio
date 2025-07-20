// app/api/contact/route.js
import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { name, email, phone, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    // test SMTP connection
    await transporter.verify();

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: `Portfolio Message from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Message: ${message}
      `,
    });

    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Failed to send email:', error); // 👈 THIS
    return NextResponse.json({ error: 'Failed to send email', details: error.message }, { status: 500 });
  }
}
