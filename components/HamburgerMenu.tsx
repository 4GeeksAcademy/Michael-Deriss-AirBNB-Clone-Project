"use client";
import React from "react";

export default function HamburgerMenu({ onNavigate, onClose, t = {} }: {
  onNavigate: (path: string) => void,
  onClose: () => void,
  t?: Record<string, string>
}) {
  const links = [
    { label: t.homes || "Homes", path: "/" },
    { label: t.experiences || "Experiences", path: "/catalog" },
    { label: t.services || "Services", path: "/services" },
    { label: t.becomeHost || "Become a host", path: "#host" },
  ];
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-40 overflow-y-auto">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-xs relative m-4 max-h-[95vh] overflow-y-auto flex flex-col items-center">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 text-2xl">&times;</button>
        <nav className="flex flex-col gap-6 w-full mt-8">
          {links.map(link => (
            <button
              key={link.path}
              className="w-full py-3 rounded-lg border-2 font-semibold text-lg transition-all duration-150 border-gray-200 bg-gray-50 hover:border-red-400 hover:bg-red-50 text-center"
              onClick={() => onNavigate(link.path)}
            >
              {link.label}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}
