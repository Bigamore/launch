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
    default: "StartitXP — Premium Landing Pages in 48hrs",
    template: "%s | StartitXP",
  },
  description: "StartitXP builds high-converting landing pages for founders",
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml", sizes: "any" }],
    shortcut: "/icon.svg",
  },
  openGraph: {
    title: "StartitXP — Premium Landing Pages in 48hrs",
    description: "StartitXP builds high-converting landing pages for founders",
    type: "website",
    locale: "en_NG",
    siteName: "StartitXP",
  },
  twitter: {
    card: "summary_large_image",
    title: "StartitXP — Premium Landing Pages in 48hrs",
    description: "StartitXP builds high-converting landing pages for founders",
  },
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
