import httpStatus from "http-status";
import { NextResponse } from "next/server";

export function authorize(req: Request): Response | null {
  const apiKey = process.env.API_KEY;
  const authHeader = req.headers.get("Authorization");

  if (!authHeader || authHeader !== `Bearer ${apiKey}`) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: httpStatus.UNAUTHORIZED }
    );
  }

  // Return null if the API key matches, allowing the request to proceed
  return null;
}
