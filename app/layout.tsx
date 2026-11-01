import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import type { ReactNode } from "react";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Cursor from "./components/Cursor";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://launch-i78q.vercel.app"),
  title: {
    default: "LAUNCH — Remarkable first impressions",
    template: "%s | LAUNCH",
  },
  description:
    "Independent digital studio for ambitious founders. Thoughtful websites, purposeful motion, and custom builds. Based in Lagos, working everywhere.",
  openGraph: {
    title: "LAUNCH — Remarkable first impressions",
    description:
      "Good ideas deserve a remarkable first impression. Explore distinctive website design and book your next project.",
    type: "website",
    locale: "en_NG",
    siteName: "LAUNCH",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <Link href="#main-content" className="skip-link">
          Skip to content
        </Link>
        <Cursor />
        <div className="site-noise" aria-hidden="true" />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
