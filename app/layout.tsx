import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Nav } from "@/components/nav";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://headstomper.com"),
  title: {
    default: "Headstomper",
    template: "%s – Headstomper",
  },
  description: "Save the date! See you 06-08th November 2026 in Malmö, Sweden.",
  openGraph: {
    siteName: "Headstomper",
    title: "Headstomper",
    description:
      "Save the date! See you 06-08th November 2026 in Malmö, Sweden.",
    url: "https://headstomper.com",
    type: "website",
    images: [
      {
        url: "/assets/images/og.jpg",
        width: 1200,
        height: 630,
        alt: "Headstomper",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Headstomper",
    title: "Headstomper",
    description:
      "Save the date! See you 06-08th November 2026 in Malmö, Sweden.",
    images: ["/assets/images/og.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <Nav />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
