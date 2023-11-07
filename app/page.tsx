import { PageHeader, PageHeaderDescription, PageHeaderHeading } from "@/components/page-header";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container relative">
      <PageHeader className="pb-8">
        <PageHeaderHeading>CodeHolics</PageHeaderHeading>
        <PageHeaderDescription>Fostering Innovation, Collaboration, and Knowledge Sharing in Coding.</PageHeaderDescription>
        <Link href="/dashboard" className={cn(buttonVariants())}>
          Get Started
        </Link>
      </PageHeader>
    </div>
  );
}
