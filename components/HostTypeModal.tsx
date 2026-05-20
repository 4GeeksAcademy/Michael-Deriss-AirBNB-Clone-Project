
"use client";
import React, { useState } from "react";

export default function HostTypeModal({ onSelect, onClose, t = {} }: { onSelect: (type: string) => void, onClose: () => void, t?: Record<string, string> }) {
  const [selected, setSelected] = useState<string | null>(null);
  const hostTypes = [t.home || 'Home', t.experience || 'Experience', t.service || 'Service'];
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-40 overflow-y-auto">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md relative m-4 max-h-[95vh] overflow-y-auto">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 text-2xl">&times;</button>
        <h2 className="text-2xl font-bold mb-6 text-center">{t.hostPrompt || 'What would you like to host?'}</h2>
        <div className="flex flex-col gap-4 mb-6">
          {hostTypes.map((type) => (
            <button
              key={type}
              onClick={() => setSelected(type)}
              className={`py-3 px-6 rounded-lg border-2 font-semibold text-lg transition-all duration-150 ${selected === type ? 'border-red-500 bg-red-50 text-red-700' : 'border-gray-200 bg-gray-50 hover:border-red-400 hover:bg-red-50'}`}
            >
              {type}
            </button>
          ))}
        </div>
        <button
          className="w-full py-3 rounded-lg bg-gradient-to-r from-pink-500 to-red-400 text-white font-bold text-lg disabled:opacity-50"
          disabled={!selected}
          onClick={() => selected && onSelect(selected)}
        >
          {t.continue || 'Continue'}
        </button>
      </div>
    </div>
  );
}
