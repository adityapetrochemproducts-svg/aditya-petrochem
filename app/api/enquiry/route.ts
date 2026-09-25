import { NextRequest, NextResponse } from "next/server";
import { enquirySchema } from "@/lib/validation";
import { sendEnquiryNotification } from "@/lib/email";
import { checkRateLimit } from "@/lib/rateLimit";

export const runtime = "nodejs";

function getClientIp(req: NextRequest): string {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return req.headers.get("x-real-ip") || "unknown";
}

export async function POST(req: NextRequest) {
  try {
    const ip = getClientIp(req);
    const { allowed, retryAfterSeconds } = checkRateLimit(ip);

    if (!allowed) {
      return NextResponse.json(
        {
          success: false,
          message: "Too many enquiries submitted. Please try again in a few minutes.",
        },
        { status: 429, headers: { "Retry-After": String(retryAfterSeconds) } }
      );
    }

    let body: unknown;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json(
        { success: false, message: "Invalid request body." },
        { status: 400 }
      );
    }

    const result = enquirySchema.safeParse(body);

    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;
      return NextResponse.json(
        { success: false, message: "Please check the form for errors.", errors: fieldErrors },
        { status: 400 }
      );
    }

    // Honeypot tripped — pretend success so bots don't learn to adapt.
    if (result.data.company_website) {
      return NextResponse.json({ success: true });
    }

    try {
      await sendEnquiryNotification(result.data);
    } catch (err) {
      console.error("Failed to send enquiry email:", err);
      return NextResponse.json(
        {
          success: false,
          message:
            "We couldn't send your enquiry right now. Please try again shortly or contact us directly by phone or email.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Unexpected error handling enquiry:", err);
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
