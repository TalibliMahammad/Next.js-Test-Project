import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import NavBar from "./NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: 'Mənim Saytım',
    template: '%s | Mənim Saytım', // Alt səhifədə "Blog" yazılsa, tab-da "Blog | Mənim Saytım" görünəcək
  },
  description: 'Proqramlaşdırma və texnologiya haqqında ən son xəbərlər.',
  openGraph: {
    type: 'website',
    locale: 'az_AZ',
    url: 'https://saytim.az',
    siteName: 'Mənim Saytım',
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col ">
        <NavBar />
        <main>{children}</main>
      </body>
    </html>
  );
}
