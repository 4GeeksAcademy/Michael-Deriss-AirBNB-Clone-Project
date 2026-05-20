"use client";
import React from "react";

const LANGUAGES = [
  { code: "en", label: "English" },
  { code: "es", label: "Español" },
  { code: "fr", label: "Français" },
  { code: "de", label: "Deutsch" },
  { code: "it", label: "Italiano" },
  { code: "zh", label: "中文 (Chinese)" },
  { code: "ja", label: "日本語 (Japanese)" },
  { code: "ko", label: "한국어 (Korean)" },
  { code: "pt", label: "Português" },
  { code: "ru", label: "Русский" },
];

export default function LanguageModal({ onSelect, onClose, current, t = {} }: { onSelect: (lang: string) => void, onClose: () => void, current: string, t?: Record<string, string> }) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-40 overflow-y-auto">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md relative m-4 max-h-[95vh] overflow-y-auto">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 text-2xl">&times;</button>
        <h2 className="text-2xl font-bold mb-6 text-center">{t.selectLang || 'Select Language'}</h2>
        <div className="flex flex-col gap-4 mb-6">
          {LANGUAGES.map(lang => (
            <button
              key={lang.code}
              onClick={() => onSelect(lang.code)}
              className={`py-3 px-6 rounded-lg border-2 font-semibold text-lg transition-all duration-150 ${current === lang.code ? 'border-red-500 bg-red-50 text-red-700' : 'border-gray-200 bg-gray-50 hover:border-red-400 hover:bg-red-50'}`}
            >
              {lang.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
