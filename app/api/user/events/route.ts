import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { options } from "../../auth/[...nextauth]/options";
import { User } from "@/lib/user";

// Not Using this route currently
export async function GET(req: Request) {
  const session = await getServerSession(options);
  console.log("Api",session);
  try {
    if (!session) {
      return NextResponse.json({ message: "You must be logged in." }, { status: 401 });
    }
    const user = await User.findById(session.user.id);
    if (!user) {
      return NextResponse.json({ message: "User not found." }, { status: 404 });
    }
    console.log(user.events);
    return NextResponse.json({
      events: user.events,
    }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}