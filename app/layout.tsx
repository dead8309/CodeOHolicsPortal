import type { Metadata } from "next";
import "./globals.css";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import AuthProvider from "@/app/context/AuthProvider";
import { ThemeProvider } from "@/components/theme-provider"
import { SiteHeader } from "@/components/site-header";
import { EdgeStoreProvider } from "@/lib/edgestore";


export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "CodeHolics",
  description:
    "CodeHolics is a community of developers, designers, and creators. We are a group of people",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <AuthProvider>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="relative flex min-h-screen flex-col">
              <SiteHeader/>
              <EdgeStoreProvider>
              <div className="flex-1">{children}</div>
              </EdgeStoreProvider>
            </div>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
