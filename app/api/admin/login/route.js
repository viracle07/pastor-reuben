import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(req) {
  const { email, password } = await req.json();

  if (
    email !== process.env.ADMIN_EMAIL ||
    password !== process.env.ADMIN_PASSWORD
  ) {
    return NextResponse.json(
      { message: "Invalid credentials" },
      { status: 401 }
    );
  }

  const token = jwt.sign(
    { role: "admin", email },
    process.env.JWT_SECRET,
    { expiresIn: "2h" }
  );

  return NextResponse.json({
    message: "Login successful",
    token
  });
}
