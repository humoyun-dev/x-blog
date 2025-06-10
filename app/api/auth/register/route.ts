import User from "@/database/user.model";
import { connectToDatabase } from "@/lib/mongoose";
import { NextResponse } from "next/server";
import { hash } from "bcrypt";

export async function POST(req: Request) {
  try {
    await connectToDatabase();

    const { email, name, password } = await req.json();

    const isExistingUser = await User.findOne({ email });

    if (isExistingUser) {
      return NextResponse.json(
        { error: "Email already exists" },
        { status: 400 },
      );
    }

    const hashedPassword = await hash(password, 10);

    const user = await User.create({
      email,
      name,
      password: hashedPassword,
    });

    return NextResponse.json({ success: true, user });
  } catch (error) {
    const result = error as Error;
    return NextResponse.json({ error: result.message }, { status: 400 });
  }
}
