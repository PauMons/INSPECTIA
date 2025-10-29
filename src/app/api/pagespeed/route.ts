// route.ts  (Next.js App Router API Route)
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get("url");
  const strategy = searchParams.get("strategy") || "mobile"; // mobile/desktop

  if (!url) return NextResponse.json({ error: "missing url" }, { status: 400 });

  const key = process.env.PAGESPEED_API_KEY;
  const apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(
    url
  )}&strategy=${strategy}${key ? `&key=${key}` : ""}`;

  try {
    const res = await fetch(apiUrl);
    const data = await res.json();
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json({ error: "fetch failed", details: String(err) }, { status: 500 });
  }
}