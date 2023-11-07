import { getServerSession } from "next-auth";
import React from "react";
import { options } from "../api/auth/[...nextauth]/options";
import { PageHeader, PageHeaderDescription, PageHeaderHeading } from "@/components/page-header";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import MyEvents from "@/components/MyEvents";
import { siteConfig } from "../config/siteConfig";
import Image from "next/image";
import { faqs } from "../config/faqs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default async function About() {
  const session = await getServerSession(options);
  console.log(session);
  return (
    <>
    
    <div className="container relative">
      <PageHeader className="pb-8">
        <PageHeaderHeading>About us</PageHeaderHeading>
        <p className="text-lg text-muted-foreground sm:text-xl mb-8">
  CodeOholics
  <span className="text-primary font-semibold mx-1">The Ultimate coding club</span>
  for students at CMRTC
</p>
         
          <h1 className="font-bold leading-tight tracking-tighter text-3xl lg:leading-[1.1]">What is CODEOHOLICS ?</h1>
          <p className="text-lg text-muted-foreground sm:text-xl mb-8">
          Are you passionate about coding, programming, and all things tech? Do you want to join a community of like-minded individuals who share your love for computer science? Then look no further, because CodeOholics is the club for you.
          Joining CodeOholics is a great way to enhance your coding skills, meet new people, and gain experience that will be valuable for your future career. So come join us and become a part of our community of {' '} 
          <Link href={siteConfig.discord} className='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-primary underline-offset-4 hover:underline h-9'>CodeOholics!</Link>
          </p>
          
          <h1 className="font-bold leading-tight tracking-tighter text-3xl lg:leading-[1.1]">Why CODEOHOLICS ?</h1>
          <p className="text-lg text-muted-foreground sm:text-xl mb-8">
          We offer a variety of events and activities, such as coding workshops, hackathons, coding competitions, and guest speakers from industry professionals.
We also provide opportunities for members to collaborate on coding projects, build their portfolios, and network with other students and professionals in the field.
          </p>

          {faqs.map((faq, index) => (
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
      </PageHeader>
    </div>
    </>
  );
}
