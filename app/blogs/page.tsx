import { getServerSession } from "next-auth";
import React from "react";
import { PageHeader, PageHeaderHeading } from "@/components/page-header";
import { cn, getApiUrl } from "@/lib/utils";
import BlogsCard from "@/components/BlogsCard";


export default async function Blogs() {
  let req = await fetch(`${getApiUrl()}/api/blogs`)
  let res = await req.json()
  console.log(res)
  let blogs = res
  return (
    <div className="container relative">
      <PageHeader className="pb-8">
        <PageHeaderHeading>Blogs</PageHeaderHeading>
        
        <BlogsCard blogs={blogs} />
      </PageHeader>
    </div>
  );
}