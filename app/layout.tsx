import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Nav } from "@/components/nav";
import { Wordmark } from "@/components/wordmark";
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
    default: "Headstomper 2026 — Scandinavia's Greatest Fighting Game Tournament",
    template: "%s – Headstomper",
  },
  description:
    "Registrations are open! Scandinavia's greatest fighting game tournament returns 06-08 November 2026 in Malmö, Sweden. Featuring Guilty Gear: Strive, Tekken 8, Granblue Fantasy Versus: Rising, Street Fighter 6 and more.",
  openGraph: {
    siteName: "Headstomper",
    title: "Headstomper 2026 — Scandinavia's Greatest Fighting Game Tournament",
    description:
      "Registrations are open! Scandinavia's greatest fighting game tournament returns 06-08 November 2026 in Malmö, Sweden. Featuring Guilty Gear: Strive, Tekken 8, Granblue Fantasy Versus: Rising, Street Fighter 6 and more.",
    url: "https://headstomper.com",
    type: "website",
    images: [
      {
        url: "/assets/images/og.png",
        width: 1920,
        height: 1080,
        alt: "Headstomper 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Headstomper",
    title: "Headstomper 2026 — Scandinavia's Greatest Fighting Game Tournament",
    description:
      "Registrations are open! Scandinavia's greatest fighting game tournament returns 06-08 November 2026 in Malmö, Sweden. Featuring Guilty Gear: Strive, Tekken 8, Granblue Fantasy Versus: Rising, Street Fighter 6 and more.",
    images: ["/assets/images/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <Wordmark />
        <Nav />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
