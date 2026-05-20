
"use client";
import React, { useState } from "react";

export default function LoginSignupModal({ onClose, t = {} }: { onClose: () => void, t?: Record<string, string> }) {
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("United States (+1)");
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-40 overflow-y-auto">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md relative border border-gray-200 m-4 max-h-[95vh] overflow-y-auto">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 text-2xl">&times;</button>
        <h2 className="text-center text-xl font-semibold mb-6">{t.login || 'Log in or sign up'}</h2>
        <h1 className="text-2xl font-bold mb-4 text-center">{t.welcome || 'Welcome to Airbnb'}</h1>
        <div className="mb-4">
          <label className="block text-gray-500 text-sm mb-1">{t.countryCode || 'Country code'}</label>
          <select value={country} onChange={e => setCountry(e.target.value)} className="w-full border rounded-lg px-4 py-3 mb-2 focus:outline-none focus:ring-2 focus:ring-red-400">
            <option>United States (+1)</option>
            <option>Canada (+1)</option>
            <option>United Kingdom (+44)</option>
            <option>Australia (+61)</option>
            <option>India (+91)</option>
          </select>
          <input type="tel" placeholder={t.phoneNumber || 'Phone number'} value={phone} onChange={e => setPhone(e.target.value)} className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-400" />
        </div>
        <p className="text-xs text-gray-500 mb-4 text-center">{t.confirmMsg || "We’ll call or text you to confirm your number. Standard message and data rates apply."} <a href="#" className="underline">{t.privacy || 'Privacy Policy'}</a></p>
        <button className="w-full py-3 rounded-lg bg-gradient-to-r from-pink-500 to-red-400 text-white font-bold text-lg mb-4">{t.continue || 'Continue'}</button>
        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-gray-200"></div>
          <span className="mx-2 text-gray-400">{t.or || 'or'}</span>
          <div className="flex-grow border-t border-gray-200"></div>
        </div>
        <div className="flex flex-col gap-3">
          <button className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-gray-100 font-semibold text-gray-700 text-base border border-gray-200"><span className="text-lg">🌐</span>{t.continueWithGoogle || 'Continue with Google'}</button>
          <button className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-gray-100 font-semibold text-gray-700 text-base border border-gray-200"><span className="text-lg">🍏</span>{t.continueWithApple || 'Continue with Apple'}</button>
          <button className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-gray-100 font-semibold text-gray-700 text-base border border-gray-200"><span className="text-lg">✉️</span>{t.continueWithEmail || 'Continue with email'}</button>
          <button className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-gray-100 font-semibold text-gray-700 text-base border border-gray-200"><span className="text-lg">📘</span>{t.continueWithFacebook || 'Continue with Facebook'}</button>
        </div>
      </div>
    </div>
  );
}
