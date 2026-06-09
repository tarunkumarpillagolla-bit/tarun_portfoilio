import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { seo } from "@/data/portfolio";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: [
    "Cybersecurity",
    "SOC Analyst",
    "SIEM",
    "Digital Forensics",
    "Splunk",
    "QRadar",
    "Incident Response",
  ],
  authors: [{ name: "Tarun Kumar Pillagolla" }],
  openGraph: {
    title: seo.title,
    description: seo.description,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-text">
        {children}
      </body>
    </html>
  );
}
