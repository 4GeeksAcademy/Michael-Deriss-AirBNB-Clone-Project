"use client";

import Link from "next/link";
import StickySearchBar from "./StickySearchBar";
import { useState } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
const HamburgerMenu = dynamic(() => import("./HamburgerMenu"), { ssr: false });

export default function NavBarAndSearchBar({ onBecomeHost, onLanguage, disableContent, t, onHamburger, onHamburgerClose }: {
  onBecomeHost?: () => void,
  onLanguage?: () => void,
  disableContent?: boolean,
  t?: Record<string, string>,
  onHamburger?: () => void,
  onHamburgerClose?: () => void,
}) {
  const [showHamburger, setShowHamburger] = useState(false);
  const router = useRouter();

  const handleHamburger = () => {
    setShowHamburger(true);
    if (onHamburger) onHamburger();
  };

  const handleNavigate = (path: string) => {
    setShowHamburger(false);
    if (onHamburgerClose) onHamburgerClose();
    if (path === "#host" && onBecomeHost) {
      onBecomeHost();
    } else {
      router.push(path);
    }
  };

  return (
    <>
      <header className={`sticky top-0 z-50 bg-white shadow-md${disableContent ? ' pointer-events-none opacity-60' : ''}`}>
        <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
          <Link href="/" className="flex items-center gap-2 text-red-500 font-bold text-2xl">
            <svg width="32" height="32" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <polygon points="10,2 18,18 2,18" fill="#EF4444" />
            </svg>
            airbnb
          </Link>
          <nav className="flex gap-8 text-lg font-medium">
            <Link href="/" className="hover:text-red-500">{t?.homes || "Homes"}</Link>
            <Link href="/catalog" className="hover:text-red-500">{t?.experiences || "Experiences"}</Link>
            <Link href="/services" className="hover:text-red-500">{t?.services || "Services"}</Link>
          </nav>
          <div className="flex items-center gap-4">
            <button className="text-gray-700 hover:text-red-500" onClick={onBecomeHost} disabled={disableContent}>{t?.becomeHost || "Become a host"}</button>
            <button className="text-gray-700 hover:text-red-500" onClick={onLanguage} disabled={disableContent}>🌐</button>
            <button className="text-gray-700 hover:text-red-500" onClick={handleHamburger} disabled={disableContent}>☰</button>
          </div>
        </div>
      </header>
      <StickySearchBar />
      {showHamburger && (
        <HamburgerMenu
          onNavigate={handleNavigate}
          onClose={() => {
            setShowHamburger(false);
            if (onHamburgerClose) onHamburgerClose();
          }}
          t={t}
        />
      )}
    </>
  );
}