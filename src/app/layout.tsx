import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kevin Kane — Founder & Senior Software Engineer",
  description:
    "Portfolio of Kevin Kane, Founder of 10xDev.io. Full-stack engineer specializing in Next.js, TypeScript, Supabase, and Stripe.",
  openGraph: {
    title: "Kevin Kane — Founder & Senior Software Engineer",
    description:
      "Full-stack engineer shipping production-grade SaaS products. Next.js, TypeScript, Supabase, Stripe.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
