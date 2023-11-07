import { getServerSession } from "next-auth";
import React from "react";
import { options } from "../api/auth/[...nextauth]/options";
import { PageHeader, PageHeaderDescription, PageHeaderHeading } from "@/components/page-header";
import Link from "next/link";
import { cn, getApiUrl } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import MyEvents from "@/components/MyEvents";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import EventJoinButton from "../dashboard/create/EventJoinButton";
import { Event } from "@/lib/user";
import { format } from "date-fns";

const mockEvents = [
  {
    _id: "1",
    imageUrl: "https://files.edgestore.dev/j8oyky4lp9u92m00/publicFiles/_public/405ce9c2-7de4-4207-adfe-6073cacd6861.png",
    title: "Event Title 1",
    discription: "This is the content of Event 1",
    time: "2021-10-10",
  },
];

export default async function Events() {
  let req = await fetch(`${getApiUrl()}/api/events`)
  let events = await req.json()
  return (
    <div className="container relative">
      <PageHeader className="pb-8">
        <PageHeaderHeading>Events</PageHeaderHeading>
        <PageHeaderDescription>
          Upcoming Events Will Appear Here
        </PageHeaderDescription>
        <div className="grid grid-cols-3 gap-2">
        {events?.map((event: any) => {
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
                {event.time ? format(Date.parse(event.time as string), "PPP") : ''}
                </CardDescription>
              </CardHeader>
              <CardContent>
              <p>{event.discription}</p>
              </CardContent>
              <CardFooter className="flex">
                <EventJoinButton eventId={event._id}/>
              </CardFooter>
            </Card>
            </div>
          );
        })
        }
        </div>
        
      </PageHeader>
    </div>
  );
}
