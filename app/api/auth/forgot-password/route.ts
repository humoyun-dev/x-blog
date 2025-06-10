import { connectToDatabase } from "@/lib/mongoose";
import User from "@/database/user.model";
import { NextResponse } from "next/server";
import crypto from "crypto";
import sendEmailPasswordReset from "@/lib/send-email";

export async function POST(req: Request) {
  try {
    await connectToDatabase();
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const token = crypto.randomBytes(32).toString("hex");
    const expires = Date.now() + 1000 * 60 * 60;

    user.resetToken = token;
    user.resetTokenExpires = expires;
    await user.save();

    const resetUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/auth/reset-password?token=${token}`;
    await sendEmailPasswordReset(
      email,
      "Reset Your Password - X Blog",
      resetUrl,
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 },
    );
  }
}
