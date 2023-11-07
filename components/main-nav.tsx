"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import Image from "next/image"
import { Avatar } from "@radix-ui/react-avatar"
import { AvatarFallback } from "./ui/avatar"

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="mr-4 flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <span className="hidden font-bold sm:inline-block">
          CodeHolics
        </span>
      </Link>
      <nav className="flex items-center space-x-6 text-sm font-medium">
        <Link
          href="/dashboard"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/dashboard")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Dashboard
        </Link>
        <Link
          href="/about"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "about" ? "text-foreground" : "text-foreground/60"
          )}
        >
          About
        </Link>
        <Link
          href="/blogs"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/blogs")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Blogs
        </Link>
        <Link
          href="/events"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/events")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Events
        </Link>
      </nav>
    </div>
  )
}