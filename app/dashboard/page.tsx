import { getServerSession } from "next-auth";
import React from "react";
import { options } from "../api/auth/[...nextauth]/options";
import { PageHeader, PageHeaderDescription, PageHeaderHeading } from "@/components/page-header";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import MyEvents from "@/components/MyEvents";
import CreateEventButton from "./create/CreateEventButton";

export default async function Dashboard() {
  const session = await getServerSession(options);
  console.log(session);
  return (
    <div className="container relative">
      <PageHeader className="pb-8">
        <PageHeaderHeading>Hello, {session?.user.name}</PageHeaderHeading>
        <CreateEventButton />
        <PageHeaderDescription>
          My Events
        </PageHeaderDescription>
        <MyEvents />
      </PageHeader>
    </div>
  );
}
