import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { options } from "../../auth/[...nextauth]/options";
import { Event, User } from "@/lib/user";

// Not Using this route currently
export async function DELETE(request: Request) {
    // get the event id from the request body
    const res = await request.json()
    const eventId = res.eventId
    const session = await getServerSession(options);
  try {
    if (!session) {
      return NextResponse.json({ message: "You must be logged in." }, { status: 401 });
    }
    const user = await User.findById(session.user.id);
    if (!user) {
      return NextResponse.json({ message: "User not found." }, { status: 404 });
    }
    const updatedEvents = await user.event.filter((item: Event) => item._id.toString() !== eventId);
    let Update = await User.findOneAndUpdate(
        { _id: session.user.id },
        { event: updatedEvents },
        {
          new: true,
        }
      );
    return NextResponse.json({
        msg: "event deleted successfully",
    }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
