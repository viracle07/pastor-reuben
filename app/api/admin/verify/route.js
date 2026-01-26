import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(req) {
  const { token } = await req.json();

  try {
    jwt.verify(token, process.env.JWT_SECRET);
    return NextResponse.json({ valid: true });
  } catch (error) {
    return NextResponse.json(
      { message: "Invalid token" },
      { status: 401 }
    );
  }
}
