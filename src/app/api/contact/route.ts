import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Server-side robust validation
    if (!name || name.trim().length < 2) {
      return NextResponse.json(
        { message: "Name must be at least 2 characters long." },
        { status: 400 }
      );
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { message: "Please supply a valid email address." },
        { status: 400 }
      );
    }

    if (!phone || !/^\+?[0-9\s\-()]{7,15}$/.test(phone)) {
      return NextResponse.json(
        { message: "Please supply a valid phone number (7-15 digits)." },
        { status: 400 }
      );
    }

    if (!message || message.trim().length < 10) {
      return NextResponse.json(
        { message: "Message must be at least 10 characters long." },
        { status: 400 }
      );
    }

    // Simulate premium database saving delay (800ms)
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Mock successful backend response
    console.log("Contact form submission logged:", {
      name,
      email,
      phone,
      message,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      { message: "Your message has been logged successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("API error during contact form submission:", error);
    return NextResponse.json(
      { message: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}
