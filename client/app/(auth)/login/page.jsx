"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [errors, setErrors] = useState({ email: "", password: "" });

  return (
    /* --- CHANGE: Added animate-in and slide-in from bottom to avoid horizontal jumpiness --- */
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
      <header>
        <h3 className="font-['Manrope'] text-3xl font-extrabold tracking-tight mb-2 text-[#191c1e]">
          Welcome Back
        </h3>
        <p className="text-[#464555] text-sm">
          Enter your credentials to access your curated collection.
        </p>
      </header>

      <form className="space-y-4">
        <div className="space-y-1">
          <label className="text-xs font-semibold uppercase tracking-wider text-[#464555]">
            Email Address
          </label>
          <input
            className={`w-full bg-[#f2f4f6] border-none rounded-lg px-4 py-3 focus:ring-1 transition-all outline-none ${errors.email ? "ring-1 ring-red-500 bg-red-50" : "focus:ring-[#3525cd]/40 focus:bg-white"}`}
            placeholder="name@domain.com"
            type="email"
          />
          {/* --- CHANGE: Conditional Error Rendering --- */}
          {errors.email && (
            <p className="text-red-500 text-[11px] font-bold mt-1 uppercase">
              {errors.email}
            </p>
          )}
        </div>

        <div className="space-y-1">
          <div className="flex justify-between items-center">
            <label className="text-xs font-semibold uppercase tracking-wider text-[#464555]">
              Password
            </label>
            <Link
              href="#"
              className="text-[10px] uppercase font-bold text-[#3525cd] hover:underline"
            >
              Forgot?
            </Link>
          </div>
          <input
            className={`w-full bg-[#f2f4f6] border-none rounded-lg px-4 py-3 focus:ring-1 transition-all outline-none ${errors.password ? "ring-1 ring-red-500 bg-red-50" : "focus:ring-[#3525cd]/40 focus:bg-white"}`}
            placeholder="••••••••"
            type="password"
          />
          {errors.password && (
            <p className="text-red-500 text-[11px] font-bold mt-1 uppercase">
              {errors.password}
            </p>
          )}
        </div>

        <button className="w-full py-4 bg-gradient-to-br from-[#3525cd] to-[#4f46e5] text-white font-bold rounded-lg shadow-lg hover:opacity-90 transition-opacity mt-4">
          Sign In
        </button>
      </form>

      {/* --- CHANGE: Added route switch option at the bottom --- */}
      <p className="text-center text-sm text-[#464555]">
        Don't have an account?{" "}
        <Link
          href="/signup"
          className="text-[#3525cd] font-bold hover:underline"
        >
          Sign Up
        </Link>
      </p>

      {/* Social Options */}
      <div className="relative py-4">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-[#eceef0]"></span>
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-white px-4 text-[#464555] tracking-widest">
            or continue with
          </span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <button className="flex items-center justify-center gap-2 py-3 border border-[#c7c4d8]/30 rounded-lg hover:bg-[#f2f4f6] transition-colors">
          <span className="material-symbols-outlined text-xl">
            account_circle
          </span>
          <span className="text-xs font-bold uppercase">Google</span>
        </button>
        <button className="flex items-center justify-center gap-2 py-3 border border-[#c7c4d8]/30 rounded-lg hover:bg-[#f2f4f6] transition-colors">
          <span className="material-symbols-outlined text-xl">ios</span>
          <span className="text-xs font-bold uppercase">Apple</span>
        </button>
      </div>
    </div>
  );
}
