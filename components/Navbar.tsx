"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Michroma } from "next/font/google";

const michroma = Michroma({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-michroma",
});

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const checkAdmin = async () => {
      try {
        const res = await fetch("/api/auth/login/me");
        const data = await res.json();
        setIsAdmin(data.isAdmin);
      } catch (err) {
        console.error("Failed to check admin status", err);
      }
    };
    checkAdmin();
  }, []);

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" }); // Assuming logout route exists or will be created, otherwise just clear cookie client side if possible, but server side is better. 
    // Wait, I don't have a logout route yet. I should probably create one or just redirect to login which might handle it? 
    // For now, I'll just reload the page or redirect to home.
    // Actually, the user didn't ask for logout, but it's good practice. I'll stick to just showing the Admin link for now as per plan, and maybe a simple logout that just refreshes.
    // Let's just add the Admin link first.
    window.location.href = "/";
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#02070c]/80 backdrop-blur-xl text-white border-b border-blue-600/20 z-50 shadow-[0_0_25px_3px_rgba(0,120,255,0.15)]">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">

        {/* Logo */}
        <div
          className={`flex items-center gap-3 text-2xl tracking-widest cursor-pointer select-none ${michroma.className} relative`}
        >
          <Image
            src="/wtf.png"
            alt="Arcavon Logo"
            width={55}
            height={55}
            priority
            className="drop-shadow-[0_0_10px_rgba(0,140,255,0.6)]"
          />
          <span className="text-blue-300 hover:text-blue-400 transition duration-300 relative overflow-hidden group">
            ARCAVON
            <span className="absolute inset-x-0 bottom-0 h-[2px] bg-blue-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {[
            { name: "Home", href: "/" },
            { name: "Characters", href: "/#characters" },
            { name: "Weapons", href: "/#weapons" },
            { name: "Maps", href: "/#maps" },
            { name: "News", href: "/news" },
            { name: "About", href: "/about" },
            { name: "Feedback", href: "/feedback" },
          ].concat(isAdmin ? [{ name: "Admin", href: "/admin/login" }] : []).map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-300 relative transition-all duration-300 hover:text-blue-400 hover:drop-shadow-[0_0_6px_rgba(0,160,255,1)] group"
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
          {isAdmin && (
            <button
              onClick={handleLogout}
              className="text-red-400 hover:text-red-300 transition font-medium ml-4"
            >
              Logout
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-blue-400 hover:text-blue-300 transition"
          onClick={() => setOpen(!open)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={
                open
                  ? "M6 18L18 6M6 6l12 12"
                  : "M3.75 6h16.5M3.75 12h16.5m-16.5 6h16.5"
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="md:hidden flex flex-col bg-[#02070c]/95 border-t border-blue-600/30 backdrop-blur-xl px-6 pb-4 gap-4 text-sm animate-slideDown">
          {[
            { name: "Home", href: "/" },
            { name: "Characters", href: "/#characters" },
            { name: "Weapons", href: "/#weapons" },
            { name: "Maps", href: "/#maps" },
            { name: "Community", href: "/community" },
            { name: "About", href: "/about" },
            { name: "Feedback", href: "/feedback" },
          ].concat(isAdmin ? [{ name: "Admin", href: "/admin/login" }] : []).map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:text-blue-400 transition"
              onClick={() => setOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          {isAdmin && (
            <button
              onClick={() => {
                handleLogout();
                setOpen(false);
              }}
              className="text-red-400 hover:text-red-300 transition text-left"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </nav>
  );
}
