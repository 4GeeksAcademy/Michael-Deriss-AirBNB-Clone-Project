// Create a new server component file for metadata

// app/layout.server.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AirBNB Clone",
  description: "AirBNB-style booking and services app",
};

// Move the client-side logic to a separate file

// app/layout.client.tsx
"use client";

import { useEffect, useState, ReactNode } from 'react';
import Link from "next/link";
import "./globals.css";

export default function Layout({ children }: { children: ReactNode }) {
  const [showSearchBar, setShowSearchBar] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowSearchBar(false);
      } else {
        setShowSearchBar(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Global main nav */}
      <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-gray-200 shadow-sm">
        <div className="flex justify-center items-center gap-8 py-4 text-xl font-bold tracking-tight max-w-3xl mx-auto">
          <Link href="/" className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-red-50 transition text-red-500">
            <span className="inline-flex h-7 w-7 items-center justify-center">
              <svg width="28" height="28" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <polygon points="10,2 18,18 2,18" fill="#EF4444" />
              </span>
            </span>
            Homes
          </Link>
          <span className="text-gray-300 text-2xl">•</span>
          <Link href="/catalog" className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-red-50 transition text-gray-700">
            <span className="inline-flex h-7 w-7 items-center justify-center">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="8" width="18" height="8" rx="4" />
                <path d="M7 8V6a5 5 0 0 1 10 0v2" />
              </svg>
            </span>
            Experiences
          </Link>
          <span className="text-gray-300 text-2xl">•</span>
          <Link href="/services" className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-red-50 transition text-gray-700">
            <span className="inline-flex h-7 w-7 items-center justify-center">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M8 16v-1a4 4 0 0 1 8 0v1" />
                <line x1="9" y1="9" x2="9.01" y2="9" />
                <line x1="15" y1="9" x2="15.01" y2="9" />
              </svg>
            </span>
            Services
          </Link>
        </div>
      </nav>

      {/* Search bar visibility controlled by state */}
      {showSearchBar && (
        <div className="relative top-[72px] z-30 bg-white/95 backdrop-blur border-b border-gray-100 shadow-sm py-4">
          <div className="flex flex-col items-center">
            <div className="flex gap-4 w-full max-w-2xl items-center justify-center">
              <button className="flex-1 px-6 py-3 rounded-full border border-gray-300 bg-gray-50 text-lg font-medium text-gray-700 shadow-sm hover:bg-red-50 transition">Where</button>
              <button className="flex-1 px-6 py-3 rounded-full border border-gray-300 bg-gray-50 text-lg font-medium text-gray-700 shadow-sm hover:bg-red-50 transition">When</button>
              <button className="flex-1 px-6 py-3 rounded-full border border-gray-300 bg-gray-50 text-lg font-medium text-gray-700 shadow-sm hover:bg-red-50 transition">Who</button>
              <button className="px-6 py-3 bg-red-500 text-white rounded-full font-bold text-lg shadow-md ml-2 hover:bg-red-600 transition">Search</button>
            </div>
          </div>
        </div>
      )}

      {/* Render children */}
      <main>{children}</main>
    </>
  );
}
