"use client"
import { signOut } from "next-auth/react";
import { DropdownMenuItem } from "./ui/dropdown-menu";

export default function SignOutButton() {
  return (
    <DropdownMenuItem onClick={() => signOut()}>Log out</DropdownMenuItem>
  );
}
