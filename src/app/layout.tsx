import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ashish's Portfolio",
  description: "My personal portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html className="scroll-smooth" lang="en">
      <body className={inter.className}>
      {children}
      <Footer></Footer>
      <Analytics></Analytics>
      </body>
    </html>
  );
}
