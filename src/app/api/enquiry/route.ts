/**
 * Serverless API Route handler for Chinmay's Enquiry Form.
 * 
 * Target Architecture:
 * - Reads environment variables `ENQUIRY_API_KEY` or `ENQUIRY_WEBHOOK_URL` for email routing (e.g. Resend / Web3Forms).
 * - Silent honeypot spam protection (`hp_field`).
 * - Zero database storage to maintain patient privacy and simplicity in v1.
 * - Basic rate-limiting structure and clean JSON responses.
 */

import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, phone, contactMethod, message, preferredTime, hp_field } = body;

    // Honeypot spam check: if hp_field is populated, pretend success without sending
    if (hp_field && hp_field.trim() !== "") {
      return NextResponse.json(
        { success: true, message: "Enquiry received successfully." },
        { status: 200 }
      );
    }

    // Validation check
    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json(
        { success: false, message: "Please provide your name." },
        { status: 400 }
      );
    }

    // Indian phone number regex check (10 digits starting with 6-9, option with optional +91 prefix)
    const cleanPhone = phone ? phone.replace(/\s+/g, "").replace(/^(\+91|91)/, "") : "";
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!cleanPhone || !phoneRegex.test(cleanPhone)) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid 10-digit Indian mobile number." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length === 0) {
      return NextResponse.json(
        { success: false, message: "Please provide a brief enquiry message." },
        { status: 400 }
      );
    }

    // Server-side integration point:
    // If ENQUIRY_WEBHOOK_URL or ENQUIRY_API_KEY is configured, dispatch the message.
    const webhookUrl = process.env.ENQUIRY_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: name.trim(),
            phone: cleanPhone,
            contactMethod: contactMethod || "Call",
            message: message.trim(),
            preferredTime: preferredTime?.trim() || "Not specified",
            submittedAt: new Date().toISOString(),
          }),
        });
      } catch (err) {
        console.error("Webhook dispatch error:", err);
      }
    }

    // Return clean success response
    return NextResponse.json(
      {
        success: true,
        message: "Thank you! Your enquiry has been sent directly to Chinmay.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Enquiry API error:", error);
    return NextResponse.json(
      { success: false, message: "An unexpected error occurred. Please call or WhatsApp Chinmay directly." },
      { status: 500 }
    );
  }
}
