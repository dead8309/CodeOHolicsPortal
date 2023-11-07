import { Event } from "@/lib/user";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import Image from "next/image";
import { format } from "date-fns";
import EventLeaveButton from "../app/dashboard/create/EventLeaveButton";

type UserEventCardsProps = {
  events: Event[];
};

const UserEventsCard = ({ events }: UserEventCardsProps) => {
  console.log(events.length);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {events?.map((event: Event) => {
        return (
          <div key={event._id}>
            <Card className="max-h-[546px]">
              <CardHeader>
                <Image
                  src={event.imageUrl}
                  alt={event.title}
                  className="rounded-md h-40 w-full object-cover"
                  width={1024}
                  height={512}
                />
                <CardTitle>{event.title}</CardTitle>
                <CardDescription>
                  {event.time ? format(Date.parse(event.time as string), "PPP") : "No Date"}
                </CardDescription>
              </CardHeader>
              <CardContent>
              <p>{event.discription}</p>
              </CardContent>
              <CardFooter className="flex">
                <EventLeaveButton eventId={event._id}/>
              </CardFooter>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default UserEventsCard;
