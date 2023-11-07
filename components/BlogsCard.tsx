'use client'
import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import Image from 'next/image'
import { format } from 'date-fns'
import { useRouter } from 'next/navigation'
import { Blog } from '@/types/blogs'

type BlogsCardProps = {
    blogs: Blog[]
}
const BlogsCard = ({blogs}: BlogsCardProps) => {
    const router = useRouter()
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {blogs?.map((blog: Blog) => {
          return (
            <div key={blog._id} onClick={() => router.push(`/blogs/${blog._id}`)}>
              <Card className="max-h-[546px]">
                <CardHeader>
                  {blog.thumbNail && (
                    <Image
                    src={blog.thumbNail}
                    alt={blog.title}
                    className="rounded-md h-40 w-full object-cover"
                    width={1024}
                    height={512}
                  />
                  )}
                  
                  <CardTitle>{blog.title}</CardTitle>
                  <CardDescription>
                    {format(Date.parse(blog.createdAt as string), "PPP")}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                <p>{(blog.content as string).slice(0,50)}</p>
                </CardContent>
                <CardFooter className="flex">
                </CardFooter>
              </Card>
            </div>
          );
        })}
      </div>
  )
}

export default BlogsCard