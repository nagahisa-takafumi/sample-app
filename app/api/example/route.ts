import { NextResponse } from "next/server";

// http://localhost:3000/api/example

// GETリクエストの処理
export async function GET() {
  return NextResponse.json({ message: "Hello Next.js!!(GET)" });
}

// POSTリクエストの処理
export async function POST() {
  return NextResponse.json({ message: "Hello Next.js!!(POST)" });
}