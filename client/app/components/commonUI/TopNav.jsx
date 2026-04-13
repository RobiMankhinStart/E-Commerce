"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ShoppingBag,
  User,
  Search,
  Menu,
  X,
  LayoutDashboard,
  LogOut,
  Settings,
  Package,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const TopNav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  // Simulated Auth State - Swap this with your actual Auth Context/Redux logic
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Shop", href: "/shop" },
    { name: "Collections", href: "/collections" },
    { name: "Editorial", href: "/editorial" },
    { name: "About", href: "/about" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-xl shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-screen-2xl mx-auto px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          className="text-2xl font-black tracking-tighter text-slate-900"
        >
          CURATOR
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[10px] font-bold text-slate-500 hover:text-indigo-600 transition-colors uppercase tracking-[0.2em]"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Action Icons */}
        <div className="flex items-center gap-6">
          <button className="text-slate-900 hover:text-indigo-600 transition-colors">
            <Search size={20} strokeWidth={2} />
          </button>

          <Link
            href="/cart"
            className="text-slate-900 hover:text-indigo-600 transition-colors relative"
          >
            <ShoppingBag size={20} strokeWidth={2} />
            <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
              0
            </span>
          </Link>

          {/* User Account / Dashboard Logic */}
          <div className="relative">
            {isLoggedIn ? (
              <>
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="cursor-pointer flex items-center gap-2 text-slate-900 hover:text-indigo-600 transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center border border-slate-200">
                    <User size={18} />
                  </div>
                </button>

                {/* Desktop User Dropdown */}
                <AnimatePresence>
                  {isUserMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute right-0 mt-4 w-56 bg-white rounded-2xl shadow-xl border border-slate-100 p-2 overflow-hidden"
                    >
                      <div className="px-4 py-3 border-b border-slate-50 mb-1">
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                          Account
                        </p>
                        <p className="text-sm font-black text-slate-900 truncate">
                          robi@example.com
                        </p>
                      </div>

                      <UserMenuItem
                        href="/cusdash"
                        icon={<LayoutDashboard size={16} />}
                        label="Dashboard"
                      />
                      <UserMenuItem
                        href="/orders"
                        icon={<Package size={16} />}
                        label="My Orders"
                      />
                      <UserMenuItem
                        href="/settings"
                        icon={<Settings size={16} />}
                        label="Settings"
                      />

                      <button
                        onClick={() => setIsLoggedIn(false)}
                        className="w-full flex items-center gap-3 px-4 py-3 text-sm font-bold text-red-500 hover:bg-red-50 rounded-xl transition-colors mt-1"
                      >
                        <LogOut size={16} />
                        Sign Out
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </>
            ) : (
              <Link
                href="/login"
                className="text-slate-900 hover:text-indigo-600 transition-colors cursor-pointer"
              >
                <User size={20} strokeWidth={2} />
              </Link>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-slate-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 p-8 flex flex-col gap-6 md:hidden overflow-hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-black tracking-tighter text-slate-900"
              >
                {link.name}
              </Link>
            ))}
            <div className="h-px bg-slate-100 my-2" />
            {isLoggedIn ? (
              <Link
                href="/dashboard"
                className="text-lg font-bold text-indigo-600"
              >
                Customer Dashboard
              </Link>
            ) : (
              <Link href="/login" className="text-lg font-bold text-indigo-600">
                Member Login
              </Link>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// Helper Component for Dropdown Items
const UserMenuItem = ({ href, icon, label }) => (
  <Link
    href={href}
    className="flex items-center gap-3 px-4 py-3 text-sm font-bold text-slate-600 hover:bg-slate-50 hover:text-indigo-600 rounded-xl transition-colors"
  >
    {icon}
    {label}
  </Link>
);

export default TopNav;
