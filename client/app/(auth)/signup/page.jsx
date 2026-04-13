"use client";
import React from "react";
import Link from "next/link";

export default function SignupPage() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
      <header>
        <h3 className="font-['Manrope'] text-3xl font-extrabold tracking-tight mb-2 text-[#191c1e]">
          Create Account
        </h3>
        <p className="text-[#464555] text-sm">
          Join the elite network of modern curators.
        </p>
      </header>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="col-span-full space-y-1">
          <label className="text-xs font-semibold uppercase tracking-wider text-[#464555]">
            Full Name
          </label>
          <input
            className="w-full bg-[#f2f4f6] border-none rounded-lg px-4 py-3 focus:ring-1 focus:ring-[#3525cd]/40 focus:bg-white outline-none"
            placeholder="Julian Thorne"
            type="text"
          />
        </div>
        <div className="col-span-full space-y-1">
          <label className="text-xs font-semibold uppercase tracking-wider text-[#464555]">
            Email
          </label>
          <input
            className="w-full bg-[#f2f4f6] border-none rounded-lg px-4 py-3 focus:ring-1 focus:ring-[#3525cd]/40 focus:bg-white outline-none"
            placeholder="julian@thorn.com"
            type="email"
          />
        </div>
        {/* <div className="space-y-1">
          <label className="text-xs font-semibold uppercase tracking-wider text-[#464555]">
            Phone
          </label>
          <input
            className="w-full bg-[#f2f4f6] border-none rounded-lg px-4 py-3 focus:ring-1 focus:ring-[#3525cd]/40 focus:bg-white outline-none"
            placeholder="+1 234..."
            type="tel"
          />
        </div> */}
        <div className="col-span-full space-y-1">
          <label className="text-xs font-semibold uppercase tracking-wider text-[#464555]">
            Password
          </label>
          <input
            className="w-full bg-[#f2f4f6] border-none rounded-lg px-4 py-3 focus:ring-1 focus:ring-[#3525cd]/40 focus:bg-white outline-none"
            placeholder="Min. 8 characters"
            type="password"
          />
        </div>

        {/* --- CHANGE: Full-width button now expands downward without affecting header --- */}
        <button className="col-span-full py-4 bg-gradient-to-br from-[#3525cd] to-[#4f46e5] text-white font-bold rounded-lg shadow-lg hover:opacity-90 transition-opacity mt-2">
          Create Account
        </button>
      </form>

      {/* --- CHANGE: Added route switch option at the bottom --- */}
      <p className="text-center text-sm text-[#464555]">
        Already have an account?{" "}
        <Link
          href="/login"
          className="text-[#3525cd] font-bold hover:underline"
        >
          Log In
        </Link>
      </p>
    </div>
  );
}
