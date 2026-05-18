import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
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
  title: "AirBNB Clone",
  description: "AirBNB-style booking and services app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen bg-gray-50 text-gray-900 antialiased">
        <Link
          href="/"
          aria-label="Go to home page"
          className="fixed left-4 top-4 z-[60] inline-flex items-center gap-2 rounded-full border border-red-200 bg-white px-3 py-2 text-sm font-semibold text-red-500 shadow-sm transition hover:border-red-300 hover:bg-red-50"
        >
          <span className="inline-flex h-5 w-5 items-center justify-center">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <polygon points="10,2 18,18 2,18" fill="#EF4444" />
            </svg>
          </span>
          Home
        </Link>
        {children}
      </body>
    </html>
  );
}
