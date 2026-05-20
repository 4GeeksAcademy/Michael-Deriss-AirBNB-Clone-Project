
import Link from "next/link";
import StickySearchBar from "./StickySearchBar";
import { useState } from "react";
import dynamic from "next/dynamic";
const HostTypeModal = dynamic(() => import("./HostTypeModal"), { ssr: false });
const LoginSignupModal = dynamic(() => import("./LoginSignupModal"), { ssr: false });

export default function NavBarAndSearchBar() {
  const [showHostType, setShowHostType] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      {/* Global main nav */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
          <Link href="/" className="flex items-center gap-2 text-red-500 font-bold text-2xl">
            <svg width="32" height="32" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <polygon points="10,2 18,18 2,18" fill="#EF4444" />
            </svg>
            airbnb
          </Link>
          <nav className="flex gap-8 text-lg font-medium">
            <Link href="/" className="hover:text-red-500">Homes</Link>
            <Link href="/catalog" className="hover:text-red-500">Experiences</Link>
            <Link href="/services" className="hover:text-red-500">Services</Link>
          </nav>
          <div className="flex items-center gap-4">
            <button className="text-gray-700 hover:text-red-500" onClick={() => setShowHostType(true)}>Become a host</button>
            <button className="text-gray-700 hover:text-red-500">🌐</button>
            <button className="text-gray-700 hover:text-red-500">☰</button>
          </div>
        </div>
      </header>
      <StickySearchBar />
      {showHostType && (
        <HostTypeModal
          onSelect={() => {
            setShowHostType(false);
            setShowLogin(true);
          }}
          onClose={() => setShowHostType(false)}
        />
      )}
      {showLogin && (
        <LoginSignupModal onClose={() => setShowLogin(false)} />
      )}
    </>
  );
}